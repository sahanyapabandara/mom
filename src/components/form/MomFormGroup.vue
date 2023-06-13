<template>
  <component
    :is="type === 'fieldset' ? 'fieldset' : 'div'"
    :class="[
      'MomFormGroup',
      `MomFormGroup--size-${size}`,
      inputState && `MomFormGroup--input-state-${inputState}`,
      showBullet && 'MomFormGroup--show-bullet',
    ]"
  >
    <div v-if="label || $slots.label" class="MomFormGroup__Header">
      <!-- @slot Label -->
      <slot name="label">
        <MomFormLabel
          :type="type === 'fieldset' ? 'legend' : 'label'"
          :id-for-input="idForInput"
          :text="label"
          :size="inlineInput ? 'm' : 's'"
          :tooltip="tooltip"
          :optional="optional"
          :showBullet="showBullet"
        >
          <!-- @slot Tooltip -->
          <slot name="tooltip" slot="tooltip"></slot>
        </MomFormLabel>
      </slot>

      <div v-if="inlineInput" class="MomFormGroup__InlineInput">
        <slot></slot>
      </div>

      <div v-else-if="$slots.modal" class="MomFormGroup__Modal">
        <!-- @slot Modal component -->
        <slot name="modal"></slot>
      </div>
    </div>

    <div v-if="!inlineInput" class="MomFormGroup__Input">
      <!-- @slot Input component -->
      <slot></slot>
    </div>

    <transition name="mom-transition-fade">
      <div v-if="showMessage || showHint" class="MomFormGroup__Footer">
        <MomFormMessage
          v-if="showMessage"
          :messageText="messageText"
          :inputState="inputState"
          :messageType="messageType"
        />
        <div v-else-if="showHint" class="mom-p-s MomFormGroup__Hint">
          <!-- @slot Hint -->
          <slot name="hint">
            <span v-html="$html(hintText)" />
          </slot>
        </div>
      </div>
    </transition>
  </component>
</template>

<script>
import inputId from "../../utils/inputId"
import inputStates from "../../utils/inputStates"
import MomFormLabel from "@/components/form/MomFormLabel.vue"
import MomFormMessage from "@/components/form/_MomFormMessage.vue"

export default {
  name: "MomFormGroup",
  release: "2.0.0",
  lastUpdated: "2.3.7",
  mixins: [inputId, inputStates],
  components: {
    MomFormLabel,
    MomFormMessage,
  },
  props: {
    /**
     * Label
     */
    label: {
      type: String,
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "xl",
      validator: val => ["xs", "xs1", "s", "m", "l", "xl", "full"].includes(val),
    },

    /**
     * Type
     */
    type: {
      type: String,
      validator: val => ["fieldset"].includes(val),
    },

    /**
     * Inline input
     */
    inlineInput: {
      type: Boolean,
      default: false,
    },

    /**
     * Tooltip
     */
    tooltip: {
      type: String,
    },

    /**
     * Hint text
     */
    hintText: {
      type: String,
    },

    /**
     * Message text
     */
    messageText: {
      type: [String, Array],
    },

    /**
     * Message type
     */
    messageType: {
      type: String,
      validator: val => ["list"].includes(val),
    },

    /**
     * Optional
     */
    optional: {
      type: Boolean,
      default: false,
    },

    /**
     * Show bullet
     */
    showBullet: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showMessage() {
      return this.messageText && (this.inputState === "error" || this.inputState === "warning")
    },
    showHint() {
      return this.hintText || this.$slots.hint
    },
  },
}
</script>

<style lang="scss" scoped>
.MomFormGroup {
  @include stack-margin(rem(24));
  min-width: rem(64);
  max-width: 100%;

  @each $i in $form-group-sizes {
    &--size-#{$i} {
      width: component-width($i);
    }
  }
}

.MomFormGroup__Header {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(8);
}

.MomFormGroup__InlineInput {
  width: rem(200);
  margin-left: rem(32);
  flex: none;
}

.MomFormGroup__Modal {
  max-width: rem(200);
  margin-left: rem(32);
  flex: none;
}

.MomFormGroup__Input {
  display: flex;
  flex-direction: column;

  .MomFormGroup--show-bullet > & {
    padding-left: rem(28);
  }

  > * {
    @include stack-margin(rem(8));
  }
}

.MomFormGroup__Footer {
  margin-top: rem(8);

  .MomFormGroup--show-bullet > & {
    padding-left: rem(28);
  }
}

.MomFormGroup__Hint {
  color: $color-cool-grey-70;
}
</style>
