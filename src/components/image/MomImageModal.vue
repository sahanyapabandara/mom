<template>
  <div class="MomImageModal__Wrapper">
    <div class="MomImageModal__Preview">
      <MomImage
        v-for="(thumbnail, i) in images"
        :key="i"
        class="MomImageModal__PreviewThumbnail"
        :source="thumbnail.url"
        :withCredentials="withCredentials"
        :headers="headers"
        :path="thumbnail.path"
        @click="onThumbnailClick($event, i)"
      />
    </div>

    <portal v-if="isShow" to="overlay">
      <transition name="mom-transition-fade">
        <div v-if="isShow" class="overlay" @click="onOverlayClick">
          <div ref="modal" role="dialog" class="MomImageModal" :aria-modal="isShow" tabindex="-1">
            <div class="MomImageModal__Image">
              <MomImage
                ref="image"
                :source="currentImage.url"
                :alt="currentImage.filename"
                :key="currentImageIndex"
                :withCredentials="withCredentials"
                :headers="headers"
                :path="currentImage.path"
              />

              <button
                ref="prev"
                v-show="currentImageIndex > 0"
                class="MomImageModal__PrevButton"
                @click="updateImage($event, currentImageIndex - 1)"
              >
                <MomIcon icon="chevron-left" size="xl" />
              </button>

              <button
                ref="next"
                v-show="currentImageIndex < totalImages - 1"
                class="MomImageModal__NextButton"
                @click="updateImage($event, currentImageIndex + 1)"
              >
                <MomIcon icon="chevron-right" size="xl" />
              </button>
            </div>

            <div ref="caption" class="MomImageModal__Caption">
              <p class="mom-p MomImageModal__Filename">{{ currentImage.filename }}</p>

              <p v-if="totalImages > 1" class="mom-p MomImageModal__Counter">
                {{ currentImageIndex + 1 }} / {{ totalImages }}
              </p>
            </div>

            <div class="MomImageModal__Footer">
              <div
                ref="thumbnailWrapper"
                :class="[
                  'MomImageModal__ThumbnailWrapper',
                  mostLeft && !mostRight && 'MomImageModal__ThumbnailWrapper--most-left',
                  !mostLeft && mostRight && 'MomImageModal__ThumbnailWrapper--most-right',
                  mostLeft && mostRight && 'MomImageModal__ThumbnailWrapper--no-scrollable',
                ]"
              >
                <button class="MomImageModal__ThumbnailPrev" @click="onThumbnailPrev">
                  <MomIcon icon="chevron-left" size="l" />
                </button>

                <div ref="thumbnails" class="MomImageModal__Thumbnails">
                  <MomImage
                    v-for="(thumbnail, i) in images"
                    :key="i"
                    :class="[
                      'MomImageModal__Thumbnail',
                      i === currentImageIndex && 'MomImageModal__Thumbnail--selected',
                    ]"
                    :source="thumbnail.url"
                    :alt="thumbnail.filename"
                    :withCredentials="withCredentials"
                    :headers="headers"
                    :path="thumbnail.path"
                    @click="updateImage($event, i)"
                  />
                </div>

                <button class="MomImageModal__ThumbnailNext" @click="onThumbnailNext">
                  <MomIcon icon="chevron-right" size="l" />
                </button>
              </div>
            </div>

            <button
              ref="close"
              class="MomImageModal__CloseButton"
              aria-label="Close"
              @click="onClose"
            >
              <MomIcon icon="close" size="xl" />
            </button>
          </div>
        </div>
      </transition>
    </portal>
  </div>
</template>

<script>
import animateScrollTo from "animated-scroll-to"
import KEYCODES from "@/constants/keycodes"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomImage from "@/components/image/MomImage.vue"

