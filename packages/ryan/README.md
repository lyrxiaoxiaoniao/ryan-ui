## 安装依赖

```
pnpm install
```

## 命令介绍

```shell
# 本地开发环境
pnpm docs:dev

# 打包组件库
pnpm build

# 发布到 npm，tips: 需要将npm的registry切换到原始的（https://registry.npmjs.org/）并提前登录
pnpm release

# 工具命令: 创建要开发的组件，此命令回创建组件的基本文件和添加文档
pnpm gen ComponentName

# 工具命令: 删除组件，会删除与该组件相关的文件和文档
pnpm del ComponentName

```

## 快速开始

### 用法

#### 安装依赖

```
npm install ryan
```

#### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import 'ryan/dist/style.css'
import Ryan from 'ryan'
import App from './App.vue'

createApp(App).use(Ryan).mount('#app')
```
