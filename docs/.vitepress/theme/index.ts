import Theme from 'vitepress/theme'
import Badge from './components/ui/Badge.vue'
import { h } from 'vue'
import './styles/index.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-title-after': () => h(Badge, { text: '👑', type: 'warning' }),
    })
  },
  enhanceApp({ app }) {
    app.component('Badge', Badge)
  }
}
