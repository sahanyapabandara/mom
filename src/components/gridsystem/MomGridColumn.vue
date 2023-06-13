<template>
  <div
    :class="[
      'MomGridColumn',
      size && `MomGridColumn--col-${size}`,
      sizeXs && `MomGridColumn--col-xs-${sizeXs}`,
      sizeSm && `MomGridColumn--col-sm-${sizeSm}`,
      sizeMd && `MomGridColumn--col-md-${sizeMd}`,
      sizeLg && `MomGridColumn--col-lg-${sizeLg}`,
      sizeXl && `MomGridColumn--col-xl-${sizeXl}`,
    ]"
  >
    <!-- @slot Content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MomGridColumn",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Column size (default) <br />
     * @values 1 - 12
     */
    size: {
      type: [String, Number],
    },

    /**
     * Column size (screen above 320px) <br />
     * @values 1 - 12
     */
    sizeXs: {
      type: [String, Number],
    },

    /**
     * Column size (screen above 520px) <br />
     * @values 1 - 12
     */
    sizeSm: {
      type: [String, Number],
    },

    /**
     * Column size (screen above 720px) <br />
     * @values 1 - 12
     */
    sizeMd: {
      type: [String, Number],
    },

    /**
     * Column size (screen above 920px) <br />
     * @values 1 - 12
     */
    sizeLg: {
      type: [String, Number],
    },

    /**
     * Column size (screen above 1120px) <br />
     * @values 1 - 12
     */
    sizeXl: {
      type: [String, Number],
    },
  },
}
</script>

<style lang="scss" scoped>
.MomGridColumn {
  flex: 1;
  max-width: 100%;

  @for $i from 1 through 12 {
    &--col-#{$i} {
      flex-basis: grid-width($i);
      max-width: grid-width($i);
    }
  }

  @media #{$media-query-grid-xs} {
    @for $i from 1 through 12 {
      &--col-xs-#{$i} {
        flex-basis: grid-width($i);
        max-width: grid-width($i);
      }
    }
  }

  @media #{$media-query-grid-sm} {
    @for $i from 1 through 12 {
      &--col-sm-#{$i} {
        flex-basis: grid-width($i);
        max-width: grid-width($i);
      }
    }
  }

  @media #{$media-query-grid-md} {
    @for $i from 1 through 12 {
      &--col-md-#{$i} {
        flex-basis: grid-width($i);
        max-width: grid-width($i);
      }
    }
  }

  @media #{$media-query-grid-lg} {
    @for $i from 1 through 12 {
      &--col-lg-#{$i} {
        flex-basis: grid-width($i);
        max-width: grid-width($i);
      }
    }
  }

  @media #{$media-query-grid-xl} {
    @for $i from 1 through 12 {
      &--col-xl-#{$i} {
        flex-basis: grid-width($i);
        max-width: grid-width($i);
      }
    }
  }

  .MomGridContainer--gutter-s & {
    padding: $grid-column-margin/2 $gutter-width-s/2;
  }

  .MomGridContainer--gutter-m & {
    padding: $grid-column-margin/2 $gutter-width-m/2;
  }

  .MomGridContainer--gutter-l & {
    padding: $grid-column-margin/2 $gutter-width-l/2;
  }

  .MomGridContainer--gutter-none & {
    padding: $grid-column-margin/2 0;
  }
}
</style>
