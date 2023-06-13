<template>
  <div class="MomPage" @dragover="preventDefault" @drop="preventDefault">
    <div class="MomPage__Header">
      <!-- @slot Header content -->
      <slot name="header"></slot>
    </div>

    <main
      id="main"
      :class="['MomPage__Main', verticalCenteredContent && 'MomPage__Main--vertical-centered']"
    >
      <!-- @slot Main Content -->
      <slot></slot>
    </main>

    <div class="MomPage__Footer">
      <!-- @slot Footer content -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MomPage",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Show reload/exit prompt
     */
    promptUnload: {
      type: Boolean,
      default: false,
    },

    /**
     * Vertically center align content
     */
    verticalCenteredContent: {
      type: Boolean,
      default: false,
    },
  },
  beforeMount() {
    if (this.promptUnload) {
      window.addEventListener("beforeunload", this.onBeforeUnload)
    }
  },
  beforeDestroy() {
    if (this.promptUnload) {
      window.removeEventListener("beforeunload", this.onBeforeUnload)
    }
  },
  methods: {
    onBeforeUnload(e) {
      e.preventDefault()
      e.returnValue = false
    },

    preventDefault(e) {
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
.MomPage {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
}

.MomPage__Header {
  position: relative;
}

.MomPage__Main {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: rem(24) 0 rem(48);
  background-color: $color-grey-05;

  &--vertical-centered {
    justify-content: center;
  }

  @media print {
    background-color: $color-white;
  }
}

.MomPage__Footer {
  @media print {
    display: none;
  }
}
</style>
