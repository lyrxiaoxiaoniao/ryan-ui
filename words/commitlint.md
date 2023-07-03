### Git 提交规范自动化----提交信息规范配置：commitlint

```
// 添加依赖

pnpm add @commitlint/cz-commitlint commitizen @commitlint/cli @commitlint/config-conventional -D -w

touch .commitlint.config.js

```

### 在此之前我们要了解常用的 Git 提交规范

```
Subject 一句话概述commit主题(必须)
<Body> 详细描述 What 和 Why (可选)
<Footer> 不兼容或关闭 issue 等说明(可选)

主题(Subject)是 commit 的简短描述，不超过50个字符
- 用一句话说明本次所作的提交, 如果一句话说不清楚，那有可能这个提交得拆分成多次
- 主要采用 Verb + Object + Adverb 的形式描述，常见动词及示例如下
1. feat: 添加代码和逻辑, 如 feat: add xxx field/method/class
2. fix: 修复bug，如 fix: #123, fix xxx error
3. docs: 文档更新，如 docs: change documents
4. style: 样式修改，如 style: add class or change style
5. refactor: 代码重构, 如refactor: rename, move, extract, inline等
6. perf: 代码性能优化，perf: improves performance
7. test: 代码单元测试，test: test menu component
8. build: 项目构建，build: build project
9. ci: 修改CI文件 ci: change gitlab-ci.yml
10. chore: 构建过程或辅助工具的变动 chore: change webpack

正文(Body)详细描述本次 commit 做了什么、为什么这样做(不是怎么做的)
- 每行不要超过70字符
1. 这个改动解决了什么问题？
2. 这个改动为什么是必要的？
3. 会影响到哪些其他的代码？
  bug fix - 组件 bug 修复；
  breaking change - 不兼容的改动；
  new feature - 新功能

尾注(Footer) 用于关闭 Issue 或存在不兼容时添加相关说明等
1. breaking change: 与上一个版本不兼容的相关描述、理由及迁移办法
2. close #issue: 关闭相关问题（附链接）
3. revert: 撤销以前的commit

```
