<script>
import KEYCODES from "@/constants/keycodes"
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  extends: MomInputText,
  name: "MomInputNumber",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Max integer
     */
    max: {
      type: [String, Number],
      default: 9007199254740991,
    },

    /**
     * Allow zero
     */
    allowZero: {
      type: Boolean,
      default: true,
    },

    /**
     * Character patterns
     * @ignore
     */
    pattern: {
      type: String,
    },

    /**
     * Text tranform
     * @ignore
     */
    textTransform: {
      type: String,
    },

    /**
     * Spellcheck
     * @ignore
     */
    spellcheck: {
      type: Boolean,
    },

    /**
     * Input mode
     * @ignore
     */
    inputMode: {
      type: String,
      default: "numeric",
    },
  },
  mounted() {
    this.textValue = this.isValidNumber(this.textValue)
      ? this.formatNumber(this.getNumber(this.textValue).toString())
      : ""
    this.$refs.input.value = this.textValue
  },
  methods: {
    onKeydown(e) {
      const key = e.keyCode || e.which
      if (key === KEYCODES.ENTER) {
        this.$emit("enter", e)
        return
      }

      if (
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

      if (key === KEYCODES.BKSPACE) {
        if (!this.allowZero) {
          let text = this.$refs.input.value
          let startPosition = this.$refs.input.selectionStart
          let endPosition = this.$refs.input.selectionEnd
          let new_text =
            startPosition === endPosition
              ? text.substring(0, startPosition - 1) + text.substring(endPosition, text.length)
              : text.substring(0, startPosition) + text.substring(endPosition, text.length)
          if (new_text !== "" && this.getNumber(new_text) === 0) {
            e.preventDefault()
          } else {
            return
          }
        } else {
          return
        }
      }

      if (!e.shiftKey && ((key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
        if (!this.allowZero || this.max) {
          let text = this.$refs.input.value
          let startPosition = this.$refs.input.selectionStart
          let endPosition = this.$refs.input.selectionEnd
          let new_text =
            text.substring(0, startPosition) + e.key + text.substring(endPosition, text.length)

          if (!this.allowZero && new_text !== "" && this.getNumber(new_text) === 0) {
            e.preventDefault()
          } else if (this.max && this.getNumber(new_text) > this.getNumber(this.max.toString())) {
            e.preventDefault()
          } else {
            return
          }
        } else {
          return
        }
      } else {
        e.preventDefault()
      }
    },

    onInput() {
      let text = this.$refs.input.value
      this.textValue =
        text !== ""
          ? this.isValidNumber(text) && this.getNumber(text) <= this.getNumber(this.max.toString())
            ? this.formatNumber(this.getNumber(text).toString())
            : this.textValue
          : ""
      this.$refs.input.value = this.textValue
    },

    isValidNumber(str) {
      return (
        str &&
        !Number.isNaN(this.getNumber(str)) &&
        !!Number.isSafeInteger(this.getNumber(str)) &&
        this.getNumber(str) >= 0
      )
    },

    getNumber(num) {
      return Number(num.replace(/,/g, "").trim())
    },

    formatNumber(str) {
      return str !== "0"
        ? str
            .replace(/,/g, "")
            .replace(/^0+/, "")
            .trim()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        : str
    },
  },
}
</script>
