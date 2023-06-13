<template>
  <div class="MomInputDropdownList" role="listbox" tabIndex="-1" @keydown="onKeydown">
    <MomSpinner v-if="isLoading" class="MomInputDropdownList__LoadingSpinner" size="s" />

    <template v-else-if="!isLoading && allOptions.length > 0">
      <template v-if="useCategory">
        <template v-for="category in displayOptions">
          <p
            :key="category.title"
            class="MomInputDropdownList__Category"
            v-html="$html(category.title)"
          />

          <div
            v-for="option in category.options"
            :key="getIndex(option)"
            :class="[
              'MomInputDropdownList__Option',
              option.disabled && 'MomInputDropdownList__Option--is-disabled',
              !option.disabled &&
                option.value != '' &&
                option.value === selectedValue &&
                'MomInputDropdownList__Option--is-selected',
              highlightedOptionIndex === getIndex(option) &&
                'MomInputDropdownList__Option--is-highlighted',
            ]"
            role="option"
            @click="onOptionClick($event, option, getIndex(option))"
          >
            <p class="MomInputDropdownList__OptionLabel" v-html="getMarkedText(option.label)" />

            <p
              v-if="option.description"
              class="MomInputDropdownList__OptionDescription"
              v-html="getMarkedText(option.description)"
            />
          </div>
        </template>
      </template>

      <template v-else>
        <div
          v-for="option in allOptions"
          :key="getIndex(option)"
          :class="[
            'MomInputDropdownList__Option',
            option.disabled && 'MomInputDropdownList__Option--is-disabled',
            !option.disabled &&
              option.value != '' &&
              option.value === selectedValue &&
              'MomInputDropdownList__Option--is-selected',
            highlightedOptionIndex === getIndex(option) &&
              'MomInputDropdownList__Option--is-highlighted',
          ]"
          role="option"
          @click="onOptionClick($event, option, getIndex(option))"
        >
          <p
            class="MomInputDropdownList__OptionLabel"
            v-html="$html(getMarkedText(option.label))"
          />

          <p
            v-if="option.description"
            class="MomInputDropdownList__OptionDescription"
            v-html="$html(getMarkedText(option.description))"
          />
        </div>
      </template>
    </template>

    <div
      v-else-if="!isLoading && allOptions.length === 0 && !hasFreeTextOption"
      :class="['MomInputDropdownList__Option', 'MomInputDropdownList__Option--no-options']"
      role="option"
      ref="noOptions"
    >
      <p class="MomInputDropdownList__OptionLabel">{{ $lang("mominputdropdownlist.nomatches") }}</p>
    </div>

    <div
      v-if="!isLoading && hasFreeTextOption"
      :class="[
        'MomInputDropdownList__Option',
        'MomInputDropdownList__Option--free-text',
        allOptions.length === 0 && 'MomInputDropdownList__Option--free-text-only',
        highlightedOptionIndex === allOptions.length &&
          'MomInputDropdownList__Option--is-highlighted',
      ]"
      role="option"
      @click="onFreeTextClick"
    >
      <p class="MomInputDropdownList__OptionLabel">
        <span v-if="allowFreeText !== 'always'">{{ $lang("mominputdropdownlist.nomatches") }}</span>
        <span>{{ $lang("mominputdropdownlist.use") }}</span>
        <span class="MomInputDropdownList__OptionFreeText">"{{ filterText }}"</span>
      </p>
    </div>
  </div>
</template>

<script>
import KEYCODES from "@/constants/keycodes"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

