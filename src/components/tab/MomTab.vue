<template>
  <div class="MomTab">
    <MomLink
      ref="toggleButton"
      :class="['MomTab__Title', isActive && 'MomTab__Title--is-active']"
      type="button"
      :text="title"
      @click="onClick"
    />

    <section v-if="isActive" class="contain" :id="tabId">
      <!-- @slot Tab content -->
      <slot></slot>
    </section>
  </div>
</template>

<script>
import uniqueId from "@/utils/uniqueId"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomTab",
  release: "2.3.19",
  lastUpdated: "2.3.19",
  components: {
    MomLink,
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
     * Active state
     */
    active: {
      type: Boolean,
      default: false,
    },

    /**
     * `id` for content
     */
    tabId: {
      type: String,
      default: () => {
        return uniqueId()
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    onClick() {
      /**
       * When the tab title is clicked
       *
       * @event click
       * @param {object} accordionItem
       */
      this.$emit("click", { target: this })
    },
  },
}
</script>

<style lang="scss" scoped>
.MomTab__Title {
  padding: rem(8) rem(12);
  border-bottom: rem(4) solid transparent;

  &--is-active {
    color: $color-cool-grey-100;
    font-weight: $font-weight-semibold;
    border-color: $color-orange-30;

    &:active {
      color: $color-cool-grey-100;
    }
  }
}
</style>
