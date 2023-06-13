<template>
  <div
    v-if="languages.length > 0"
    class="MomLanguageDropdown"
    aria-haspopup="true"
    :aria-expanded="showLanguageDropdown"
    role="combobox"
  >
    <button
      class="MomLanguageDropdown__ToggleButton"
      ref="toggleButton"
      @click="toggleLanguageDropdown"
      @keydown="onKeydown"
    >
      <span class="MomLanguageDropdown__ToggleText" v-html="$html(currentLanguageText)" />
      <span class="MomLanguageDropdown__ToggleIcon">
        <MomIcon v-if="!showLanguageDropdown" icon="chevron-down" />
        <MomIcon v-else icon="chevron-up" />
      </span>
    </button>

    <div
      v-if="showLanguageDropdown"
      ref="languageDropdown"
      class="MomLanguageDropdown__Dropdown"
      role="listbox"
    >
      <div
        v-for="(language, i) in languages"
        :key="i"
        :class="[
          'MomLanguageDropdown__Option',
          language.code === currentLanguage && 'MomLanguageDropdown__Option--is-current',
          highlightedOptionIndex === i && 'MomLanguageDropdown__Option--is-highlighted',
        ]"
        role="option"
        @click="onLanguageSelect(language.code)"
      >
        <p class="MomLanguageDropdown__OptionLabel" v-html="$html(language.text)" />
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core"
import KEYCODES from "@/constants/keycodes"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomLanguageDropdown",
  release: "2.3.6",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Languages <br />
     * `{ text, code, active }`
     */
    languages: {
      type: Array,
      required: true,
    },

    /**
     * Current language code
     */
    currentLanguage: {
      type: String,
    },
  },
  data() {
    return {
      showLanguageDropdown: false,
      highlightedOptionIndex: -1,
    }
  },
  computed: {
    totalLanguage() {
      return this.languages.length
    },
    currentLanguageText() {
      let lang = this.languages.find(language => language.code === this.currentLanguage)
      return lang ? lang.text : ""
    },
  },
  methods: {
    eventHandler(e) {
      if (
        !this.$refs.toggleButton.contains(e.target) &&
        !(this.$refs.languageDropdown && this.$refs.languageDropdown.contains(e.target))
      ) {
        this.showLanguageDropdown = false
      }
    },

    toggleLanguageDropdown(e) {
      e.stopPropagation()
      if (!this.showLanguageDropdown) {
        this.showLanguageDropdown = true
        document.addEventListener("click", this.eventHandler, true)
        document.addEventListener("touchstart", this.eventHandler, true)
        this.initPopper()
      } else {
        this.showLanguageDropdown = false
        document.removeEventListener("click", this.eventHandler, true)
        document.removeEventListener("touchstart", this.eventHandler, true)
      }
    },

    onKeydown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.SPACE:
        case KEYCODES.ENTER:
          e.preventDefault()
          this.$emit("select", this.languages[this.highlightedOptionIndex].code)
          this.showLanguageDropdown = false
          document.removeEventListener("click", this.eventHandler, true)
          document.removeEventListener("touchstart", this.eventHandler, true)

          break
        case KEYCODES.UP:
          e.preventDefault()
          if (this.highlightedOptionIndex === -1 || this.highlightedOptionIndex === 0) {
            this.highlightedOptionIndex = this.totalLanguage - 1
          } else {
            this.highlightedOptionIndex--
          }
          break
        case KEYCODES.DOWN:
          e.preventDefault()
          if (
            this.highlightedOptionIndex === -1 ||
            this.highlightedOptionIndex === this.totalLanguage - 1
          ) {
            this.highlightedOptionIndex = 0
          } else {
            this.highlightedOptionIndex++
          }
          break
      }
    },

    onLanguageSelect(code) {
      if (code !== this.currentLanguage) {
        /**
         * When the language is selected
         * @event select
         * @param {string} code
         */
        this.$emit("select", code)
      }
      this.showLanguageDropdown = false
      document.removeEventListener("click", this.eventHandler, true)
      document.removeEventListener("touchstart", this.eventHandler, true)
    },

    initPopper() {
      this.$nextTick(() => {
        createPopper(this.$refs.toggleButton, this.$refs.languageDropdown, {
          placement: "bottom-start",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
            {
              name: "preventOverflow",
              options: {
                mainAxis: false,
              },
            },
            {
              name: "flip",
              options: {
                padding: 24,
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
$option-bg: $color-white;
$option-bg-hover: $color-blue-05;
$option-bg-selected: $color-blue-10;
$link: $color-blue-80;
$link-active: $color-blue-90;

.MomLanguageDropdown__ToggleText {
  color: $link;
  margin-right: rem(4);
  word-break: break-word;
  outline: none;

  .MomLanguageDropdown__ToggleButton:active & {
    color: $link-active;
  }
}

.MomLanguageDropdown__ToggleIcon {
  color: $link;

  .MomLanguageDropdown__ToggleButton:active & {
    color: $link-active;
  }
}

.MomLanguageDropdown__Dropdown {
  position: relative;
  width: rem(160);
  background-color: $option-bg;
  border-radius: $border-radius-corner;
  box-shadow: $box-shadow-m;
  overflow: auto;
  user-select: none;
  outline: none;
  z-index: $z-index-dropdown;
}

.MomLanguageDropdown__Option {
  display: block;
  background-color: $option-bg;
  padding: rem(8) rem(12);
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

  &--is-current {
    background-color: $option-bg-selected !important;
    cursor: default;
  }
}

.MomLanguageDropdown__OptionLabel {
  @include font-size(m);
  @include line-height(m);
}
</style>
