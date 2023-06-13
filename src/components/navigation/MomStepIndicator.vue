<template>
  <div v-if="steps.length > 0" class="MomStepIndicator">
    <span
      v-for="(step, i) in steps"
      :key="i"
      :class="['MomStepIndicator__Step', `MomStepIndicator__Step--${getStatus(i)}-step`]"
    >
      <button
        v-if="getStatus(i) === 'completed'"
        class="MomStepIndicator__Button"
        v-on="{ click: step.action ? step.action : () => {} }"
      >
        <MomIcon icon="success" class="MomStepIndicator__Icon" />
      </button>

      <span v-else class="MomStepIndicator__StepNumber">{{ i + 1 }}</span>

      <MomLink
        :text="step.label"
        type="button"
        class="MomStepIndicator__StepLabel"
        :disabled="getStatus(i) !== 'completed'"
        v-on="{ click: step.action ? step.action : () => {} }"
      />
    </span>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomStepIndicator",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomLink,
  },
  props: {
    /**
     * Steps <br />
     * `{ label, action }`
     */
    steps: {
      type: Array,
      required: true,
    },

    /**
     * Current step
     */
    currentStep: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    currentStepInt() {
      return this.currentStep &&
        Number(this.currentStep) &&
        Number.isInteger(Number(this.currentStep)) &&
        Number(this.currentStep) > 0
        ? Number(this.currentStep)
        : 0
    },
  },
  methods: {
    getStatus(index) {
      if (index === this.currentStepInt) {
        return "current"
      } else if (index < this.currentStepInt) {
        return "completed"
      } else if (index > this.currentStepInt) {
        return "disabled"
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$color-completed: $color-green-70;
$color-completed-hover: $color-green-80;
$color-current: $color-blue-50;
$color-disabled: $color-grey-50;

.MomStepIndicator {
  padding: 0 rem(24);
  @include stack-margin(rem(24));

  @media #{$media-query-tablet} {
    display: flex;
    padding: 0;
  }

  @media print {
    display: none;
  }
}

.MomStepIndicator__Step {
  display: flex;
  position: relative;
  @include stack-margin(rem(8));

  @media #{$media-query-tablet} {
    flex-direction: column;
    flex: 1;
    margin-bottom: 0;
    max-width: rem(200);
    @include inline-margin(rem(16));

    &:before {
      content: "";
      position: absolute;
      width: calc(100% - #{rem(4)});
      top: rem(11);
      left: calc(-100% + #{rem(6)});
    }

    &--completed-step {
      &:before {
        border-top: rem(2) solid $color-completed;
      }
    }

    &--current-step {
      &:before {
        border-top: rem(2) solid $color-current;
      }
    }

    &--disabled-step {
      &:before {
        border-top: rem(2) solid $color-disabled;
      }
    }

    &:first-child {
      &:before {
        content: none;
      }
    }
  }
}

.MomStepIndicator__Button {
  display: flex;
  margin-right: rem(8);

  @media #{$media-query-tablet} {
    margin-right: 0;
  }
}

.MomStepIndicator__Icon {
  color: $color-completed;

  .MomStepIndicator__Step:hover & {
    color: $color-completed-hover;
  }
}

.MomStepIndicator__StepNumber {
  @include font-size(s);
  @include line-height(s);
  color: $color-white;
  font-weight: $font-weight-semibold;
  width: rem(20);
  height: rem(20);
  margin: rem(2) rem(10) rem(2) rem(2);
  border-radius: $border-radius-circle;
  text-align: center;
  flex: none;

  .MomStepIndicator__Step--current-step & {
    background-color: $color-current;
  }

  .MomStepIndicator__Step--disabled-step & {
    background-color: $color-disabled;
  }

  @media #{$media-query-tablet} {
    margin: rem(2);
  }
}

.MomStepIndicator__StepLabel {
  .MomStepIndicator__Step--completed-step & {
    color: $color-cool-grey-100;

    &:hover {
      color: $color-blue-80;
    }

    &:active {
      color: $color-blue-90;
    }
  }

  .MomStepIndicator__Step--completed-step:hover & {
    color: $color-blue-80;
  }

  .MomStepIndicator__Step--current-step & {
    cursor: default;
    font-weight: $font-weight-semibold;
    color: $color-cool-grey-100 !important;
  }
}
</style>
