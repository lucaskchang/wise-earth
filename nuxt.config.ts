// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    contentfulKey: '',
  },
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
    'nuxt-vuefire',
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

  vuefire: {
    config: {
      apiKey: 'AIzaSyBHl_8m49_XF2hOa1_rnkCFl0nFaVDg4XA',
      authDomain: 'wise-earth.firebaseapp.com',
      projectId: 'wise-earth',
      storageBucket: 'wise-earth.appspot.com',
      messagingSenderId: '744112115650',
      appId: '1:744112115650:web:4a63ea91c24edb16ebd05b',
      measurementId: 'G-ZH9V7B6JYV',
    },
  },

  compatibilityDate: '2024-08-22',
});
