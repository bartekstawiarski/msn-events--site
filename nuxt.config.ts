// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    'nuxt-payload-analyzer',
    'nuxt-capo',
    '@nuxtjs/sitemap'
  ],

  // https://nuxt.com/modules/sitemap
  // https://nuxtseo.com/sitemap/getting-started/installation
  // for @nuxtjs/sitemap
  site: {
    url: process.env.DOMAIN,
    trailingSlash: true
  },

  app: {
    // https://nuxt.com/docs/getting-started/transitions#page-transitions
    pageTransition: { name: 'page', mode: 'out-in' },

    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      htmlAttrs: { lang: 'pl' },
      title: process.env.BRAND,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: process.env.DESCRIPTION }
      ],
      link: [{ rel: 'canonical', href: process.env.DOMAIN }]
    }
  }
})
