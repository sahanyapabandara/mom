<template>
  <div :class="['MomStatus', `MomStatus--size-${size}`, color && `MomStatus--color-${color}`]">
    <MomIcon v-if="icon" class="MomStatus__Icon" :icon="icon" :size="size" />

    <span
      :class="['MomStatus__Text', uppercase && 'MomStatus__Text--uppercase']"
      v-html="$html(text)"
    />
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomStatus",
  release: "2.1.47",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Text
     */
    text: {
      type: String,
      required: true,
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "m",
      validator: val => ["s", "m", "l"].includes(val),
    },

    /**
     * Color
     */
    color: {
      type: String,
      validator: val => ["green", "red", "orange", "blue", "purple", "grey"].includes(val),
    },

    /**
     * Icon (see `Icon`)
     */
    icon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Uppercase
     */
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomStatus {
  display: flex;
}

.MomStatus__Icon {
  margin-right: rem(4);

  .MomStatus--color-green & {
    color: $color-green-80;
  }

  .MomStatus--color-red & {
    color: $color-red-90;
  }

  .MomStatus--color-orange & {
    color: $color-orange-90;
  }

  .MomStatus--color-blue & {
    color: $color-blue-70;
  }

  .MomStatus--color-purple & {
    color: $color-purple-80;
  }

  .MomStatus--color-grey & {
    color: $color-grey-70;
  }
}

.MomStatus__Text {
  font-weight: $font-weight-semibold;

  .MomStatus--size-s & {
    @include font-size(s);
    @include line-height(s);
  }

  .MomStatus--size-m & {
    @include font-size(m);
    @include line-height(m);
  }

  .MomStatus--size-l & {
    @include font-size(l);
    @include line-height(l);
  }

  &--uppercase {
    text-transform: uppercase;
  }

  .MomStatus--color-green & {
    color: $color-green-80;
  }

  .MomStatus--color-red & {
    color: $color-red-90;
  }

  .MomStatus--color-orange & {
    color: $color-orange-90;
  }

  .MomStatus--color-blue & {
    color: $color-blue-70;
  }

  .MomStatus--color-purple & {
    color: $color-purple-80;
  }

  .MomStatus--color-grey & {
    color: $color-grey-70;
  }
}
</style>
