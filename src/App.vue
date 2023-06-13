<template>
  <div id="app">
    <router-view class="view" />
    <portal-target class="vuePortal__ForOverlay" name="overlay" multiple></portal-target>
    <portal-target class="vuePortal__ForNotification" name="notification" multiple></portal-target>
    <portal-target class="vuePortal__ForDraft" name="draft" multiple></portal-target>
  </div>
</template>

<script>
// import "../ganalytics.js"

export default {
  name: "app",
}
</script>

<style lang="scss">
@import "assets/css/global.min.css";
@import "assets/css/carapace.min.css";

#app {
  height: 100%;
}

.snapshot {
  @include stack-margin(rem(24));
}
</style>
