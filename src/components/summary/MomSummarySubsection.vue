<template>
  <div class="MomSummarySubsection contain alphareset">
    <h3 v-if="title" class="mom-h3" v-html="$html(title)" />

    <!-- @slot Summary subsection content -->
    <slot>
      <MomSummaryItem
        v-for="(item, i) in items"
        :key="i"
        :label="item.label || ''"
        :description="item.description"
        :descriptionType="item.descriptionType"
        :tooltip="item.tooltip"
        :showBullet="item.showBullet"
      />
    </slot>
  </div>
</template>

<script>
import MomSummaryItem from "@/components/summary/MomSummaryItem.vue"

export default {
  name: "MomSummarySubsection",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomSummaryItem,
  },
  props: {
    /**
     * Title
     */
    title: {
      type: String,
    },

    /**
     * Summary items <br />
     * `{ label, description, descriptionType, tooltip, showBullet }`
     */
    items: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomSummarySubsection {
  @include stack-margin(rem(32));

  // to be removed
  :not(.MomSummary__Header):not(.MomSummarySubsection) + & {
    margin-top: rem(32);
  }
}
</style>
