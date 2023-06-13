<template>
  <div class="MomModal__Wrapper">
    <component
      v-if="toggleType"
      :text="toggleText || $lang('mommodal.show')"
      :is="toggleType === 'button' ? 'MomButton' : 'MomLink'"
      type="button"
      :size="toggleSize"
      :icon="toggleIcon"
      :disabled="disabled"
      @click="onToggle"
    />

    <portal v-if="isShow" to="overlay">
      <transition name="mom-transition-fade">
        <div v-if="isShow" class="overlay" @click="onOverlayClick">
          <MomCard
            :title="title"
            ref="modal"
            role="dialog"
            :class="['MomModal', maxWidth && `MomModal--max-width-${maxWidth}`]"
            :aria-modal="isShow"
            tabindex="-1"
          >
            <button
              v-if="showCloseButton"
              class="MomModal__CloseButton"
              aria-label="Close"
              @click="onClose"
            >
              <MomIcon icon="close" />
            </button>

            <!-- @slot Content -->
            <slot></slot>

            <MomHorizontalLine v-if="$slots.footer" is-full-width is-last-line />

            <!-- @slot Footer -->
            <slot name="footer"></slot>
          </MomCard>
        </div>
      </transition>
    </portal>
  </div>
</template>

<script>
import KEYCODES from "@/constants/keycodes"
import MomCard from "@/components/card/MomCard.vue"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomLink from "@/components/link/MomLink.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomModal",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomCard,
    MomHorizontalLine,
    MomIcon,
    MomButton,
    MomLink,
  },
  props: {
    /**
     * Toggle type
     */
    toggleType: {
      type: String,
      validator: val => ["button", "link"].includes(val),
    },

    /**
     * Toggle text
     */
    toggleText: {
      type: String,
    },

    /**
     * Toggle size
     */
    toggleSize: {
      type: String,
      default: "m",
      validator: val => ["s", "m"].includes(val),
    },

    /**
     * Toggle icon (see `Icon`)
     */
    toggleIcon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Disabled toggle
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Modal title
     */
    title: {
      type: String,
    },

    /**
     * Max width
     */
    maxWidth: {
      type: String,
      validator: val => ["none"].includes(val),
    },

    /**
     * Show modal
     */
    showModal: {
      type: Boolean,
      default: false,
    },

    /**
     * Show close button
     */
    showCloseButton: {
      type: Boolean,
      default: true,
    },

    /**
     * Close modal when click on overlay
     */
    closeOnOverlayClick: {
      type: Boolean,
      default: true,
    },

    /**
     * Close modal when esc is pressed
     */
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isShow: this.showModal,
    }
  },
  watch: {
    showModal() {
      this.isShow = this.showModal
      this.updateModalState()
    },
  },
  mounted() {
    this.updateModalState()
  },
  methods: {
    /**
     * To close modal
     *
     * @public
     */
    closeModal() {
      this.isShow = false
      this.updateModalState()
    },

    updateModalState() {
      this.$nextTick(() => {
        if (this.isShow) {
          document.addEventListener("keydown", this.onKeyDown)
          this.$refs.modal.$el.focus()
          document.body.style.overflow = "hidden"
        } else {
          document.removeEventListener("keydown", this.onKeyDown)
          document.body.style.overflow = ""
        }
      })
    },

    onToggle(e) {
      this.isShow = true
      this.updateModalState()
      /**
       * When the modal is opened
       * @event openModal
       * @param {object} e
       */
      this.$emit("openModal", e)
    },

    onClose(e) {
      e.stopPropagation()
      this.closeModal()
      /**
       * When the modal is closed
       * @event closeModal
       * @param {object} e
       */
      this.$emit("closeModal", e)
    },

    onKeyDown(e) {
      const key = e.keyCode || e.which
      if (this.closeOnEsc && key === KEYCODES.ESC) {
        this.onClose(e)
      }
    },

    onOverlayClick(e) {
      if (this.closeOnOverlayClick && !this.$refs.modal.$el.contains(e.target)) {
        this.onClose(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.MomModal__Wrapper {
  display: flex;
}

.MomModal {
  position: relative;
  width: auto;
  min-width: rem(300);
  max-width: rem(600);
  max-height: calc(100vh - #{rem(32)});
  overflow-y: auto;
  box-shadow: $box-shadow-xl;

  &--max-width-none {
    max-width: none;
  }

  @media print {
    box-shadow: none;
  }
}

.MomModal__CloseButton {
  position: absolute;
  top: rem(8);
  right: rem(8);

  @media print {
    display: none;
  }
}
</style>
