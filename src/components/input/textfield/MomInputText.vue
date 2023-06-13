<template>
  <div
    :class="[
      'MomInputText',
      `MomInputText--size-${size}`,
      inputState && `MomInputText--input-state-${inputState}`,
      textAlignment && `MomInputText--text-align-${textAlignment}`,
      textTransform && `MomInputText--text-transform-${textTransform}`,
    ]"
  >
    <span v-if="prefix" class="MomInputText__Prefix" @click="onPrefixClick">{{ prefix }}</span>

    <input
      ref="input"
      :id="idForInput"
      :type="isPassword ? 'password' : 'text'"
      class="MomInputText__Input"
      :name="name"
      :placeholder="placeholder"
      :disabled="inputState === 'disabled'"
      :maxlength="maxlengthInt ? maxlengthInt : null"
      :spellcheck="spellcheck"
      :inputmode="inputMode"
      autocomplete="off"
      @click="onClick"
      @keydown="onKeydown"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />

    <span v-if="isLoading" class="MomInputText__Loading">
      <MomSpinner />
    </span>

    <span v-if="suffix" class="MomInputText__Suffix" @click="onSuffixClick">{{ suffix }}</span>
  </div>
</template>

<script>
import inputId from "@/utils/inputId"
import inputSizes from "@/utils/inputSizes"
import inputStates from "@/utils/inputStates"
import KEYCODES from "@/constants/keycodes"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

