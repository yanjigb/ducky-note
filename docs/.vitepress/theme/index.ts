import Theme from 'vitepress/theme'
import Badge from './components/ui/Badge.vue'
import { h } from 'vue'
import './styles/index.css'
import { Analytics } from "@vercel/analytics/vue"
import { inject } from '@vercel/analytics'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-title-after': () => h(Badge, { text: '👑', type: 'warning' }),
      'layout-bottom': () => h(Analytics)
    })
  },
  enhanceApp({ app }) {
    app.component('Badge', Badge),
    inject()
  }
}
