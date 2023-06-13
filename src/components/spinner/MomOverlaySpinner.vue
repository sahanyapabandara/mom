<template>
  <portal to="overlay">
    <div class="MomOverlaySpinner overlay"><MomSpinner size="xl" /></div>
  </portal>
</template>

<script>
import MomSpinner from "@/components/spinner/MomSpinner.vue"

export default {
  name: "MomOverlaySpinner",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomSpinner,
  },
}
</script>
