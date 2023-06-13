<template>
  <div class="MomTooltip">
    <div
      ref="toggle"
      class="MomTooltip__Toggle"
      role="button"
      tabindex="0"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <!-- @slot Toggle -->
      <slot name="toggle">
        <p v-if="toggleText" class="mom-p" v-html="$html(toggleText)" />
        <MomIcon v-else class="MomTooltip__ToggleIcon" icon="info" :size="iconSize" />
      </slot>
    </div>

    <div
      v-if="isShow"
      ref="popout"
      class="MomTooltip__Popout"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    >
      <div ref="wrapper" class="MomTooltip__Wrapper" @scroll="updateShadow">
        <transition name="mom-transition-fade">
          <div v-if="topShadow" class="MomTooltip__Shadow MomTooltip__Shadow--top"></div>
        </transition>

        <div ref="content" class="MomTooltip__Content contain">
          <!-- @slot Tooltip content -->
          <slot>
            <p class="mom-p-s" v-html="$html(tooltipText)" />
          </slot>
        </div>

        <transition name="mom-transition-fade">
          <div v-if="bottomShadow" class="MomTooltip__Shadow MomTooltip__Shadow--bottom"></div>
        </transition>
      </div>

      <span ref="arrow" class="MomTooltip__Arrow"></span>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomTooltip",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Tooltip text
     */
    tooltipText: {
      type: String,
    },

    /**
     * Icon size
     */
    iconSize: {
      type: String,
      default: "s",
      validator: val => ["s", "m"].includes(val),
    },

    /**
     * Toggle text
     */
    toggleText: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
      topShadow: false,
      bottomShadow: false,
    }
  },
  methods: {
    updateShadow() {
      let content = this.$refs.content
      let wrapper = this.$refs.wrapper
      let verticalScroll = content.offsetHeight > wrapper.offsetHeight - 24
      let scroll_Y = Math.round(wrapper.scrollTop)
      let scroll_Max = wrapper.scrollHeight - wrapper.offsetHeight
      this.topShadow = verticalScroll && scroll_Y > 0
      this.bottomShadow = verticalScroll && scroll_Y < scroll_Max
    },

    showTooltip() {
      if (!this.isShow) {
        this.isShow = true
        this.$nextTick(() => {
          this.initPopper()
          this.updateShadow()
        })
      }
    },

    hideTooltip() {
      this.isShow = false
    },

    initPopper() {
      createPopper(this.$refs.toggle, this.$refs.popout, {
        placement: "top",
        strategy: "fixed",
        modifiers: [
          {
            name: "arrow",
            options: {
              element: this.$refs.arrow,
            },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 16,
            },
          },
          {
            name: "flip",
            options: {
              padding: 24,
            },
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$popout-color: $color-cool-grey-70;
$popout-arrow-width: rem(12);
$popout-arrow-height: rem(8);

.MomTooltip {
  display: inline-flex;
  vertical-align: bottom;
}

.MomTooltip__Toggle {
  display: flex;
  cursor: help;
  max-width: 100%;
}

.MomTooltip__ToggleIcon {
  color: $color-blue-60;
}

.MomTooltip__Popout {
  max-width: calc(100% - #{rem(32)});
  z-index: $z-index-tooltip;

  &[data-popper-placement="top"] {
    padding-bottom: rem(12);
  }

  &[data-popper-placement="bottom"] {
    padding-top: rem(12);
  }
}

.MomTooltip__Wrapper {
  background-color: $popout-color;
  padding: rem(12);
  border-radius: $border-radius-corner;
  max-width: rem(360);
  max-height: rem(360);
  overflow-y: auto;
}

.MomTooltip__Content {
  @include font-size(s);
  @include line-height(s);
  color: $color-white;
}

.MomTooltip__Arrow {
  position: absolute;
  border-left: $popout-arrow-width * 0.5 solid transparent;
  border-right: $popout-arrow-width * 0.5 solid transparent;

  .MomTooltip__Popout[data-popper-placement="top"] & {
    top: calc(100% - #{rem(12)});
    border-top: $popout-arrow-height solid $popout-color;
    padding-bottom: rem(4);
  }

  .MomTooltip__Popout[data-popper-placement="bottom"] & {
    bottom: calc(100% - #{rem(12)});
    border-bottom: $popout-arrow-height solid $popout-color;
    padding-top: rem(4);
  }
}

.MomTooltip__Shadow {
  position: absolute;
  width: 100%;
  height: rem(24);
  left: 0;

  &--top {
    border-radius: $border-radius-corner $border-radius-corner 0 0;
    background: linear-gradient(to top, rgba(68, 68, 68, 0) 0%, rgba(68, 68, 68, 0.8) 100%);

    .MomTooltip__Popout[data-popper-placement="top"] & {
      top: 0;
    }

    .MomTooltip__Popout[data-popper-placement="bottom"] & {
      top: rem(12);
    }
  }

  &--bottom {
    border-radius: 0 0 $border-radius-corner $border-radius-corner;
    background: linear-gradient(to bottom, rgba(68, 68, 68, 0) 0%, rgba(68, 68, 68, 0.8) 100%);

    .MomTooltip__Popout[data-popper-placement="top"] & {
      bottom: rem(12);
    }

    .MomTooltip__Popout[data-popper-placement="bottom"] & {
      bottom: 0;
    }
  }
}
</style>
