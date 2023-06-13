<template>
  <div :class="['MomFormSubsection', `MomFormSubsection--size-${size}`]">
    <!-- @slot Content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomFormSubsection",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Form subsection size
     */
    size: {
      type: String,
      default: "xl",
      validator: val => ["xs", "xs1", "s", "m", "l", "xl", "full"].includes(val),
    },
  },
}
</script>

<style lang="scss" scoped>
.MomFormSubsection {
  @include stack-margin(rem(24));
  border-left: rem(2) solid $color-cool-grey-20;
  padding-left: rem(14);
  max-width: 100%;

  @each $i in $input-sizes {
    &--size-#{$i} {
      width: component-width($i);
    }
  }
}
</style>
