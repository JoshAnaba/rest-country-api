<template>
  <div>
    <div class="flex flex-wrap gap-10 justify-space-between">
      <CountryContainer
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'mainLayout',
  data() {
    return {
      countries: [],
    }
  },
  created() {
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
          // console.log(this.countries[0])
        })
        .catch((err) => {
          const errorMsg = err.response?.data?.message
          this.$toast.global.custom_error(errorMsg)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
