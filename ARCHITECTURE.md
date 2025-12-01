# 项目架构说明

本文档说明 officialWebsite 项目的整体架构设计，参考 lxpjWebPlatform 模板项目的代码规范。

---

## 架构概述

项目采用 **模块化** 架构，每个功能模块独立管理，包含以下结构：

```
src/pages/{moduleName}/
├── components/          # React 组件
├── services/           # API 服务接口
├── stores/             # 状态管理 (Recoil)
├── types/              # TypeScript 类型定义
├── index.ts            # 模块导出
└── routes.ts           # 路由配置
```

---

## 全局配置

### 环境配置 (`src/config/env.ts`)
- 后端 API 域名配置: `https://webapi.aizerospace.com/`
- 环境变量管理

### 工具函数 (`src/utils/`)
- **http.ts**: HTTP 请求封装，基于 UmiJS request
  - 自动添加 token 请求头
  - 统一错误处理
  - 响应拦截器
- **storage.ts**: 本地存储工具
  - sessionStorage 操作
  - localStorage 操作

---

## 模块列表

### 1. Home (首页)
**路径**: `src/pages/home/`

**接口**:
- 获取轮播图: `GET /api/home/hero-slides`
- 获取画廊: `GET /api/home/gallery`
- 获取服务: `GET /api/home/services`
- 获取定价: `GET /api/home/pricing`
- 获取 Instagram: `GET /api/home/instagram`

**状态管理**:
- heroSlidesState: 轮播图列表
- currentSlideState: 当前轮播索引
- galleryItemsState: 画廊列表
- serviceItemsState: 服务列表
- pricingPlansState: 定价方案
- instagramImagesState: Instagram 图片

---

### 2. Blog (博客)
**路径**: `src/pages/blog/`

**接口**:
- 博客列表: `GET /api/blog/list`
- 博客详情: `GET /api/blog/{id}`
- 分类列表: `GET /api/blog/categories`
- 标签列表: `GET /api/blog/tags`
- 最近文章: `GET /api/blog/recent`
- 搜索: `GET /api/blog/search`
- 添加评论: `POST /api/blog/comments`
- 评论列表: `GET /api/blog/{blogId}/comments`

**状态管理**:
- blogListState: 博客列表
- blogTotalState: 总数
- blogCurrentPageState: 当前页码
- blogPageSizeState: 每页数量
- blogCategoriesState: 分类列表
- blogTagsState: 标签列表
- recentPostsState: 最近文章
- currentBlogState: 当前博客详情
- blogLoadingState: 加载状态
- blogSearchKeywordState: 搜索关键词

---

### 3. Portfolios (作品集)
**路径**: `src/pages/portfolios/`

**接口**:
- 作品列表: `GET /api/portfolios/list`
- 作品详情: `GET /api/portfolios/{id}`
- 按分类查询: `GET /api/portfolios/category/{category}`

**状态管理**:
- portfolioListState: 作品列表
- activeFilterState: 当前激活分类
- currentPortfolioState: 当前作品详情
- portfolioLoadingState: 加载状态

---

### 4. Services (服务)
**路径**: `src/pages/services/`

**接口**:
- 服务列表: `GET /api/services/list`
- 服务详情: `GET /api/services/{id}`
- 定价方案: `GET /api/services/pricing`
- 客户评价: `GET /api/services/testimonials`

**状态管理**:
- servicesListState: 服务列表
- currentServiceState: 当前服务详情
- servicePricingState: 定价方案
- serviceTestimonialsState: 客户评价
- servicesLoadingState: 加载状态

---

### 5. About (关于)
**路径**: `src/pages/about/`

**接口**:
- 关于信息: `GET /api/about/info`
- 服务列表: `GET /api/about/services`
- 团队成员: `GET /api/about/team`
- 客户评价: `GET /api/about/testimonials`

**状态管理**:
- aboutInfoState: 关于信息
- aboutServicesState: 服务列表
- teamMembersState: 团队成员
- testimonialsState: 客户评价

---

### 6. Contact (联系)
**路径**: `src/pages/contact/`

**接口**:
- 提交表单: `POST /api/contact/submit`
- 订阅邮件: `POST /api/contact/subscribe`
- 联系信息: `GET /api/contact/info`

**状态管理**:
- contactSubmittingState: 表单提交状态
- subscribeLoadingState: 订阅状态

---

## 使用示例

### 1. 在组件中调用 API

```typescript
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { blogService } from '@/pages/blog'
import { blogListState } from '@/pages/blog/stores'

const BlogComponent = () => {
  const setBlogList = useSetRecoilState(blogListState)

  useEffect(() => {
    // 获取博客列表
    blogService.getList({ page: 1, pageSize: 10 }).then(res => {
      setBlogList(res.data.list)
    })
  }, [])

  return <div>...</div>
}
```

### 2. 使用状态管理

```typescript
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { blogListState, blogLoadingState } from '@/pages/blog/stores'

const BlogList = () => {
  const blogList = useRecoilValue(blogListState)
  const setLoading = useSetRecoilState(blogLoadingState)

  return (
    <div>
      {blogList.map(blog => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </div>
  )
}
```

### 3. 提交表单

```typescript
import { contactService } from '@/pages/contact'

const handleSubmit = async (values: any) => {
  try {
    const res = await contactService.submitForm(values)
    message.success('提交成功')
  } catch (error) {
    message.error('提交失败')
  }
}
```

---

## 代码规范

### 1. 文件命名
- 组件文件: 小驼峰 `blogList.tsx`
- 类型文件: 小驼峰 `blog.ts`
- 服务文件: 小驼峰 `blog.ts`

### 2. 类型命名
- 接口: `I` 开头，如 `IBlogPost`
- 枚举: `E` 开头，如 `EStatus`
- 类型别名: 直接使用，如 `PortfolioCategory`

### 3. 导出规范
- 模块统一通过 `index.ts` 导出
- 使用命名导出，避免 default export (除 routes 外)

### 4. 状态管理
- 使用 Recoil atom 管理状态
- atom key 命名格式: `{模块}{含义}State`
- 示例: `blogListState`, `blogLoadingState`

---

## 后续接入后端

1. 确保后端接口遵循文档规范 (`API_DOCUMENTATION.md`)
2. 在组件中替换静态数据为 API 调用
3. 使用 Recoil 状态管理数据
4. 处理加载状态和错误状态
5. 添加必要的鉴权 token

---

## 相关文档

- [API 接口文档](./API_DOCUMENTATION.md)
- [类型定义](./src/pages/*/types/)
- [UmiJS 文档](https://umijs.org/)
- [Recoil 文档](https://recoiljs.org/)
