<template>
  <MomGridContainer class="Colors" gutter-size="none">
    <MomGridColumn v-for="(color, index) in colors" :key="index" size="6" size-sm="4" size-md="3">
      <div class="colorCard">
        <div class="colorPreview" :style="{ backgroundColor: color.value }" />
        <p class="colorName">{{ color.name.replace(/_/g, " ").replace(/color/g, "") }}</p>
        <p class="colorValue">{{ color.originalValue }}</p>
        <p class="colorToken">${{ color.name.replace(/_/g, "-") }}</p>
      </div>
    </MomGridColumn>
  </MomGridContainer>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import filter from "lodash/filter"
import orderBy from "lodash/orderBy"

export default {
  name: "Colors",
  props: {
    /**
     * Colors category <br />
     * `primary` `secondary` `neutral_bw` `neutral`
     * `support_green` `support_red` `support_orange` `support_purple`
     * `primary_old` `secondary_old` `neutral_old` `system`
     */
    category: {
      type: String,
      default: "primary",
      validator: val =>
        [
          "primary",
          "secondary",
          "neutral_bw",
          "neutral",
          "support_green",
          "support_red",
          "support_orange",
          "support_purple",
          "system",
          "primary_old",
          "secondary_old",
          "neutral_old",
        ].includes(val),
    },
  },
  data() {
    return {
      colors: this.getColorsByCategory(designTokens.props, this.category),
    }
  },
  methods: {
    getColorsByCategory(data, cat) {
      let filteredData = filter(data, { type: "color", category: cat })
      let sortedData = orderBy(filteredData, "order")
      return sortedData
    },
  },
}
</script>

<style lang="scss" scoped>
.Colors {
  max-width: $wrapper-m;
}

.colorCard {
  height: 100%;

  .colorPreview {
    height: rem(100);
    margin-bottom: rem(4);
    box-shadow: $box-shadow-s;
  }

  .colorName {
    @include font-size(s);
    @include line-height(s);
    text-transform: capitalize;
  }

  .colorValue {
    @include font-size(s);
    @include line-height(s);
  }

  .colorToken {
    @include font-size(s);
    @include line-height(s);
  }
}
</style>
