<script>
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  extends: MomInputText,
  name: "MomInputPhone",
  release: "2.0.0",
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
      default: "+65",
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
      default: 8,
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
      default: "tel",
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
      isPhone: this.value ? this.isValidPhone(this.value.value) : false,
      textValue: this.value ? this.value.value : "",
    }
  },
  watch: {
    value() {
      this.textValue = this.value.value
      this.$refs.input.value = this.textValue
      this.isPhone = this.isValidPhone(this.textValue)
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
        this.isPhone = this.isValidPhone(this.textValue)
      }
    },

    onBlur(e) {
      this.textValue = this.$refs.input.value.trim()

      if (this.textValue !== "" && !this.isValidText(this.textValue)) {
        this.textValue = ""
        this.$refs.input.value = this.textValue
        this.isPhone = false
      } else {
        this.isPhone = this.isValidPhone(this.textValue)
      }
      this.$refs.input.value = this.textValue

      /**
       * When phone input receives input
       *
       * @event input
       * @param {object} phoneValue
       */
      this.$emit("input", {
        value: this.textValue,
        isValidPhone: this.isPhone,
      })

      this.$emit("blur", e)
    },

    isValidText(str) {
      return /^[0-9]+$/.test(str)
    },

    isValidPhone(str) {
      return /^[89]\d{7}$/.test(str) && !/^(999)\d{5}$/.test(str) && !/^(995)\d{5}$/.test(str)
    },
  },
}
</script>
