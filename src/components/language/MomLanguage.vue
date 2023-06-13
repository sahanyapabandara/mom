<template>
  <div v-if="languages.length > 0" class="MomLanguage">
    <MomIcon icon="globe" class="m-r:4" />
    <span class="MomLanguage__Text">Available in:</span>
    <nav class="MomLanguage__Links">
      <MomLink
        v-for="(language, i) in languages"
        :key="i"
        :class="[
          'MomLanguage__Language',
          language.code === currentLanguage && 'MomLanguage__Language--is-current',
        ]"
        type="button"
        :text="language.text"
        :disabled="language.code === currentLanguage"
        @click="onLanguageSelect(language.code)"
      />
    </nav>
  </div>
</template>

<script>
import MomLink from "@/components/link/MomLink.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomLanguage",
  release: "2.3.6",
  lastUpdated: "2.3.6",
  components: {
    MomLink,
    MomIcon,
  },
  props: {
    /**
     * Languages <br />
     * `{ text, code, active }`
     */
    languages: {
      type: Array,
      required: true,
    },

    /**
     * Current language code
     */
    currentLanguage: {
      type: String,
    },
  },
  methods: {
    onLanguageSelect(code) {
      /**
       * When the language is selected
       * @event select
       * @param {string} code
       */
      this.$emit("select", code)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomLanguage {
  display: flex;
}

.MomLanguage__Text {
  @include font-size(m);
  @include line-height(m);
  margin-right: rem(16);
  white-space: nowrap;
}

.MomLanguage__Links {
  display: flex;
  flex-wrap: wrap;
}

.MomLanguage__Language {
  @include inline-margin(rem(24));

  &--is-current {
    color: $color-cool-grey-100 !important;

    &:hover {
      color: $color-cool-grey-100 !important;
    }
  }
}
</style>
