import * as Ryan from '@ryan/components'
import { define } from '../utils/types'
import type { Theme as ThemeType } from 'vitepress'

import { globals } from '../vitepress'

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default/index.js'

export default define<ThemeType>({
  ...Theme,
  enhanceApp: ({ app }) => {
    Object.keys(Ryan).forEach(key => {
      if (key.startsWith('Ryan') && Ryan[key].name) {
        app.component(Ryan[key].name, Ryan[key])
      }
    })
    globals.forEach(([name, comp]) => app.component(name, comp))
  },
})
