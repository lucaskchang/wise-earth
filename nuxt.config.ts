// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'WiseEarth',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  colorMode: {
    preference: 'light',
  },

  css: ['@/assets/css/styles.scss'],

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  googleFonts: {
    families: {},
  },

  gtag: {
    id: 'G-QNLZ5NY7HH',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  compatibilityDate: '2024-08-22',
});