<template>
  <MomLayoutWrapper class="MomLandingPage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomCard>
      <h2 v-if="title" class="mom-h2 MomLandingPage__Title" v-html="$html(title)" />

      <div class="MomLandingPage__Content" v-if="$slots.default">
        <!-- @slot Main content -->
        <slot></slot>
      </div>

      <div class="MomLandingPage__Note" v-if="$slots.note">
        <!-- @slot Note content -->
        <slot name="note"></slot>
      </div>

      <div class="MomLandingPage__Declaration" v-if="$slots.declaration">
        <!-- @slot Declaration -->
        <slot name="declaration"></slot>
      </div>

      <p class="MomLandingPage__Duration" v-if="duration">
        <MomIcon icon="time" />
        <span>{{ $lang("landingpage.duration1") }}</span>
        <strong>{{ duration }}</strong>
        <span>{{ $lang("landingpage.duration2") }}</span>
      </p>

      <MomButton
        class="MomLandingPage__Button"
        :text="buttonText || $lang('landingpage.start')"
        :disabled="buttonDisabled"
        @click="onStart"
        :data-qa="$qa('landingpage.start')"
      />
    </MomCard>
  </MomLayoutWrapper>
</template>

<script>
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomButton from "@/components/button/MomButton.vue"

export default {
  name: "MomLandingPage",
  release: "2.0.15",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomCard,
    MomIcon,
    MomButton,
  },
  props: {
    /**
     * Main title
     */
    title: {
      type: String,
    },

    /**
     * Process duration
     */
    duration: {
      type: String,
    },

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
  },
  methods: {
    onStart(e) {
      /**
       * When the button is clicked
       * @event start
       * @param {object} e
       */
      this.$emit("start", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomLandingPage__Title {
  margin-bottom: rem(24);
}

.MomLandingPage__Content {
  margin-bottom: rem(24);
}

.MomLandingPage__Note {
  background-color: $color-cool-grey-00;
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

.MomLandingPage__Duration {
  color: $color-cool-grey-50;
  margin-bottom: rem(24);
}

.MomLandingPage__Declaration {
  margin-bottom: rem(24);
}

.MomLandingPage__Button {
  display: flex;

  @media print {
    display: none;
  }
}
</style>

<docs>
### Landing page template

```jsx
<mom-landing-page
  title="Landing page title"
  duration="30 minutes"
>
  <mom-grid-container>
    <mom-grid-column size="12" size-lg="6">
      <mom-card title="Card title 1" variant="requirement">
        Card 1 
      </mom-card>
    </mom-grid-column>

    <mom-grid-column size="12" size-lg="6">
      <mom-card title="Card title 2" variant="requirement">
        Card 2
      </mom-card>
    </mom-grid-column>
  </mom-grid-container>

  <div slot="note">
    <h3 class="mom-h3">Things to note</h3>
    <ul class="mom-ul">
      <li>Note 1</li>
      <li>Note 2</li>
    </ul>
  </div>

  <div slot="declaration">
    <mom-form-group>
      <mom-input-checkbox-button value="1" checked>Declaration checkbox</mom-input-checkbox-button>
    </mom-form-group>
  </div>
</mom-landing-page>
```
</docs>
