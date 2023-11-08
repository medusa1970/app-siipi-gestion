// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    vue: {
      customElement: true
    }
  },
  devServer: {
    port: 3232
  },
  modules: ['@nuxt/ui', '@pinia/nuxt']
});