export default {
  name: "MomImageModal",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
    MomImage,
  },
  props: {
    /*
     * Images <br />
     * { `url` `filename` }
     */
    images: {
      type: Array,
      required: true,
    },

    /**
     * Show modal
     */
    showModal: {
      type: Boolean,
      default: false,
    },

    /**
     * Close modal when click on overlay
     */
    closeOnOverlayClick: {
      type: Boolean,
      default: true,
    },

    /**
     * Close modal when esc is pressed
     */
    closeOnEsc: {
      type: Boolean,
      default: true,
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
      isShow: this.showModal,
      currentImageIndex: 0,
      mostLeft: true,
      mostRight: true,
    }
  },
  computed: {
    totalImages() {
      return this.images.length
    },
    currentImage() {
      return this.images[this.currentImageIndex]
    },
  },
  watch: {
    showModal() {
      this.isShow = this.showModal
      this.updateModalState()
      this.updateScrollState()
    },
    images() {
      this.currentImageIndex = 0
      this.updateScrollState()
    },
  },
  mounted() {
    this.updateModalState()
    this.updateScrollState()
  },
  methods: {
    /**
     * To close modal
     *
     * @public
     */
    closeModal() {
      this.isShow = false
      this.updateModalState()
    },

    updateImage(e, i) {
      e.stopPropagation()
      this.currentImageIndex = i

      if (this.isShow && this.totalImages > 1) {
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

    updateModalState() {
      this.$nextTick(() => {
        if (this.isShow) {
          document.addEventListener("keydown", this.onKeyDown)
          this.$refs.modal.focus()
          document.body.style.overflow = "hidden"
        } else {
          document.removeEventListener("keydown", this.onKeyDown)
          document.body.style.overflow = ""
        }
      })
    },

    updateScrollState() {
      this.$nextTick(() => {
        if (this.isShow && this.totalImages > 1) {
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

    onThumbnailClick(e, i) {
      this.updateImage(e, i)
      this.isShow = true
      this.updateModalState()
      this.updateScrollState()
      /**
       * When the modal is opened
       * @event openModal
       * @param {number} index
       */
      this.$emit("openModal", i)
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

    onClose(e) {
      e.stopPropagation()
      this.closeModal(e)
      /**
       * When the modal is closed
       * @event closeModal
       * @param {object} e
       */
      this.$emit("closeModal", e)
    },

    onKeyDown(e) {
      const key = e.keyCode || e.which
      switch (key) {
        case KEYCODES.ESC:
          if (this.closeOnEsc) {
            this.onClose(e)
          }
          break
        case KEYCODES.LEFT:
          if (this.currentImageIndex > 0) {
            this.updateImage(this.currentImageIndex - 1)
          }
          break
        case KEYCODES.RIGHT:
          if (this.currentImageIndex < this.totalImages - 1) {
            this.updateImage(this.currentImageIndex + 1)
          }
          break
      }
    },

    onOverlayClick(e) {
      if (
        this.closeOnOverlayClick &&
        !this.$refs.image.$el.contains(e.target) &&
        (!this.$refs.prev || !this.$refs.prev.contains(e.target)) &&
        (!this.$refs.next || !this.$refs.next.contains(e.target)) &&
        !this.$refs.caption.contains(e.target) &&
        !this.$refs.thumbnailWrapper.contains(e.target) &&
        !this.$refs.close.contains(e.target)
      ) {
        this.onClose(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.MomImageModal__Wrapper {
  display: flex;
}

.MomImageModal__Preview {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: rem(-8);
}

.MomImageModal__PreviewThumbnail {
  width: rem(64);
  height: rem(64);
  @include inline-margin(rem(8));
  border: rem(1) solid $color-cool-grey-20;
  cursor: pointer;
  object-fit: cover;
  object-position: 50% 50%;
  margin-bottom: rem(8);
}

.MomImageModal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: $z-index-overlay;
  outline: none;
}

.MomImageModal__Image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: rem(76);
  overflow: hidden;
  height: calc(100% - #{rem(176)});

  @media #{$media-query-tablet} {
    padding: rem(60) rem(60) 0;
    // height: calc(100% - #{rem(176)});
  }
}

.MomImageModal__PrevButton,
.MomImageModal__NextButton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 30px;
  color: $color-white;
  padding: rem(12);
}

.MomImageModal__PrevButton {
  left: 0;
}

.MomImageModal__NextButton {
  right: 0;
}

.MomImageModal__Caption {
  padding: rem(16) rem(16) rem(24);
}

.MomImageModal__Filename,
.MomImageModal__Counter {
  margin: 0 auto;
  text-align: center;
  color: $color-white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.MomImageModal__Footer {
  padding: rem(11) rem(16) rem(12);
  border-top: rem(1) solid $color-white;
  display: block;
}
.MomImageModal__ThumbnailWrapper {
  display: flex;
  width: rem(720);
  max-width: 100%;
  margin: auto;
}

.MomImageModal__ThumbnailPrev {
  width: rem(44);
  color: $color-white;
  padding: rem(8);

  .MomImageModal__ThumbnailWrapper--most-left &,
  .MomImageModal__ThumbnailWrapper--no-scrollable & {
    display: none;
  }
}

.MomImageModal__Thumbnails {
  max-width: calc(100% - #{rem(88)});
  display: flex;
  overflow: hidden;

  .MomImageModal__ThumbnailWrapper--most-left & {
    margin-left: rem(44);
  }

  .MomImageModal__ThumbnailWrapper--most-right & {
    margin-right: rem(44);
  }

  .MomImageModal__ThumbnailWrapper--no-scrollable & {
    margin: auto;
  }
}

.MomImageModal__Thumbnail {
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

.MomImageModal__ThumbnailNext {
  width: rem(44);
  color: $color-white;
  padding: rem(8);

  .MomImageModal__ThumbnailWrapper--most-right &,
  .MomImageModal__ThumbnailWrapper--no-scrollable & {
    display: none;
  }
}

.MomImageModal__CloseButton {
  position: absolute;
  top: 0;
  right: 0;
  padding: rem(12);
  color: $color-white;
}
</style>
