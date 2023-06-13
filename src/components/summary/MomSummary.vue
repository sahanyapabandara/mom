<template>
  <div class="MomSummary contain alphareset">
    <div class="MomSummary__Header">
      <h2 class="mom-h2 MomSummary__Title" v-html="$html(title)" />

      <MomLink
        v-if="showEdit"
        class="MomSummary__EditLink"
        :text="$lang('momsummary.edit')"
        type="button"
        icon="edit"
        @click="onEdit"
        :data-qa="$qa('momsummary.edit')"
      />
    </div>

    <!-- @slot Summary section content -->
    <slot>
      <template v-if="useSubsection">
        <MomSummarySubsection
          v-for="(item, i) in items"
          :key="i"
          :title="item.title || ''"
          :items="item.items"
        />
      </template>

      <template v-else>
        <MomSummaryItem
          v-for="(item, i) in items"
          :key="i"
          :label="item.label || ''"
          :description="item.description"
          :descriptionType="item.descriptionType"
          :tooltip="item.tooltip"
          :showBullet="item.showBullet"
        />
      </template>
    </slot>
  </div>
</template>

<script>
import MomLink from "@/components/link/MomLink.vue"
import MomSummarySubsection from "@/components/summary/MomSummarySubsection.vue"
import MomSummaryItem from "@/components/summary/MomSummaryItem.vue"

export default {
  name: "MomSummary",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomLink,
    MomSummarySubsection,
    MomSummaryItem,
  },
  props: {
    /**
     * Title
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Use subsection
     */
    useSubsection: {
      type: Boolean,
      default: false,
    },

    /**
     * Summary subsections <br />
     * `{ title, items}` <br /><br />
     * Summary items <br />
     * `{ label, description, descriptionType, tooltip, showBullet }`
     */
    items: {
      type: Array,
    },

    /**
     * Show edit link
     */
    showEdit: {
      type: Boolean,
      default: true,
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
  },
}
</script>

<style lang="scss" scoped>
.MomSummary {
  @include stack-margin(rem(48));
}

.MomSummary__Header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: rem(16);
  border-bottom: rem(2) solid $color-cool-grey-100;
  margin-bottom: rem(24);
}

.MomSummary__Title {
  margin-bottom: 0;
  word-break: break-word;
}

.MomSummary__EditLink {
  margin-top: rem(4);
  margin-left: rem(16);

  @media #{$media-query-tablet} {
    margin-top: rem(6);
  }

  @media print {
    display: none;
  }
}
</style>
