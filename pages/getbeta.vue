<template>
  <div class="get-beta">
    <navbar />
    <betaaccess />
  </div>
</template>

<script>
import betaaccess from '~/components/betaaccess.vue'
import Ftr from '~/components/ftr.vue'
import Navbar from '~/components/navbar.vue'
export default {
  components: { betaaccess, Ftr },
}
</script>

<style>
.get-beta {
  text-align: center;
}
</style>
