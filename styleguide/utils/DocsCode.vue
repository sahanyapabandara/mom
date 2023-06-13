<template>
  <div class="DocsCode">
    <div class="rsg--controls-43">
      <button
        type="button"
        :class="['rsg--button-31', showCode && 'rsg--isActive-32']"
        @click="toggleCode"
      >
        View Code
      </button>
    </div>

    <pre
      v-if="showCode"
      class="prism-code-preview"
    ><code ref="code" class="language-jsx"></code></pre>
  </div>
</template>

<script>
import Prism from "prismjs"

export default {
  name: "DocsCode",
  data() {
    return {
      showCode: false,
    }
  },
  props: {
    /**
     * html code string
     */
    code: {
      type: String,
    },
  },
  watch: {
    code() {
      if (this.showCode) {
        this.initPrism()
      }
    },
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode
      if (this.showCode) {
        this.$nextTick(() => {
          this.initPrism()
        })
      } else {
        this.$refs.code.innerHTML = ""
      }
    },
    initPrism() {
      this.$refs.code.innerHTML = Prism.highlight(this.code, Prism.languages.jsx, "javascript")
    },
  },
}
</script>

<style lang="scss" scoped>
.DocsCode {
  @include stack-margin(rem(16));
}

.prism-code-preview {
  @include font-size(xs);
  @include line-height(xs);
  padding: rem(16);
  border-radius: $border-radius-corner;
  background-color: $color-cool-grey-90;

  code {
    tab-size: 2 !important;
  }
}
</style>
