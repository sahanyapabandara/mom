<template>
  <div :class="['MomSpinner', `MomSpinner--size-${size}`]">
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="50%" x2="50%" y2="50%" :id="idForGradientDef">
          <stop stop-color="#5AAAFA" stop-opacity="0" offset="0%" />
          <stop stop-color="#5AAAFA" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M1 10c0-4.9 4-9 9-9s9 4.1 9 9-4 9-9 9"
        :stroke="`url(#${idForGradientDef})`"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script>
import uniqueId from "@/utils/uniqueId"

export default {
  name: "MomSpinner",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
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
    idForGradientDef() {
      return uniqueId()
    },
  },
}
</script>

<style lang="scss" scoped>
.MomSpinner {
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

  svg {
    animation: spin 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;

    path {
      stroke-dasharray: 50;
      stroke-dashoffset: 100;
      will-change: stroke-dashoffset;
      animation: trace 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    }
  }
}
</style>
