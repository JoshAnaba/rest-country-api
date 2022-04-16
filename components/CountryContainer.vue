<template>
  <div class="rounded w-48 h-64 shadow-md cursor-pointer">
    <img :src="country.flag" :alt="`flag of ${country.name}`" class="rounded-t">
    <div class="content p-2.5">
      <p class="text-lg font-medium">
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