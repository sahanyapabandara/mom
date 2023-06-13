<template>
  <component
    :is="type === 'link' ? 'a' : 'button'"
    :type="type !== 'link' && 'button'"
    :href="type === 'link' && !disabled && href"
    :target="type === 'link' && target"
    :rel="type === 'link' && rel"
    :disabled="type !== 'link' && disabled"
    :class="[
      'MomLink',
      `MomLink--size-${size}`,
      display && `MomLink--display-${display}`,
      darkMode && 'MomLink--dark-mode',
      underline && 'MomLink--underline',
      disabled && 'MomLink--is-disabled',
      icon && hideText && 'MomLink--hide-text',
    ]"
    @click="onClick"
  >
    <MomIcon
      v-if="icon && iconPosition === 'left'"
      :class="['MomLink__Icon', !hideText && 'MomLink__Icon--left']"
      :icon="icon"
      :size="size"
    /><!--

    --><span
      :class="['MomLink__Text', size === 'l' ? 'mom-h3' : size === 's' ? 'mom-p-s' : 'mom-p']"
    >
      <!-- @slot Link text -->
      <slot><span v-html="$html(text)" /></slot> </span
    ><!--

    --><MomIcon
      v-if="icon && iconPosition === 'right'"
      :class="['MomLink__Icon', !hideText && 'MomLink__Icon--right']"
      :icon="icon"
      :size="size"
    />
  </component>
</template>

<script>
import axios from "axios"
import MomIcon from "@/components/icon/MomIcon.vue"
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "MomLink",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Text
     */
    text: {
      type: String,
    },

    /**
     * Link `href`
     */
    href: {
      type: String,
      default: "javascript:void(0);",
    },

    /**
     * Link `target`
     */
    target: {
      type: String,
      validator: val => ["_self", "_blank", "_parent", "_top"].includes(val),
    },

    /**
     * Link `rel`
     */
    rel: {
      type: String,
    },

    /**
     * Size
     */
    size: {
      type: String,
      default: "m",
      validator: val => ["s", "m", "l"].includes(val),
    },

    /**
     * Icon (see `Icon`)
     */
    icon: {
      type: String,
      validator: val => Object.keys(ICON_SET).includes(val),
    },

    /**
     * Icon position
     */
    iconPosition: {
      type: String,
      default: "left",
      validator: val => ["left", "right"].includes(val),
    },

    /**
     * Hide link text
     */
    hideText: {
      type: Boolean,
      default: false,
    },

    /**
     * Link type
     */
    type: {
      type: String,
      default: "link",
      validator: val => ["link", "securelink", "button"].includes(val),
    },

    /**
     * Link display style
     */
    display: {
      type: String,
      validator: val => ["inline"].includes(val),
    },

    /**
     * Dark mode
     */
    darkMode: {
      type: Boolean,
      default: false,
    },

    /**
     * Underline mode
     */
    underline: {
      type: Boolean,
      default: false,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * With credentials
     */
    withCredentials: {
      type: Boolean,
      default: false,
    },

    /**
     * Set headers
     */
    headers: {
      type: Object,
      default: () => {
        return {}
      },
    },

    /**
     * Path
     */
    path: {
      type: String,
    },
  },
  methods: {
    onClick(e) {
      if (this.type === "securelink") {
        axios
          .get(this.href, {
            withCredentials: this.withCredentials,
            headers: this.headers,
          })
          .then(response => {
            if (response.data.success) {
              const results = response.data.results
              if (results.length > 0) {
                axios
                  .get(this.path + results[0], {
                    responseType: "blob",
                    withCredentials: this.withCredentials,
                    headers: this.headers,
                  })
                  .then(res => {
                    const blobUrl = window.URL.createObjectURL(res.data)
                    window.open(blobUrl)
                    window.URL.revokeObjectURL(blobUrl)
                  })
                  .catch(err => {
                    this.$emit("error", err)
                    throw err
                  })
              }
            }
          })
          .catch(err => {
            /**
             * When encounter axios error
             * @event error
             * @param {object} error
             */
            this.$emit("error", err)
            throw err
          })
      }

      if (!this.disabled) {
        /**
         * When the link is clicked
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
$link: $color-blue-80;
$link-active: $color-blue-90;
$link-visited: $color-purple-90;
$link-dark-mode: $color-blue-20;
$link-active-dark-mode: $color-blue-10;
$link-visited-dark-mode: $color-purple-40;
$link-disabled: $color-grey-50;

.MomLink {
  display: inline-flex;
  vertical-align: bottom;
  color: $link;

  &--display-inline {
    display: inline;
  }

  &:active {
    color: $link-active;
  }

  &:visited {
    color: $link-visited;
  }

  &--dark-mode {
    color: $link-dark-mode;

    &:active {
      color: $link-active-dark-mode;
    }

    &:visited {
      color: $link-visited-dark-mode;
    }
  }

  &--underline {
    text-decoration: underline;
    color: inherit;
  }

  &--is-disabled {
    color: $link-disabled !important;
    cursor: not-allowed;

    &:active {
      color: $link-disabled !important;
    }
  }
}

.MomLink__Icon {
  &--left {
    margin-right: rem(4);
  }

  &--right {
    margin-left: rem(4);
  }
}

.MomLink__Text {
  margin-bottom: 0;
  text-align: left;

  .MomLink--hide-text & {
    @include visually-hidden;
  }
}
</style>
