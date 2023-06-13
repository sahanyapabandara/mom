<template>
  <section
    :class="[
      'MomAccordionItem',
      isExpanded && 'MomAccordionItem--is-expanded',
      isDisabled && 'MomAccordionItem--is-disabled',
      $slots.summary && 'MomAccordionItem--has-summary',
    ]"
  >
    <button
      ref="toggleButton"
      class="MomAccordionItem__Header"
      type="button"
      :disabled="isDisabled"
      :aria-expanded="isExpanded"
      :aria-controls="idForContent"
      @click="onToggle"
      @keydown="onKeydown"
    >
      <MomIcon
        :icon="isExpanded ? 'chevron-down' : 'chevron-right'"
        class="MomAccordionItem__Arrow"
      />

      <h3 class="mom-h3 MomAccordionItem__Title" v-html="$html(title)" />

      <MomIcon
        v-if="status !== 'none'"
        :icon="statusIcon"
        :class="['MomAccordionItem__StatusIcon', `MomAccordionItem__StatusIcon--status-${status}`]"
      />
    </button>

    <div v-if="$slots.summary && !isExpanded" class="MomAccordionItem__Summary">
      <MomLink
        class="MomAccordionItem__EditLink"
        :text="$lang('momaccordion.edit')"
        :disabled="isDisabled"
        type="button"
        icon="edit"
        @click="onToggle"
        :data-qa="$qa('momaccordion.edit')"
      />

      <div class="contain">
        <!-- @slot Accordion summary -->
        <slot name="summary"></slot>
      </div>
    </div>

    <div class="MomAccordionItem__Content contain" :id="idForContent">
      <!-- @slot Accordion content -->
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../utils/eventBus"
import uniqueId from "@/utils/uniqueId"
import KEYCODES from "@/constants/keycodes"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"

const ICON_MAP = {
  complete: "success",
  incomplete: "dot",
}

export default {
  name: "MomAccordionItem",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomLink,
  },
  inject: ["$accordionDisabled"],
  props: {
    /**
     * Title
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Status
     */
    status: {
      type: String,
      default: "incomplete",
      validator: val => ["incomplete", "complete", "none"].includes(val),
    },

    /**
     * Order
     */
    order: {
      type: [Number, String],
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * `id` for content
     */
    idForContent: {
      type: String,
      default: () => {
        return uniqueId()
      },
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    statusIcon() {
      return ICON_MAP[this.status]
    },
    isDisabled() {
      return this.disabled || this.$accordionDisabled()
    },
    sortOrder() {
      return this.order && Number(this.order) && Number.isInteger(Number(this.order))
        ? Number(this.order)
        : 0
    },
  },
  mounted() {
    eventBus.$emit("updateAccordionItem", { target: this })
  },
  destroyed() {
    eventBus.$emit("updateAccordionItem", { target: this })
  },
  methods: {
    onToggle() {
      if (!this.isDisabled) {
        /**
         * When the accordion item is toggled
         *
         * @event toggle
         * @param {object} accordionItem
         */
        this.$emit("toggle", { target: this })
      }
    },

    onKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.SPACE:
        case KEYCODES.ENTER:
          e.preventDefault()
          this.onToggle()
          break
        case KEYCODES.UP:
        case KEYCODES.DOWN:
          e.preventDefault()
          /**
           * When the `UP`, `DOWN` key is pressed
           * @event keydown
           * @param {object} e
           */
          this.$emit("keydown", e)
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$background-collapsed: $color-blue-00;
$text-collapsed: $color-blue-70;
$background-expanded: $color-blue-05;
$text-expanded: $color-blue-80;

.MomAccordionItem {
  @include stack-margin(rem(4));

  &--is-disabled {
    opacity: $opacity-disabled;
    cursor: not-allowed;
  }

  @media #{$media-query-tablet} {
    &:first-child {
      border-top-left-radius: $border-radius-corner;
      border-top-right-radius: $border-radius-corner;
    }

    &:last-child {
      border-bottom-left-radius: $border-radius-corner;
      border-bottom-right-radius: $border-radius-corner;
    }
  }
}

.MomAccordionItem__Header {
  display: flex;
  width: 100%;
  padding: rem(12) rem(16);
  background-color: $background-collapsed;

  .MomAccordionItem--is-expanded & {
    background-color: $background-expanded;
  }

  @media #{$media-query-tablet} {
    .MomAccordionItem:first-child & {
      border-top-left-radius: $border-radius-corner;
      border-top-right-radius: $border-radius-corner;
    }

    .MomAccordionItem:last-child:not(.MomAccordionItem--is-expanded):not(.MomAccordionItem--has-summary)
      & {
      border-bottom-left-radius: $border-radius-corner;
      border-bottom-right-radius: $border-radius-corner;
    }
  }

  @media print {
    padding: rem(8) rem(12);
  }
}

.MomAccordionItem__Arrow {
  margin: rem(2) rem(4) rem(2) 0;
  color: $text-collapsed;

  .MomAccordionItem--is-expanded & {
    color: $text-expanded;
  }
}

.MomAccordionItem__Title {
  margin-bottom: 0;
  text-align: left;
  word-break: break-word;
  margin-right: auto;
  color: $text-collapsed;

  .MomAccordionItem--is-expanded & {
    color: $text-expanded;
  }
}

.MomAccordionItem__StatusIcon {
  margin: rem(2) 0 rem(2) rem(12);

  &--status-complete {
    color: $color-green-70;
  }

  &--status-incomplete {
    color: $color-cool-grey-40;

    .MomAccordionItem--is-expanded & {
      color: $color-blue-50;
    }
  }
}

.MomAccordionItem__Summary {
  padding: rem(12) rem(24) rem(24);

  @media #{$media-query-tablet} {
    padding: rem(12) rem(32) rem(24);

    .MomAccordionItem:last-child & {
      border-bottom-left-radius: $border-radius-corner;
      border-bottom-right-radius: $border-radius-corner;
    }
  }

  @media print {
    padding: rem(12);
  }
}

.MomAccordionItem__EditLink {
  display: flex;
  margin-left: auto;
  margin-bottom: rem(16);

  @media print {
    display: none;
  }
}

.MomAccordionItem__Content {
  position: relative;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  padding: 0 rem(24);
  transition-property: padding, opacity;
  transition-duration: $transition-duration-s;
  transition-timing-function: $transition-timing-function-ease;

  .MomAccordionItem--is-expanded & {
    height: auto;
    visibility: visible;
    overflow: visible;
    padding: rem(24);
  }

  @media #{$media-query-tablet} {
    padding: 0 rem(32);

    .MomAccordionItem--is-expanded & {
      padding: rem(24) rem(32);
    }

    .MomAccordionItem:last-child & {
      border-bottom-left-radius: $border-radius-corner;
      border-bottom-right-radius: $border-radius-corner;
    }
  }

  @media print {
    padding: 0 rem(12);

    .MomAccordionItem--is-expanded & {
      padding: rem(12);
    }
  }
}
</style>
