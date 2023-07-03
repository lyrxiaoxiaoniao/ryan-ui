## 基于 pnpm 从 0 搭建 Monorepo 工程（一）

### 背景

- 随着公司前端项目增多大大小小几十个，每个项目仓库都是独立的 git 地址每次新项目都要重新创建模板然后定义一些项目框架然后在着手开发

- 很多开发过程中的关于基础建设的 idea 都被封存在各自的项目里，导致用 cli 做了一键生成项目脚手架 template 工程没有人持续维护，基本维持刚开始的样子，导致脚手架逐渐落后。

### 为什么使用 Monorepo(monolithic repository)

> Monorepo： 一个仓库内包含多个开发项目（模块，包）。对于前端项目：vue3、element 都是采用的这种架构模式。

- 代码风格质量以及 ci 相关流程的统一管理
- 各模块独立方便管理（对于 element 来说，修改表单只需要修改 packages 下的 form 目录）
- 结构清晰（模块独立之后，结构自然清晰）
- 缺点就是仓库代码体积可能比较大（一个仓库包含多个项目，项目多了，体积自然会大）

### 为什么使用 pnpm

pnpm 的特点：快速、高效利用磁盘空间; 学习成本低、简单好用。

```

  // 安装pnpm
  npm install -g pnpm

  // 创建workspace
  pnpm init

  // 根目录创建pnpm-workspace.yaml
  packages:
    - "packages/*"
    - "demo"

  // 创建自己的目录结构
  ├── packages
  │   ├── eslint-config
  │   │   ├── package.json
  │   │   └── pnpm-lock.yaml
  │   ├── components
  │   │   ├── package.json
  │   │   └── pnpm-lock.yaml
  │   ├── util
  │   │   ├── package.json
  │   │   └── pnpm-lock.yaml
  ├── demo
  │   ├── package.json
  │   └── pnpm-lock.yaml
  ├── package.json
  ├── pnpm-lock.yaml
  └── pnpm-workspace.yaml

```

### 安装依赖

- `pnpm -F, --filter <package_name> -D -w` 可以指定目标 package 执行任务

```
  pnpm i -F demo -D -w
  // 或者
  pnpm i --filter demo  -D -w

```

### project 关联 packages

```
  // 把 @ryan/eslint-config 添加到 demo里

  pnpm i @ryan/eslint-config -F demo

  pnpm add @ryan/eslint-config -F demo

  // demo 的 package.json 多了 @ryan/eslint-config
  {
      "dependencies": {
          "@ryan/eslint-config": "workspace:*", // * 代表默认同步最新版本，正常安装完应该是 ^1.0.0
      }
  }

```
