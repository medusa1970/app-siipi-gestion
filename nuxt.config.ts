// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
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
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-graphql-client', '@nuxt/image'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:3000/graphql' // overwritten by process.env.GQL_HOST
    }
  }
});
