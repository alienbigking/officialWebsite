#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import hashlib
import os
import re
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request


IMG_EXTS_DEFAULT = {".jpg", ".jpeg", ".png", ".webp"}
CSS_EXTS_DEFAULT = {".css"}


def _ensure_dir(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def _sha1(s: str) -> str:
    return hashlib.sha1(s.encode("utf-8")).hexdigest()


def _normalize_url(url: str) -> str:
    url = url.strip().strip('"').strip("'")
    if url.startswith("//"):
        url = "https:" + url
    return url


def _guess_filename_from_url(url: str) -> str:
    parsed = urllib.parse.urlsplit(url)
    base = os.path.basename(parsed.path)
    if not base:
        base = "asset"

    # If there's no extension, keep as-is but add .bin (rare)
    root, ext = os.path.splitext(base)
    if not ext:
        base = base + ".bin"
    return base


def _safe_target_path(out_dir: str, url: str) -> str:
    filename = _guess_filename_from_url(url)
    root, ext = os.path.splitext(filename)

    # Avoid collisions when different URLs share same basename.
    url_hash = _sha1(url)[:10]
    return os.path.join(out_dir, f"{root}-{url_hash}{ext}")


def _build_request(url: str) -> urllib.request.Request:
    return urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/121.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/*,*/*;q=0.8",
        },
        method="GET",
    )


def fetch_bytes(url: str, timeout: int, insecure_ssl: bool) -> bytes:
    ctx = None
    if urllib.parse.urlsplit(url).scheme == "https":
        if insecure_ssl:
            ctx = ssl._create_unverified_context()  # noqa: SLF001
        else:
            ctx = ssl.create_default_context()

    req = _build_request(url)
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
        return resp.read()


def fetch_text(url: str, timeout: int, insecure_ssl: bool) -> str:
    data = fetch_bytes(url, timeout=timeout, insecure_ssl=insecure_ssl)
    # Most Unitree pages are UTF-8; keep it permissive.
    return data.decode("utf-8", errors="ignore")


def extract_urls_from_srcset(srcset: str) -> list[str]:
    # e.g. "a.jpg 1x, b.jpg 2x" or "a.jpg 480w, b.jpg 960w"
    urls: list[str] = []
    for part in srcset.split(","):
        part = part.strip()
        if not part:
            continue
        token = part.split()[0].strip()
        if token:
            urls.append(token)
    return urls


def extract_candidate_urls_from_text(text: str) -> set[str]:
    urls: set[str] = set()

    # HTML attributes
    attr_patterns = [
        r"\bsrc\s*=\s*(['\"])(.*?)\1",
        r"\bdata-src\s*=\s*(['\"])(.*?)\1",
        r"\bdata-bg\s*=\s*(['\"])(.*?)\1",
        r"\bposter\s*=\s*(['\"])(.*?)\1",
        r"\bhref\s*=\s*(['\"])(.*?)\1",
        r"\bcontent\s*=\s*(['\"])(.*?)\1",
    ]

    for pat in attr_patterns:
        for m in re.finditer(pat, text, flags=re.IGNORECASE | re.DOTALL):
            val = m.group(2)
            if not val:
                continue
            urls.add(val)

    # srcset
    for m in re.finditer(r"\bsrcset\s*=\s*(['\"])(.*?)\1", text, flags=re.IGNORECASE | re.DOTALL):
        srcset = m.group(2)
        for u in extract_urls_from_srcset(srcset):
            urls.add(u)

    # CSS url(...)
    for m in re.finditer(r"url\((.*?)\)", text, flags=re.IGNORECASE | re.DOTALL):
        val = m.group(1)
        if not val:
            continue
        urls.add(val)

    # Also pull any explicit http(s) image-like strings that are embedded in JS.
    for m in re.finditer(r"https?://[^\s'\"\\)]+", text, flags=re.IGNORECASE):
        urls.add(m.group(0))

    return {u.strip() for u in urls if u and not u.strip().lower().startswith("javascript:")}


def to_absolute(base_url: str, raw_url: str) -> str:
    raw_url = _normalize_url(raw_url)
    return urllib.parse.urljoin(base_url, raw_url)


def is_image_url(url: str, allowed_exts: set[str]) -> bool:
    parsed = urllib.parse.urlsplit(url)
    path = parsed.path.lower()
    _, ext = os.path.splitext(path)
    return ext in allowed_exts


