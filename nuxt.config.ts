// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: [300, 400, 500, 600, 700, 800],
        Ubuntu: [400, 500]
      }
  }],
  ],
  css: ['@/assets/css/style.scss'],
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  imports: {
    dirs: ['stores']
  },
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'], 
    ],
  },
})
