module.exports = {
  title: 'yfang-icons',
  description: '圆方图标库',
  base: '/yfang-icons/',
  themeConfig: {
    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/YFang-FE/yfang-icons'
      }
    ],
    sidebar: {
      '/': getBasicSidebar()
    }
  }
}
function getBasicSidebar() {
  return [
    {
      text: '介绍',
      link: '/'
    },
    {
      text: '基本 icons',
      link: '/basic'
    }
  ]
}
