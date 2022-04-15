<template>
  <div>
    <!-- <button @click="fetchCountries()">fetch</button> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'mainLayout',
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
          console.log(onfulfilled)
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
