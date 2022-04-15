<template>
  <div>
    <img :src="country.flag" :alt="`${country.name} flag`" class="rounded w-48 h-64">
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      default: () => {}
    }
  }
}
</script>