<template>
  <header
    :class="[
      'MomPageHeader',
      (subtitle || hasSaveButton) && 'MomPageHeader--has-stickybar',
      isSticky && 'MomPageHeader--is-sticky',
    ]"
    :style="isSticky && { 'padding-bottom': `${stickybarHeight / 16}rem` }"
  >
    <div class="MomPageHeader__Masthead">
      <MomLayoutWrapper>
        <a
          class="MomPageHeader__MastheadLink"
          href="https://www.gov.sg/"
          target="_blank"
          rel="Singapore Government"
        >
          <figure v-html="GovLogo" />
          <span class="mom-p-s MomPageHeader__MastheadDescriptor">{{
            $lang("mompageheader.masthead")
          }}</span>
        </a>
      </MomLayoutWrapper>
    </div>

    <div class="MomPageHeader__MainWrapper">
      <MomLayoutWrapper class="MomPageHeader__Main">
        <a
          class="MomPageHeader__LogoLink"
          href="https://www.mom.gov.sg/"
          target="_blank"
          rel="Ministry of Manpower"
        >
          <figure v-html="MOMLogo" />
        </a>

        <div v-if="allowLogout" class="MomPageHeader__User">
          <div v-if="userName || companyName" class="MomPageHeader__UserInfo">
            <p
              v-if="userName"
              class="mom-p-s MomPageHeader__UserName"
              :data-qa="$qa('mompageheader.username')"
            >
              {{ userName }}
            </p>
            <MomTooltip v-if="companyName" class="MomPageHeader__CompanyTooltip">
              <div slot="toggle" class="MomPageHeader__Company">
                <p
                  class="mom-p-s MomPageHeader__CompanyName"
                  :data-qa="$qa('mompageheader.companyname')"
                >
                  {{ branchName ? companyName + "/" + branchName : companyName }}
                </p>
                <p
                  v-if="companyUen"
                  class="mom-p-s MomPageHeader__CompanyUen"
                  :data-qa="$qa('mompageheader.companyuen')"
                >
                  {{ companyUen }}
                </p>
              </div>

              <p class="mom-p-s">{{ companyName }}<br />{{ branchName }}<br />{{ companyUen }}</p>
            </MomTooltip>
          </div>

          <MomLink
            class="MomPageHeader__LogoutLink"
            :text="$lang('mompageheader.logout')"
            type="button"
            icon="log-out"
            @click="onLogout"
            hide-text
          />

          <MomLink
            class="MomPageHeader__LogoutLink--tablet"
            :text="$lang('mompageheader.logout')"
            type="button"
            icon="log-out"
            @click="onLogout"
            :data-qa="$qa('mompageheader.logout')"
          />
        </div>

        <MomLanguageDropdown
          v-else-if="showLanguage && languages && languages.length > 0"
          :languages="languages"
          :currentLanguage="currentLanguage"
          @select="onSelectLanguage"
        />
      </MomLayoutWrapper>
    </div>

    <div v-if="title || (breadcrumb && breadcrumb.length > 0)" class="MomPageHeader__TitleWrapper">
      <MomLayoutWrapper>
        <MomHorizontalLine class="MomPageHeader__HorizontalLine" />

        <MomBreadcrumb
          v-if="breadcrumb && breadcrumb.length > 0"
          class="MomPageHeader__Breadcrumb"
          :links="breadcrumb"
        />

        <h1 v-if="title" class="mom-h1 MomPageHeader__Title" v-html="$html(title)" />
      </MomLayoutWrapper>
    </div>

    <div v-if="subtitle || hasSaveButton" ref="stickybar" class="MomPageHeader__StickyBarWrapper">
      <MomLayoutWrapper class="MomPageHeader__StickyBar">
        <div v-if="subtitle || $slots.subheader" class="MomPageHeader__SubtitleWrapper">
          <!-- @slot Subheader -->
          <slot name="subheader">
            <MomTooltip :tooltipText="subtitle" class="MomPageHeader__SubtitleTooltip">
              <p slot="toggle" class="mom-p MomPageHeader__Subtitle" v-html="$html(subtitle)" />
            </MomTooltip>
          </slot>
        </div>

        <div v-if="hasSaveButton" class="MomPageHeader__SaveInfo">
          <p
            v-if="lastSavedTime"
            class="mom-p-s MomPageHeader__LastSavedTime"
            :data-qa="$qa('mompageheader.lastsaved')"
          >
            {{ $lang("mompageheader.lastsaved") }} {{ lastSavedTime }}
          </p>

          <MomButton
            class="MomPageHeader__SaveButton"
            :text="saveText || $lang('mompageheader.savedraft')"
            :icon="saveIcon"
            size="s"
            variant="secondary"
            :disabled="!allowSave"
            @click="onSave"
            :data-qa="$qa('mompageheader.savedraft')"
          />
        </div>
      </MomLayoutWrapper>
    </div>
  </header>
