<template>
  <span v-if="iconSvg" :class="['MomIcon', `MomIcon--size-${size}`]" v-html="iconSvg" />
</template>

<script>
import DOMPurify from "dompurify"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomIcon",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Icon (see `Docs`)
     */
    icon: {
      type: String,
      required: true,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "m",
      validator: val => ["s", "m", "l", "xl", "2xl"].includes(val),
    },
  },
  computed: {
    iconSvg() {
      return DOMPurify.sanitize(ICON_SET[this.icon]).replace("<svg", "<svg focusable='false'")
    },
  },
}
</script>

<style lang="scss" scoped>
.MomIcon {
  display: inline-flex;
  vertical-align: bottom;
  flex: none;

  &--size-s {
    width: rem(20);
    height: rem(20);
  }

  &--size-m {
    width: rem(24);
    height: rem(24);
  }

  &--size-l {
    width: rem(28);
    height: rem(28);
  }

  &--size-xl {
    width: rem(32);
    height: rem(32);

    @media #{$media-query-tablet} {
      width: rem(36);
      height: rem(36);
    }
  }

  &--size-2xl {
    width: rem(36);
    height: rem(36);

    @media #{$media-query-tablet} {
      width: rem(40);
      height: rem(40);
    }
  }

  &::v-deep > svg {
    width: 100%;
    height: 100%;
  }
}
</style>
