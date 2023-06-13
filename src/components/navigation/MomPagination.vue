<template>
  <div class="MomPagination">
    <p class="MomPagination__Index">
      {{
        startIndex +
        $lang("mompagination.to") +
        lastIndex +
        $lang("mompagination.of") +
        totalItemsInt
      }}
    </p>

    <div class="MomPagination__Navigation">
      <button
        :class="[
          'MomPagination__Button',
          'MomPagination__Button--prev',
          currentPage === 1 && 'MomPagination__Button--is-disabled',
        ]"
        :disabled="currentPage === 1"
        @click="onPrev"
      >
        <MomIcon icon="chevron-left" size="s" />
        <span>{{ $lang("mompagination.prev") }}</span>
      </button>

      <button v-if="currentPage > 2" class="MomPagination__Button" @click="onPageClick(1)">
        1
      </button>

      <span v-if="currentPage > 3" class="MomPagination__Ellipsis">...</span>

      <button
        v-if="currentPage > 1"
        class="MomPagination__Button"
        @click="onPageClick(currentPage - 1)"
      >
        {{ currentPage - 1 }}
      </button>

      <button class="MomPagination__Button MomPagination__Button--current-page" disabled>
        {{ currentPage }}
      </button>

      <button
        v-if="currentPage < totalPages"
        class="MomPagination__Button"
        @click="onPageClick(currentPage + 1)"
      >
        {{ currentPage + 1 }}
      </button>

      <span v-if="currentPage < totalPages - 2" class="MomPagination__Ellipsis">...</span>

      <button
        v-if="currentPage < totalPages - 1"
        class="MomPagination__Button"
        @click="onPageClick(totalPages)"
      >
        {{ totalPages }}
      </button>

      <button
        :class="[
          'MomPagination__Button',
          'MomPagination__Button--next',
          currentPage === totalPages && 'MomPagination__Button--is-disabled',
        ]"
        :disabled="currentPage === totalPages"
        @click="onNext"
      >
        <span>{{ $lang("mompagination.next") }}</span>
        <MomIcon icon="chevron-right" size="s" />
      </button>
    </div>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomPagination",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Total number of items
     */
    totalItems: {
      type: [String, Number],
      default: 0,
    },

    /**
     * Items per page
     */
    itemsPerPage: {
      type: [String, Number],
      default: 10,
    },

    /**
     * Current page
     */
    page: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    itemsPerPageInt() {
      return this.itemsPerPage &&
        Number(this.itemsPerPage) &&
        Number.isInteger(Number(this.itemsPerPage)) &&
        Number(this.itemsPerPage) > 0
        ? Number(this.itemsPerPage)
        : 10
    },
    totalItemsInt() {
      return this.totalItems &&
        Number(this.totalItems) &&
        Number.isInteger(Number(this.totalItems)) &&
        Number(this.totalItems) > 0
        ? Number(this.totalItems)
        : 0
    },
    pageInt() {
      return this.page &&
        Number(this.page) &&
        Number.isInteger(Number(this.page)) &&
        Number(this.page) > 0
        ? Number(this.page)
        : 1
    },
    startIndex() {
      return this.totalItemsInt === 0 ? 0 : (this.currentPage - 1) * this.itemsPerPageInt + 1
    },
    lastIndex() {
      return this.totalItemsInt === 0
        ? 0
        : Math.min(this.currentPage * this.itemsPerPageInt, this.totalItemsInt)
    },
    totalPages() {
      return this.totalItemsInt === 0 ? 1 : Math.ceil(this.totalItemsInt / this.itemsPerPageInt)
    },
  },
  watch: {
    page() {
      this.currentPage = this.pageInt
    },

    totalPages() {
      this.onPageClick(1)
    },
  },
  mounted() {
    this.currentPage = this.pageInt
  },
  methods: {
    onPageClick(page) {
      if (this.currentPage !== page) {
        this.currentPage = page
        /**
         * When the page number is clicked
         * @event pageClick
         * @param {number} page
         */
        this.$emit("pageClick", this.currentPage)
      }
    },

    onPrev() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.$emit("pageClick", this.currentPage)
      }
    },

    onNext() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.$emit("pageClick", this.currentPage)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.MomPagination {
  display: flex;
  align-items: center;
  justify-content: center;
  @include stack-margin(rem(24));

  @media #{$media-query-tablet} {
    justify-content: space-between;
  }

  @media print {
    display: none;
  }
}

.MomPagination__Index {
  @include font-size(s);
  @include line-height(s);
  display: none;

  @media #{$media-query-tablet} {
    display: block;
  }
}

.MomPagination__Navigation {
  display: flex;
}

.MomPagination__Button {
  @include font-size(s);
  @include line-height(s);
  @include inline-margin(rem(8));
  color: $color-cool-grey-100;
  min-width: rem(28);
  padding: rem(4) rem(8);
  border-radius: $border-radius-corner;
  justify-content: center;
  display: none;

  &--prev,
  &--next {
    display: flex;

    span {
      @include inline-margin(rem(4));
    }
  }

  &--current-page {
    display: flex;
    color: $color-white !important;
    font-weight: $font-weight-semibold;
    background-color: $color-blue-40 !important;
    cursor: default;
  }

  &--is-disabled {
    color: $color-grey-50 !important;
    background: none !important;
  }

  &:hover {
    background-color: $color-cool-grey-05;
  }

  @media #{$media-query-tablet} {
    display: flex;
  }
}

.MomPagination__Ellipsis {
  @include font-size(s);
  @include line-height(s);
  @include inline-margin(rem(8));
  color: $color-cool-grey-100;
  padding: rem(4) rem(8);
  display: none;

  @media #{$media-query-tablet} {
    display: flex;
  }
}
</style>