</template>

<script>
import DOMPurify from "dompurify"
import MOMLogoSvg from "@/assets/images/logo-mom.svg"
import GovLogoSvg from "@/assets/images/logo-singapore-gov.svg"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"
import MomBreadcrumb from "@/components/navigation/MomBreadcrumb.vue"
import MomLanguageDropdown from "@/components/language/MomLanguageDropdown.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomPageHeader",
  release: "2.0.0",
  lastUpdated: "2.3.7",
  components: {
    MomLayoutWrapper,
    MomHorizontalLine,
    MomBreadcrumb,
    MomLanguageDropdown,
    MomLink,
    MomButton,
    MomTooltip,
  },
  props: {
    /**
     * Main title
     */
    title: {
      type: String,
    },

    /**
     * Subtitle
     */
    subtitle: {
      type: String,
    },

    /**
     * Breadcrumb links <br />
     * `{ text, href, target, action, rel }`
     */
    breadcrumb: {
      type: Array,
    },

    /**
     * Show logout button
     */
    allowLogout: {
      type: Boolean,
      default: false,
    },

    /**
     * User name
     */
    userName: {
      type: String,
    },

    /**
     * Company name
     */
    companyName: {
      type: String,
    },

    /**
     * Company branch
     */
    branchName: {
      type: String,
    },

    /**
     * Company UEN
     */
    companyUen: {
      type: String,
    },

    /**
     * Show languages option
     */
    showLanguage: {
      type: Boolean,
      default: false,
    },

    /**
     * Languages <br />
     * `{ text, code }`
     */
    languages: {
      type: Array,
    },

    /**
     * Current language code
     */
    currentLanguage: {
      type: String,
    },

    /**
     * Show save button
     */
    hasSaveButton: {
      type: Boolean,
      default: false,
    },

    /**
     * Save button text
     */
    saveText: {
      type: String,
    },

    /**
     * Save button icon
     */
    saveIcon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Last saved time
     */
    lastSavedTime: {
      type: String,
    },

    /**
     * Enable save button
     */
    allowSave: {
      type: Boolean,
      default: true,
    },

    /**
     * Set subheader sticky
     */
    stickySubheader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      stickybarHeight: 0,
      stickybarTop: 0,
      isSticky: false,
    }
  },
  computed: {
    MOMLogo() {
      return DOMPurify.sanitize(MOMLogoSvg).replace("<svg", "<svg focusable='false'")
    },
    GovLogo() {
      return DOMPurify.sanitize(GovLogoSvg).replace("<svg", "<svg focusable='false'")
    },
  },
  mounted() {
    this.addScrollEvent()
  },
  watch: {
    stickySubheader() {
      window.removeEventListener("scroll", this.onScroll)
      this.addScrollEvent()
    },
    hasSaveButton() {
      window.removeEventListener("scroll", this.onScroll)
      this.addScrollEvent()
    },
    subtitle() {
      window.removeEventListener("scroll", this.onScroll)
      this.addScrollEvent()
    },
  },

  methods: {
    addScrollEvent() {
      this.$nextTick(() => {
        if ((this.subtitle || this.hasSaveButton) && this.stickySubheader) {
          this.stickybarHeight = this.$refs.stickybar.offsetHeight
          this.stickybarTop = this.$refs.stickybar.offsetTop
          this.isSticky =
            (this.subtitle || this.hasSaveButton) &&
            this.stickySubheader &&
            window.pageYOffset > this.stickybarTop
          window.addEventListener("scroll", this.onScroll)
        } else {
          this.stickybarHeight = 0
          this.stickybarTop = 0
          this.isSticky = false
        }
      })
    },

    onScroll() {
      this.isSticky = window.pageYOffset > this.stickybarTop
    },

    onLogout(e) {
      /**
       * When the logout button is clicked
       * @event logout
       * @param {object} e
       */
      this.$emit("logout", e)
    },

    onSave(e) {
      /**
       * When the save button is clicked
       * @event save
       * @param {object} e
       */
      this.$emit("save", e)
    },

    onSelectLanguage(e) {
      /**
       * When the language is selected
       * @event selectLanguage
       * @param {string} e
       */
      this.$emit("selectLanguage", e)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomPageHeader {
  box-shadow: $box-shadow-header;
  background-color: $color-white;

  &--is-sticky {
    box-shadow: none;

    @media print {
      padding-bottom: 0 !important;
    }
  }

  @media print {
    box-shadow: none !important;
    border-bottom: rem(1) solid $color-cool-grey-20 !important;
  }
}

.MomPageHeader__Masthead {
  background-color: #f4f4f4;
  padding: rem(4) 0;

  @media print {
    display: none;
  }
}

.MomPageHeader__MastheadLink,
.MomPageHeader__LogoLink {
  display: flex;

  figure {
    flex: none;
  }
}

.MomPageHeader__MastheadDescriptor {
  margin-left: rem(8);
  color: $color-cool-grey-100;
}

.MomPageHeader__MainWrapper {
  padding: rem(12) 0;
}

.MomPageHeader__Main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.MomPageHeader__User {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: calc(100% - #{rem(136)});
}

.MomPageHeader__UserInfo {
  color: $color-blue-80;
  padding-right: rem(12);
  border-right: rem(1) solid $color-cool-grey-20;
  margin-right: rem(12);
  width: rem(652);
  max-width: calc(100% - #{rem(40)});

  @media #{$media-query-desktop} {
    color: $color-cool-grey-100;
    max-width: calc(100% - #{rem(100)});
  }

  @media print {
    padding-right: 0;
    border-right: none;
    margin-right: 0;
  }
}

.MomPageHeader__UserName {
  margin-bottom: 0;
  text-align: right;
  max-width: rem(640);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;

  @media #{$media-query-mobile} {
    display: block;
  }
}

.MomPageHeader__CompanyTooltip {
  display: flex;
  justify-content: flex-end;
  max-width: rem(640);
}

.MomPageHeader__Company {
  display: flex;
  max-width: 100%;
}

.MomPageHeader__CompanyName {
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;

  @media #{$media-query-mobile} {
    display: block;
  }
}

.MomPageHeader__CompanyUen {
  display: flex;
  flex: none;
  white-space: nowrap;

  @media #{$media-query-mobile} {
    margin-left: rem(4);

    &:before {
      content: "(";
    }

    &:after {
      content: ")";
    }
  }
}

.MomPageHeader__LogoutLink {
  white-space: nowrap;

  @media #{$media-query-tablet} {
    display: none;
  }

  &--tablet {
    white-space: nowrap;
    display: none;

    @media #{$media-query-tablet} {
      display: inline-flex;
    }

    @media print {
      display: none !important;
    }
  }

  @media print {
    display: none !important;
  }
}

