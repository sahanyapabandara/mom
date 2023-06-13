<template>
  <footer class="MomPageFooter">
    <MomLayoutWrapper class="MomPageFooter__Content">
      <nav v-if="links.length" class="MomPageFooter__Nav">
        <MomLink
          v-for="(link, i) in links"
          :key="i"
          class="MomPageFooter__Link"
          :text="link.text"
          :href="link.href"
          :target="link.target || (link.href && '_blank')"
          :rel="link.rel || link.text"
          size="s"
          :icon="link.external ? 'open-in-new' : null"
          :icon-position="link.external ? 'right' : null"
        />
      </nav>

      <div class="MomPageFooter__Legal">
        <p class="mom-p-s MomPageFooter__Copyright">
          &copy; {{ currentYear }} {{ $lang("mompagefooter.sggov") }}
        </p>

        <p v-if="lastUpdatedDate" class="mom-p-s MomPageFooter__LastUpdatedDate">
          {{ $lang("mompagefooter.lastupdated") }} {{ lastUpdatedDate }}
        </p>
      </div>
    </MomLayoutWrapper>
  </footer>
</template>

<script>
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomPageFooter",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomLayoutWrapper,
    MomLink,
  },
  props: {
    /**
     * Links <br />
     * `{ text, href, target, rel, external }`
     */
    links: {
      type: Array,
      default: () => {
        return [
          {
            text: "Report vulnerability",
            href: "https://www.tech.gov.sg/report_vulnerability",
            external: true,
          },
          {
            text: "Terms of use",
            href: "https://www.mom.gov.sg/work-pass-eservices-tnc",
          },
          {
            text: "Privacy policy",
            href: "https://www.mom.gov.sg/privacy-statement",
          },
          {
            text: "Contact us",
            href: "https://www.mom.gov.sg/contact-us",
          },
        ]
      },
    },

    /**
     * Last updated date
     */
    lastUpdatedDate: {
      type: String,
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.MomPageFooter {
  background-color: $color-cool-grey-90;
  padding: rem(24) 0;
}

.MomPageFooter__Content {
  @media #{$media-query-desktop} {
    display: flex;
    justify-content: space-between;
  }
}

.MomPageFooter__Nav {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: rem(24);

  @media #{$media-query-desktop} {
    margin-bottom: 0;
  }
}

.MomPageFooter__Link {
  @include inline-margin(rem(12));
  color: $color-white !important;

  &:hover,
  &:active {
    color: $color-blue-10 !important;
  }

  @media #{$media-query-tablet} {
    @include inline-margin(rem(16));
  }
}

.MomPageFooter__Legal {
  @media #{$media-query-desktop} {
    display: flex;
    flex-wrap: wrap;
    margin-left: rem(16);
    justify-content: flex-end;
    align-content: flex-start;
  }
}

.MomPageFooter__Copyright {
  color: $color-white;
  margin-bottom: 0;
  white-space: nowrap;
}

.MomPageFooter__LastUpdatedDate {
  color: $color-white;
  white-space: nowrap;

  @media #{$media-query-desktop} {
    margin-left: rem(4);
  }
}
</style>
