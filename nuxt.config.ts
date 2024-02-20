export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:18'
        },
        forwardingGateway: {
          allowedForwardedHosts: [
            'gray-pond-07fb7960f.4.azurestaticapps.net'
          ]
        }
      }
    }
  }
})
