<template>
  <div :class="['MomInputCheckbox', `MomInputCheckbox--variant-${variant}`]">
    <component
      :is="variant === 'card' ? 'MomInputCheckboxCard' : 'MomInputCheckboxButton'"
      v-for="(option, i) in sortedOptions"
      :key="i"
      :value="option.value"
      :order="option.order"
      :name="name"
      :label="option.label"
      :idForInput="option.id"
      :checked="selectedOptions.some(e => e.value === option.value)"
      :disabled="disabled || option.disabled"
      :inputState="inputState"
      :description="option.description"
      :supportingText="variant === 'card' ? option.supportingText : null"
      @change="onChange"
    />
  </div>
</template>

<script>
import selectionStates from "@/utils/selectionStates"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomInputCheckboxCard from "@/components/input/checkbox/MomInputCheckboxCard.vue"

export default {
  name: "MomInputCheckbox",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [selectionStates],
  components: {
    MomInputCheckboxButton,
    MomInputCheckboxCard,
  },
  props: {
    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Options <br />
     * `{ value, id, label, description, supportingText, disabled, order }`
     */
    options: {
      type: Array,
      required: true,
    },

    /**
     * Variant
     */
    variant: {
      type: String,
      default: "vertical",
      validator: val => ["horizontal", "vertical", "card"].includes(val),
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Input `value`
     */
    value: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      selectedOptions: [],
    }
  },
  watch: {
    value() {
      this.selectedOptions = this.options
        .filter(option => this.value.includes(option.value))
        .map(option => {
          return { value: option.value, order: option.order }
        })
      this.selectedOptions = this.sortOptions(this.selectedOptions)
    },
  },
  computed: {
    sortedOptions() {
      return this.sortOptions(this.options)
    },
  },
  mounted() {
    if (this.value) {
      this.selectedOptions = this.options
        .filter(option => this.value.includes(option.value))
        .map(option => {
          return { value: option.value, order: option.order }
        })
    }
  },
  methods: {
    sortOptions(options) {
      return [...options].sort((a, b) => {
        return a.order - b.order
      })
    },

    onChange(e) {
      if (e.target.checked) {
        this.selectedOptions.push({
          value: e.target.value,
          order: e.target.alt,
        })
        this.selectedOptions = this.sortOptions(this.selectedOptions)
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          option => option.value !== e.target.value
        )
      }
      let selectedValues = this.selectedOptions.map(option => {
        return option.value
      })
      /**
       * When the checkbox input is updated
       *
       * @event input
       * @param {array} values
       */
      this.$emit("input", selectedValues)
    },
  },
}
</script>

<style lang="scss" scoped>
$x-spacing: rem(24);
$y-spacing: rem(8);

.MomInputCheckbox {
  &--variant-vertical,
  &--variant-card {
    & > * {
      @include stack-margin($y-spacing);
    }
  }

  &--variant-horizontal {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -$y-spacing !important;

    & > * {
      @include inline-margin($x-spacing);
      margin-bottom: $y-spacing;
    }
  }
}
</style>
