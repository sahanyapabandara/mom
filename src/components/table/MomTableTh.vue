<template>
  <th
    :class="['MomTableTh', rightAlign && 'MomTableTh--right-align']"
    :style="minWidth && `min-width: ${minWidth / 16}rem`"
  >
    <div class="MomTableTh__Wrapper">
      <!-- @slot Header cell -->
      <div class="MomTableTh__Text">
        <slot><span v-html="$html(text)" /></slot
        ><!--

        --><span v-if="tooltip || $slots.tooltip" class="MomTableTh__Tooltip">
          <!-- @slot Tooltip -->
          <slot name="tooltip">
            <MomTooltip v-if="tooltip" :tooltipText="tooltip" />
          </slot>
        </span>
      </div>

      <button
        v-if="sortable"
        class="MomTableTh__SortButton"
        tabindex="-1"
        :disabled="isDisabled"
        @click="onSort"
      >
        <MomIcon :icon="icon" size="s" />
      </button>
    </div>
  </th>
</template>

<script>
import { eventBus } from "../../utils/eventBus"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

export default {
  name: "MomTableTh",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomTooltip,
  },
  inject: ["$tableDisabled", "$tableSortKey", "$tableSortOrder"],
  props: {
    /**
     * Text
     */
    text: {
      type: String,
    },

    /**
     * Tooltip
     */
    tooltip: {
      type: String,
    },

    /**
     * Sortable
     */
    sortable: {
      type: Boolean,
      default: false,
    },

    /**
     * Column key
     */
    columnKey: {
      type: String,
    },

    /**
     * Right align column
     */
    rightAlign: {
      type: Boolean,
      default: false,
    },

    /**
     * Column width
     */
    minWidth: {
      type: [String, Number],
    },
  },
  computed: {
    isDisabled() {
      return this.$tableDisabled()
    },
    order() {
      return this.columnKey && this.$tableSortKey() === this.columnKey
        ? this.$tableSortOrder()
        : null
    },
    icon() {
      return this.order === "asc" ? "sort-up" : this.order === "des" ? "sort-down" : "sort"
    },
  },
  methods: {
    onSort() {
      eventBus.$emit("sort", {
        table: this.$parent.$parent.$parent,
        key: this.columnKey,
        order: this.order === "asc" ? "des" : "asc",
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$border: rem(1) solid $color-cool-grey-20;
$border-disabled: rem(1) solid $color-grey-20;

.MomTableTh {
  background-color: $color-cool-grey-05;
  padding: rem(8) rem(8) rem(7) rem(8);
  border-bottom: $border;
  vertical-align: top;
  cursor: default;

  &--selectable-column {
    position: sticky;
    padding-top: rem(6) !important;
    padding-bottom: rem(5) !important;
    width: rem(48);
    left: 0;
    background-color: $color-cool-grey-05;
    background-clip: padding-box;
    z-index: 20;

    .MomTableTr:first-child & {
      padding-top: rem(5) !important;
    }
  }

  &--first-column {
    position: sticky;
    left: 0;
    background-color: $color-cool-grey-05;
    background-clip: padding-box;
    z-index: 20;

    .MomTableTh--selectable-column + & {
      left: rem(48);
    }
  }

  &--last-column {
    position: sticky;
    right: 0;
    background-color: $color-cool-grey-05;
    background-clip: padding-box;
    z-index: 20;
  }

  &:first-child {
    padding-left: rem(15);
    border-left: $border;

    .MomTableThead:first-child .MomTableTr:first-child & {
      border-top-left-radius: $border-radius-corner;
    }

    .MomTable--is-disabled & {
      border-left: $border-disabled;
    }
  }

  &:last-child {
    padding-right: rem(15);
    border-right: $border;

    .MomTableThead:first-child .MomTableTr:first-child & {
      border-top-right-radius: $border-radius-corner;
    }

    .MomTable--is-disabled & {
      border-right: $border-disabled;
    }
  }

  .MomTableTr:first-child & {
    padding-top: rem(7);
    border-top: $border;

    .MomTable--is-disabled & {
      border-top: $border-disabled;
    }
  }

  .MomTableTr--is-disabled & {
    color: $color-grey-40;
  }

  .MomTable--is-disabled & {
    color: $color-grey-40;
    border-bottom: $border-disabled;
  }
}

.MomTableTh__Wrapper {
  display: flex;
  align-items: flex-start;

  .MomTableTh--right-align & {
    justify-content: flex-end;
  }
}

.MomTableTh__Text {
  @include font-size(s);
  @include line-height(s);
  text-align: left;
  font-weight: $font-weight-semibold;

  .MomTableTh--right-align & {
    text-align: right;
  }
}

.MomTableTh__Tooltip {
  display: inline-flex;
  vertical-align: bottom;
  margin-left: rem(4);
  font-weight: $font-weight-regular;
}

.MomTableTh__SortButton {
  display: flex;
  margin-left: rem(4);
}
</style>
