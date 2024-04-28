// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      'normalize.css/normalize.css',
      '@/assets/scss/fonts.scss',
      '@/assets/scss/default.scss'
  ]
})
