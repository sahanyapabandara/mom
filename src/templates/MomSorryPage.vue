<template>
  <MomLayoutWrapper class="MomSorryPage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomGridContainer class="MomSorryPage_Grid">
      <MomGridColumn size="12" size-md="6">
        <div class="contain">
          <h1 v-if="title" class="mom-h1" v-html="$html(title)" />

          <!-- @slot Main content -->
          <slot></slot>
        </div>
      </MomGridColumn>

      <MomGridColumn size="12" size-md="6">
        <figure class="MomSorryPage__Image" v-html="SorryImg" />
      </MomGridColumn>
    </MomGridContainer>
  </MomLayoutWrapper>
</template>

<script>
import DOMPurify from "dompurify"
import SorrySvg from "@/assets/images/sorry.svg"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomGridContainer from "@/components/gridsystem/MomGridContainer.vue"
import MomGridColumn from "@/components/gridsystem/MomGridColumn.vue"

export default {
  name: "MomSorryPage",
  release: "2.1.36",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomGridContainer,
    MomGridColumn,
  },
  props: {
    /**
     * Title
     */
    title: {
      type: String,
    },
  },
  computed: {
    SorryImg() {
      return DOMPurify.sanitize(SorrySvg).replace("<svg", "<svg focusable='false'")
    },
  },
}
</script>

<style lang="scss" scoped>
.MomSorryPage {
  padding: 0 rem(24) !important;

  @media #{$media-query-tablet} {
    padding: 0 rem(80) !important;
  }
}

.MomSorryPage_Grid {
  flex-direction: column-reverse;

  @media #{$media-query-tablet} {
    flex-direction: row;
    align-items: center;
  }
}

.MomSorryPage__Image {
  width: 100%;
  height: auto;
}
</style>

<docs>
### Sorry page template

```jsx
  <mom-sorry-page
    title="This is sorry page title."
  >
    <p class="mom-p m-b:48">This is description.</p>
    <mom-button text="Action" />
  </mom-sorry-page>
```
</docs>
