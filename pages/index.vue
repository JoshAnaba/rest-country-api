<template>
  <div class="flex flex-wrap">
    <CountryContainer v-for="country in countries" :key="country.name" :country="country" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'mainLayout',
  data () {
    return {
      countries: []
    }
  },
  created () {
    this.fetchCountries()
  },
  methods: {
      async fetchCountries() {
      await this.$axios({
        url: 'all',
        method: 'GET',
      })
        .then((onfulfilled) => {
          this.countries = onfulfilled.data
        })
        .catch((err) => {
          const errorMsg = err.response?.data?.message

          this.$toast.global.custom_error(errorMsg)
        })
        .finally(() => {
          this.loading = false
        })
    },
  }
}
</script>
