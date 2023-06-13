<template>
  <div :class="['MomGridContainer', gutterSize && `MomGridContainer--gutter-${gutterSize}`]">
    <!-- @slot Columns -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomGridContainer",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Gutter size
     */
    gutterSize: {
      type: String,
      default: "l",
      validator: val => ["s", "m", "l", "none"].includes(val),
    },
  },
}
</script>

<style lang="scss" scoped>
.MomGridContainer {
  display: flex;
  flex-wrap: wrap;
  margin-top: -$grid-column-margin / 2 !important;
  margin-bottom: -$grid-column-margin / 2 !important;

  &--gutter-s {
    margin-left: -$gutter-width-s / 2 !important;
    margin-right: -$gutter-width-s / 2 !important;
  }

  &--gutter-m {
    margin-left: -$gutter-width-m / 2 !important;
    margin-right: -$gutter-width-m / 2 !important;
  }

  &--gutter-l {
    margin-left: -$gutter-width-l / 2 !important;
    margin-right: -$gutter-width-l / 2 !important;
  }

  &--gutter-none {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
