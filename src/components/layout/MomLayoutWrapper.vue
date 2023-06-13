<template>
  <div class="MomLayoutWrapper">
    <!-- @slot Content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomLayoutWrapper",
  release: "2.0.0",
  lastUpdated: "2.3.6",
}
</script>

<style lang="scss" scoped>
$padding: rem(24);
$padding-tablet: rem(80);

.MomLayoutWrapper {
  width: 100%;
  margin: 0 auto;
  padding: 0 $padding;
  max-width: $wrapper-l + $padding * 2;

  .MomPage__Main & {
    padding: 0;
    max-width: $wrapper-l;
  }

  @media #{$media-query-tablet} {
    padding: 0 $padding-tablet;
    max-width: $wrapper-l + $padding-tablet * 2;

    .MomPage__Main & {
      padding: 0 $padding-tablet;
      max-width: $wrapper-l + $padding-tablet * 2;
    }
  }

  @media print {
    padding: 0 !important;
    max-width: $wrapper-l !important;
  }
}
</style>
