<template>
  <div>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <div class="six"></div>
    <div class="seven"></div>
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

<style scoped>
* {
  font-size: 14px;
}

.one {
  background: var(--dark-blue-dm-el);
  width: 50px;
  height: 50px
}
.two {
  background: var(--very-dark-blue-dm-bg);
  width: 50px;
  height: 50px
}
.three {
  background: var(--very-dark-blue-lm-txt);
  width: 50px;
  height: 50px
}
.four {
  background: var(--dark-gray-lm-in);
  width: 50px;
  height: 50px
}
.five {
  background: var(--very-light-gray-lm-bg);
  width: 50px;
  height: 50px
}
.six {
  background: var(--white);
  width: 50px;
  height: 50px
}
</style>
