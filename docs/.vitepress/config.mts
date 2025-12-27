import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "Nadir",
  description: "A powerful and minimal system of primitives to build user interfaces",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/overview' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Core Concepts', link: '/guide/core-concepts' },
          { text: 'Philosophy', link: '/guide/philosophy' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Overview', link: '/reference/overview' },
          { text: 'Typography', link: '/reference/typography' },
          { text: 'Spacing', link: '/reference/spacing' },
          { text: 'Shapes', link: '/reference/shapes' },
          { text: 'Layout', link: '/reference/layout' },
          { text: 'Color', link: '/reference/color' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikelaz/nadir' }
    ]
  }
})
