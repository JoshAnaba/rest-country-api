<template>
  <div class="rounded w-48 h-64 shadow-md">
    <img :src="country.flag" :alt="`flag of ${country.name}`" class="rounded-t">
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