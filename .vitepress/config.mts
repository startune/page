import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './docs',
  title: "startune",
  description: "startune",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://startune.github.io'
  },
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SBVEXD4VKV'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-SBVEXD4VKV');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCqw2b-kaEI2asItCcciZAMA' },
      { icon: 'twitter', link: 'https://twitter.com/NeoWarren' }
    ],

    search: {
      provider: 'local'
    }
  }
})