export default {
  name: "MomInputText",
  release: "2.0.0",
  lastUpdated: "2.3.7",
  mixins: [inputId, inputSizes, inputStates],
  components: { MomSpinner },
  props: {
    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Placeholder
     */
    placeholder: {
      type: String,
    },

    /**
     * Prefix
     */
    prefix: {
      type: String,
    },

    /**
     * Suffix
     */
    suffix: {
      type: String,
    },

    /**
     * Max characters
     */
    maxlength: {
      type: [String, Number],
    },

    /**
     * Character patterns
     */
    pattern: {
      type: String,
      validator: val =>
        [
          "alphanumeric",
          "alphanumeric_space",
          "alphabets",
          "digits",
          "name",
          "name_new",
          "wpno",
        ].includes(val),
    },

    /**
     * Password type
     */
    isPassword: {
      type: Boolean,
      default: false,
    },

    /**
     * Text alignment
     */
    textAlignment: {
      type: String,
      validator: val => ["center"].includes(val),
    },

    /**
     * Text tranform
     */
    textTransform: {
      type: String,
      validator: val => ["uppercase", "lowercase"].includes(val),
    },

    /**
     * Spellcheck
     */
    spellcheck: {
      type: Boolean,
      default: true,
    },

    /**
     * Show spinner
     */
    isLoading: {
      type: Boolean,
      default: false,
    },

    /**
     * Input mode
     */
    inputMode: {
      type: String,
      validator: val => ["text", "tel", "url", "email", "numeric", "decimal"].includes(val),
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
      textValue: this.value,
    }
  },
  computed: {
    maxlengthInt() {
      return this.maxlength &&
        Number(this.maxlength) &&
        Number.isInteger(Number(this.maxlength)) &&
        Number(this.maxlength) > 0
        ? Number(this.maxlength)
        : 0
    },
  },
  watch: {
    value() {
      this.textValue = this.value
      this.$refs.input.value = this.textValue
    },
  },
  mounted() {
    if (this.textValue) {
      this.$refs.input.value = this.textValue
    }
  },
  methods: {
    onClick(e) {
      /**
       * When the text input is clicked
       *
       * @event click
       * @param {object} e
       */
      this.$emit("click", e)
    },

    onPrefixClick(e) {
      this.$refs.input.focus()
      this.$emit("click", e)
    },

    onSuffixClick(e) {
      this.$refs.input.focus()
      this.$emit("click", e)
    },

    onKeydown(e) {
      /**
       * When the text input receives keydown event
       *
       * @event keydown
       * @param {object} e
       */
      this.$emit("keydown", e)

      const key = e.keyCode || e.which
      const character = e.key === "Spacebar" ? " " : e.key

      if (key === KEYCODES.ENTER) {
        /**
         * When the text input receives enter input
         *
         * @event enter
         * @param {object} e
         */
        this.$emit("enter", e)
        return
      }

      if (
        key === KEYCODES.BKSPACE ||
        key === KEYCODES.DELETE ||
        key === KEYCODES.TAB ||
        key === KEYCODES.LEFT ||
        key === KEYCODES.RIGHT ||
        key === KEYCODES.UP ||
        key === KEYCODES.DOWN
      ) {
        return
      }

      if (e.ctrlKey || e.metaKey) {
        return
      }

      if (this.isValidText(character)) {
        return
      } else {
        e.preventDefault()
      }
    },

    onInput() {
      if (this.$refs.input.value !== "" && !this.isValidText(this.$refs.input.value)) {
        this.$refs.input.value = this.textValue
      } else {
        this.textValue = this.$refs.input.value
        this.$emit("input", this.textValue)
      }
    },

    onFocus(e) {
      /**
       * When the text input gets focus
       *
       * @event focus
       * @param {object} e
       */
      this.$emit("focus", e)
    },

    onBlur(e) {
      this.textValue = this.$refs.input.value

      if (this.textTransform && this.textTransform === "uppercase") {
        this.textValue = this.textValue.toUpperCase().trim()
      } else if (this.textTransform && this.textTransform === "lowercase") {
        this.textValue = this.textValue.toLowerCase().trim()
      } else {
        this.textValue = this.textValue.trim()
      }

      if (this.pattern === "wpno" && this.textValue.length === 9) {
        this.textValue = this.textValue.replace(/ /g, "")
        this.textValue = this.textValue.charAt(0) + " " + this.textValue.slice(1)
      }
      this.$refs.input.value = this.textValue
      /**
       * When the text field is updated
       *
       * @event input
       * @param {string} textValue
       */
      this.$emit("input", this.textValue)

      /**
       * When the text input loses focus
       *
       * @event blur
       * @param {object} e
       */
      this.$emit("blur", e)
    },

    isValidText(str) {
      if (this.pattern === "alphanumeric") {
        return /^[a-zA-Z0-9]+$/.test(str)
      } else if (this.pattern === "alphanumeric_space") {
        return /^[ a-zA-Z0-9]+$/.test(str)
      } else if (this.pattern === "alphabets") {
        return /^[a-zA-Z]+$/.test(str)
      } else if (this.pattern === "digits") {
        return /^[0-9]+$/.test(str)
      } else if (this.pattern === "name") {
        return /^[ a-zA-Z'()/@-]+$/.test(str)
      } else if (this.pattern === "name_new") {
        return /^[ a-zA-Z'‘’,()/@-]+$/.test(str)
      } else if (this.pattern === "wpno") {
        return /^[ 0-9-]+$/.test(str)
      } else {
        return /^[ -~‘’“”]*$/.test(str)
      }
    },
  },
}
</script>

<style lang="scss">
.MomInputText {
  @include font-size(m);
  @include line-height(m);
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

  &:focus-within,
  .MomInputDate--is-picker-show &,
  .MomInputAutosuggest--is-menu-open & {
    border-color: $input-border-focus;
  }
}

.MomInputText__Input {
  appearance: none;
  padding: rem(7) rem(11);
  flex: auto;
  min-width: 0;
  max-width: 100%;
  border: none;
  background: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:-ms-input-placeholder {
    color: $placeholder-text;
  }

  &::placeholder {
    color: $placeholder-text;
    opacity: 1;
  }

  .MomInputText--input-state-disabled & {
    cursor: not-allowed;
    color: $input-text-disabled;

    &:-ms-input-placeholder {
      color: $placeholder-disabled;
    }

    &::placeholder {
      color: $placeholder-disabled;
    }
  }

  .MomInputText--text-align-center & {
    text-align: center;
  }

  .MomInputText--text-transform-uppercase & {
    text-transform: uppercase;
  }

  .MomInputText--text-transform-lowercase & {
    text-transform: lowercase;
  }

  .MomInputText__Prefix + & {
    padding-left: rem(3);
  }

  .MomInputDate__TextInput > &,
  .MomInputAutosuggest__TextInput > & {
    padding-right: rem(39);
  }
}

.MomInputText__Prefix,
.MomInputText__Suffix {
  color: $placeholder-text;
  white-space: nowrap;
  padding: rem(7) rem(11);

  .MomInputText--input-state-disabled & {
    cursor: not-allowed;
    color: $placeholder-disabled;
  }
}

.MomInputText__Prefix {
  padding: rem(7) rem(1) rem(7) rem(11);
}

.MomInputText__Suffix {
  padding: rem(7) rem(11) rem(7) rem(1);
}

.MomInputText__Loading {
  padding: rem(7) rem(11) rem(7) rem(8);
}
</style>
