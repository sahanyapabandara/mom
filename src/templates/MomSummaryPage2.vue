<template>
  <MomLayoutWrapper class="MomSummaryPage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomCard>
      <div class="MomSummaryPage__Content" v-if="$slots.default">
        <!-- @slot Main content -->
        <slot></slot>
      </div>

      <div class="MomSummaryPage__Declaration" v-if="$slots.declaration">
        <!-- @slot Declaration -->
        <slot name="declaration"></slot>
      </div>

      <div class="MomSummaryPage__Declaration2" v-if="$slots.declaration2">
        <!-- @slot Declaration2 -->
        <slot name="declaration2"></slot>
      </div>

      <MomButton
        :text="buttonText || $lang('summarypage.continue')"
        class="MomSummaryPage__Button"
        :disabled="buttonDisabled"
        @click="onContinue"
        :data-qa="$qa('summarypage.continue')"
      />

      <MomLink
        v-if="showDownload"
        :text="$lang('summarypage.download')"
        class="MomSummaryPage__Link"
        type="button"
        icon="download"
        @click="onDownload"
        :data-qa="$qa('summarypage.download')"
      />
    </MomCard>
  </MomLayoutWrapper>
</template>

<script>
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomSummaryPage2",
  release: "2.0.15",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomCard,
    MomButton,
    MomLink,
  },
  props: {
    /**
     * Button text
     */
    buttonText: {
      type: String,
    },

    /**
     * Disable button
     */
    buttonDisabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Show download link
     */
    showDownload: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onContinue(e) {
      /**
       * When the continue button is clicked
       * @event continue
       * @param {object} e
       */
      this.$emit("continue", e)
    },

    onDownload(e) {
      /**
       * When the download link is clicked
       * @event download
       * @param {object} e
       */
      this.$emit("download", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomSummaryPage__Content {
  margin-bottom: rem(48);
}

.MomSummaryPage__Declaration {
  background-color: $color-blue-00;
  padding: rem(24);
  margin-left: rem(-24);
  margin-right: rem(-24);
  margin-bottom: rem(24);

  &:first-child {
    margin-top: rem(-24) !important;
  }

  @media #{$media-query-tablet} {
    padding-left: rem(32);
    padding-right: rem(32);
    margin-left: rem(-32);
    margin-right: rem(-32);
  }

  @media print {
    background-color: $color-white;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }
}

.MomSummaryPage__Declaration2 {
  margin-bottom: rem(24);
}

.MomSummaryPage__Button,
.MomSummaryPage__Link {
  display: flex;
  @include stack-margin(rem(24));

  @media print {
    display: none;
  }
}
</style>

<docs>
### Summary page template

```jsx
<mom-summary-page2
  button-text="Continue to payment"
  show-download
>
  <mom-summary title="Summary section title">
    <mom-summary-item
      label="Summary item label"
      description="Summary item description"
    />
    <mom-summary-item
      label="Summary item label"
      :description="['Summary item description 1', 'Summary item description 2']"
    />
  </mom-summary>

  <mom-summary title="Summary section title">
    <mom-summary-item
      label="Summary item label"
      description="Summary item description"
    />
    <mom-summary-item
      label="Summary item label"
      :description="['Summary item description 1', 'Summary item description 2']"
    />
  </mom-summary>

  <mom-summary
    title="Notification"
    :show-edit="false"
  >
    <mom-form-group label="Email address">
      <mom-input-email />
    </mom-form-group>
  </mom-summary>

  <div slot="declaration">
    <h3 class="mom-h3">Declaration</h3>
    <p class="mom-p">Declaration text:</p>
    <ul class="mom-ul m-b:16" >
      <li>Declaration item 1</li>
      <li>Declaration item 2</li>
      <li>Declaration item 3</li>
    </ul>

    <mom-form-group>
      <mom-input-checkbox-button value="1" checked>Checkbox text</mom-input-checkbox-button>
    </mom-form-group>
  </div>

  <div slot="declaration2">
    <p class="mom-p">Declaration2 text</p>
  </div>
</mom-summary-page2>
```
</docs>
