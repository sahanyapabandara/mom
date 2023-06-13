/**
 * @mixin
 */
export default {
  props: {
    /**
     * Input state
     */
    inputState: {
      type: String,
      validator: val => ["error", "warning"].includes(val),
    },
  },
}
