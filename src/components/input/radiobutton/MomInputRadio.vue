<template>
  <div :class="['MomInputRadio', `MomInputRadio--variant-${variant}`]">
    <component
      :is="variant === 'card' ? 'MomInputRadioCard' : 'MomInputRadioButton'"
      v-for="(option, i) in options"
      :key="i"
      :value="option.value"
      :name="name"
      :label="option.label"
      :idForInput="option.id"
      :checked="selectedValue === option.value"
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
import MomInputRadioButton from "@/components/input/radiobutton/MomInputRadioButton.vue"
import MomInputRadioCard from "@/components/input/radiobutton/MomInputRadioCard.vue"

export default {
  name: "MomInputRadio",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [selectionStates],
  components: {
    MomInputRadioButton,
    MomInputRadioCard,
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
     * `{ value, id, label, description, supportingText, disabled }`
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
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedValue: null,
    }
  },
  watch: {
    value() {
      this.selectedValue = this.value
    },
  },
  mounted() {
    if (this.value) {
      this.selectedValue = this.value
    }
  },
  methods: {
    onChange(e) {
      this.selectedValue = e.target.value
      /**
       * When the radio input is updated
       *
       * @event input
       * @param {string} value
       */
      this.$emit("input", this.selectedValue)
    },
  },
}
</script>

<style lang="scss" scoped>
$x-spacing: rem(24);
$y-spacing: rem(8);

.MomInputRadio {
  &--variant-vertical,
  &--variant-card {
    > * {
      @include stack-margin($y-spacing);
    }
  }

  &--variant-horizontal {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -$y-spacing !important;

    > * {
      @include inline-margin($x-spacing);
      margin-bottom: $y-spacing;
    }
  }
}
</style>
