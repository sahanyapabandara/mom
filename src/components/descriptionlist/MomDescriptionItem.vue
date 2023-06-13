<template>
  <dl
    :class="[
      'MomDescriptionItem',
      variant && `MomDescriptionItem--variant-${variant}`,
      boldText && 'MomDescriptionItem--is-bold',
      topBorder && 'MomDescriptionItem--has-top-border',
      bottomBorder && 'MomDescriptionItem--has-bottom-border',
    ]"
  >
    <dt
      :class="[
        'MomDescriptionItem__Term',
        (!variant || variant === 'horizontal') && `MomDescriptionItem__Term--width-${termWidth}`,
      ]"
    >
      <span v-html="$html(term)" /><!--

      --><span v-if="tooltip || $slots.tooltip" class="MomDescriptionItem__Tooltip">
        <!-- @slot Tooltip -->
        <slot name="tooltip">
          <MomTooltip v-if="tooltip" :tooltipText="tooltip" />
        </slot>
      </span>
    </dt>

    <dd class="MomDescriptionItem__Details">
      <!-- @slot Details -->
      <slot>
        <p v-if="details" class="mom-p prewrap" v-html="$html(details)" />
      </slot>
    </dd>
  </dl>
</template>

<script>
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

export default {
  name: "MomDescriptionItem",
  release: "2.0.21",
  lastUpdated: "2.3.6",
  components: {
    MomTooltip,
  },
  props: {
    /**
     * Term
     */
    term: {
      type: String,
      required: true,
    },

    /**
     * Details
     */
    details: {
      type: String,
    },

    /**
     * Variant
     */
    variant: {
      type: String,
      validator: val => ["vertical", "horizontal", "table"].includes(val),
    },

    /**
     * Tooltip
     */
    tooltip: {
      type: String,
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
     * Bold text
     */
    boldText: {
      type: Boolean,
      default: false,
    },

    /**
     * Top border
     */
    topBorder: {
      type: Boolean,
      default: false,
    },

    /**
     * Bottom border
     */
    bottomBorder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
$term-width-s: rem(150);
$term-width-m: rem(200);
$term-width-l: rem(250);

.MomDescriptionItem {
  @include stack-margin(rem(24));

  &--variant-horizontal,
  &--variant-table {
    display: flex;
    justify-content: space-between;
  }

  &--has-top-border {
    border-top: rem(2) solid $color-cool-grey-20;
    padding-top: rem(8);
  }

  @media #{$media-query-tablet}, print {
    display: flex;

    &--variant-horizontal {
      justify-content: flex-start;
    }

    &--variant-vertical {
      display: block;
    }

    &--has-bottom-border {
      border-bottom: rem(1) solid $color-cool-grey-10;
      padding-bottom: rem(8);
    }
  }
}

.MomDescriptionItem__Term {
  @include font-size(s);
  @include line-height(s);
  color: $color-cool-grey-90;
  word-break: break-word;
  flex: none;

  &--width-s {
    width: $term-width-s;
  }

  &--width-m {
    width: $term-width-m;
  }

  &--width-l {
    width: $term-width-l;
  }

  .MomDescriptionItem--variant-horizontal &,
  .MomDescriptionItem--variant-table & {
    @include font-size(m);
    @include line-height(m);
    margin-right: rem(16);
  }

  .MomDescriptionItem--variant-vertical &,
  .MomDescriptionItem--variant-table & {
    flex: auto;
  }

  .MomDescriptionItem--is-bold & {
    font-weight: $font-weight-semibold !important;
  }

  @media #{$media-query-tablet}, print {
    @include font-size(m);
    @include line-height(m);
    margin-right: rem(32);

    .MomDescriptionItem--variant-horizontal &,
    .MomDescriptionItem--variant-table & {
      margin-right: rem(32);
    }

    .MomDescriptionItem--variant-vertical & {
      @include font-size(s);
      @include line-height(s);
      margin-right: 0;
    }
  }
}

.MomDescriptionItem__Tooltip {
  display: inline-flex;
  vertical-align: bottom;
  margin-left: rem(4);

  .MomDescriptionItem--variant-horizontal &,
  .MomDescriptionItem--variant-table & {
    margin-top: rem(2);
    margin-bottom: rem(2);
  }

  @media #{$media-query-tablet} {
    margin-top: rem(2);
    margin-bottom: rem(2);

    .MomDescriptionItem--variant-vertical & {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

.MomDescriptionItem__Details {
  word-break: break-word;

  .MomDescriptionItem--variant-horizontal & {
    font-weight: $font-weight-semibold;
    text-align: right;

    @media #{$media-query-tablet} {
      text-align: left;
    }
  }

  .MomDescriptionItem--variant-table & {
    font-weight: $font-weight-semibold;
    width: rem(120);
    text-align: right;
    flex: none;
  }

  .MomDescriptionItem--is-bold & {
    font-weight: $font-weight-semibold !important;
  }

  @media #{$media-query-tablet}, print {
    font-weight: $font-weight-semibold;

    .MomDescriptionItem--variant-vertical & {
      font-weight: $font-weight-regular;
    }
  }
}
</style>
