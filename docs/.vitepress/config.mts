import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  title: "Yanji Document",
  description: "yanji-document",
  
  themeConfig: {
    search: {
      provider: 'local',
      options: {
      },
    },

    nav: [
      { text: 'Explore Now', link: '/categories/web-design' },
    ],

    sidebar,

    footer: {
      message: 'Yanji Document',
      copyright: `Copyright © ${new Date().getFullYear()} by Yanji`
    }
  }
})
