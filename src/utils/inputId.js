/**
 * @mixin
 */
import uniqueId from "@/utils/uniqueId"

export default {
  props: {
    /**
     * Input `id`
     */
    idForInput: {
      type: String,
      default: () => {
        return uniqueId()
      },
    },
  },
}
