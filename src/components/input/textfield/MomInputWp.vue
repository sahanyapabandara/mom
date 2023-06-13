<script>
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  extends: MomInputText,
  name: "MomInputWp",
  release: "2.2.4",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Input size
     * @ignore
     */
    size: {
      type: String,
      default: "s",
    },

    /**
     * Prefix
     * @ignore
     */
    prefix: {
      type: String,
    },

    /**
     * Suffix
     * @ignore
     */
    suffix: {
      type: String,
    },

    /**
     * Max characters
     * @ignore
     */
    maxlength: {
      type: [String, Number],
      default: 10,
    },

    /**
     * Character patterns
     * @ignore
     */
    pattern: {
      type: String,
    },

    /**
     * Password type
     * @ignore
     */
    isPassword: {
      type: Boolean,
      default: false,
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
      default: true,
    },

    /**
     * Input mode
     * @ignore
     */
    inputMode: {
      type: String,
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
      textValue: this.value ? this.value.value : "",
      isWpFormat: this.value ? this.validateWp(this.value.value) : false,
    }
  },
  watch: {
    value() {
      this.textValue = this.value.value
      this.$refs.input.value = this.textValue
      this.isWpFormat = this.validateWp(this.textValue)
    },
  },
  mounted() {
    if (this.textValue) {
      if (!this.isValidText(this.textValue)) {
        this.textValue = ""
      }
      this.$refs.input.value = this.textValue
      this.onBlur()
    }
  },
  methods: {
    onInput() {
      if (this.$refs.input.value !== "" && !this.isValidText(this.$refs.input.value)) {
        this.$refs.input.value = this.textValue
      } else {
        this.textValue = this.$refs.input.value
        this.isWpFormat = this.validateWp(this.textValue)
      }
    },

    onBlur(e) {
      this.textValue = this.$refs.input.value.trim()

      if (this.textValue !== "" && !this.isValidText(this.textValue)) {
        this.textValue = ""
        this.$refs.input.value = this.textValue
        this.isWpFormat = false
      } else {
        this.isWpFormat = this.validateWp(this.textValue)
      }

      this.textValue = this.textValue.trim()
      if (this.textValue.length === 9) {
        this.textValue = this.textValue.replace(/ /g, "")
        this.textValue = this.textValue.charAt(0) + " " + this.textValue.slice(1)
      }
      this.$refs.input.value = this.textValue

      /**
       * When the wp input receives input
       *
       * @event input
       * @param {object} wpValue
       */

      this.$emit("input", {
        value: this.textValue,
        isWpFormat: this.isWpFormat,
      })

      this.$emit("blur", e)
    },

    isValidText(str) {
      return /^[ 0-9-]+$/.test(str)
    },

    validateWp(str) {
      return /^\d\s\d{7}[0-9-]$/.test(str) || /^\d{8}[0-9-]$/.test(str)
    },
  },
}
</script>
