<template>
  <nav class="DocsTabs">
    <span v-for="(item, i) in items" :key="i" :class="['tab', item.active && 'tab--is-active']">
      <span v-if="item.active">{{ item.name }}</span>
      <MomLink v-else :text="item.name" :href="item.link" size="s" />
    </span>
  </nav>
</template>

<script>
export default {
  name: "DocsTabs",
  props: {
    /**
     * For documentation purpose
     * @ignore
     */
    autoLayout: {
      type: Boolean,
      default: true,
    },

    /**
     * Tab items <br />
     * `{ name, link, active }`
     */
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    if (this.autoLayout) {
      const container = document.querySelector("div[id$='-container']")

      if (container) {
        const currentTabsWrapper = container.querySelectorAll("div.TabsWrapper")
        if (currentTabsWrapper) {
          currentTabsWrapper.forEach(element => element.parentNode.removeChild(element))
        }

        const tabs = document.querySelector("nav[class='DocsTabs']").parentNode.parentNode
        if (tabs) {
          const tabsWrapper = document.createElement("div")
          tabsWrapper.className = "TabsWrapper"
          tabsWrapper.append(tabs)
          container.appendChild(tabsWrapper)
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$border-color: $color-blue-30;

.DocsTabs {
  display: inline-flex;
  flex-wrap: wrap;
  border-radius: $border-radius-corner;
}

.tab {
  @include font-size(s);
  @include line-height(s);
  display: inline-flex;
  padding: rem(8) rem(16);
  border-top: rem(2) solid $border-color;
  border-bottom: rem(2) solid $border-color;
  border-left: rem(1) solid $border-color;
  border-right: rem(1) solid $border-color;

  &:first-child {
    border-left: rem(2) solid $border-color;
    border-top-left-radius: $border-radius-corner;
    border-bottom-left-radius: $border-radius-corner;
  }

  &:last-child {
    border-right: rem(2) solid $border-color;
    border-top-right-radius: $border-radius-corner;
    border-bottom-right-radius: $border-radius-corner;
  }

  &--is-active {
    background-color: $color-blue-05;
  }
}
</style>
