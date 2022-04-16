export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rest-countries-api',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    // {src: '~/plugins/vue-persist'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  axios: {
    baseURL: process.env.NODE_ENV === 'development' ? 'https://restcountries.com/v2/' : 'https://restcountries.com/v2/' ,
    progress: true
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    height: '4px',
    color: '#44c3d2'
  },
  toast: {
    position: 'top-right',
    register: [
      {
        name: 'custom_success',
        message: message => message,
        options: {
          type: 'success',
          duration: 3000,
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      },
      {
        name: 'custom_error',
        message: message => message,
        options: {
          type: 'error',
          duration: 3000,
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      }
    ]
  }
}
