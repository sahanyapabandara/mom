<template>
  <component
    :is="type"
    :for="type === 'label' && idForInput"
    :class="[
      size === 'm' ? 'mom-p' : 'mom-p-s',
      'MomFormLabel',
      `MomFormLabel--size-${size}`,
      showBullet && 'MomFormLabel--show-bullet',
    ]"
  >
    <!-- @slot Label text -->
    <slot><span v-html="$html(text)" /></slot
    ><!--
    --><span v-if="optional" class="MomFormLabel__OptionalText">(Optional)</span
    ><!--

      --><span v-if="tooltip || $slots.tooltip" class="MomFormLabel__Tooltip">
      <!-- @slot Tooltip -->
      <slot name="tooltip">
        <MomTooltip v-if="tooltip" :tooltipText="tooltip" :iconSize="size" />
      </slot>
    </span>
  </component>
</template>

<script>
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

export default {
  name: "MomFormLabel",
  release: "2.0.0",
  lastUpdated: "2.3.7",
  components: {
    MomTooltip,
  },
  props: {
    /**
     * Type
     */
    type: {
      type: String,
      default: "label",
      validator: val => ["label", "legend"].includes(val),
    },

    /**
     * Input id
     */
    idForInput: {
      type: String,
    },

    /**
     * Text
     */
    text: {
      type: String,
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "s",
      validator: val => ["s", "m"].includes(val),
    },

    /**
     * Tooltip
     */
    tooltip: {
      type: String,
    },

    /**
     * Optional
     */
    optional: {
      type: Boolean,
      default: false,
    },

    /**
     * Show bullet
     */
    showBullet: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomFormLabel {
  display: block;
  margin-bottom: 0;

  &--show-bullet,
  .MomFormGroup--show-bullet & {
    padding-left: rem(28);

    &:before {
      counter-increment: alpha;
      content: "(" counter(alpha, lower-alpha) ")";
      display: inline-flex;
      width: rem(24);
      margin-left: rem(-28);
      margin-right: rem(4);
    }
  }
}

.MomFormLabel__OptionalText {
  display: inline-flex;
  vertical-align: bottom;
  margin-left: rem(4);
  font-style: italic;
  color: $color-cool-grey-50;
}

.MomFormLabel__Tooltip {
  display: inline-flex;
  vertical-align: bottom;
  margin-left: rem(4);
}
</style>
