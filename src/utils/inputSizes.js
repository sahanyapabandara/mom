/**
 * @mixin
 */
export default {
  props: {
    /**
     * Input size
     */
    size: {
      type: String,
      default: "l",
      validator: val => ["xs", "xs1", "s", "m", "l", "xl", "full"].includes(val),
    },
  },
}
