<template>
  <div
    :class="[
      'MomInputRadioButton',
      type === 'card' && 'MomInputRadioCard',
      !disabled && inputState && `MomInputRadioButton--input-state-${inputState}`,
      checked && 'MomInputRadioButton--is-checked',
      disabled && 'MomInputRadioButton--is-disabled',
      hideText && 'MomInputRadioButton--hide-text',
    ]"
  >
    <input
      ref="input"
      :id="idForInput"
      type="radio"
      class="MomInputRadioButton__Input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />

    <label class="MomInputRadioButton__Label" :for="idForInput" tabindex="-1">
      <MomIcon
        class="MomInputRadioButton__LabelIcon"
        :icon="checked ? 'radio-button-checked' : 'radio-button'"
      />

      <div class="MomInputRadioButton__LabelContent">
        <div class="MomInputRadioButton__LabelMain">
          <p class="MomInputRadioButton__LabelText">
            <!-- @slot Label -->
            <slot>
              <span v-if="label" v-html="$html(label)" />
            </slot>
          </p>

          <p v-if="description || $slots.description" class="MomInputRadioButton__LabelDescription">
            <!-- @slot Description -->
            <slot name="description">
              <span v-if="description" v-html="$html(description)" />
            </slot>
          </p>
        </div>

        <p
          v-if="type && type === 'card' && (supportingText || $slots.supportingText)"
          class="MomInputRadioButton__LabelSupporting"
        >
          <!-- @slot Supporting text -->
          <slot name="supportingText">
            <span v-if="supportingText" v-html="$html(supportingText)" />
          </slot>
        </p>
      </div>
    </label>
  </div>
</template>

<script>
import inputId from "@/utils/inputId"
import selectionStates from "@/utils/selectionStates"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomInputRadioButton",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, selectionStates],
  components: {
    MomIcon,
  },
  props: {
    /**
     * Input value
     */
    value: {
      type: String,
      required: true,
    },

    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Checked
     */
    checked: {
      type: Boolean,
      default: false,
    },

    /**
     * Label
     */
    label: {
      type: String,
    },

    /**
     * Description
     */
    description: {
      type: String,
    },

    /**
     * Supporting text
     */
    supportingText: {
      type: String,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Hide label
     * @ignore
     */
    hideText: {
      type: Boolean,
      default: false,
    },

    /**
     * Radio button type
     * @ignore
     */
    type: {
      type: String,
      validator: val => ["card"].includes(val),
    },
  },
  methods: {
    onChange(e) {
      /**
       * When the radio button is change
       *
       * @event change
       * @param {object} e
       */
      this.$emit("change", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomInputRadioButton {
  display: flex;
}

.MomInputRadioButton__Input {
  @include visually-hidden;
}

.MomInputRadioButton__Label {
  display: flex;

  .MomInputRadioButton--is-disabled & {
    cursor: not-allowed;
  }

  .MomInputRadioButton__Input:focus + & {
    outline: $focus-outline;

    .remove-outline & {
      outline: none;
    }
  }
}

.MomInputRadioButton__LabelIcon {
  color: $input-icon;
  margin-right: rem(8);

  .MomInputRadioButton--is-checked & {
    color: $input-icon-checked;
  }

  &:hover {
    color: $input-icon-hover;
  }

  .MomInputRadioButton--input-state-error & {
    color: $input-icon-error;
  }

  .MomInputRadioButton--input-state-warning & {
    color: $input-icon-warning;
  }

  .MomInputRadioButton--is-disabled & {
    color: $input-icon-disabled;
  }

  .MomInputRadioButton--hide-text & {
    margin-right: 0;
  }
}

.MomInputRadioButton__LabelMain {
  display: flex;
}

.MomInputRadioButton__LabelText {
  @include font-size(m);
  @include line-height(m);
  @include inline-margin(rem(4));

  .MomInputRadioButton--is-disabled & {
    color: $input-text-disabled;
  }

  .MomInputRadioButton--hide-text & {
    @include visually-hidden;
  }
}

.MomInputRadioButton__LabelDescription {
  @include font-size(m);
  @include line-height(m);
  color: $color-cool-grey-70;

  .MomInputRadioButton--is-disabled & {
    color: $color-grey-40;
  }
}
</style>
