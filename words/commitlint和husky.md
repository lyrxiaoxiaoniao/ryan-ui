### Git 提交规范自动化----提交信息规范配置：commitlint 和 husky

```
  // 添加依赖
  pnpm add husky lint-staged -D -w

  pnpm add @commitlint/cz-commitlint commitizen @commitlint/cli @commitlint/config-conventional -D -w

  touch .commitlint.config.js

```

### husky , lint-staged

```
  // package.json   pnpm i的时候会自动执行，用来配置项目husky环境
  "scripts": {
    ...
    "prepare": "husky install", // 该命令会在install后自动执行，用来配置项目husky环境
    ...
  },
  // 这段配置告诉了git hooks，当我们在当前项目中执行 git commit -m '测试提交' 时将触发commit-msg事件钩子并通知husky，从而执行 commitlint -E HUSKY_GIT_PARAMS命令，也就是我们刚开始安装的./node_modules/.bin/commitlint，它将读取commitlint.config.js配置规则并对我们刚刚提交的测试提交这串文字进行校验，若校验不通过，则在终端输出错误，commit终止。
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  // 配置是文件校验的规则
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "eslint --ext .ts packages/*/**.ts",
      "eslint --ext .ts packages/*/**.ts --fix"
    ],
    "*.{html,css,less,scss,md}": [
      "prettier --write ."
    ]
  }

```

配置执行的钩子`pre-commit`, `commit-msg`

```
npx husky add .husky/pre-commit "npx --no-install lint-staged"
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

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

### commitlint.config.js

- 英文版

```
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },


```

- 中文翻译

```
  extends: ['@commitlint/config-conventional'],
    parserPreset: {
      parserOpts: {
        headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
        headerCorrespondence: ['type', 'scope', 'subject'],
      },
    },
    rules: {
      'type-case': [0],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          '📦build',
          '👷ci',
          '📝docs',
          '🌟feat',
          '🐛fix',
          '🚀perf',
          '🌠refactor',
          '🔂revert',
          '💎style',
          '🚨test',
        ],
      ],
      'scope-empty': [2, 'never'],
      'subject-empty': [2, 'never'],
    },
    prompt: {
      settings: {},
      skip: ['body', 'footer', 'issues'],
      messages: {
        skip: '回车直接跳过',
        max: '最大%d字符',
        min: '%d chars at least',
        emptyWarning: '内容不能为空，重新输入',
        upperLimitWarning: 'over limit',
        lowerLimitWarning: 'below limit',
      },
      questions: {
        type: {
          description: '请选择提交类型',
          enum: {
            '🌟feat': {
              description: '增加新功能',
              title: 'Features',
              emoji: '🌟',
            },
            '🐛fix': {
              description: '修复bug',
              title: 'Bug Fixes',
              emoji: '🐛',
            },
            '📝docs': {
              description: '修改文档',
              title: 'Documentation',
              emoji: '📝',
            },
            '💎style': {
              description: '样式修改不影响逻辑',
              title: 'Styles',
              emoji: '💎',
            },
            '🌠refactor': {
              description: '功能/代码重构',
              title: 'Code Refactoring',
              emoji: '🌠',
            },
            '🚀perf': {
              description: '性能优化',
              title: 'Performance Improvements',
              emoji: '🚀',
            },
            '🚨test': {
              description: '增删测试',
              title: 'Tests',
              emoji: '🚨',
            },
            '📦build': {
              description: '打包',
              title: '打包',
              emoji: '📦',
            },
            '👷ci': {
              description: 'CI部署',
              title: 'Continuous Integrations',
              emoji: '⚙️',
            },

            '🔂revert': {
              description: '版本回退',
              title: 'Reverts',
              emoji: '🔂',
            },
          },
        },
        scope: {
          description: '请输入修改的范围（可选）',
        },
        subject: {
          description: '请简要描述提交（必填）',
        },
        body: {
          description: '请输入详细描述（可选）',
        },
        isBreaking: {
          description: '有什么突破性的变化吗?',
        },
        breakingBody: {
          description:
            '一个破坏性的变更提交需要一个主体。 请输入提交本身的更长的描述  ',
        },
        breaking: {
          description: 'Describe the breaking changes',
        },
        isIssueAffected: {
          description: '是否有未解决的问题?',
        },
        issuesBody: {
          description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
        },
        issues: {
          description: '请输入问题说明',
        },
      },
    },

```
