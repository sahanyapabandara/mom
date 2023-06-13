<template>
  <div class="MomInputTextarea__Wrapper">
    <div :class="['MomInputTextarea', inputState && `MomInputTextarea--input-state-${inputState}`]">
      <textarea
        ref="input"
        :id="idForInput"
        :class="['MomInputTextarea__Input', !resize && `MomInputTextarea__Input--no-resize`]"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlengthInt ? maxlengthInt : null"
        :spellcheck="spellcheck"
        :disabled="inputState === 'disabled'"
        @input="onInput"
        @blur="onBlur"
      >
      </textarea>
    </div>

    <p
      v-if="maxlengthInt"
      :class="[
        'mom-p-s',
        'MomInputTextarea__Character',
        inputState === 'disabled' && 'MomInputTextarea__Character--is-disabled',
      ]"
    >
      <span>({{ characterLeft }}</span>
      <span>{{
        characterLeft > 1
          ? $lang("mominputtextarea.characters")
          : $lang("mominputtextarea.character")
      }}</span>
      <span>{{ $lang("mominputtextarea.left") }})</span>
    </p>
  </div>
</template>

<script>
import inputId from "@/utils/inputId"
import inputStates from "@/utils/inputStates"

export default {
  name: "MomInputTextarea",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, inputStates],
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
     * Max characters
     */
    maxlength: {
      type: [String, Number],
    },

    /**
     * Resize
     */
    resize: {
      type: Boolean,
      default: true,
    },

    /**
     * Spellcheck
     */
    spellcheck: {
      type: Boolean,
      default: true,
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
      textareaValue: this.value,
    }
  },
  watch: {
    value() {
      this.textareaValue = this.value
      this.$refs.input.value = this.textareaValue
    },
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
    characterLeft() {
      return this.textareaValue ? this.maxlengthInt - this.textareaValue.length : this.maxlengthInt
    },
  },
  mounted() {
    if (this.textareaValue) {
      this.$refs.input.value = this.textareaValue
    }
  },
  methods: {
    onInput() {
      if (this.$refs.input.value !== "" && !this.isValidText(this.$refs.input.value)) {
        this.$refs.input.value = this.textareaValue
      } else {
        this.textareaValue = this.$refs.input.value
        /**
         * When the textarea receives input
         *
         * @event input
         * @param {string} textareaValue
         */
        this.$emit("input", this.textareaValue)
      }
    },

    onBlur(e) {
      this.textareaValue = this.$refs.input.value
      this.textareaValue = this.textareaValue.trim()
      this.$refs.input.value = this.textareaValue
      this.$emit("input", this.textareaValue)
      /**
       * When the textarea loses focus
       *
       * @event blur
       * @param {object} e
       */
      this.$emit("blur", e)
    },

    isValidText(str) {
      return /^[ -~\r\n]*$/.test(str)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomInputTextarea {
  @include font-size(m);
  @include line-height(m);
  display: flex;
  width: 100%;
  min-width: rem(64);
  border: rem(1) solid $color-cool-grey-20;
  border-radius: $border-radius-corner;

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

.MomInputTextarea__Input {
  appearance: none;
  padding: rem(7) rem(11);
  min-height: rem(98);
  border: none;
  background: none;
  outline: none;
  resize: vertical;

  &--no-resize {
    resize: none;
  }

  &:-ms-input-placeholder {
    color: $placeholder-text;
  }

  &::placeholder {
    color: $placeholder-text;
    opacity: 1;
  }

  .MomInputTextarea--input-state-disabled & {
    cursor: not-allowed;
    color: $input-text-disabled;
    resize: none;

    &:-ms-input-placeholder {
      color: $placeholder-disabled;
    }

    &::placeholder {
      color: $placeholder-disabled;
    }
  }
}

.MomInputTextarea__Character {
  margin-top: rem(4);
  cursor: default;

  &--is-disabled {
    color: $input-text-disabled;
  }
}
</style>