.MomPageHeader__TitleWrapper {
  padding-bottom: rem(16);

  .MomPageHeader--has-stickybar & {
    padding-bottom: 0;
  }
}

.MomPageHeader__HorizontalLine {
  margin-top: 0;
  margin-bottom: rem(16);
}

.MomPageHeader__Breadcrumb {
  @include stack-margin(rem(8));
}

.MomPageHeader__Title {
  max-width: 100%;
}

.MomPageHeader__StickyBarWrapper {
  background-color: $color-white;
  padding: rem(16) 0;
  transition-property: padding, opacity;
  transition-property: box-shadow, transform;
  transition-duration: $transition-duration-s;
  transition-timing-function: $transition-timing-function-ease;

  .MomPageHeader--is-sticky & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: $z-index-sticky;
    box-shadow: $box-shadow-header;

    @media print {
      position: relative;
    }
  }

  @media print {
    box-shadow: none !important;
  }
}

.MomPageHeader__StickyBar {
  display: flex;
  flex-direction: column;

  @media #{$media-query-tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.MomPageHeader__SubtitleWrapper {
  margin-bottom: rem(8);

  @media #{$media-query-tablet} {
    width: calc(100% - #{rem(344)});
    margin-bottom: 0;
    align-self: center;
  }
}

.MomPageHeader__SubtitleTooltip {
  display: flex;
  max-width: 100%;
}

.MomPageHeader__Subtitle {
  color: $color-blue-80;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::v-deep > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media #{$media-query-desktop} {
    color: $color-cool-grey-80;
  }
}

.MomPageHeader__SaveInfo {
  display: flex;
  flex-direction: column-reverse;

  @media #{$media-query-tablet} {
    width: rem(336);
    margin-left: auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  @media print {
    display: none;
  }
}

.MomPageHeader__SaveButton {
  width: auto;
  margin-right: auto;

  @media #{$media-query-tablet} {
    margin-right: 0;
  }
}

.MomPageHeader__LastSavedTime {
  margin-top: rem(8);
  margin-bottom: 0;
  font-style: italic;
  color: $color-cool-grey-70;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media #{$media-query-tablet} {
    margin-top: 0;
    margin-right: rem(8);
  }
}
</style>
