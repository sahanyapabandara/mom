<template>
  <div v-if="languages.length > 0" class="MomLanguageSelector">
    <button
      v-for="(language, i) in languages"
      :key="i"
      :class="[
        'MomLanguage__Button',
        selectedLanguage &&
          selectedLanguage === language.code &&
          'MomLanguage__Button--is-selected',
      ]"
      @click="onLanguageSelect(language.code)"
    >
      {{ language.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MomLanguageSelector",
  release: "2.3.11",
  lastUpdated: "2.3.11",
  props: {
    /**
     * Languages <br />
     * `{ text, code }`
     */
    languages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedLanguage: null,
    }
  },
  methods: {
    onLanguageSelect(code) {
      this.selectedLanguage = code
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
.MomLanguageSelector {
  width: rem(320);
  max-width: 100%;
}

.MomLanguage__Button {
  @include stack-margin(rem(24));
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border: rem(1) solid $color-cool-grey-20;
  border-radius: $border-radius-corner;
  padding: rem(16);
  background-color: $color-white;

  &:hover {
    background-color: $color-blue-05;
  }

  &--is-selected {
    background-color: $color-blue-10 !important;
  }
}
</style>
