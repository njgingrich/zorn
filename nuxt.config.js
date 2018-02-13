module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sean Zorn - Standup Comedian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site for Sean Zorn' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fjalla+One|Rubik' }
    ]
  },
  css: [
    '~assets/style/main.scss'
  ],
  router: {
    linkExactActiveClass: 'active-link',
    linkActiveClass: 'active-link-inexact',
    base: '/zorn/'
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    'dir': 'docs'
  },
  plugins: [
    { src: '~/plugins/svgicon.js' }
  ]
}