def is_css_url(url: str, allowed_exts: set[str]) -> bool:
    parsed = urllib.parse.urlsplit(url)
    path = parsed.path.lower()
    _, ext = os.path.splitext(path)
    return ext in allowed_exts


def download_file(url: str, target_path: str, timeout: int, insecure_ssl: bool) -> int:
    data = fetch_bytes(url, timeout=timeout, insecure_ssl=insecure_ssl)
    _ensure_dir(os.path.dirname(target_path))
    with open(target_path, "wb") as f:
        f.write(data)
    return len(data)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Download image assets from Unitree pages into public/assets/img/robotics/unitree",
    )
    parser.add_argument(
        "--pages",
        nargs="+",
        default=[
            "https://www.unitree.com/cn",
            "https://www.unitree.com/cn/g1",
            "https://www.unitree.com/cn/H2",
            "https://www.unitree.com/cn/h1",
        ],
        help="Page URLs to crawl (space-separated)",
    )
    parser.add_argument(
        "--out",
        default="public/assets/img/robotics/unitree",
        help="Output directory (relative to repo root)",
    )
    parser.add_argument("--timeout", type=int, default=30, help="HTTP timeout seconds")
    parser.add_argument("--sleep", type=float, default=0.4, help="Sleep seconds between requests")
    parser.add_argument("--max", type=int, default=80, help="Max images to download")
    parser.add_argument("--min-kb", type=int, default=40, help="Skip files smaller than this")
    parser.add_argument(
        "--insecure-ssl",
        action="store_true",
        help="Disable SSL verification (only if your environment blocks HTTPS)",
    )
    args = parser.parse_args()

    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    out_dir = os.path.join(repo_root, args.out)
    _ensure_dir(out_dir)

    allowed_img_exts = set(IMG_EXTS_DEFAULT)
    allowed_css_exts = set(CSS_EXTS_DEFAULT)

    visited_pages: set[str] = set()
    visited_css: set[str] = set()
    image_urls: set[str] = set()
    css_urls: set[str] = set()

    def crawl_page(page_url: str) -> None:
        if page_url in visited_pages:
            return
        visited_pages.add(page_url)

        print(f"[page] {page_url}")
        try:
            html = fetch_text(page_url, timeout=args.timeout, insecure_ssl=args.insecure_ssl)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"[warn] failed to fetch page: {page_url} ({e})", file=sys.stderr)
            return

        cands = extract_candidate_urls_from_text(html)
        for raw in cands:
            abs_url = to_absolute(page_url, raw)
            if is_image_url(abs_url, allowed_img_exts):
                image_urls.add(abs_url)
            elif is_css_url(abs_url, allowed_css_exts):
                css_urls.add(abs_url)

    def crawl_css(css_url: str) -> None:
        if css_url in visited_css:
            return
        visited_css.add(css_url)

        try:
            css_text = fetch_text(css_url, timeout=args.timeout, insecure_ssl=args.insecure_ssl)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"[warn] failed to fetch css: {css_url} ({e})", file=sys.stderr)
            return

        cands = extract_candidate_urls_from_text(css_text)
        for raw in cands:
            abs_url = to_absolute(css_url, raw)
            if is_image_url(abs_url, allowed_img_exts):
                image_urls.add(abs_url)

    for p in args.pages:
        crawl_page(p)
        time.sleep(args.sleep)

    # Crawl linked CSS for background images
    for c in list(css_urls):
        crawl_css(c)
        time.sleep(args.sleep)

    # Deduplicate and download with basic filtering
    urls_sorted = sorted(image_urls)
    print(f"\n[found] images={len(urls_sorted)} css={len(css_urls)}")

    downloaded = 0
    skipped_small = 0
    for url in urls_sorted:
        if downloaded >= args.max:
            break

        target = _safe_target_path(out_dir, url)
        if os.path.exists(target) and os.path.getsize(target) > 0:
            continue

        try:
            size = download_file(url, target, timeout=args.timeout, insecure_ssl=args.insecure_ssl)
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, ssl.SSLError) as e:
            print(f"[warn] download failed: {url} ({e})", file=sys.stderr)
            continue

        if size < args.min_kb * 1024:
            skipped_small += 1
            try:
                os.remove(target)
            except OSError:
                pass
            continue

        downloaded += 1
        print(f"[ok] {downloaded:03d} {size/1024:.1f}KB  {url}")
        time.sleep(args.sleep)

    print(
        f"\n[done] downloaded={downloaded} skipped_small={skipped_small} out={os.path.relpath(out_dir, repo_root)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
