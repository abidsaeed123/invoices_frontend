// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/axios', // Axios module for API calls
    '@nuxtjs/auth-next', // Auth module for user authentication
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],
  axios: {
    baseURL: 'http://your-laravel-api-url', // Configure base URL for API requests
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://your-laravel-api-url',
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/',
    },
  },
})
