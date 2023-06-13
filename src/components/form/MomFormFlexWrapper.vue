<template>
  <div class="MomFormFlexWrapper">
    <!-- @slot Content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomFormFlexWrapper",
  release: "2.0.0",
  lastUpdated: "2.3.6",
}
</script>

<style lang="scss" scoped>
.MomFormFlexWrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-bottom: 0 !important;

  &:last-child {
    margin-bottom: rem(-8) !important;
  }

  > * {
    @include inline-margin(rem(24));
    margin-bottom: rem(8) !important;
  }
}
</style>
