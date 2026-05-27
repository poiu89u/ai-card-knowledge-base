import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  title: 'AI 通识卡片库',
  description: '面向小白的 AI、开发与运维通识知识库',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: false,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/images/knowledge-mark.svg',
    siteTitle: 'AI 通识卡片库',
    nav: [
      { text: '知识卡片', link: '/' },
      { text: '知识框架', link: '/guide/knowledge-framework' },
      { text: '搜索录入', link: '/guide/sourcing-playbook' },
      { text: '内容规范', link: '/guide/content-rules' },
      { text: '来源校验', link: '/guide/source-checklist' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '知识库维护',
          items: [
            { text: '知识框架', link: '/guide/knowledge-framework' },
            { text: '搜索录入', link: '/guide/sourcing-playbook' },
            { text: '内容规范', link: '/guide/content-rules' },
            { text: '来源校验', link: '/guide/source-checklist' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'ESC'
            }
          }
        }
      }
    },
    footer: {
      message: '所有卡片先过官方或双源校验，再入库。',
      copyright: 'Built for personal AI learning.'
    }
  }
})
