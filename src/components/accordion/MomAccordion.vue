<template>
  <div :class="['MomAccordion', variant && `MomAccordion--variant-${variant}`]">
    <!-- @slot Accordion items -->
    <slot></slot>
  </div>
</template>

<script>
import { eventBus } from "../../utils/eventBus"
import orderBy from "lodash/orderBy"
import animateScrollTo from "animated-scroll-to"
import KEYCODES from "@/constants/keycodes"

export default {
  name: "MomAccordion",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  provide() {
    return {
      $accordionDisabled: () => this.disabled,
    }
  },
  props: {
    /**
     * Variant
     */
    variant: {
      type: String,
      validator: val => ["card"].includes(val),
    },

    /**
     * Opened child index
     */
    openChildIndex: {
      type: [Number, String],
      default: 0,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentChildIndex: 0,
      accordionItems: null,
    }
  },
  computed: {
    itemCount() {
      return this.accordionItems ? this.accordionItems.length : 0
    },
    openChildIndexInt() {
      return this.openChildIndex &&
        Number(this.openChildIndex) &&
        Number.isInteger(Number(this.openChildIndex)) &&
        Number(this.openChildIndex) < this.itemCount &&
        Number(this.openChildIndex) > 0
        ? Number(this.openChildIndex)
        : 0
    },
  },
  watch: {
    openChildIndex() {
      this.setOpenChild()
    },
  },
  mounted() {
    this.updateAccordionItem()
    eventBus.$on("updateAccordionItem", this.updateAccordionItem)
    this.setOpenChild()
  },
  methods: {
    /**
     * To collapse all accordion item
     *
     * @public
     */
    closeAll() {
      this.accordionItems.forEach(child => (child.isExpanded = false))
    },

    /**
     * To scroll to an accordion item
     *
     * @param {number}
     * @param {number}
     * @public
     */
    scrollToChild(childIndex, offset = 60) {
      if (Number.isInteger(childIndex) && childIndex < this.itemCount && childIndex >= 0) {
        setTimeout(() => {
          let scrollTop = this.accordionItems[childIndex].$el.offsetTop - offset
          animateScrollTo(scrollTop)
        }, 200)
      }
    },

    updateAccordionItem() {
      this.accordionItems = orderBy(this.$children, "sortOrder")
      this.accordionItems.forEach(child => {
        child.$off()
        child.$on("keydown", this.onChildKeydown)
        child.$on("toggle", this.onChildToggle)
      })
    },

    setOpenChild() {
      this.closeAll()
      if (this.itemCount > 0) {
        this.accordionItems[this.openChildIndexInt].isExpanded = true
      }
    },

    onChildToggle(e) {
      this.currentChildIndex = this.accordionItems.indexOf(e.target)
      if (!this.accordionItems[this.currentChildIndex].isExpanded) {
        this.closeAll()
        this.accordionItems[this.currentChildIndex].isExpanded = true
        this.scrollToChild(this.currentChildIndex)
      } else {
        this.accordionItems[this.currentChildIndex].isExpanded = false
      }
      /**
       * When any of the accordion item is toggled
       * @event change
       * @param {number} childIndex
       */
      this.$emit("change", this.currentChildIndex)
    },

    onChildKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.UP:
          do {
            if (this.currentChildIndex !== 0) {
              this.currentChildIndex--
            }
          } while (this.accordionItems[this.currentChildIndex].disabled)
          break
        case KEYCODES.DOWN:
          do {
            if (this.currentChildIndex !== this.itemCount - 1) {
              this.currentChildIndex++
            }
          } while (this.accordionItems[this.currentChildIndex].disabled)
          break
      }
      this.closeAll()
      this.accordionItems[this.currentChildIndex].isExpanded = true
      this.scrollToChild(this.currentChildIndex)
      this.accordionItems[this.currentChildIndex].$refs.toggleButton.focus()
      this.$emit("change", this.currentChildIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomAccordion {
  background-color: $color-white;
  @include stack-margin(rem(24));

  &--variant-card {
    box-shadow: $box-shadow-s;
  }

  @media #{$media-query-tablet} {
    border-radius: $border-radius-corner;
  }

  @media print {
    box-shadow: none;
  }
}
</style>
