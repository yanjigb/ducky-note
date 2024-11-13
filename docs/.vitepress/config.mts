import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  title: "Ducky Note",
  description: "Simple note have multiple content",

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
  ],
  
  themeConfig: {
    search: {
      provider: 'local',
      options: {
      },
    },

    nav: [
      { text: '', link: '' },
    ],

    sidebar,

    footer: {
      message: 'Ducky Note',
      copyright: `Copyright © ${new Date().getFullYear()} by Ducky in Black`
    }
  }
})
