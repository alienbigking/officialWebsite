# Official Website

基于 React 18 + Umi 4 的摄影师官网项目（从静态 HTML 迁移）

> **重要提示**: 本项目正在从静态 HTML 迁移到 React/Umi 框架，架构设计完全参考 `lxpjWebPlatform` 模板项目。
> 
> 详细迁移指南请查看 [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

## 技术栈

### 前端框架
- **框架**: React 18.0.0
- **构建工具**: @umijs/max 4.x
- **状态管理**: Recoil
- **代码规范**: ESLint + Prettier + Stylelint
- **Git Hooks**: Husky + lint-staged

### 原有技术（保留）
- **UI 框架**: Bootstrap 4
- **样式**: 原有 CSS 文件（保留在 `/public/assets/css/`）
- **JavaScript 插件**: jQuery, Slick, Owl Carousel 等（保留在 `/public/assets/js/`）
- **图标**: FontAwesome, Themify Icons

## 环境要求

- Node.js: 16.16.0 (推荐使用 nvm 管理版本)
- npm: 7.x+

## 快速开始

### 1. 复制静态资源

**重要**: 首次运行前，需要将原有的 `assets` 目录复制到 `public` 目录：

```bash
cp -r assets public/
```

### 2. 初始化 Git 仓库（如果还没有）

```bash
git init
```

### 3. 安装依赖

```bash
npm install
```

### 4. 启动开发服务器

```bash
# 开发环境
npm run start:develop

# 生产环境（本地调试）
npm run start:production

# 测试环境
npm run start:stage

# UAT环境
npm run start:uat

# 本地部署环境
npm run start:localDeploy
```

### 5. 构建项目

```bash
# 默认构建
npm run build

# 开发环境构建
npm run build:develop

# 生产环境构建
npm run build:production

# 测试环境构建
npm run build:stage

# UAT环境构建
npm run build:uat

# 本地部署环境构建
npm run build:localDeploy
```

## 项目结构

```
officialWebsite/
├── .husky/                 # Git hooks 配置
├── src/
│   ├── pages/             # 页面组件
│   │   ├── layout/        # 布局组件（Header、Footer）
│   │   ├── home/          # 首页
│   │   ├── about/         # 关于我们
│   │   ├── services/      # 服务
│   │   ├── portfolios/    # 作品集
│   │   ├── blog/          # 博客
│   │   └── contact/       # 联系我们
│   ├── components/        # 公共组件
│   ├── utils/             # 工具函数
│   ├── hooks/             # 自定义 Hooks
│   ├── assets/            # 静态资源
│   ├── routes.ts          # 路由配置
│   ├── app.ts             # 运行时配置
│   ├── global.less        # 全局样式
│   └── global.ts          # 全局脚本
├── .umirc.ts              # Umi 主配置
├── .umirc.*.ts            # 各环境配置
├── .eslintrc.js           # ESLint 配置
├── .prettierrc            # Prettier 配置
├── .stylelintrc.js        # Stylelint 配置
├── .lintstagedrc          # lint-staged 配置
├── package.json           # 项目依赖
└── tsconfig.json          # TypeScript 配置
```

## 页面模块

- ✅ **Home** (`/`) - 首页（已完成迁移）
  - 轮播图（3个 slides）
  - 关于区域
  - 作品画廊（6张图片）
  - 服务介绍（3个服务）
  - 客户推荐
  - 价格方案
  - Instagram 展示
  
- ⏳ **About** (`/about`) - 关于页面（待迁移）
- ⏳ **Services** (`/services`) - 服务页面（待迁移）
- ⏳ **Portfolios** (`/portfolios`) - 作品集页面（待迁移）
- ⏳ **Blog** (`/blog`) - 博客列表（待迁移）
- ⏳ **Blog Details** (`/blog/:id`) - 博客详情（待迁移）
- ⏳ **Contact** (`/contact`) - 联系表单（待迁移）

## 开发规范

### 代码风格

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 使用 Stylelint 进行样式检查
- 提交前自动执行 lint-staged 检查

### 命名规范

- 组件文件：PascalCase（如 `Header.tsx`）
- 样式文件：camelCase（如 `header.less`）
- 工具函数：camelCase
- 常量：UPPER_SNAKE_CASE

### Git 提交规范

```bash
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
test: 测试相关
chore: 构建/工具链相关
```

## 多环境配置

项目支持多环境配置，通过 `UMI_ENV` 环境变量切换：

- **develop**: 开发环境
- **stage**: 测试环境
- **uat**: UAT环境
- **production**: 生产环境
- **localDeploy**: 本地部署环境

每个环境对应一个 `.umirc.{env}.ts` 配置文件，可在其中配置不同的 API 地址等。

## 常用命令

```bash
# 代码格式化
npm run format

# 开发模式
npm run dev

# 安装依赖后的初始化
npm run setup
```

## 迁移进度

### 已完成
- ✅ 项目架构搭建（完全参考 lxpjWebPlatform）
- ✅ 配置文件复制（package.json, .umirc.ts, ESLint, Prettier 等）
- ✅ 路由配置
- ✅ Layout 组件（Header + Footer）
- ✅ Home 页面组件（完整保留原 HTML 内容）
- ✅ jQuery 插件集成

### 待完成
- ⏳ About 页面组件
- ⏳ Services 页面组件
- ⏳ Portfolios 页面组件
- ⏳ Blog 页面组件
- ⏳ BlogDetails 页面组件
- ⏳ Contact 页面组件

## 注意事项

1. **必须先复制静态资源**: `cp -r assets public/`
2. **Node.js 版本**: 建议使用 18.20.8（已在 `.nvmrc` 中配置）
3. **原有样式和脚本**: 所有原有的 CSS/JS 文件都保留在 `public/assets/` 中
4. **jQuery 依赖**: 组件中使用了 jQuery 插件，已在 `public/index.html` 中引入
5. **TypeScript 错误**: `src/.umi/tsconfig.json` 的错误是正常的，会在首次运行后自动生成

## 下一步工作

1. 复制 `assets` 目录到 `public/`
2. 运行 `npm install` 安装依赖
3. 运行 `npm run start:develop` 查看首页效果
4. 根据 `MIGRATION_GUIDE.md` 继续完成其他页面的迁移

## License

Private
