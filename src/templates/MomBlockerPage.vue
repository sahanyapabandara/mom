<template>
  <MomLayoutWrapper class="MomBlockerPage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomGridContainer class="MomBlockerPage_Grid">
      <MomGridColumn size="12" size-md="5">
        <div class="contain">
          <h1
            v-if="title"
            class="mom-h1 MomBlockerPage__Title"
            v-html="$html(title)"
            :data-qa="$qa('blockerpage.title')"
          />

          <MomCard v-for="i in blockerCount" :key="i" class="MomBlockerPage__Blocker">
            <!-- @slot Blocker -->
            <slot :name="`blocker${i}`"></slot>
          </MomCard>
        </div>
      </MomGridColumn>

      <MomGridColumn size="12" size-md="7">
        <figure class="MomBlockerPage__Image" v-html="BlockerImg" />
      </MomGridColumn>
    </MomGridContainer>
  </MomLayoutWrapper>
</template>

<script>
import DOMPurify from "dompurify"
import BlockerSvg from "@/assets/images/blocker.svg"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomGridContainer from "@/components/gridsystem/MomGridContainer.vue"
import MomGridColumn from "@/components/gridsystem/MomGridColumn.vue"

export default {
  name: "MomBlockerPage",
  release: "2.1.36",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomCard,
    MomGridContainer,
    MomGridColumn,
  },
  props: {
    /**
     * Blocker page title
     */
    title: {
      type: String,
    },

    /**
     * Number of blockers
     */
    blocker: {
      type: [Number, String],
      default: 1,
    },
  },
  computed: {
    BlockerImg() {
      return DOMPurify.sanitize(BlockerSvg).replace("<svg", "<svg focusable='false'")
    },
    blockerCount() {
      return this.blocker &&
        Number(this.blocker) &&
        Number.isInteger(Number(this.blocker)) &&
        Number(this.blocker) > 0
        ? Number(this.blocker)
        : 1
    },
  },
}
</script>

<style lang="scss" scoped>
.MomBlockerPage {
  padding: 0 rem(24) !important;

  @media #{$media-query-tablet} {
    padding: 0 rem(80) !important;
  }
}

.MomBlockerPage_Grid {
  flex-direction: column-reverse;

  @media #{$media-query-tablet} {
    flex-direction: row;
    align-items: center;
  }
}

.MomBlockerPage__Title {
  margin-bottom: rem(48);
}

.MomBlockerPage__Blocker {
  @include stack-margin(rem(16));
  padding: rem(32);
  box-shadow: $box-shadow-s;
  border-radius: $border-radius-corner;
}

.MomBlockerPage__Image {
  width: 100%;
  height: auto;
}
</style>

<docs>
### Blocker page template

```jsx
  <mom-blocker-page
    title="This is blocker page title."
    blocker="2"
  >
    <div slot="blocker1">
      <h3 class="mom-h3">This is blocker title.</h3>
      <p class="mom-p m-b:32">This is a blocker description.</p>
      <mom-button text="Action" />
    </div>

    <div slot="blocker2">
      <h3 class="mom-h3">This is blocker title.</h3>
      <p class="mom-p m-b:32">This is a blocker description.</p>
      <mom-button text="Action" />
    </div>
  </mom-blocker-page>
```
</docs>
