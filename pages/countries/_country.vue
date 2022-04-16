<template>
  <div>
    <div class="flex flex-wrap gap-10 justify-space-between">
      <CountryContainer
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
      country: {}
    }
  },
  created() {
    this.fetchCountry()
  },
  methods: {
    goTo (c) {
      this.$store.commit('storeCountry', c)
      this.$router.push('/')
    },
    async fetchCountry() {
      await this.$axios({
        url: `name/${this.$route.query.country}`,
        method: 'GET',
      })
        .then((onfulfilled) => {
          this.country = onfulfilled.data[0]
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
