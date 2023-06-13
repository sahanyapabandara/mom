<template>
  <div
    :class="[
      'MomInputSelect',
      `MomInputSelect--size-${size}`,
      inputState && `MomInputSelect--input-state-${inputState}`,
      isMenuOpen && 'MomInputSelect--is-menu-open',
    ]"
    aria-haspopup="true"
    :aria-expanded="isMenuOpen"
    :aria-label="placeholder"
    role="combobox"
    @click="onClick"
  >
    <button
      ref="toggleButton"
      :name="name"
      :id="idForInput"
      class="MomInputSelect__ToggleButton"
      :disabled="inputState === 'disabled'"
      @click="onClick"
      @keydown="onKeydown"
    >
      <p v-if="selectedValue" class="MomInputSelect__ToggleText" v-html="$html(selectedLabel)" />

      <p v-else class="MomInputSelect__Placeholder">{{ placeholder }}</p>

      <span class="MomInputSelect__ToggleIcon">
        <MomIcon :icon="!isMenuOpen ? 'chevron-down' : 'chevron-up'" />
      </span>
    </button>

    <MomInputDropdownList
      v-if="isMenuOpen"
      ref="dropdown"
      v-model="selectedValue"
      class="MomInputSelect__Dropdown"
      :options="options"
      :useCategory="useCategory"
      @input="onDropdownInput"
      @close="onDropdownClose"
    />
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core"
import inputId from "@/utils/inputId"
import inputSizes from "@/utils/inputSizes"
import inputStates from "@/utils/inputStates"
import KEYCODES from "@/constants/keycodes"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomInputDropdownList from "@/components/input/selectfield/_MomInputDropdownList.vue"

export default {
  name: "MomInputSelect",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, inputSizes, inputStates],
  components: { MomIcon, MomInputDropdownList },
  props: {
    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Use option category
     */
    useCategory: {
      type: Boolean,
      default: false,
    },

    /**
     * Options <br />
     * `{ title, options, label, value, description, disabled }`
     */
    options: {
      type: Array,
      required: true,
    },

    /**
     * Placeholder
     */
    placeholder: {
      type: String,
    },

    /**
     * Input value
     */
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isMenuOpen: false,
      selectedValue: this.value,
    }
  },
  computed: {
    allOptions() {
      let allOptions = []
      if (this.useCategory) {
        this.options.forEach(category => (allOptions = allOptions.concat(category.options)))
        return allOptions
      } else {
        return this.options
      }
    },
    selectedOption() {
      return this.selectedValue
        ? this.allOptions.find(child => child.value === this.selectedValue)
        : null
    },
    selectedLabel() {
      return this.selectedOption ? this.selectedOption.label : null
    },
  },
  watch: {
    value() {
      this.selectedValue = this.value
    },
  },
  methods: {
    eventHandler(e) {
      if (
        !this.$refs.toggleButton.contains(e.target) &&
        !(this.$refs.dropdown && this.$refs.dropdown.$el.contains(e.target))
      ) {
        this.closeDropdown()
      }
    },

    toggleDropdown() {
      if (!this.isMenuOpen) {
        this.isMenuOpen = true
        this.initPopper()
        document.addEventListener("click", this.eventHandler, true)
        document.addEventListener("touchstart", this.eventHandler, true)
      } else {
        this.closeDropdown()
      }
    },

    closeDropdown() {
      this.isMenuOpen = false
      document.removeEventListener("click", this.eventHandler, true)
      document.removeEventListener("touchstart", this.eventHandler, true)
    },

    onClick(e) {
      e.stopPropagation()
      this.toggleDropdown()
    },

    onKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.ESC:
          e.preventDefault()
          if (this.isMenuOpen) {
            this.isMenuOpen = false
          }
          break
        case KEYCODES.TAB:
          if (this.isMenuOpen) {
            this.isMenuOpen = false
          }
          break
        case KEYCODES.SPACE:
        case KEYCODES.ENTER:
          e.preventDefault()
          if (this.isMenuOpen && this.$refs.dropdown.highlightedOptionIndex !== -1) {
            this.$refs.dropdown.onKeydown(e)
          } else {
            this.toggleDropdown()
          }
          break
        case KEYCODES.DOWN:
        case KEYCODES.UP:
          e.preventDefault()
          if (this.isMenuOpen) {
            this.$refs.dropdown.onKeydown(e)
          } else {
            this.toggleDropdown()
          }
          break
      }
    },

    onDropdownInput(value) {
      this.closeDropdown()
      this.$refs.toggleButton.focus()
      /**
       * When the dropdown option is selected
       *
       * @event input
       * @param {string} value
       */
      this.$emit("input", value)
    },

    onDropdownClose() {
      this.isMenuOpen = false
      document.removeEventListener("click", this.eventHandler, true)
      document.removeEventListener("touchstart", this.eventHandler, true)
      this.$refs.toggleButton.focus()
    },

    initPopper() {
      this.$nextTick(() => {
        createPopper(this.$el, this.$refs.dropdown.$el, {
          placement: "bottom-start",
          strategy: "fixed",
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 24,
              },
            },
            {
              name: "flip",
              options: {
                padding: 24,
              },
            },
            {
              name: "setWidth",
              phase: "beforeWrite",
              enabled: true,
              fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width / 16}rem`
              },
            },
          ],
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.MomInputSelect {
  @include font-size(m);
  @include line-height(m);
  position: relative;
  display: flex;
  min-width: rem(64);
  max-width: 100%;
  border: rem(1) solid $color-cool-grey-20;
  border-radius: $border-radius-corner;

  @each $i in $input-sizes {
    &--size-#{$i} {
      width: component-width($i);
    }
  }

  &:focus-within {
    border-color: $input-border-focus;
  }

  &--input-state-disabled {
    border-color: $input-border-disabled !important;
    background-color: $input-bg-disabled !important;
  }

  &--input-state-error {
    border-color: $input-border-error !important;
  }

  &--input-state-warning {
    border-color: $input-border-warning !important;
  }
}

.MomInputSelect__ToggleButton {
  height: rem(38);
  width: 100%;
  padding: rem(7) rem(39) rem(7) rem(11);
  text-align: left;
  outline: none;

  .MomInputSelect--input-state-disabled & {
    cursor: not-allowed;
    color: $input-text-disabled;
  }
}

.MomInputSelect__Placeholder {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: $placeholder-text;

  .MomInputSelect--input-state-disabled & {
    color: $placeholder-disabled;
  }
}

.MomInputSelect__ToggleText {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.MomInputSelect__ToggleIcon {
  position: absolute;
  top: rem(0);
  bottom: rem(0);
  right: rem(0);
  padding: rem(7) rem(7) rem(7) rem(8);
  color: $placeholder-text;

  .MomInputSelect--input-state-disabled & {
    color: $placeholder-disabled;
  }
}

.MomInputSelect__Dropdown {
  max-width: 100%;
  z-index: $z-index-dropdown;
}
</style>