export default {
  name: "MomInputDropdownList",
  components: { MomSpinner },
  props: {
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
     * Allow free text
     */
    allowFreeText: {
      type: [Boolean, String],
      default: false,
      validator: val => ["always", true, false].includes(val),
    },

    /**
     * Filter text
     */
    filterText: {
      type: String,
    },

    /**
     * Filter type
     */
    filterType: {
      type: String,
      validator: val => ["label"].includes(val),
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
     * Selected `value`
     */
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedValue: this.value,
      highlightedOptionIndex: -1,
    }
  },
  computed: {
    maxOptionsInt() {
      return this.maxOptions &&
        Number(this.maxOptions) &&
        Number.isInteger(Number(this.maxOptions)) &&
        Number(this.maxOptions) > 0
        ? Number(this.maxOptions)
        : 0
    },
    displayOptions() {
      let displayOptions = []
      if (this.filterText) {
        if (this.useCategory) {
          this.options.forEach(category => {
            let categoryOptions = []

            if (this.filterType === "label") {
              categoryOptions = category.options.filter(option =>
                this.startFromFilterText(option.label)
              )
            } else {
              categoryOptions = category.options.filter(
                option =>
                  this.containFilterText(option.label) ||
                  this.containFilterText(option.description) ||
                  this.containFilterText(option.keywords)
              )
              categoryOptions = this.sortOptions(categoryOptions)
            }

            if (categoryOptions.length > 0) {
              displayOptions.push({
                title: category.title,
                options: this.sliceOptions(categoryOptions),
              })
            }
          })
        } else {
          if (this.filterType === "label") {
            displayOptions = this.options.filter(option => this.startFromFilterText(option.label))
          } else {
            displayOptions = this.options.filter(
              option =>
                this.containFilterText(option.label) ||
                this.containFilterText(option.description) ||
                this.containFilterText(option.keywords)
            )
            displayOptions = this.sortOptions(displayOptions)
          }
          displayOptions = this.sliceOptions(displayOptions)
        }
      } else {
        displayOptions = this.sliceOptions(this.options)
      }
      return displayOptions
    },
    allOptions() {
      if (this.useCategory) {
        let allOptions = []
        this.displayOptions.forEach(category => (allOptions = allOptions.concat(category.options)))
        return allOptions
      } else {
        return this.displayOptions
      }
    },
    hasFreeTextOption() {
      return this.allowFreeText === "always" && this.filterText.length > 0
        ? true
        : this.allowFreeText && this.filterText.length > 0
        ? this.allOptions.findIndex(
            option => option.label.toLowerCase() === this.filterText.toLowerCase()
          ) < 0
        : false
    },
    itemCount() {
      return this.hasFreeTextOption ? this.allOptions.length + 1 : this.allOptions.length
    },
  },
  watch: {
    itemCount() {
      this.highlightedOptionIndex = -1
    },
    allOptions() {
      this.highlightedOptionIndex = this.allOptions.findIndex(
        child => child.value === this.selectedValue
      )
      if (this.highlightedOptionIndex >= 0) {
        this.scrollToOption(this.highlightedOptionIndex)
      }
    },
  },
  mounted() {
    if (this.selectedValue) {
      this.highlightedOptionIndex = this.allOptions.findIndex(
        child => child.value === this.selectedValue
      )
      if (this.highlightedOptionIndex >= 0) {
        this.scrollToOption(this.highlightedOptionIndex)
      }
    }
  },
  methods: {
    containFilterText(str) {
      return str
        ? str.toString().toLowerCase().includes(this.filterText.toLowerCase().trim())
        : false
    },

    startFromFilterText(str) {
      return str
        ? str.toString().toLowerCase().startsWith(this.filterText.toLowerCase().trim())
        : false
    },

    sortOptions(options) {
      let exactMatch = []
      let fuzzyMatch = []
      options.forEach(option => {
        if (this.startFromFilterText(option.label)) {
          exactMatch.push(option)
        } else {
          fuzzyMatch.push(option)
        }
      })
      return [...exactMatch, ...fuzzyMatch]
    },

    sliceOptions(options) {
      return this.maxOptions > 0 ? options.slice(0, this.maxOptionsInt) : options
    },

    getIndex(option) {
      return this.allOptions.findIndex(e => e === option)
    },

    getMarkedText(str) {
      if (this.filterText && this.containFilterText(str)) {
        const startIndex = str.toLowerCase().indexOf(this.filterText.toLowerCase().trim())
        const endIndex = startIndex + this.filterText.trim().length
        return (
          str.slice(0, startIndex) +
          '<span class="MomInputDropdownList__MarkedText">' +
          str.slice(startIndex, endIndex) +
          "</span>" +
          str.slice(endIndex)
        )
      } else {
        return str
      }
    },

    onOptionClick(e, option, i) {
      e.stopPropagation()
      if (!option.disabled) {
        if (this.selectedValue === option.value) {
          /**
           * When the dropdown option is closed
           *
           * @event close
           * @param {string} selectedValue
           */
          this.$emit("close", this.selectedValue)
        } else {
          this.highlightedOptionIndex = i
          this.selectedValue = option.value
          /**
           * When the dropdown option is selected
           *
           * @event input
           * @param {string} selectedValue
           */
          this.$emit("input", this.selectedValue)
        }
      }
    },

    onFreeTextClick() {
      this.highlightedOptionIndex = -1
      this.selectedValue = ""
      /**
       * When the free text option is selected
       *
       * @event freetext
       * @param {string} filterText
       */
      this.$emit("freetext", this.filterText)
    },

    onKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.SPACE:
        case KEYCODES.ENTER:
          e.preventDefault()
          if (this.highlightedOptionIndex !== this.allOptions.length) {
            if (this.selectedValue === this.allOptions[this.highlightedOptionIndex].value) {
              this.$emit("close", this.selectedValue)
            } else {
              this.selectedValue = this.allOptions[this.highlightedOptionIndex].value
              this.$emit("input", this.selectedValue)
            }
          } else {
            this.highlightedOptionIndex = -1
            this.selectedValue = ""
            this.$emit("freetext", this.filterText)
          }
          break
        case KEYCODES.UP:
          e.preventDefault()
          if (this.itemCount > 0) {
            if (this.highlightedOptionIndex === -1 || this.highlightedOptionIndex === 0) {
              this.highlightedOptionIndex = this.itemCount - 1
            } else {
              this.highlightedOptionIndex--
            }

            if (this.highlightedOptionIndex !== this.allOptions.length) {
              while (this.allOptions[this.highlightedOptionIndex].disabled) {
                if (this.highlightedOptionIndex === 0) {
                  this.highlightedOptionIndex = this.itemCount - 1
                } else {
                  this.highlightedOptionIndex--
                }
              }
            }
            this.scrollToOption(this.highlightedOptionIndex)
          }
          break
        case KEYCODES.DOWN:
          e.preventDefault()
          if (this.itemCount > 0) {
            if (
              this.highlightedOptionIndex === -1 ||
              this.highlightedOptionIndex === this.itemCount - 1
            ) {
              this.highlightedOptionIndex = 0
            } else {
              this.highlightedOptionIndex++
            }

            if (this.highlightedOptionIndex !== this.allOptions.length) {
              while (this.allOptions[this.highlightedOptionIndex].disabled) {
                if (this.highlightedOptionIndex === this.itemCount - 1) {
                  this.highlightedOptionIndex = 0
                } else {
                  this.highlightedOptionIndex++
                }
              }
            }
            this.scrollToOption(this.highlightedOptionIndex)
          }
          break
      }
    },

    scrollToOption(index) {
      this.$nextTick(() => {
        const listboxScrollTop = this.$el.scrollTop
        const listboxHeight = this.$el.offsetHeight
        const option = this.$el.querySelectorAll(".MomInputDropdownList__Option")[index]
        const optionOffsetTop = option.offsetTop
        const optionHeight = option.offsetHeight

        if (optionOffsetTop + optionHeight > listboxScrollTop + listboxHeight) {
          this.$el.scrollTop += optionOffsetTop + optionHeight - (listboxScrollTop + listboxHeight)
        } else if (optionOffsetTop < listboxScrollTop) {
          this.$el.scrollTop = optionOffsetTop
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$option-bg: $color-white;
$option-bg-hover: $color-blue-05;
$option-bg-selected: $color-blue-10;

.MomInputDropdownList {
  max-height: rem(300);
  background-color: $option-bg;
  overflow-y: auto;
  box-shadow: $box-shadow-m;
  user-select: none;
  outline: none;

  &[data-popper-placement="top-start"] {
    border-radius: $border-radius-corner $border-radius-corner 0 0;
  }

  &[data-popper-placement="bottom-start"] {
    border-radius: 0 0 $border-radius-corner $border-radius-corner;
  }
}

.MomInputDropdownList__Category {
  @include font-size(s);
  @include line-height(s);
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  padding: rem(4) rem(8);
  color: $color-cool-grey-60;
  background: $color-cool-grey-05;
}

.MomInputDropdownList__Option {
  padding: rem(8) rem(12);
  background-color: $option-bg;
  word-break: break-word;
  cursor: pointer;
  user-select: none;
  transition-property: background-color;
  transition-duration: $transition-duration-s;
  transition-timing-function: $transition-timing-function-ease;

  &:hover,
  &--is-highlighted {
    background-color: $option-bg-hover;
  }

  &--is-selected {
    background-color: $option-bg-selected !important;
  }

  &--is-disabled {
    background-color: $option-bg !important;
    cursor: not-allowed;
  }

  &--no-options {
    background-color: $option-bg !important;
    cursor: default;
  }

  &--free-text {
    border-top: rem(2) solid $color-cool-grey-20;
  }

  &--free-text-only {
    border-top: none !important;
  }
}

.MomInputDropdownList__OptionLabel {
  @include font-size(m);
  @include line-height(m);
  min-height: rem(24);

  .MomInputDropdownList__Option--is-disabled & {
    color: $input-text-disabled;
  }

  .MomInputDropdownList__Option--no-options & {
    color: $placeholder-text;
  }

  .MomInputDropdownList__OptionFreeText {
    font-weight: $font-weight-semibold;
  }

  &::v-deep > .MomInputDropdownList__MarkedText {
    background-color: $color-blue-05;
  }
}

.MomInputDropdownList__OptionDescription {
  @include font-size(xs);
  @include line-height(xs);
  color: $placeholder-text;

  .MomInputDropdownList__Option--is-disabled & {
    color: $placeholder-disabled;
  }

  &::v-deep > .MomInputDropdownList__MarkedText {
    background-color: $color-blue-05;
  }
}

.MomInputDropdownList__LoadingSpinner {
  margin: rem(8) auto;
}
</style>
