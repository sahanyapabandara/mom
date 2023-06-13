<template>
  <div
    :class="[
      'MomInputAutosuggest',
      `MomInputAutosuggest--size-${size}`,
      inputState && `MomInputAutosuggest--input-state-${inputState}`,
      isMenuOpen && 'MomInputAutosuggest--is-menu-open',
    ]"
    aria-haspopup="true"
    :aria-expanded="isMenuOpen"
    :aria-label="placeholder"
    role="combobox"
  >
    <MomInputText
      ref="text"
      v-model="textValue"
      class="MomInputAutosuggest__TextInput"
      :placeholder="placeholder || (!hideIcon ? $lang('mominputautosuggest.search') : '')"
      size="full"
      :name="name"
      :idForInput="idForInput"
      :inputState="inputState"
      :maxlength="maxlengthInt"
      @click="onClick"
      @keydown="onKeydown"
      @input="onTextInput"
    />

    <button
      v-if="!hideIcon"
      class="MomInputAutosuggest__Icon"
      :disabled="inputState === 'disabled'"
      v-on="{ click: !textValue ? onClick : onClear }"
      @keydown.tab="onBlur"
    >
      <MomIcon :icon="!textValue ? 'search' : 'close'" />
    </button>

    <MomInputDropdownList
      v-if="isMenuOpen"
      ref="dropdown"
      v-model="selectedValue"
      class="MomInputAutosuggest__Dropdown"
      :options="options"
      :useCategory="useCategory"
      :allowFreeText="allowFreeText"
      :filterText="filterText"
      :filterType="filterType"
      :maxOptions="maxOptionsInt"
      :isLoading="isLoading"
      @input="onDropdownInput"
      @freetext="onFreeTextInput"
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
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import MomInputDropdownList from "@/components/input/selectfield/_MomInputDropdownList.vue"

