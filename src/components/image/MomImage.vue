<template>
  <img v-if="image" class="MomImage" :src="image" :alt="alt" @click="onClick" />
  <div v-else class="MomImage__SpinnerContainer"><MomSpinner /></div>
</template>

<script>
import axios from "axios"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

export default {
  name: "MomImage",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomSpinner,
  },
  props: {
    /**
     * Image source
     */
    source: {
      type: String,
      required: true,
    },

    /**
     * Alt
     */
    alt: {
      type: String,
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

    /**
     * Path (axios)
     */
    path: {
      type: String,
    },
  },
  data() {
    return {
      image: null,
    }
  },
  mounted() {
    this.getImageSrc()
  },
  watch: {
    source() {
      this.getImageSrc()
    },
  },
  methods: {
    getImageSrc() {
      if (this.withCredentials) {
        axios
          .get(this.source, {
            withCredentials: this.withCredentials,
            headers: this.headers,
          })
          .then(response => {
            if (response.data.success) {
              const results = response.data.results
              if (results.length > 0) {
                axios
                  .get(this.path + results[0], {
                    responseType: "blob",
                    withCredentials: this.withCredentials,
                    headers: this.headers,
                  })
                  .then(res => {
                    const blobUrl = window.URL.createObjectURL(res.data)
                    this.image = blobUrl
                  })
                  .catch(err => {
                    this.$emit("error", err)
                    throw err
                  })
              }
            }
          })
          .catch(err => {
            /**
             * When fetch image error
             * @event error
             * @param {object} error
             */
            this.$emit("error", err)
            throw err
          })
      } else {
        this.image = this.source
      }
    },

    onClick(e) {
      /**
       * When the image is clicked
       * @event click
       * @param {object} e
       */
      this.$emit("click", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomImage {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.MomImage__SpinnerContainer {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: none;
}
</style>
