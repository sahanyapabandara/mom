<template>
  <div
    :class="[
      'MomSummaryItem',
      descriptionType && `MomSummaryItem--type-${descriptionType}`,
      showBullet && 'MomSummaryItem--show-bullet',
    ]"
  >
    <div class="MomSummaryItem__Label">
      <p class="MomSummaryItem__LabelText">
        <span v-html="$html(label)" /><!--

        --><span v-if="tooltip || $slots.tooltip" class="MomSummaryItem__Tooltip">
          <!-- @slot Tooltip -->
          <slot name="tooltip">
            <MomTooltip v-if="tooltip" :tooltipText="tooltip" />
          </slot>
        </span>
      </p>
    </div>

    <div class="MomSummaryItem__Description contain">
      <!-- @slot Description -->
      <slot>
        <ul v-if="descriptionArr.length > 1" class="mom-ul prewrap MomSummaryItem__DescriptionText">
          <li v-for="(description, i) in descriptionArr" :key="i">{{ description }}</li>
        </ul>

        <p v-else class="mom-p prewrap MomSummaryItem__DescriptionText">{{ descriptionArr[0] }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

export default {
  name: "MomSummaryItem",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomTooltip,
  },
  props: {
    /**
     * Label
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * Description
     */
    description: {
      type: [String, Array],
    },

    /**
     * Type
     */
    descriptionType: {
      type: String,
      validator: val => ["others"].includes(val),
    },

    /**
     * Tooltip
     */
    tooltip: {
      type: String,
    },

    /**
     * Show bullet
     */
    showBullet: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    descriptionArr() {
      let descriptionArr = []
      if (Array.isArray(this.description)) {
        this.description.forEach(description => {
          descriptionArr.push(description)
        })
      } else {
        descriptionArr.push(this.description)
      }
      return descriptionArr
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: $color-cool-grey-10;

.MomSummaryItem {
  @include stack-margin(rem(8));
  padding-bottom: rem(8);
  border-bottom: rem(1) solid $border-color;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;

    .MomSummary :not(.MomSummarySubsection):not(*:last-child) & {
      margin-bottom: rem(8);
      padding-bottom: rem(8);
      border-bottom: rem(1) solid $border-color;
    }
  }

  @media #{$media-query-tablet}, print {
    display: flex;
  }
}

.MomSummaryItem__Label {
  @include font-size(s);
  @include line-height(s);
  color: $color-cool-grey-100;
  word-break: break-word;

  .MomSummaryItem--type-others & {
    margin-bottom: rem(8);
  }

  .MomSummaryItem--show-bullet & {
    padding-left: rem(28);
    display: flex;
  }

  &:before {
    .MomSummaryItem--show-bullet & {
      counter-increment: alpha;
      content: "(" counter(alpha, lower-alpha) ")";
      display: inline-flex;
      flex: none;
      width: rem(24);
      margin-left: rem(-28);
      margin-right: rem(4);
    }
  }

  @media #{$media-query-tablet} {
    @include font-size(m);
    @include line-height(m);
    width: calc(50% - #{rem(32)});
    margin-right: rem(32);

    .MomSummaryItem--type-others & {
      margin-bottom: 0;
    }
  }
}

.MomSummaryItem__Tooltip {
  display: inline-flex;
  vertical-align: bottom;
  margin-left: rem(4);

  @media #{$media-query-tablet} {
    margin-top: rem(2);
    margin-bottom: rem(2);
  }
}

.MomSummaryItem__Description {
  word-break: break-word;

  .MomSummaryItem--show-bullet & {
    padding-left: rem(28);
  }

  @media #{$media-query-tablet} {
    width: 50%;

    .MomSummaryItem--show-bullet & {
      padding-left: 0;
    }
  }
}

.MomSummaryItem__DescriptionText {
  @media #{$media-query-tablet} {
    font-weight: $font-weight-semibold;
  }
}
</style>
