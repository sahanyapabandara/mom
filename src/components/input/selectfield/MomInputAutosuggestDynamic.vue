<template>
  <MomProvideData
    ref="provider"
    :endpoint="endpoint"
    :headers="headers"
    :withCredentials="withCredentials"
    @success="onSuccess"
    @error="onError"
  >
    <MomInputAutosuggest
      ref="autosuggest"
      :name="name"
      :idForInput="idForInput"
      :options="dynamicOptions"
      :size="size"
      :inputState="inputState"
      :placeholder="placeholder"
      :allowFreeText="allowFreeText"
      :maxlength="maxlengthInt"
      :hideIcon="hideIcon"
      :filterType="filterType"
      :filterLength="filterLengthInt"
      :maxOptions="maxOptionsInt"
      :isLoading="isLoading"
      :value="value"
      @input="onInput"
      @showDropdown="updateOptions"
      @updateFilterText="updateOptions"
    />
  </MomProvideData>
</template>

<script>
import { CancelToken, isCancel } from "axios"
import debounce from "lodash/debounce"
import inputId from "@/utils/inputId"
import inputSizes from "@/utils/inputSizes"
import inputStates from "@/utils/inputStates"
import MomInputAutosuggest from "@/components/input/selectfield/MomInputAutosuggest.vue"
import MomProvideData from "@/components/input/selectfield/_MomProvideData.vue"

export default {
  name: "MomInputAutosuggestDynamic",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomInputAutosuggest,
    MomProvideData,
  },
  mixins: [inputId, inputSizes, inputStates],
  props: {
    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Endpoint for data API
     */
    endpoint: {
      type: String,
      required: true,
    },

    /**
     * Placeholder
     */
    placeholder: {
      type: String,
    },

    /**
     * Allow free text
     */
    allowFreeText: {
      type: [Boolean, String],
      default: false,
      validator: val => {
        return typeof val === "boolean" || ["always"].includes(val)
      },
    },

    /**
     * Max characters
     */
    maxlength: {
      type: [String, Number],
    },

    /**
     * Hide icon
     */
    hideIcon: {
      type: Boolean,
      default: false,
    },

    /**
     * Filter type
     */
    filterType: {
      type: String,
      validator: val => ["label"].includes(val),
    },

    /**
     * Min filter length
     */
    filterLength: {
      type: [String, Number],
      default: 0,
    },

    /**
     * Max options
     */
    maxOptions: {
      type: [String, Number],
      default: 0,
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
     * Input value
     */
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dynamicOptions: [],
      isFetching: false,
      isLoading: true,
    }
  },
  computed: {
    filterLengthInt() {
      return this.filterLength &&
        Number(this.filterLength) &&
        Number.isInteger(Number(this.filterLength)) &&
        Number(this.filterLength) > 0
        ? Number(this.filterLength)
        : 0
    },
    maxOptionsInt() {
      return this.maxOptions &&
        Number(this.maxOptions) &&
        Number.isInteger(Number(this.maxOptions)) &&
        Number(this.maxOptions) > 0
        ? Number(this.maxOptions)
        : 0
    },
    maxlengthInt() {
      return this.maxlength &&
        Number(this.maxlength) &&
        Number.isInteger(Number(this.maxlength)) &&
        Number(this.maxlength) > 0
        ? Number(this.maxlength)
        : 0
    },
  },
  created() {
    this.generateCancelToken()
  },
  methods: {
    generateCancelToken() {
      this.cancelToken = new CancelToken(c => {
        this.cancel = c
      })
    },

    updateOptions() {
      this.dynamicOptions = []
      this.isLoading = true
      this.fetchOptionsDebounced(this.$refs.autosuggest.textValue)
    },

    fetchOptionsDebounced: debounce(function (queryString) {
      this.fetchOptions(queryString)
    }, 300),

    fetchOptions(queryString) {
      if (queryString.length >= this.filterLengthInt) {
        if (this.isFetching) {
          this.cancel()
          this.generateCancelToken()
        }

        this.isFetching = true
        this.isLoading = true

        this.$refs.provider.fetchData({
          params: { q: queryString || null },
          cancelToken: this.cancelToken,
        })
      }
    },

    onSuccess(e) {
      this.isFetching = false
      this.isLoading = false

      if ("data" in e && "success" in e.data && e.data.success && "results" in e.data) {
        this.dynamicOptions = e.data.results.map(option => {
          return JSON.stringify(option) === JSON.stringify(this.value)
            ? Object.assign(option, { selected: true })
            : option
        })
        this.$refs.autosuggest.initPopper()
      }
      this.$forceUpdate()
    },

    onError(e) {
      if (isCancel(e)) {
        console.warn("Request cancelled; Generating new cancelToken", e)
      } else {
        this.$refs.autosuggest.closeDropdown()
        /**
         * When fetch error is triggered
         *
         * @event error
         * @param {string} error
         */
        this.$emit("error", e)
      }
    },

    onInput(option) {
      /**
       * When input is received
       *
       * @event input
       * @param {object} option
       */
      this.$emit("input", option)
    },
  },
}
</script>
