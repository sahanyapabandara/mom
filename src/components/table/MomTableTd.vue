<template>
  <td :class="['MomTableTd', rightAlign && 'MomTableTd--right-align']" @click="onClick">
    <!-- @slot Body cell -->
    <slot><span v-html="$html(text)" /></slot>
  </td>
</template>

<script>
export default {
  name: "MomTableTd",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  inject: ["$clickable", "$selectMode"],
  props: {
    /**
     * Text
     */
    text: {
      type: String,
    },

    /**
     * Right align column
     */
    rightAlign: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(e) {
      if (this.$clickable() && this.$selectMode()) {
        /**
         * When the cell is clicked
         * @event click
         * @param {object} e
         */
        this.$emit("click", e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$border: rem(1) solid $color-cool-grey-20;
$border-disabled: rem(1) solid $color-grey-20;

.MomTableTd {
  @include font-size(s);
  @include line-height(s);
  text-align: left;
  padding: rem(8) rem(8) rem(7) rem(8);
  border-bottom: $border;
  cursor: default;

  &--right-align {
    text-align: right;
  }

  &--selectable-column {
    position: sticky;
    padding-top: rem(6) !important;
    padding-bottom: rem(5) !important;
    width: rem(48);
    left: 0;
    background-color: $color-white;
    background-clip: padding-box;
    z-index: 10;
  }

  &--first-column {
    position: sticky;
    left: 0;
    background-color: $color-white;
    background-clip: padding-box;
    z-index: 10;

    .MomTableTd--selectable-column + & {
      left: rem(48);
    }
  }

  &--last-column {
    position: sticky;
    right: 0;
    background-color: $color-white;
    background-clip: padding-box;
    z-index: 10;
  }

  &:first-child {
    padding-left: rem(15);
    border-left: $border;

    .MomTableTbody:last-child .MomTableTr:last-child &,
    .MomTableTfoot:last-child .MomTableTr:last-child & {
      border-bottom-left-radius: $border-radius-corner;
    }

    .MomTable--is-disabled & {
      border-left: $border-disabled;
    }
  }

  &:last-child {
    padding-right: rem(15);
    border-right: $border;

    .MomTableTbody:last-child .MomTableTr:last-child &,
    .MomTableTfoot:last-child .MomTableTr:last-child & {
      border-bottom-right-radius: $border-radius-corner;
    }

    .MomTable--is-disabled & {
      border-right: $border-disabled;
    }
  }

  .MomTable__Table--vertical-align-top & {
    vertical-align: top;
  }

  .MomTable__Table--vertical-align-middle & {
    vertical-align: middle;
  }

  .MomTableTr--is-clickable & {
    cursor: pointer;
  }

  .MomTableTr--is-selectable:hover &,
  .MomTableTr--is-clickable:hover & {
    background-color: $color-blue-00;
  }

  .MomTableTr--is-selected & {
    background-color: $color-blue-05;
  }

  .MomTableTr--is-expanded & {
    border-bottom: none;
  }

  .MomTableTr--is-locked & {
    background-color: $color-red-05;
  }

  .MomTableTr--is-disabled & {
    color: $color-grey-40;
  }

  .MomTable--is-disabled & {
    color: $color-grey-40;
    border-bottom: $border-disabled;
  }

  .MomTableTr--is-placeholder & {
    color: $color-cool-grey-50;
    text-align: center;
    padding-top: rem(24);
    padding-bottom: rem(23);

    .MomTable--is-disabled & {
      color: $color-grey-30;
    }
  }

  .MomTableTfoot & {
    background-color: $color-cool-grey-05;
    font-weight: $font-weight-semibold;
  }

  .MomTableTr:first-child & {
    .MomTableTfoot & {
      padding-top: rem(7);
      border-top: $border;

      .MomTable--is-disabled & {
        border-top: $border-disabled;
      }
    }
  }
}
</style>
