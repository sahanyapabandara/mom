<script>
import MomInputDate from "@/components/input/datefield/MomInputDate.vue"

export default {
  extends: MomInputDate,
  name: "MomInputDateMonth",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Placeholder
     */
    placeholder: {
      type: String,
      default: "mmm yyyy",
    },

    /**
     * Display format
     */
    displayFormat: {
      type: String,
      default: "MMM YYYY",
    },

    /**
     * Parse format
     */
    parseFormat: {
      type: [String, Array],
      default: () => {
        return [
          "M YYYY",
          "MMM YYYY",
          "MMMM YYYY",
          "MMM YY",
          "MMMM YY",
          "YYYY M",
          "YYYY MMM",
          "YYYY MMMM",
          "MYYYY",
          "MMMYYYY",
          "MMMMYYYY",
          "MMMYY",
          "MMMMYY",
          "YYYYMMM",
          "YYYYMMMM",
        ]
      },
    },

    /**
     * Selection mode.
     * @ignore
     */
    selectionMode: {
      type: String,
      default: "month",
      validator: val => ["day", "month"].includes(val),
    },
  },
}
</script>
