<template>
  <portal to="notification">
    <MomBanner
      class="MomNotification"
      :type="type"
      :size="size"
      :title="title"
      :timeout="timeout"
      show-close-button
      @close="onClose"
    >
      <!-- @slot Content -->
      <slot></slot>
    </MomBanner>
  </portal>
</template>

<script>
import MomBanner from "@/components/alert/MomBanner.vue"

export default {
  name: "MomNotification",
  release: "2.1.44",
  lastUpdated: "2.3.6",
  components: {
    MomBanner,
  },
  props: {
    /**
     * Type
     */
    type: {
      type: String,
      default: "info",
      validator: val => ["info", "error", "warning", "success", "internet-lost"].includes(val),
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "m",
      validator: val => ["m", "l"].includes(val),
    },

    /**
     * Title
     */
    title: {
      type: String,
    },

    /**
     * Timeout (seconds)
     */
    timeout: {
      type: [Number, String],
      default: 10,
    },
  },
  methods: {
    onClose(e) {
      /**
       * When the close button is clicked
       *
       * @event close
       * @param {object} e
       */
      this.$emit("close", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomNotification {
  margin: auto;
  @include stack-margin(rem(12));
  box-shadow: $box-shadow-m;
  z-index: $z-index-notification;
}
</style>
