<template>
  <component
    :is="type === 'link' ? 'a' : 'button'"
    :type="type !== 'link' && type"
    :href="type === 'link' && !disabled && href"
    :target="type === 'link' && target"
    :rel="type === 'link' && rel"
    :disabled="type !== 'link' && disabled"
    :class="[
      'MomButton',
      `MomButton--variant-${variant}`,
      `MomButton--size-${size}`,
      !disabled && status && `MomButton--status-${status}`,
      disabled && 'MomButton--is-disabled',
      icon && hideText && 'MomButton--hide-text',
    ]"
    @click="onClick"
  >
    <MomIcon
      v-if="icon && iconPosition === 'left'"
      :class="['MomButton__Icon', !hideText && 'MomButton__Icon--left']"
      :icon="icon"
      :size="size"
    />

    <span :class="['MomButton__Text', size == 's' ? 'mom-p-s' : 'mom-p']">
      <!-- @slot Button text -->
      <slot><span v-html="$html(text)" /></slot>
    </span>

    <MomIcon
      v-if="icon && iconPosition === 'right'"
      :class="['MomButton__Icon', !hideText && 'MomButton__Icon--right']"
      :icon="icon"
      :size="size"
    />
  </component>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomButton",
  release: "2.0.0",
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
    },

    /**
     * Variant
     */
    variant: {
      type: String,
      default: "primary",
      validator: val => ["primary", "secondary"].includes(val),
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "m",
      validator: val => ["s", "m"].includes(val),
    },

    /**
     * Icon (see `Icon`)
     */
    icon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Icon position
     */
    iconPosition: {
      type: String,
      default: "left",
      validator: val => ["left", "right"].includes(val),
    },

    /**
     * Hide button text
     */
    hideText: {
      type: Boolean,
      default: false,
    },

    /**
     * Status
     */
    status: {
      type: String,
      validator: val => ["success", "error", "warning"].includes(val),
    },

    /**
     * Type
     */
    type: {
      type: String,
      default: "button",
      validator: val => ["button", "submit", "reset", "link"].includes(val),
    },

    /**
     * Link `href`
     */
    href: {
      type: String,
      default: "javascript:void(0);",
    },

    /**
     * Link `target`
     */
    target: {
      type: String,
      validator: val => ["_self", "_blank", "_parent", "_top"].includes(val),
    },

    /**
     * Link `rel`
     */
    rel: {
      type: String,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    onClick(e) {
      if (!this.disabled) {
        /**
         * When the button is clicked
         * @event click
         * @param {object} e
         */
        this.$emit("click", e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$primary: $color-orange-30;
$primary-active: $color-orange-40;
$secondary: $color-orange-90;
$secondary-active: $color-orange-100;
$success: $color-green-80;
$success-active: $color-green-90;
$error: $color-red-80;
$error-active: $color-red-90;
$warning: $color-orange-90;
$warning-active: $color-orange-100;
$primary-disabled: $color-grey-30;
$secondary-disabled: $color-grey-50;

.MomButton {
  width: 100%;
  display: inline-flex;
  vertical-align: bottom;
  justify-content: center;
  border-radius: $border-radius-corner-l;
  transition-property: box-shadow, transform;
  transition-duration: $transition-duration-s;
  transition-timing-function: $transition-timing-function-ease;
  user-select: none;

  &:hover {
    transform: translateY(rem(-1));
    box-shadow: $box-shadow-m;
  }

  &:active {
    transform: none;
    box-shadow: none;
    transition: none;
  }

  &--is-disabled {
    box-shadow: none;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  &--variant-primary {
    background-color: $primary;
    color: $color-cool-grey-100;
    border: rem(1) solid $primary;

    &:hover,
    &:active {
      background-color: $primary-active;
      border-color: $primary-active;
    }

    &.MomButton--status-success {
      background-color: $success;
      color: $color-white;
      border-color: $success;

      &:hover,
      &:active {
        background-color: $success-active;
        border-color: $success-active;
      }
    }

    &.MomButton--status-error {
      background-color: $error;
      color: $color-white;
      border-color: $error;

      &:hover,
      &:active {
        background-color: $error-active;
        border-color: $error-active;
      }
    }

    &.MomButton--status-warning {
      background-color: $warning;
      color: $color-white;
      border-color: $warning;

      &:hover,
      &:active {
        background-color: $warning-active;
        border-color: $warning-active;
      }
    }

    &.MomButton--is-disabled {
      background-color: $primary-disabled;
      color: $color-white;
      border-color: $primary-disabled;
    }
  }

  &--variant-secondary {
    background-color: $color-white;
    color: $secondary;
    border: rem(1) solid $secondary;

    &:hover,
    &:active {
      color: $secondary-active;
      border-color: $secondary-active;
    }

    &.MomButton--status-success {
      color: $success;
      border-color: $success;

      &:hover,
      &:active {
        color: $success-active;
        border-color: $success-active;
      }
    }

    &.MomButton--status-error {
      color: $error;
      border-color: $error;

      &:hover,
      &:active {
        color: $error-active;
        border-color: $error-active;
      }
    }

    &.MomButton--status-warning {
      color: $warning;
      border-color: $warning;

      &:hover,
      &:active {
        color: $warning-active;
        border-color: $warning-active;
      }
    }

    &.MomButton--is-disabled {
      color: $secondary-disabled;
      border-color: $secondary-disabled;
    }
  }

  &--size-m {
    padding: rem(7) rem(23);
  }

  &--size-s {
    padding: rem(3) rem(7);
  }

  &--hide-text {
    &.MomButton--size-m {
      padding: rem(7);
    }

    &.MomButton--size-s {
      padding: rem(3);
    }
  }

  @media #{$media-query-tablet} {
    width: auto;
  }

  @media print {
    display: none;
  }
}

.MomButton__Icon {
  &--left {
    .MomButton--size-m & {
      margin-right: rem(8);
    }

    .MomButton--size-s & {
      margin-right: rem(4);
    }
  }

  &--right {
    .MomButton--size-m & {
      margin-left: rem(8);
    }

    .MomButton--size-s & {
      margin-left: rem(4);
    }
  }
}

.MomButton__Text {
  margin-bottom: 0;
  font-weight: $font-weight-semibold;

  .MomButton--hide-text & {
    @include visually-hidden;
  }
}
</style>
