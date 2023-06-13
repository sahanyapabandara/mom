<template>
  <div
    v-if="isShow"
    :class="[
      'MomBanner',
      `MomBanner--size-${size}`,
      `MomBanner--type-${type}`,
      variant && `MomBanner--variant-${variant}`,
    ]"
  >
    <MomIcon :icon="type" :size="variant === 'page-banner' ? 'l' : 'm'" class="MomBanner__Icon" />

    <div class="MomBanner__Content contain">
      <h3 v-if="title && variant === 'page-banner'" class="mom-h3" v-html="$html(title)" />

      <h4 v-else-if="title" class="mom-h4" v-html="$html(title)" />

      <!-- @slot Content -->
      <slot></slot>
    </div>

    <MomLink
      v-if="showUndoButton"
      class="MomBanner__UndoButton"
      type="button"
      text="Undo"
      darkMode
      @click="onUndo"
    />

    <button
      v-if="showCloseButton"
      class="MomBanner__CloseButton"
      type="button"
      aria-label="Close"
      @click="onClose"
    >
      <MomIcon icon="close" />
    </button>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomBanner",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomLink,
  },
  props: {
    /**
     * Type
     * @values info, error, warning, success
     */
    type: {
      type: String,
      default: "info",
      validator: val =>
        ["info", "error", "warning", "success", "internet-lost", "delete", "undo"].includes(val),
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "xl",
      validator: val => ["m", "l", "xl", "full"].includes(val),
    },

    /**
     * Title
     */
    title: {
      type: String,
    },

    /**
     * Variant
     */
    variant: {
      type: String,
      validator: val => ["page-banner"].includes(val),
    },

    /**
     * Timeout (seconds)
     */
    timeout: {
      type: [Number, String],
    },

    /**
     * Show close button
     * @ignore
     */
    showCloseButton: {
      type: Boolean,
      default: false,
    },

    /**
     * Show undo button
     * @ignore
     */
    showUndoButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: true,
      timer: null,
    }
  },
  computed: {
    timeoutSeconds() {
      return this.timeout && Number(this.timeout) && Number(this.timeout) > 0
        ? Number(this.timeout)
        : 0
    },
  },
  watch: {
    timeout() {
      clearTimeout(this.timer)
      this.isShow = true
      this.setTimer()
    },
  },
  mounted() {
    this.setTimer()
  },
  methods: {
    setTimer() {
      if (this.timeoutSeconds > 0) {
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.isShow = false
          }, this.timeoutSeconds * 1000)
        })
      }
    },

    onClose(e) {
      this.isShow = false
      /**
       * When the close button is clicked
       *
       * @event close
       * @param {object} e
       */
      this.$emit("close", e)
    },

    onUndo(e) {
      this.isShow = false
      /**
       * When the undo button is clicked
       *
       * @event undo
       * @param {object} e
       */
      this.$emit("undo", e)
    },
  },
}
</script>

<style lang="scss" scoped>
$info-color: $color-blue-60;
$info-background: $color-blue-00;
$success-color: $color-green-80;
$success-background: $color-green-00;
$error-color: $color-red-80;
$error-background: $color-red-00;
$warning-color: $color-orange-80;
$warning-background: $color-orange-05;
$draft-color: $color-white;
$draft-background: $color-cool-grey-80;

.MomBanner {
  display: flex;
  align-items: flex-start;
  padding: rem(11);
  border-width: rem(1);
  border-style: solid;
  border-radius: $border-radius-corner-l;
  max-width: 100%;
  @include stack-margin(rem(24));

  @each $i in $banner_sizes {
    &--size-#{$i} {
      width: component-width($i);
    }
  }

  &--variant-page-banner {
    padding: rem(23);
  }

  &--type-info {
    border-color: $info-color;
    background-color: $info-background;
  }

  &--type-success {
    border-color: $success-color;
    background-color: $success-background;
  }

  &--type-error,
  &--type-internet-lost {
    border-color: $error-color;
    background-color: $error-background;
  }

  &--type-warning {
    border-color: $warning-color;
    background-color: $warning-background;
  }

  &--type-delete,
  &--type-undo {
    border-color: $draft-background;
    background-color: $draft-background;
    color: $draft-color;
  }

  @media print {
    background-color: $color-white;
  }
}

.MomBanner__Icon {
  margin-right: rem(8);

  .MomBanner--type-info & {
    color: $info-color;
  }

  .MomBanner--type-success & {
    color: $success-color;
  }

  .MomBanner--type-error &,
  .MomBanner--type-internet-lost & {
    color: $error-color;
  }

  .MomBanner--type-warning & {
    color: $warning-color;
  }
}

.MomBanner__Content {
  margin-right: auto;
}

.MomBanner__UndoButton,
.MomBanner__CloseButton {
  margin-left: rem(8);
}
</style>
