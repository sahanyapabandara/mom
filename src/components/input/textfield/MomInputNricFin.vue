<script>
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  extends: MomInputText,
  name: "MomInputNricFin",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Allow m-series-fin
     */
    mSeriesFin: {
      type: Boolean,
      default: false,
    },

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
      default: 9,
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
      default: "uppercase",
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
      isNricFormat: this.value ? this.validateNric(this.value.value) : false,
      isFinFormat: this.value ? this.validateFin(this.value.value) : false,
      isNric: this.value ? this.isValidNric(this.value.value) : false,
      isFin: this.value ? this.isValidFin(this.value.value) : false,
    }
  },
  watch: {
    value() {
      this.textValue = this.value.value
      this.$refs.input.value = this.textValue
      this.isNricFormat = this.validateNric(this.textValue)
      this.isFinFormat = this.validateFin(this.textValue)
      this.isNric = this.isValidNric(this.textValue)
      this.isFin = this.isValidFin(this.textValue)
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
        this.isNricFormat = this.validateNric(this.textValue)
        this.isFinFormat = this.validateFin(this.textValue)
        this.isNric = this.isValidNric(this.textValue)
        this.isFin = this.isValidFin(this.textValue)
      }
    },

    onBlur(e) {
      this.textValue = this.$refs.input.value.trim()

      if (this.textValue !== "" && !this.isValidText(this.textValue)) {
        this.textValue = ""
        this.$refs.input.value = this.textValue
        this.isNricFormat = false
        this.isFinFormat = false
        this.isNric = false
        this.isFin = false
      } else {
        this.isNricFormat = this.validateNric(this.textValue)
        this.isFinFormat = this.validateFin(this.textValue)
        this.isNric = this.isValidNric(this.textValue)
        this.isFin = this.isValidFin(this.textValue)
      }

      this.textValue = this.textValue.toUpperCase().trim()
      this.$refs.input.value = this.textValue

      /**
       * When the nric fin input receives input
       *
       * @event input
       * @param {object} nricFinValue
       */

      this.$emit("input", {
        value: this.textValue,
        isNricFormat: this.isNricFormat,
        isFinFormat: this.isFinFormat,
        isValidNric: this.isNric,
        isValidFin: this.isFin,
      })

      this.$emit("blur", e)
    },

    isValidText(str) {
      return /^[a-zA-Z0-9]+$/.test(str)
    },

    validateNric(str) {
      return /^[stST]\d{7}[a-zA-Z]$/.test(str)
    },

    validateFin(str) {
      if (this.mSeriesFin) {
        return /^[fgmFGM]\d{7}[a-zA-Z]$/.test(str)
      } else {
        return /^[fgFG]\d{7}[a-zA-Z]$/.test(str)
      }
    },

    isValidNric(str) {
      return /^[stST]\d{7}[a-zA-Z]$/.test(str) ? this.checkSum(str) : false
    },

    isValidFin(str) {
      return /^[fgFG]\d{7}[a-zA-Z]$/.test(str) ? this.checkSum(str) : false
    },

    checkSum(str) {
      let strArray = str.toUpperCase().split("")
      let offset = strArray[0] === "T" || strArray[0] === "G"
      let sum =
        2 * parseInt(strArray[1]) +
        7 * parseInt(strArray[2]) +
        6 * parseInt(strArray[3]) +
        5 * parseInt(strArray[4]) +
        4 * parseInt(strArray[5]) +
        3 * parseInt(strArray[6]) +
        2 * parseInt(strArray[7]) +
        (offset ? 4 : 0)

      let remainder = (sum % 11) + 1
      let checksum =
        strArray[0] === "S" || strArray[0] === "T"
          ? this.getNricChecksum(remainder)
          : this.getFinChecksum(remainder)

      return checksum === strArray[8]
    },

    getNricChecksum(remainder) {
      switch (remainder) {
        case 1:
          return "J"
        case 2:
          return "Z"
        case 3:
          return "I"
        case 4:
          return "H"
        case 5:
          return "G"
        case 6:
          return "F"
        case 7:
          return "E"
        case 8:
          return "D"
        case 9:
          return "C"
        case 10:
          return "B"
        case 11:
          return "A"
        default:
          return null
      }
    },

    getFinChecksum(remainder) {
      switch (remainder) {
        case 1:
          return "X"
        case 2:
          return "W"
        case 3:
          return "U"
        case 4:
          return "T"
        case 5:
          return "R"
        case 6:
          return "Q"
        case 7:
          return "P"
        case 8:
          return "N"
        case 9:
          return "M"
        case 10:
          return "L"
        case 11:
          return "K"
        default:
          return null
      }
    },
  },
}
</script>
