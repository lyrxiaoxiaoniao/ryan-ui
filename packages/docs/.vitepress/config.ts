import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebar } from './config/sidebars'
import { nav } from './config/nav'
export const config: UserConfig = {
  base: '',
  title: 'ryan',
  description: 'a Vue 3 based component library for designers and developers',
  themeConfig: {
    logo: '/images/logo.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT ryaner and ryan contributors',
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
    },
    socialLinks: [{ icon: 'github', link: '' }],
    nav,
    sidebar,
  },
  markdown: {
    config: md => mdPlugin(md),
  },
}

export default config
