<template>
  <div class="MomHorizontalBar">
    <div class="MomHorizontalBar__Score">
      <span class="MomHorizontalBar__Total">{{ totalPoints }}</span>
      <span class="mom-h3">POINTS</span>
    </div>

    <div class="MomHorizontalBar__Main">
      <div class="MomHorizontalBar__Value">
        <span
          class="MomHorizontalBar__Min"
          :style="{
            'flex-basis': `${(successPointInt / maxInt) * 100}%`,
          }"
          >0</span
        >
        <span class="MomHorizontalBar__SuccessPoint">{{ successPointInt }}</span>
        <span class="MomHorizontalBar__SuccessPointInfo" v-if="remainingPoints > 0"
          >({{ remainingPoints }} more points to pass)</span
        >
      </div>

      <div class="MomHorizontalBar__Chart">
        <div class="MomHorizontalBar__Lines">
          <div class="MomHorizontalBar__LeftLine" />
          <div
            class="MomHorizontalBar__SuccessLine"
            :style="{
              left: `${(successPointInt / maxInt) * 100}%`,
            }"
          />
          <div class="MomHorizontalBar__RightLine" />
        </div>

        <div class="MomHorizontalBar__ChartItems">
          <template v-for="(item, i) in items">
            <div
              v-if="getValue(item.value) > 0"
              :key="i"
              :class="[
                'MomHorizontalBar__ChartItem',
                `MomHorizontalBar__ChartItem--type-${item.type}`,
              ]"
              :style="barSize(getValue(item.value), maxInt)"
            >
              <span class="mom-h2">{{ item.value }}</span>
            </div>
          </template>
        </div>
      </div>

      <div class="MomHorizontalBar__Legends">
        <div v-for="(item, i) in items" :key="i" class="MomHorizontalBar__Legend">
          <MomIcon
            :class="[
              'MomHorizontalBar__LegendIcon',
              `MomHorizontalBar__LegendIcon--type-${item.type}`,
            ]"
            icon="dot"
            size="l"
          />
          <span>{{ getLabel(item.type) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"

const LABEL_MAP = {
  individual: "Individual",
  firm: "Firm-Related",
}

export default {
  name: "MomHorizontalBar",
  release: "2.3.18",
  lastUpdated: "2.3.18",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Chart items <br />
     * `{ type, value }`
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * Success point
     */
    successPoint: {
      type: [Number, String],
      default: 0,
    },

    /**
     * Max value
     */
    max: {
      type: [Number, String],
      default: 100,
    },
  },
  computed: {
    successPointInt() {
      return this.successPoint &&
        Number(this.successPoint) &&
        Number.isInteger(Number(this.successPoint)) &&
        Number(this.successPoint) > 0
        ? Number(this.successPoint)
        : 0
    },
    maxInt() {
      return this.max &&
        Number(this.max) &&
        Number.isInteger(Number(this.max)) &&
        Number(this.max) > 0
        ? Math.max(Number(this.max), this.totalPoints, this.successPointInt)
        : Math.max(100, this.totalPoints, this.successPointInt)
    },
    totalPoints() {
      return this.items.reduce((previous, current) => {
        return previous + this.getValue(current.value)
      }, 0)
    },
    remainingPoints() {
      return Math.max(this.successPointInt - this.totalPoints, 0)
    },
  },
  methods: {
    barSize(value, max) {
      return {
        "flex-basis": `${Math.round((value / max) * 100)}%`,
      }
    },
    getLabel(type) {
      return LABEL_MAP[type]
    },
    getValue(value) {
      return value && Number(value) && Number.isInteger(Number(value)) && Number(value) > 0
        ? Number(value)
        : 0
    },
  },
}
</script>

<style lang="scss" scoped>
$chart-height: rem(77);
$bar-height: rem(60);

.MomHorizontalBar {
  width: 100%;
  display: flex;
}

.MomHorizontalBar__Score {
  display: flex;
  flex-direction: column;
  width: rem(110);
  align-items: center;
  margin-right: rem(55);
}

.MomHorizontalBar__Total {
  font-size: rem(96);
  line-height: rem(120);
  font-weight: $font-weight-light;
}

.MomHorizontalBar__Main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.MomHorizontalBar__Value {
  @include font-size(l);
  @include line-height(l);
  font-weight: $font-weight-semibold;
  display: flex;
  align-items: center;
  margin-bottom: rem(12);
}

.MomHorizontalBar__Min {
  display: flex;
  color: $color-grey-60;
}

.MomHorizontalBar__SuccessPoint {
  color: $color-black;
  margin-left: rem(-12);
}

.MomHorizontalBar__SuccessPointInfo {
  @include font-size(s);
  @include line-height(s);
  font-weight: $font-weight-regular;
  margin-left: rem(8);
}

.MomHorizontalBar__Lines {
  width: 100%;
  height: $chart-height;
  position: absolute;
}

.MomHorizontalBar__LeftLine {
  position: absolute;
  left: 0;
  height: 100%;
  border-left: rem(1) solid $color-grey-40;
}

.MomHorizontalBar__RightLine {
  position: absolute;
  right: 0;
  height: 100%;
  border-left: rem(1) solid $color-grey-40;
}

.MomHorizontalBar__SuccessLine {
  position: absolute;
  height: 100%;
  border-left: rem(1) solid $color-grey-80;
}

.MomHorizontalBar__Chart {
  display: flex;
  position: relative;
  height: $chart-height;
  flex-direction: column;
  justify-content: flex-end;
}
.MomHorizontalBar__ChartItems {
  width: 100%;
  height: $bar-height;
  background: $color-grey-05;
  display: flex;
  overflow: hidden;
  border-radius: $border-radius-corner-l;
}

.MomHorizontalBar__ChartItem {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: rem(12);
  color: $color-white;
  overflow: hidden;
  animation: chart-item 1s ease forwards;

  &--type-individual {
    background: $color-blue-50;
  }

  &--type-firm {
    background: $color-purple-70;
  }
}

.MomHorizontalBar__Legends {
  @include font-size(s);
  @include line-height(l);
  font-weight: $font-weight-semibold;
  display: flex;
  flex-wrap: wrap;
  margin-top: rem(12);
}

.MomHorizontalBar__Legend {
  display: flex;
  @include inline-margin(rem(12));
}

.MomHorizontalBar__LegendIcon {
  &--type-individual {
    color: $color-blue-50;
  }

  &--type-firm {
    color: $color-purple-70;
  }
}

@keyframes chart-item {
  0% {
    flex-basis: 0;
  }
}
</style>
