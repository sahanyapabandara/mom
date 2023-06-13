<template>
  <div
    v-if="totalImages > 0"
    :class="['MomImageCarousel', imageSize && `MomImageCarousel--image-${imageSize}`]"
    :style="{ width: `${containerWidth}rem` }"
  >
    <div class="MomImageCarousel__Preview" :style="{ height: `${containerHeight}rem` }">
      <div
        :class="[
          'MomImageCarousel__Image',
          zoomable && 'MomImageCarousel__Image--zoomable',
          zoomable && scale === 3 && 'MomImageCarousel__Image--zoom_max',
        ]"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <MomImage
          ref="image"
          :source="currentImage.url"
          :alt="currentImage.url"
          :key="currentImageIndex"
          :withCredentials="withCredentials"
          :headers="headers"
          :path="currentImage.path"
          :style="{
            transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          }"
        />
      </div>

      <button
        v-show="currentImageIndex > 0"
        class="MomImageCarousel__PrevButton"
        @click="updateImage(currentImageIndex - 1)"
      >
        <MomIcon icon="chevron-left" size="l" />
      </button>

      <button
        v-show="currentImageIndex < totalImages - 1"
        class="MomImageCarousel__NextButton"
        @click="updateImage(currentImageIndex + 1)"
      >
        <MomIcon icon="chevron-right" size="l" />
      </button>
    </div>

    <div v-if="currentImage.description" class="MomImageCarousel__Description">
      <p class="mom-p">{{ currentImage.description }}</p>
    </div>

    <template v-if="totalImages > 1">
      <div
        v-if="thumbnailType === 'image'"
        :class="[
          'MomImageCarousel__ThumbnailWrapper',
          mostLeft && !mostRight && 'MomImageCarousel__ThumbnailWrapper--most-left',
          !mostLeft && mostRight && 'MomImageCarousel__ThumbnailWrapper--most-right',
          mostLeft && mostRight && 'MomImageCarousel__ThumbnailWrapper--no-scrollable',
        ]"
      >
        <button class="MomImageCarousel__ThumbnailPrev" @click="onThumbnailPrev">
          <MomIcon icon="chevron-left" size="l" />
        </button>

        <div ref="thumbnails" class="MomImageCarousel__Thumbnails">
          <MomImage
            v-for="(thumbnail, i) in images"
            :key="i"
            :class="[
              'MomImageCarousel__Thumbnail',
              i === currentImageIndex && 'MomImageCarousel__Thumbnail--selected',
            ]"
            :source="thumbnail.url"
            :alt="thumbnail.url"
            :withCredentials="withCredentials"
            :headers="headers"
            :path="thumbnail.path"
            @click="updateImage(i)"
          />
        </div>

        <button class="MomImageCarousel__ThumbnailNext" @click="onThumbnailNext">
          <MomIcon icon="chevron-right" size="l" />
        </button>
      </div>

      <div v-else-if="thumbnailType === 'bullet'" class="MomImageCarousel__Bullets">
        <span
          v-for="(image, i) in images"
          :key="i"
          :class="[
            'MomImageCarousel__Bullet',
            i === currentImageIndex && 'MomImageCarousel__Bullet--selected',
          ]"
          @click="updateImage(i)"
        />
      </div>
    </template>
  </div>

  <div
    v-else
    class="MomImageCarousel__Placeholder"
    :style="{ width: `${containerWidth}rem`, height: `${containerHeight}rem` }"
  >
    <p class="mom-p-s MomImageCarousel__PlaceholderText">
      Only jpg and png files will display a preview.
    </p>
  </div>
</template>

<script>
import animateScrollTo from "animated-scroll-to"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomImage from "@/components/image/MomImage.vue"

