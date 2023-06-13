<template>
  <MomLayoutWrapper :class="['MomAcknowledgementPage', `MomAcknowledgementPage--status-${status}`]">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <MomCard class="MomAcknowledgementPage__ContentCard">
      <div v-if="title" class="MomAcknowledgementPage__Header">
        <MomIcon :icon="status" class="MomAcknowledgementPage__Icon" size="xl" />

        <h2 class="mom-h2 MomAcknowledgementPage__Title" v-html="$html(title)" />
      </div>

      <MomGridContainer>
        <MomGridColumn size="12" sizeXl="8">
          <!-- @slot Main content -->
          <slot></slot>
        </MomGridColumn>

        <MomGridColumn v-if="showPrint || showDownload" size="12" sizeXl="4">
          <MomLink
            v-if="showDownload"
            :text="downloadText || $lang('acknowledgementpage.download')"
            class="MomAcknowlegdementPage__Link"
            type="button"
            icon="download"
            @click="onDownload"
            :data-qa="$qa('acknowledgementpage.download')"
          />

          <MomLink
            v-if="showPrint"
            :text="$lang('acknowledgementpage.print')"
            class="MomAcknowlegdementPage__Link"
            type="button"
            icon="print"
            @click="onPrint"
            :data-qa="$qa('acknowledgementpage.print')"
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
      </MomGridContainer>
    </MomCard>

    <MomCard v-if="actions.length > 0" class="MomAcknowledgementPage__ActionCard">
      <h3 class="mom-h3">{{ $lang("acknowledgementpage.donext") }}</h3>

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
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomAcknowledgementPage",
  release: "2.0.15",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomCard,
    MomGridContainer,
    MomGridColumn,
    MomLink,
    MomIcon,
  },
  props: {
    /**
     * Main title
     */
    title: {
      type: String,
    },

    /**
     * Status
     */
    status: {
      type: String,
      default: "success",
      validator: val => ["success", "info", "error", "warning"].includes(val),
    },

    /**
     * Show download link
     */
    showDownload: {
      type: Boolean,
      default: false,
    },

    /**
     * Download link text
     */
    downloadText: {
      type: String,
    },

    /**
     * Show print link
     */
    showPrint: {
      type: Boolean,
      default: false,
    },

    /**
     * Additional card title
     */
    additionalCardTitle: {
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
  methods: {
    onPrint(e) {
      /**
       * When the print link is clicked
       * @event print
       * @param {object} e
       */
      this.$emit("print", e)
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
.MomAcknowledgementPage__ContentCard {
  min-height: rem(300);
}

.MomAcknowledgementPage__Header {
  display: flex;
  margin-bottom: rem(16);
}

.MomAcknowledgementPage__Icon {
  margin-right: rem(8);

  .MomAcknowledgementPage--status-info & {
    color: $color-blue-60;
  }

  .MomAcknowledgementPage--status-success & {
    color: $color-green-80;
  }

  .MomAcknowledgementPage--status-error & {
    color: $color-red-80;
  }

  .MomAcknowledgementPage--status-warning & {
    color: $color-orange-80;
  }
}

.MomAcknowledgementPage__Title {
  margin-bottom: 0;
}

.MomAcknowlegdementPage__Link {
  display: flex;
  @include stack-margin(rem(12));

  @media print {
    display: none;
  }
}

.MomAcknowledgementPage__ActionCard {
  @media print {
    display: none;
  }
}
</style>

<docs>
### Acknowledgement page template

```jsx
<mom-acknowledgement-page
  title="Acknowledgement page title"
  show-download
  additional-card-title="Card title"
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
    <p class="mom-p">Acknowledgement page content</p>
  </div>

  <div slot="additionalCard">
    <p class="mom-p">Additional card content</p>
  </div>
</mom-acknowledgement-page>
```
</docs>
