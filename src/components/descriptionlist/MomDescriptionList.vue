<template>
  <div
    v-if="items.length > 0"
    :class="[
      'MomDescriptionList',
      variant && `MomDescriptionList--variant-${variant}`,
      divider && 'MomDescriptionList--has-divider',
    ]"
  >
    <MomDescriptionItem
      class="MomDescriptionList__Item"
      v-for="(item, i) in items"
      :key="i"
      :term="item.term || ''"
      :details="item.details || ''"
      :variant="variant"
      :tooltip="item.tooltip"
      :termWidth="!variant || variant === 'horizontal' ? termWidth : 'm'"
      :boldText="item.boldText"
      :topBorder="item.topBorder"
      :bottomBorder="variant != 'table' && i !== items.length - 1 ? divider : false"
    />
  </div>
</template>

<script>
import MomDescriptionItem from "@/components/descriptionlist/MomDescriptionItem.vue"

export default {
  name: "MomDescriptionList",
  release: "2.0.21",
  lastUpdated: "2.3.6",
  components: {
    MomDescriptionItem,
  },
  props: {
    /**
     * Description items <br />
     * `{ term, details, boldText, topBorder }`
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * Variant
     */
    variant: {
      type: String,
      validator: val => ["vertical", "horizontal", "table"].includes(val),
    },

    /**
     * Term width
     */
    termWidth: {
      type: String,
      default: "m",
      validator: val => ["s", "m", "l"].includes(val),
    },

    /**
     * Divider
     */
    divider: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomDescriptionList {
  @include stack-margin(rem(24));

  &--variant-horizontal,
  &--variant-table {
    .MomDescriptionList__Item {
      @include stack-margin(rem(8));
    }
  }

  @media #{$media-query-tablet}, print {
    .MomDescriptionList__Item {
      @include stack-margin(rem(8));
    }

    &--variant-vertical {
      .MomDescriptionList__Item {
        @include stack-margin(rem(24));
      }
    }
  }
}
</style>
