# OfficialWebsite 迁移指南

## 项目概述

本项目已将原静态 HTML 网站迁移到 **React + Umi** 框架，完全遵循 `lxpjWebPlatform` 的架构设计和代码规范。

## 迁移策略

### 1. 保留原有内容
- ✅ 所有原始 HTML 内容已转换为 React 组件
- ✅ 保留原有的 CSS 样式文件（`/assets/css/`）
- ✅ 保留原有的 JavaScript 插件（`/assets/js/`）
- ✅ 保留所有图片和静态资源（`/assets/img/`）

### 2. 架构设计
完全参考 `lxpjWebPlatform` 项目：
- React 18 + @umijs/max 4.x
- TypeScript
- ESLint + Prettier + Stylelint
- Husky + lint-staged

## 目录结构

```
officialWebsite/
├── public/
│   ├── index.html          # 引入原有 CSS/JS
│   └── assets/             # 原有静态资源（需手动复制）
├── src/
│   ├── pages/
│   │   ├── layout/         # 布局组件（Header + Footer）
│   │   ├── home/           # 首页（已完成）
│   │   ├── about/          # 关于页面
│   │   ├── services/       # 服务页面
│   │   ├── portfolios/     # 作品集页面
│   │   ├── blog/           # 博客列表
│   │   └── contact/        # 联系页面
│   ├── routes.ts           # 路由配置
│   ├── app.ts              # 运行时配置
│   └── global.less         # 全局样式
└── package.json            # 完全复用 lxpjWebPlatform
```

## 重要步骤

### 步骤 1: 复制静态资源

```bash
# 将原有的 assets 目录复制到 public 目录
cp -r assets public/
```

### 步骤 2: 安装依赖

```bash
npm install
```

### 步骤 3: 启动开发服务器

```bash
npm run start:develop
```

## 页面组件说明

### 已完成的组件

#### 1. Home 组件 (`src/pages/home/components/home.tsx`)
- ✅ 完整保留原 `index.html` 的所有内容
- ✅ 包含轮播图、关于区域、画廊、服务、推荐、价格卡片、Instagram
- ✅ 使用 `useEffect` 初始化 jQuery 插件（Slick、Owl Carousel）

### 待完成的组件

#### 2. About 组件
参考 `about.html`，包含：
- Hero 区域
- About 内容区
- Testimonial
- Services
- Instagram

#### 3. Services 组件
参考 `services.html`，包含：
- Hero 区域
- Services 列表
- Testimonial
- Pricing
- Instagram

#### 4. Portfolios 组件
参考 `portfolios.html`，包含：
- Hero 区域
- Portfolio 画廊
- Instagram

#### 5. Blog 组件
参考 `blog.html`，包含：
- Hero 区域
- Blog 列表
- Pagination
- Sidebar

#### 6. BlogDetails 组件
参考 `blog_details.html`，包含：
- Blog 详情内容
- Comments
- Sidebar

#### 7. Contact 组件
参考 `contact.html`，包含：
- Hero 区域
- Contact 表单
- Map

## jQuery 插件初始化

所有需要 jQuery 插件的组件都应在 `useEffect` 中初始化：

```typescript
useEffect(() => {
  if (window.$) {
    // 初始化插件
    window.$('.slider-active').slick({...})
  }
}, [])
```

## 路由配置

已在 `src/routes.ts` 中配置所有路由：

```typescript
export const routes = [
  {
    path: '/',
    component: '@/pages/layout',
    routes: [
      { path: '/', component: '@/pages/home/components/home' },
      { path: '/about', component: '@/pages/about/components/about' },
      { path: '/services', component: '@/pages/services/components/services' },
      { path: '/portfolios', component: '@/pages/portfolios/components/portfolios' },
      { path: '/blog', component: '@/pages/blog/components/blog' },
      { path: '/blog/:id', component: '@/pages/blog/components/blogDetails' },
      { path: '/contact', component: '@/pages/contact/components/contact' }
    ]
  }
]
```

## 注意事项

### 1. 图片路径
所有图片路径使用绝对路径：
```tsx
<img src="/assets/img/gallery/about1.jpg" alt="" />
```

### 2. CSS 类名
保持原有的 Bootstrap 和自定义类名：
```tsx
<div className="container">
  <div className="row">
    <div className="col-lg-4">...</div>
  </div>
</div>
```

### 3. 链接处理
- 内部链接使用 React Router 的 `Link` 组件
- 外部链接保持 `<a>` 标签

```tsx
import { Link } from '@umijs/max'

// 内部链接
<Link to="/about">About</Link>

// 外部链接
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>
```

### 4. 表单处理
Contact 页面的表单可以：
- 保留原有的 jQuery 验证
- 或使用 Ant Design 的 Form 组件

## 下一步工作

1. ✅ 复制 `assets` 目录到 `public/`
2. ✅ 完成 Home 组件
3. ⏳ 完成 About 组件
4. ⏳ 完成 Services 组件
5. ⏳ 完成 Portfolios 组件
6. ⏳ 完成 Blog 组件
7. ⏳ 完成 BlogDetails 组件
8. ⏳ 完成 Contact 组件
9. ⏳ 完成 Header 组件（移动端菜单）
10. ⏳ 完成 Footer 组件

## 构建和部署

```bash
# 开发环境
npm run start:develop

# 生产环境构建
npm run build:production

# 其他环境
npm run build:stage
npm run build:uat
```

## 常见问题

### Q: jQuery 插件不工作？
A: 确保在 `public/index.html` 中已引入所有必要的 JS 文件，并在组件的 `useEffect` 中初始化。

### Q: 样式不生效？
A: 确保 `public/index.html` 中引入了所有原有的 CSS 文件。

### Q: 图片显示不出来？
A: 检查 `public/assets/` 目录是否包含所有图片资源。

## 参考资源

- lxpjWebPlatform 项目架构
- Umi 官方文档: https://umijs.org/
- React 官方文档: https://react.dev/
