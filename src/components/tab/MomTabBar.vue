<template>
  <div class="MomTabBar">
    <div class="MomTabBar__Header"></div>

    <!-- @slot Tab items -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomTabBar",
  release: "2.3.19",
  lastUpdated: "2.3.19",
  mounted() {
    this.$children.find(child => child.$props.active).isActive = true
    this.$children.forEach(child => {
      const button = child.$el.querySelector("button")
      this.$el.querySelector("div.MomTabBar__Header").appendChild(button)
      child.$on("click", this.onChildClick)
    })
  },
  methods: {
    onChildClick(e) {
      this.$children.forEach(child => {
        child.isActive = false
      })
      e.target.isActive = true
    },
  },
}
</script>

<style lang="scss" scoped>
.MomTabBar {
  background-color: $color-white;
  @include stack-margin(rem(24));
}

.MomTabBar__Header {
  display: flex;
  border-bottom: rem(1) solid $color-cool-grey-20;
  margin-bottom: rem(16);
}
</style>
