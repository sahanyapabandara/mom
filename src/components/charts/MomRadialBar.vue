<template>
  <div class="MomRadialBar">
    <div :class="['MomRadialBar__Chart', `MomRadialBar__Chart--type-${type}`]">
      <VueApexCharts type="radialBar" :options="chartOptions" :series="series" :width="width" />
    </div>
    <div class="MomRadialBar__Details">
      <figure v-html="icon" />
      <span class="mom-p-s m-b:0 MomRadialBar__Label">{{ label }}</span>
      <span class="MomRadialBar__Name">{{ name }}</span>
      <MomLink
        v-if="link && link.text && link.href"
        class="MomRadialBar__Link"
        size="s"
        :text="link.text"
        :href="link.href"
        :target="link.target || '_blank'"
      />
    </div>
    <span
      class="MomRadialBar__Score"
      :style="{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }"
      >{{ valueInt }}</span
    >
  </div>
</template>

<script>
import DOMPurify from "dompurify"
import IndividualSvg from "@/assets/images/chart-individual.svg"
import FirmSvg from "@/assets/images/chart-firm.svg"
import VueApexCharts from "vue-apexcharts"
import MomLink from "@/components/link/MomLink.vue"

const LABEL_MAP = {
  individual: "Individual",
  firm: "Firm-Related",
}

export default {
  name: "MomRadialBar",
  release: "2.3.18",
  lastUpdated: "2.3.18",
  components: {
    VueApexCharts,
    MomLink,
  },
  props: {
    /**
     * Chart type
     */
    type: {
      type: String,
      default: "individual",
      validator: val => ["individual", "firm"].includes(val),
    },

    /**
     * Current value
     */
    value: {
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

    /**
     * Name
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Link <br />
     * `{ text, href, target}`
     */
    link: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      width: 460,
    }
  },
  computed: {
    valueInt() {
      return this.value &&
        Number(this.value) &&
        Number.isInteger(Number(this.value)) &&
        Number(this.value) > 0
        ? Number(this.value)
        : 0
    },
    maxInt() {
      return this.max &&
        Number(this.max) &&
        Number.isInteger(Number(this.max)) &&
        Number(this.max) > 0
        ? Number(this.max)
        : 100
    },
    icon() {
      return this.type === "firm"
        ? DOMPurify.sanitize(FirmSvg).replace("<svg", "<svg focusable='false'")
        : DOMPurify.sanitize(IndividualSvg).replace("<svg", "<svg focusable='false'")
    },
    label() {
      return LABEL_MAP[this.type]
    },
    chartOptions() {
      return {
        chart: {
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            offsetX: -65,
            hollow: {
              size: "70%",
            },
            dataLabels: {
              show: false,
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        fill: {
          colors: [
            () => {
              return this.valueInt > 0 && this.valueInt <= this.maxInt
                ? "currentColor"
                : "transparent"
            },
          ],
        },
        grid: {
          padding: {
            top: -30,
            bottom: -5,
          },
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
          active: {
            filter: {
              type: "none",
            },
          },
        },
      }
    },
    series() {
      return this.valueInt <= this.maxInt ? [Math.round((this.valueInt / this.maxInt) * 100)] : [0]
    },
    translateX() {
      let radiant = (this.valueInt / this.maxInt) * Math.PI
      return -175 * Math.cos(radiant)
    },
    translateY() {
      let radiant = (this.valueInt / this.maxInt) * Math.PI
      return -175 * Math.sin(radiant)
    },
  },
}
</script>

<style lang="scss" scoped>
$chart-width: rem(330);

.MomRadialBar {
  position: relative;
  width: $chart-width;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.MomRadialBar__Chart {
  width: $chart-width;

  &--type-individual {
    color: $color-blue-50;
  }

  &--type-firm {
    color: $color-purple-70;
  }
}

.MomRadialBar__Details {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MomRadialBar__Name {
  @include font-size(s);
  @include line-height(s);
  font-weight: $font-weight-semibold;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.MomRadialBar__Score {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
