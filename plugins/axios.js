export default function ({ $axios, store, redirect, route }) {
  $axios.onError((_err) => {
    // store.commit('toggleLoader', { isFetching: false, error: true })
    // if (_err.response.status === 401) {
    //   redirect(`/login?fallBackUrl=${route.fullPath}`)
    //   store.commit('setToastMessage', {
    //     duration: 6000,
    //     message: 'Session expired',
    //     type: 'warning'
    //   })
    //   store.commit('setToastMessageStatus', true)
    // }
  })
  $axios.onResponse(() => {
    // store.commit('toggleLoader', { isFetching: false, error: false })
  })
  $axios.onRequest((_config) => {
    // store.commit('networkErrorNotification', !navigator.onLine)
    // store.commit('setToastMessageStatus', false)
    // store.commit('toggleLoader', { isFetching: true, error: null })
    // if (process.browser && !store.state.token && !route.name === 'signup') {
    //   return redirect('/login')
    // }
    // $axios.setHeader('Authorization', `Bearer ${store.state.token}`)
  })
}
