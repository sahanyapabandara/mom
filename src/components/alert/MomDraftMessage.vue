<template>
  <portal to="draft">
    <MomBanner
      class="MomDraftMessage"
      :type="type"
      size="m"
      :timeout="timeout"
      :show-undo-button="type === 'delete'"
      show-close-button
      @close="onClose"
      @undo="onUndo"
    >
      <!-- @slot Content -->
      <slot></slot>
    </MomBanner>
  </portal>
</template>

<script>
import MomBanner from "@/components/alert/MomBanner.vue"

export default {
  name: "MomDraftMessage",
  release: "2.2.18",
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
      default: "delete",
      validator: val => ["delete", "undo"].includes(val),
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

    onUndo(e) {
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
.MomDraftMessage {
  @include stack-margin(rem(12));
  z-index: $z-index-notification;
}
</style>
