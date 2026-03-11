import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nadir/',
  title: 'Nadir',
  description: 'A minimal, modular CSS utility library for building user interfaces.',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/typography' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Motivation', link: '/guide/motivation' },
          { text: 'MCP Server', link: '/guide/mcp' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Typography', link: '/reference/typography' },
          { text: 'Spacing', link: '/reference/spacing' },
          { text: 'Layout', link: '/reference/layout' },
          { text: 'Decorations', link: '/reference/decorations' },
          { text: 'Interactive', link: '/reference/interactive' },
          { text: 'Reset', link: '/reference/reset' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikelaz/nadir' },
    ],
  },
})
