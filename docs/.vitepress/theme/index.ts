import DefaultTheme from 'vitepress/theme'
import KnowledgeBase from './components/KnowledgeBase.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('KnowledgeBase', KnowledgeBase)
  }
}
