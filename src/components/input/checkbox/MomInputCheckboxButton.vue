<template>
  <div
    :class="[
      'MomInputCheckboxButton',
      type === 'card' && 'MomInputCheckboxCard',
      !disabled && inputState && `MomInputCheckboxButton--input-state-${inputState}`,
      checked && 'MomInputCheckboxButton--is-checked',
      disabled && 'MomInputCheckboxButton--is-disabled',
      hideText && 'MomInputCheckboxButton--hide-text',
    ]"
  >
    <input
      ref="input"
      :id="idForInput"
      type="checkbox"
      class="MomInputCheckboxButton__Input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      :alt="order"
      @change="onChange"
    />

    <label class="MomInputCheckboxButton__Label" :for="idForInput" tabindex="-1">
      <MomIcon
        class="MomInputCheckboxButton__LabelIcon"
        :icon="checked ? 'checkbox-checked' : 'checkbox'"
      />

      <div class="MomInputCheckboxButton__LabelContent">
        <div class="MomInputCheckboxButton__LabelMain">
          <p class="MomInputCheckboxButton__LabelText">
            <!-- @slot Label -->
            <slot>
              <span v-if="label" v-html="$html(label)" />
            </slot>
          </p>

          <p
            v-if="description || $slots.description"
            class="MomInputCheckboxButton__LabelDescription"
          >
            <!-- @slot Description -->
            <slot name="description">
              <span v-if="description" v-html="$html(description)" />
            </slot>
          </p>
        </div>

        <p
          v-if="type && type === 'card' && (supportingText || $slots.supportingText)"
          class="MomInputCheckboxButton__LabelSupporting"
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
  name: "MomInputCheckboxButton",
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
     * Checkbox type
     * @ignore
     */
    type: {
      type: String,
      validator: val => ["card"].includes(val),
    },

    /**
     * Order
     * @ignore
     */
    order: {
      type: Number,
    },
  },
  methods: {
    onChange(e) {
      /**
       * When the checkbox state is changed
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
.MomInputCheckboxButton {
  display: flex;
}

.MomInputCheckboxButton__Input {
  @include visually-hidden;
}

.MomInputCheckboxButton__Label {
  display: flex;

  .MomInputCheckboxButton--is-disabled & {
    cursor: not-allowed;
  }

  .MomInputCheckboxButton__Input:focus + & {
    outline: $focus-outline;

    .remove-outline & {
      outline: none;
    }
  }
}

.MomInputCheckboxButton__LabelIcon {
  color: $input-icon;
  margin-right: rem(8);

  .MomInputCheckboxButton--is-checked & {
    color: $input-icon-checked;
  }

  &:hover {
    color: $input-icon-hover;
  }

  .MomInputCheckboxButton--input-state-error & {
    color: $input-icon-error;
  }

  .MomInputCheckboxButton--input-state-warning & {
    color: $input-icon-warning;
  }

  .MomInputCheckboxButton--is-disabled & {
    color: $input-icon-disabled;
  }

  .MomInputCheckboxButton--hide-text & {
    margin-right: 0;
  }
}

.MomInputCheckboxButton__LabelMain {
  display: flex;
}

.MomInputCheckboxButton__LabelText {
  @include font-size(m);
  @include line-height(m);
  @include inline-margin(rem(4));

  .MomInputCheckboxButton--is-disabled & {
    color: $input-text-disabled;
  }

  .MomInputCheckboxButton--hide-text & {
    @include visually-hidden;
  }
}

.MomInputCheckboxButton__LabelDescription {
  @include font-size(m);
  @include line-height(m);
  color: $color-cool-grey-70;

  .MomInputCheckboxButton--is-disabled & {
    color: $color-grey-40;
  }
}
</style>