export default {
  name: "MomImageCarousel",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomImage,
  },
  props: {
    /**
     * Images <br />
     * { `url` `description` }
     */
    images: {
      type: Array,
      required: true,
    },

    /**
     * Container width
     */
    width: {
      type: [Number, String],
      default: 544,
    },

    /**
     * Container height
     */
    height: {
      type: [Number, String],
      default: 544,
    },

    /**
     * Image size
     */
    imageSize: {
      type: String,
      validator: val => ["full"].includes(val),
    },

    /**
     * Thumbnail type
     */
    thumbnailType: {
      type: String,
      default: "image",
      validator: val => ["image", "bullet", "none"].includes(val),
    },

    /**
     * Zoomable
     */
    zoomable: {
      type: Boolean,
      default: false,
    },

    /**
     * With credentials (axios)
     */
    withCredentials: {
      type: Boolean,
      default: false,
    },

    /**
     * Headers (axios)
     */
    headers: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      mostLeft: true,
      mostRight: true,
      scale: 1,
      translateX: 0,
      translateY: 0,
      isMouseDown: false,
      isDragging: false,
      startPosition: null,
    }
  },
  computed: {
    containerWidth() {
      return this.width &&
        Number(this.width) &&
        Number.isInteger(Number(this.width)) &&
        Number(this.width) > 0
        ? Number(this.width) / 16
        : 34
    },
    containerHeight() {
      return this.height &&
        Number(this.height) &&
        Number.isInteger(Number(this.height)) &&
        Number(this.height) > 0
        ? Number(this.height) / 16
        : 34
    },
    totalImages() {
      return this.images.length
    },
    currentImage() {
      return this.images[this.currentImageIndex]
    },
  },
  watch: {
    images() {
      this.currentImageIndex = 0
      this.updateScrollState()
    },
  },
  mounted() {
    this.updateScrollState()
  },
  methods: {
    updateImage(i) {
      this.currentImageIndex = i
      this.scale = 1
      this.translateX = 0
      this.translateY = 0

      if (this.totalImages > 1 && this.thumbnailType === "image") {
        let currentScroll = this.$refs.thumbnails.scrollLeft
        let offsetWidth = this.$refs.thumbnails.offsetWidth
        let thumbnailLeft = i * 72
        let thumbnailRight = thumbnailLeft + 64

        let scroll =
          currentScroll > thumbnailLeft
            ? thumbnailLeft
            : currentScroll < thumbnailRight - offsetWidth
            ? thumbnailRight - offsetWidth
            : 0

        if (scroll > 0) {
          animateScrollTo([scroll, null], {
            elementToScroll: this.$refs.thumbnails,
          }).then(done => {
            if (done) {
              this.updateScrollState()
            }
          })
        }
      }
    },

    updateScrollState() {
      this.$nextTick(() => {
        if (this.totalImages > 1 && this.thumbnailType === "image") {
          let thumbnailsWidth = this.totalImages * 72 - 8
          let offsetWidth = this.$refs.thumbnails.offsetWidth
          if (thumbnailsWidth > offsetWidth) {
            this.mostLeft = this.$refs.thumbnails.scrollLeft === 0
            this.mostRight = this.$refs.thumbnails.scrollLeft === thumbnailsWidth - offsetWidth
          } else {
            this.mostLeft = true
            this.mostRight = true
          }
        }
      })
    },

    onThumbnailPrev() {
      animateScrollTo([this.$refs.thumbnails.scrollLeft - 144, null], {
        elementToScroll: this.$refs.thumbnails,
      }).then(done => {
        if (done) {
          this.updateScrollState()
        }
      })
    },

    onThumbnailNext() {
      animateScrollTo([this.$refs.thumbnails.scrollLeft + 144, null], {
        elementToScroll: this.$refs.thumbnails,
      }).then(done => {
        if (done) {
          this.updateScrollState()
        }
      })
    },

    onMouseDown(e) {
      e.preventDefault()
      this.isMouseDown = true
      this.startPosition = { x: e.pageX, y: e.pageY }
    },

    onMouseUp(e) {
      e.preventDefault()
      if (this.zoomable && this.isMouseDown && !this.isDragging) {
        if (this.scale !== 3) {
          this.scale += 1
        } else {
          this.scale = 1
          this.translateX = 0
          this.translateY = 0
        }
      }
      this.isMouseDown = false
      this.isDragging = false
    },

    onMouseMove(e) {
      e.preventDefault()
      if (this.isMouseDown) {
        this.isDragging = true
        this.translateX += e.pageX - this.startPosition.x
        this.translateY += e.pageY - this.startPosition.y
        this.startPosition = { x: e.pageX, y: e.pageY }

        let offsetWidth = this.$refs.image.$el.offsetWidth
        let offsetHeight = this.$refs.image.$el.offsetHeight
        let imageWidth =
          this.imageSize === "full" ? this.containerWidth * 16 : this.containerWidth * 16 - 88
        let imageHeight = this.containerHeight * 16

        if (offsetWidth * this.scale > imageWidth) {
          let maxTranslateX = (offsetWidth * this.scale - imageWidth) / (this.scale * 2)
          this.translateX = Math.min(Math.max(this.translateX, -maxTranslateX), maxTranslateX)
        } else {
          this.translateX = 0
        }

        if (offsetHeight * this.scale > imageHeight) {
          let maxTranslateY = (offsetHeight * this.scale - imageHeight) / (this.scale * 2)
          this.translateY = Math.min(Math.max(this.translateY, -maxTranslateY), maxTranslateY)
        } else {
          this.translateY = 0
        }
      }
    },

    onMouseLeave(e) {
      e.preventDefault()
      this.isMouseDown = false
      this.isDragging = false
    },
  },
}
</script>