export default {
  name: "MomInputAutosuggest",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, inputSizes, inputStates],
  components: { MomIcon, MomInputText, MomInputDropdownList },
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
     * Allow free text
     */
    allowFreeText: {
      type: [Boolean, String],
      default: false,
      validator: val => {
        return typeof val === "boolean" || ["always"].includes(val)
      },
    },

    /**
     * Max characters
     */
    maxlength: {
      type: [String, Number],
    },

    /**
     * Hide icon
     */
    hideIcon: {
      type: Boolean,
      default: false,
    },

    /**
     * Filter type
     */
    filterType: {
      type: String,
      validator: val => ["label"].includes(val),
    },

    /**
     * Min filter length
     */
    filterLength: {
      type: [String, Number],
      default: 0,
    },

    /**
     * Max options
     */
    maxOptions: {
      type: [String, Number],
      default: 0,
    },

    /**
     * Loading state
     */
    isLoading: {
      type: Boolean,
      default: false,
    },

    /**
     * Input value
     */
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      textValue: "",
      selectedValue: "",
      selectedOption: null,
      filterText: "",
      freeText: "",
    }
  },
  computed: {
    filterLengthInt() {
      return this.filterLength &&
        Number(this.filterLength) &&
        Number.isInteger(Number(this.filterLength)) &&
        Number(this.filterLength) > 0
        ? Number(this.filterLength)
        : 0
    },
    maxOptionsInt() {
      return this.maxOptions &&
        Number(this.maxOptions) &&
        Number.isInteger(Number(this.maxOptions)) &&
        Number(this.maxOptions) > 0
        ? Number(this.maxOptions)
        : 0
    },
    maxlengthInt() {
      return this.maxlength &&
        Number(this.maxlength) &&
        Number.isInteger(Number(this.maxlength)) &&
        Number(this.maxlength) > 0
        ? Number(this.maxlength)
        : 0
    },
    allOptions() {
      if (this.useCategory) {
        let allOptions = []
        this.options.forEach(category => (allOptions = allOptions.concat(category.options)))
        return allOptions
      } else {
        return this.options
      }
    },
  },
  watch: {
    value() {
      if (this.value) {
        if (this.value.isFreeTextOption) {
          this.selectedOption = null
          this.freeText = this.value.value
          this.textValue = this.freeText
          this.filterText = this.freeText
        } else if (this.value.value) {
          this.freeText = ""
          this.selectedValue = this.value.value
          this.textValue = this.value.label

          this.selectedOption = this.allOptions.find(child => child.value === this.selectedValue)
          if (this.selectedOption) {
            this.textValue = this.selectedOption.label
          } else {
            this.selectedOption = {
              label: this.value.label,
              value: this.value.value,
            }
          }
          this.filterText = ""
        } else {
          this.clearSelection()
        }
      } else {
        this.clearSelection()
      }
    },
  },
  mounted() {
    if (this.value) {
      if (this.value.isFreeTextOption) {
        this.freeText = this.value.value
        this.textValue = this.freeText
        this.filterText = this.freeText
      } else if (this.value.value) {
        this.selectedValue = this.value.value
        this.textValue = this.value.label
        this.selectedOption = {
          label: this.value.label,
          value: this.value.value,
        }
      }
    }
  },
  methods: {
    eventHandler(e) {
      if (
        !this.$refs.text.$el.contains(e.target) &&
        !(this.$refs.dropdown && this.$refs.dropdown.$el.contains(e.target))
      ) {
        this.resetSelection()
        this.closeDropdown()
      }
    },

    showDropdown() {
      this.isMenuOpen = true
      this.initPopper()
      /**
       * When the dropdown is open
       *
       * @event showDropdown
       * @param {string} filterText
       */
      this.$emit("showDropdown", this.filterText)
      document.addEventListener("click", this.eventHandler, true)
      document.addEventListener("touchstart", this.eventHandler, true)
    },

    closeDropdown() {
      this.isMenuOpen = false
      document.removeEventListener("click", this.eventHandler, true)
      document.removeEventListener("touchstart", this.eventHandler, true)
    },

    resetSelection() {
      if (this.selectedOption) {
        this.textValue = this.selectedOption.label
      } else if (this.freeText) {
        this.textValue = this.freeText
        this.filterText = this.freeText
      } else {
        this.textValue = ""
        this.filterText = ""
      }
    },

    clearSelection() {
      this.textValue = ""
      this.selectedValue = null
      this.selectedOption = null
      this.filterText = ""
      this.freeText = ""
    },

    onClick() {
      if (!this.isMenuOpen && this.filterLengthInt === 0) {
        this.showDropdown()
      }
    },

    onKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.ESC:
          e.preventDefault()
          if (this.isMenuOpen) {
            this.resetSelection()
            this.closeDropdown()
          }
          break
        case KEYCODES.ENTER:
          e.preventDefault()
          if (!this.isMenuOpen && this.filterLengthInt === 0) {
            this.showDropdown()
          } else if (this.isMenuOpen && this.$refs.dropdown.highlightedOptionIndex !== -1) {
            this.$refs.dropdown.onKeydown(e)
          }
          break
        case KEYCODES.DOWN:
        case KEYCODES.UP:
          e.preventDefault()
          if (!this.isMenuOpen && this.filterLengthInt === 0) {
            this.showDropdown()
          } else if (this.isMenuOpen && this.$refs.dropdown.itemCount > 0) {
            this.$refs.dropdown.onKeydown(e)
          }
          break
      }
    },

    onTextInput(e) {
      if (!this.selectedOption || this.selectedOption.label !== this.textValue) {
        if (this.filterText.trim() !== e) {
          this.filterText = e
          /**
           * When the filter text is updated
           *
           * @event updateFilterText
           * @param {string} filterText
           */
          this.$emit("updateFilterText", this.filterText)
        }

        if (
          this.freeText !== this.textValue ||
          (this.freeText === "" && this.textValue === "" && this.selectedValue)
        ) {
          if (!this.isMenuOpen && this.filterText.length >= this.filterLengthInt) {
            this.showDropdown()
          }
          if (this.isMenuOpen && this.filterText.length < this.filterLengthInt) {
            this.closeDropdown()
          }
        }

        if (this.filterText.length < this.filterLengthInt) {
          document.addEventListener("click", this.eventHandler, true)
          document.addEventListener("touchstart", this.eventHandler, true)
        }
      }
    },

    onDropdownInput() {
      this.selectedOption = this.allOptions.find(child => child.value === this.selectedValue)

      this.textValue = this.selectedOption ? this.selectedOption.label : ""
      this.closeDropdown()
      this.filterText = ""
      this.freeText = ""

      /**
       * When an option is selected
       *
       * @event input
       * @param {object} option
       */
      this.$emit("input", this.selectedOption)
    },

    onFreeTextInput(e) {
      this.textValue = e
      this.freeText = e
      this.selectedValue = ""
      this.selectedOption = null
      this.closeDropdown()

      this.$emit("input", { value: e, isFreeTextOption: true })
    },

    onDropdownClose() {
      this.textValue = this.selectedOption.label
      this.closeDropdown()
    },

    onClear() {
      this.clearSelection()
      this.closeDropdown()
      this.$refs.text.$refs.input.focus()
      this.$emit("input", null)
    },

    onBlur() {
      if (this.isMenuOpen) {
        this.resetSelection()
        this.closeDropdown()
      }
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
.MomInputAutosuggest {
  @include font-size(m);
  @include line-height(m);
  position: relative;
  width: 100%;
  min-width: rem(64);
  max-width: 100%;

  @each $i in $input-sizes {
    &--size-#{$i} {
      width: component-width($i);
    }
  }
}

.MomInputAutosuggest__Icon {
  position: absolute;
  top: rem(1);
  bottom: rem(1);
  right: rem(1);
  padding: rem(7) rem(7) rem(7) rem(8);
  color: $placeholder-text;

  .MomInputAutosuggest--input-state-disabled & {
    color: $placeholder-disabled;
  }
}

.MomInputAutosuggest__Dropdown {
  max-width: 100%;
  z-index: $z-index-dropdown;
}
</style>
