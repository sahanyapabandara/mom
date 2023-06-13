<template>
  <div class="MomProvideData">
    <!-- @slot Default -->
    <slot></slot>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "MomProvideData",
  props: {
    /**
     * Endpoint for data API
     */
    endpoint: {
      type: String,
      required: true,
    },

    /**
     * With credentials (axios)
     */
    withCredentials: {
      type: Boolean,
      default: false,
    },

    /**
     * Headers (axios)
     */
    headers: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    fetchData: function (config) {
      axios
        .get(this.endpoint, {
          withCredentials: this.withCredentials,
          headers: this.headers,
          params: config.params,
          cancelToken: config.cancelToken,
        })
        .then(response => {
          /**
           * When the request succeeds
           * @event success
           * @param {object} response
           */
          this.$emit("success", response)
        })
        .catch(err => {
          /**
           * When the request fails due to an error
           * @event error
           * @param {object} error
           */
          this.$emit("error", err)
        })
        .then(response => {
          /**
           * When the request is completed
           * @event complete
           * @param {object} response
           */
          this.$emit("complete", response)
        })
    },
  },
}
</script>
