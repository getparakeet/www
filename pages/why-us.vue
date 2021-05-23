<template>
  <div class="why-us">
    <navbar />
    <div class="our-products p-40">
      <advantage />
    </div>
    <ftr />
  </div>
</template>

<script lang="ts">
import Advantage from '~/components/advantage.vue'
import ftr from '~/components/ftr.vue'
export default {
  components: { ftr, Advantage },
}
</script>

<style>
.our-products {
  height: 100vh;
}
::selection {
  background: rgba(52, 171, 235, 0.6);
}
</style>
