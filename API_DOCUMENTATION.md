# API 接口文档

本文档列出了 officialWebsite 项目所有后端 API 接口。

**后端域名**: `https://webapi.aizerospace.com/`

---

## 1. Blog 模块 (博客)

### 1.1 获取博客列表
- **接口**: `GET /api/blog/list`
- **参数**:
  - `page`: 页码 (可选)
  - `pageSize`: 每页数量 (可选)
  - `category`: 分类 (可选)
  - `keyword`: 搜索关键词 (可选)
  - `tag`: 标签 (可选)
- **响应**:
```typescript
{
  list: IBlogPost[],
  total: number,
  page: number,
  pageSize: number
}
```

### 1.2 获取博客详情
- **接口**: `GET /api/blog/{id}`
- **参数**: 路径参数 `id`
- **响应**: `IBlogPost`

### 1.3 获取博客分类列表
- **接口**: `GET /api/blog/categories`
- **响应**: `IBlogCategory[]`

### 1.4 获取标签列表
- **接口**: `GET /api/blog/tags`
- **响应**: `IBlogTag[]`

### 1.5 获取最近文章
- **接口**: `GET /api/blog/recent`
- **参数**:
  - `limit`: 限制数量 (可选)
- **响应**: `IRecentPost[]`

### 1.6 搜索博客
- **接口**: `GET /api/blog/search`
- **参数**:
  - `keyword`: 搜索关键词 (必填)
  - `page`: 页码 (可选)
  - `pageSize`: 每页数量 (可选)
- **响应**: `IBlogListResponse`

### 1.7 添加评论
- **接口**: `POST /api/blog/comments`
- **请求体**:
```typescript
{
  blogId: number,
  author: string,
  email: string,
  content: string
}
```

### 1.8 获取博客评论列表
- **接口**: `GET /api/blog/{blogId}/comments`
- **参数**: 路径参数 `blogId`
- **响应**: `IBlogComment[]`

---

## 2. Portfolios 模块 (作品集)

### 2.1 获取作品列表
- **接口**: `GET /api/portfolios/list`
- **参数**:
  - `category`: 分类 (all | nature | portrait | wedding | event) (可选)
  - `page`: 页码 (可选)
  - `pageSize`: 每页数量 (可选)
- **响应**: `IPortfolioListResponse`

### 2.2 获取作品详情
- **接口**: `GET /api/portfolios/{id}`
- **参数**: 路径参数 `id`
- **响应**: `IPortfolioItem`

### 2.3 按分类获取作品
- **接口**: `GET /api/portfolios/category/{category}`
- **参数**: 路径参数 `category`
- **响应**: `IPortfolioItem[]`

---

## 3. Contact 模块 (联系)

### 3.1 提交联系表单
- **接口**: `POST /api/contact/submit`
- **请求体**:
```typescript
{
  name: string,
  email: string,
  subject: string,
  message: string
}
```

### 3.2 订阅邮件
- **接口**: `POST /api/contact/subscribe`
- **请求体**:
```typescript
{
  email: string
}
```

### 3.3 获取联系信息
- **接口**: `GET /api/contact/info`
- **响应**: `IContactInfo`

---

## 4. Home 模块 (首页)

### 4.1 获取首页轮播图
- **接口**: `GET /api/home/hero-slides`
- **响应**: `IHeroSlide[]`

### 4.2 获取画廊图片
- **接口**: `GET /api/home/gallery`
- **响应**: `IGalleryItem[]`

### 4.3 获取服务列表
- **接口**: `GET /api/home/services`
- **响应**: `IServiceItem[]`

### 4.4 获取定价方案
- **接口**: `GET /api/home/pricing`
- **响应**: `IPricingPlan[]`

### 4.5 获取 Instagram 图片
- **接口**: `GET /api/home/instagram`
- **响应**: `IInstagramImage[]`

---

## 5. About 模块 (关于)

### 5.1 获取关于信息
- **接口**: `GET /api/about/info`
- **响应**: `IAboutInfo`

### 5.2 获取服务列表
- **接口**: `GET /api/about/services`
- **响应**: `IAboutService[]`

### 5.3 获取团队成员
- **接口**: `GET /api/about/team`
- **响应**: `ITeamMember[]`

### 5.4 获取客户评价
- **接口**: `GET /api/about/testimonials`
- **响应**: `ITestimonial[]`

---

## 6. Services 模块 (服务)

### 6.1 获取服务列表
- **接口**: `GET /api/services/list`
- **参数**:
  - `category`: 分类 (可选)
  - `page`: 页码 (可选)
  - `pageSize`: 每页数量 (可选)
- **响应**: `IService[]`

### 6.2 获取服务详情
- **接口**: `GET /api/services/{id}`
- **参数**: 路径参数 `id`
- **响应**: `IServiceDetail`

### 6.3 获取定价方案
- **接口**: `GET /api/services/pricing`
- **响应**: `IPricing[]`

### 6.4 获取客户评价
- **接口**: `GET /api/services/testimonials`
- **响应**: `IServiceTestimonial[]`

---

## 接口通用说明

### 请求头
所有接口请求需要携带以下请求头:
```
token: <用户令牌>  // 如果需要鉴权
Content-Type: application/json  // POST/PUT 请求
```

### 响应格式
所有接口统一响应格式:
```typescript
{
  code: number,      // 状态码
  message: string,   // 提示信息
  data: any          // 响应数据
}
```

### 状态码说明
- `200`: 成功
- `400`: 请求参数错误
- `401`: 未授权
- `403`: 无权限
- `404`: 资源不存在
- `500`: 服务器错误

---

## 类型定义

详细的类型定义请参考各模块的 `types` 文件夹:
- `src/pages/blog/types/blog.ts`
- `src/pages/portfolios/types/portfolios.ts`
- `src/pages/contact/types/contact.ts`
- `src/pages/home/types/home.ts`
- `src/pages/about/types/about.ts`
- `src/pages/services/types/services.ts`
