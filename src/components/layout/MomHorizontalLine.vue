<template>
  <div
    :class="[
      'MomHorizontalLine',
      isFullWidth && 'MomHorizontalLine--is-full-width',
      isLastLine && 'MomHorizontalLine--is-last-line',
    ]"
  />
</template>

<script>
export default {
  name: "MomHorizontalLine",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Full width line
     */
    isFullWidth: {
      type: Boolean,
      default: false,
    },

    /**
     * Last line in section
     */
    isLastLine: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomHorizontalLine {
  margin-top: rem(24);
  margin-bottom: rem(24);
  border-top: rem(1) solid $color-cool-grey-20;

  &--is-full-width {
    margin-left: rem(-24);
    margin-right: rem(-24);

    @media #{$media-query-tablet} {
      margin-left: rem(-32);
      margin-right: rem(-32);
    }
  }

  &--is-last-line {
    margin-top: rem(48);
  }
}
</style>
