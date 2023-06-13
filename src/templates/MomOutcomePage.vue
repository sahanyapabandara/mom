<template>
  <MomLayoutWrapper class="MomOutcomePage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomCard class="MomOutcomePage__ContentCard">
      <h2 v-if="title" class="mom-h2" v-html="$html(title)" />

      <MomGridContainer>
        <MomGridColumn size="12" sizeXl="8">
          <!-- @slot Main content -->
          <slot></slot>
        </MomGridColumn>

        <MomGridColumn v-if="files.length > 0" size="12" sizeXl="4">
          <MomLink
            v-for="(file, i) in files"
            :key="i"
            :text="file.name"
            class="MomOutcomePage__File"
            type="button"
            :icon="file.type"
            iconPosition="right"
            v-on="{ click: file.action ? file.action : () => {} }"
          />
        </MomGridColumn>
      </MomGridContainer>
    </MomCard>

    <MomCard v-if="$slots.additionalCard" :title="additionalCardTitle">
      <MomGridContainer>
        <MomGridColumn size="12" sizeXl="8">
          <!-- @slot Additional card content -->
          <slot name="additionalCard"></slot>
        </MomGridColumn>

        <MomGridColumn v-if="additionalFiles.length > 0" size="12" sizeXl="4">
          <MomLink
            v-for="(file, i) in additionalFiles"
            :key="i"
            :text="file.name"
            class="MomOutcomePage__File"
            type="button"
            :icon="file.type"
            iconPosition="right"
            v-on="{ click: file.action ? file.action : () => {} }"
          />
        </MomGridColumn>
      </MomGridContainer>
    </MomCard>

    <MomCard v-if="$slots.additionalCard2" :title="additionalCard2Title">
      <MomGridContainer>
        <MomGridColumn size="12" sizeXl="8">
          <!-- @slot Additional card content -->
          <slot name="additionalCard2"></slot>
        </MomGridColumn>
      </MomGridContainer>
    </MomCard>

    <MomCard v-if="actions.length > 0" class="MomOutcomePage__ActionCard">
      <h3 class="mom-h3">{{ $lang("outcomepage.relatedlinks") }}</h3>

      <ul class="mom-ul">
        <li v-for="(action, i) in actions" :key="i">
          <MomLink
            display="inline"
            :text="action.text"
            :href="action.href"
            :target="action.target || '_blank'"
            :rel="action.rel"
            v-on="{ click: action.action ? action.action : () => {} }"
          />
        </li>
      </ul>
    </MomCard>
  </MomLayoutWrapper>
</template>

<script>
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomGridContainer from "@/components/gridsystem/MomGridContainer.vue"
import MomGridColumn from "@/components/gridsystem/MomGridColumn.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomOutcomePage",
  release: "2.3.5",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomCard,
    MomGridContainer,
    MomGridColumn,
    MomLink,
  },
  props: {
    /**
     * Page title
     */
    title: {
      type: String,
    },

    /**
     * Files <br />
     * `{ name, type, action }`
     */
    files: {
      type: Array,
      default: () => {
        return []
      },
    },

    /**
     * Additional card title
     */
    additionalCardTitle: {
      type: String,
    },

    /**
     * Additional files <br />
     * `{ name, type, action }`
     */
    additionalFiles: {
      type: Array,
      default: () => {
        return []
      },
    },

    /**
     * Additional card 2 title
     */
    additionalCard2Title: {
      type: String,
    },

    /**
     * Action links <br />
     * `{ text, href, target, rel, action }`
     */
    actions: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.MomOutcomePage__ContentCard {
  min-height: rem(300);
}

.MomOutcomePage__File {
  display: flex;
  @include stack-margin(rem(12));

  @media print {
    display: none;
  }
}

.MomOutcomePage__ActionCard {
  @media print {
    display: none;
  }
}
</style>

<docs>
### Outcome page template

```jsx
<mom-outcome-page
  title="Outcome page title"
  :files="[
    {
      name: 'File 1',
      type: 'pdf',
    },
    {
      name: 'File 2',
      type: 'pdf',
    },
  ]"
  additional-card-title="Card title"
  :additionalFiles="[
    {
      name: 'Additional file 1',
      type: 'pdf',
    },
    {
      name: 'Additional file 2',
      type: 'pdf',
    },
  ]"
  additional-card2-title="Card title"
  :actions="[
    {
      text: 'Action 1',
      href: '#',
    },
    {
      text: 'Action 2',
      href: '#',
    },
  ]"
>
  <div class="bgc:blue-0 m-b:24 p:24">
    <p class="mom-p">Outcome page content</p>
  </div>

  <div slot="additionalCard">
    <p class="mom-p">Additional card content</p>
  </div>

  <div slot="additionalCard2">
    <p class="mom-p">Additional card 2 content</p>
  </div>
</mom-outcome-page>
```
</docs>