<style lang="scss" scoped>
.MomImageCarousel {
  max-width: 100%;
}

.MomImageCarousel__Preview {
  position: relative;
}

.MomImageCarousel__Image {
  width: calc(100% - #{rem(88)});
  height: 100%;
  margin: 0 rem(44);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-cool-grey-60;
  overflow: hidden;

  .MomImageCarousel--image-full & {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  &--zoomable > .MomImage {
    cursor: zoom-in;
  }

  &--zoom_max > .MomImage {
    cursor: zoom-out;
  }
}

.MomImageCarousel__PrevButton,
.MomImageCarousel__NextButton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: $color-cool-grey-90;
  padding: rem(8);

  .MomImageCarousel--image-full & {
    color: $color-white;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.MomImageCarousel__PrevButton {
  left: 0;

  .MomImageCarousel--image-full & {
    border-radius: 0 $border-radius-corner $border-radius-corner 0;
  }
}

.MomImageCarousel__NextButton {
  right: 0;

  .MomImageCarousel--image-full & {
    border-radius: $border-radius-corner 0 0 $border-radius-corner;
  }
}

.MomImageCarousel__Description {
  width: calc(100% - #{rem(88)});
  margin-left: rem(44);
  margin-right: rem(44);
  height: rem(48);
  margin-top: rem(16);
  overflow: auto;
  word-break: break-word;

  .MomImageCarousel--image-full & {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}

.MomImageCarousel__ThumbnailWrapper {
  display: flex;
  margin-top: rem(16);
}

.MomImageCarousel__ThumbnailPrev {
  width: rem(44);
  padding: rem(8);

  .MomImageCarousel__ThumbnailWrapper--most-left &,
  .MomImageCarousel__ThumbnailWrapper--no-scrollable & {
    display: none;
  }
}

.MomImageCarousel__Thumbnails {
  max-width: calc(100% - #{rem(88)});
  display: flex;
  overflow: hidden;

  .MomImageCarousel__ThumbnailWrapper--most-left & {
    margin-left: rem(44);
  }

  .MomImageCarousel__ThumbnailWrapper--most-right & {
    margin-right: rem(44);
  }

  .MomImageCarousel__ThumbnailWrapper--no-scrollable & {
    margin: auto;
  }
}

.MomImageCarousel__Thumbnail {
  width: rem(64);
  height: rem(64);
  @include inline-margin(rem(8));
  border: rem(1) solid $color-cool-grey-20;
  cursor: pointer;
  object-fit: cover;
  object-position: 50% 50%;
  flex: none;

  &--selected {
    border: rem(2) solid $color-blue-40;
  }
}

.MomImageCarousel__ThumbnailNext {
  width: rem(44);
  padding: rem(8);

  .MomImageCarousel__ThumbnailWrapper--most-right &,
  .MomImageCarousel__ThumbnailWrapper--no-scrollable & {
    display: none;
  }
}

.MomImageCarousel__Bullets {
  display: flex;
  justify-content: center;
  margin-top: rem(24);

  .MomImageCarousel__Bullet {
    width: rem(8);
    height: rem(8);
    @include inline-margin(rem(8));
    cursor: pointer;
    background-color: $color-cool-grey-20;
    border-radius: $border-radius-circle;

    &--selected {
      background-color: $color-cool-grey-90;
    }
  }
}

.MomImageCarousel__Placeholder {
  max-width: 100%;
  background-color: $color-cool-grey-05;
  display: flex;
  align-items: center;
  justify-content: center;

  .MomImageCarousel__PlaceholderText {
    color: $color-cool-grey-50;
  }
}
</style>
