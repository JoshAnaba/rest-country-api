<template>
  <div class="rounded w-48 h-64 shadow-md cursor-pointer" @click="$emit('go-to')">
    <div class="img-div h-1/2">
    <img :src="country.flag" :alt="`flag of ${country.name}`" class="rounded-t h-full w-full">
    </div>
    <div class="content p-2.5">
      <p class="text-base font-semibold">
        {{country.name}}
      </p>
      <div class="little-content">
        <div class="little-content-item text-xs">
          <span class="content-label font-medium">
            Population:
          </span>
          <span class="content-value">
            {{country.population}}
          </span>
        </div>
        <div class="little-content-item text-xs">
          <span class="content-label font-medium">
            Region:
          </span>
          <span class="content-value">
            {{country.region}}
          </span>
        </div>
        <div class="little-content-item text-xs">
          <span class="content-label font-medium">
            Capital:
          </span>
          <span class="content-value">
            {{country.capital}}
          </span>
        </div>
      </div>
    </div>
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

<style scoped>
.content-value {
  color: var(--dark-gray-lm-in);
}
</style>