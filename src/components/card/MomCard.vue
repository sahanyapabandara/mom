<template>
  <div :class="['MomCard', variant && `MomCard--variant-${variant}`]">
    <div v-if="variant === 'requirement'" class="MomCard__RequirementHeader">
      <h3 v-if="title" class="mom-h3 MomCard__RequirementTitle" v-html="$html(title)" />

      <h3 v-if="subtitle" class="mom-h3 MomCard__RequirementTitle" v-html="$html(subtitle)" />
    </div>

    <div
      v-else-if="variant === 'summary' || variant === 'summary-action' || title"
      class="MomCard__Header"
    >
      <div v-if="title || subtitle" class="MomCard__TitleWrapper">
        <h3 v-if="title" class="mom-h3 MomCard__Title">
          <span v-html="$html(title)" /><!--

          --><span v-if="tooltip || $slots.tooltip" class="MomCard__Tooltip">
            <!-- @slot Tooltip -->
            <slot name="tooltip">
              <MomTooltip v-if="tooltip" :tooltipText="tooltip" iconSize="m" />
            </slot>
          </span>
        </h3>

        <h4 v-if="subtitle" class="mom-h4 MomCard__Title" v-html="$html(subtitle)" />
      </div>

      <MomLink
        v-if="variant === 'summary' || variant === 'summary-action'"
        class="MomCard__EditLink"
        :text="$lang('momcard.edit')"
        type="button"
        icon="edit"
        @click="onEdit"
        :data-qa="$qa('momcard.edit')"
      />
    </div>

    <div class="MomCard__Body contain">
      <!-- @slot Content -->
      <slot></slot>
    </div>

    <MomHorizontalLine
      v-if="variant === 'action' || variant === 'summary-action'"
      is-full-width
      is-last-line
    />

    <div v-if="variant === 'action' || variant === 'summary-action'" class="MomCard__Footer">
      <MomButton
        v-if="secondaryButtonText"
        class="MomCard__Action"
        variant="secondary"
        :text="secondaryButtonText"
        :disabled="secondaryButtonDisabled"
        :icon="secondaryButtonIcon"
        @click="onSecondaryAction"
        :data-qa="$qa('momcard.secondaryAction')"
      />

      <MomButton
        class="MomCard__Action"
        :text="buttonText || $lang('momcard.continue')"
        :disabled="buttonDisabled"
        :icon="buttonIcon"
        @click="onContinue"
        :data-qa="$qa('momcard.continue')"
      />
    </div>
  </div>
</template>

<script>
import MomLink from "@/components/link/MomLink.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomCard",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomLink,
    MomButton,
    MomHorizontalLine,
    MomTooltip,
  },
  props: {
    /**
     * Variant
     */
    variant: {
      type: String,
      validator: val => ["action", "summary", "summary-action", "requirement"].includes(val),
    },

    /**
     * Title
     */
    title: {
      type: String,
    },

    /**
     * Subtitle
     */
    subtitle: {
      type: String,
    },

    /**
     * Tooltip text
     */
    tooltip: {
      type: String,
    },

    /**
     * Continue button text
     */
    buttonText: {
      type: String,
    },

    /**
     * Continue button icon
     */
    buttonIcon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Disable continue button
     */
    buttonDisabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Secondary button text
     */
    secondaryButtonText: {
      type: String,
    },

    /**
     * Secondary button icon
     */
    secondaryButtonIcon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Disable Secondary button
     */
    secondaryButtonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onEdit(e) {
      /**
       * When the edit link is clicked
       * @event edit
       * @param {object} e
       */
      this.$emit("edit", e)
    },

    onContinue(e) {
      /**
       * When the continue button is clicked
       * @event continue
       * @param {object} e
       */
      this.$emit("continue", e)
    },

    onSecondaryAction(e) {
      /**
       * When the secondary button is clicked
       * @event secondaryAction
       * @param {object} e
       */
      this.$emit("secondaryAction", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomCard {
  background-color: $color-white;
  box-shadow: $box-shadow-s;
  padding: rem(24);
  @include stack-margin(rem(24));

  &--variant-requirement {
    padding: 0 !important;
    border: rem(1) solid $color-cool-grey-20;
    border-radius: $border-radius-corner-l;
    height: 100%;
    min-height: rem(200);
    overflow: hidden;
    box-shadow: none;
  }

  @media #{$media-query-tablet} {
    padding: rem(24) rem(32);
    border-radius: $border-radius-corner-l;
  }

  @media print {
    padding: 0;
    box-shadow: none;
  }
}

.MomCard__RequirementHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: rem(11) rem(23) rem(12);
  min-height: rem(71);
  background-color: $color-blue-00;

  @media #{$media-query-tablet} {
    padding: rem(11) rem(31) rem(12);
  }
}

.MomCard__RequirementTitle {
  @include line-height(m);
  margin-bottom: 0;
  text-align: center;
  word-break: break-word;
}

.MomCard__Header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: rem(16);
}

.MomCard__TitleWrapper {
  .MomCard--variant-summary &,
  .MomCard--variant-summary-action & {
    margin-right: rem(16);
  }
}

.MomCard__Title {
  margin-bottom: 0;
  word-break: break-word;
}

.MomCard__Tooltip {
  display: inline-flex;
  vertical-align: bottom;
  margin: rem(2) 0 rem(2) rem(4);
}

.MomCard__EditLink {
  margin-top: rem(2);
  margin-left: auto;

  @media print {
    display: none;
  }
}

.MomCard__Body {
  .MomCard--variant-requirement & {
    padding: rem(24) rem(31) rem(31);
  }
}

.MomCard__Footer {
  @media #{$media-query-tablet} {
    display: flex;
  }
}

.MomCard__Action {
  @include stack-margin(rem(16));

  @media #{$media-query-tablet} {
    margin-bottom: 0;
    @include inline-margin(rem(16));
  }

  @media print {
    display: none;
  }
}
</style>
