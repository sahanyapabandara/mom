<script>
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  extends: MomInputText,
  name: "MomInputEmail",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
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
     * Spell check
     * @ignore
     */
    spellcheck: {
      type: Boolean,
      default: true,
    },

    /**
     * Password type
     * @ignore
     */
    inputMode: {
      type: String,
      default: "email",
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
      isEmail: this.value ? this.isValidEmail(this.value.value) : false,
      textValue: this.value ? this.value.value : "",
    }
  },
  watch: {
    value() {
      this.textValue = this.value.value
      this.$refs.input.value = this.textValue
      this.isEmail = this.isValidEmail(this.textValue)
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
        this.isEmail = this.isValidEmail(this.textValue)
      }
    },

    onBlur(e) {
      this.textValue = this.$refs.input.value.trim()

      if (this.textValue !== "" && !this.isValidText(this.textValue)) {
        this.textValue = ""
        this.$refs.input.value = this.textValue
        this.isEmail = false
      } else {
        this.isEmail = this.isValidEmail(this.textValue)
      }
      this.$refs.input.value = this.textValue

      /**
       * When email input receives input
       *
       * @event input
       * @param {object} emailValue
       */
      this.$emit("input", {
        value: this.textValue,
        isValidEmail: this.isEmail,
      })

      this.$emit("blur", e)
    },

    isValidText(str) {
      return /^[^() ]*$/.test(str)
    },

    isValidEmail(str) {
      return /^[a-zA-Z0-9!#$%&'*+\-\\/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-\\/=?^_`{|}~]+)*@[a-zA-Z0-9][a-zA-Z0-9-]*(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*\.[a-zA-Z]{2,6}$/.test(
        str
      )
        ? true
        : false
    },
  },
}
</script>
