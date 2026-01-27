// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
     firebaseApiKey: process.env.FIREBASE_API_KEY,
      }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      }
    },
    // Si tu repo es https://github.com/usuario/mi-proyecto
    // Tu baseURL debe ser '/mi-proyecto/'
   baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',    
    // Opcional pero recomendado para transiciones suaves en GH Pages
    buildAssetsDir: 'assets', 
  },

  // Importante para generación estática (SSG)
  ssr: true, // Se mantiene true para generar el HTML, pero 'generate' lo vuelve estático
  
  // Compatibilidad con Nitro (el motor de Nuxt) para GH Pages
  nitro: {
    preset: 'github-pages'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/icon', '@nuxt/image'],
    build: {
    transpile: ['vuetify'],
  },
   vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
})