<template>
  <nav v-if="links.length > 0" class="MomBreadcrumb">
    <span v-for="(link, i) in links" :key="i" class="MomBreadcrumb__Item">
      <MomLink
        class="MomBreadcrumb__Link"
        :text="link.text"
        :href="link.href"
        :target="link.target || '_blank'"
        :rel="link.rel"
        size="s"
        v-on="{ click: link.action ? link.action : () => {} }"
      />
      <MomIcon icon="chevron-right" size="s" />
    </span>
  </nav>
</template>

<script>
import MomLink from "@/components/link/MomLink.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomBreadcrumb",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomLink,
    MomIcon,
  },
  props: {
    /**
     * Links <br />
     * `{ text, href, target, action, rel}`
     */
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomBreadcrumb {
  display: flex;

  @media print {
    display: none;
  }
}

.MomBreadcrumb__Item {
  display: flex;
  @include inline-margin(rem(8));
}

.MomBreadcrumb__Link {
  margin-right: rem(8);
}
</style>
