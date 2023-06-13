<template>
  <ul class="MomUploadFileList">
    <li
      v-for="file in files"
      :key="file.id"
      :class="[
        'MomUploadFileList__File',
        file.uploadCompleted && 'MomUploadFileList__File--upload-completed',
      ]"
    >
      <p class="MomUploadFileList__FileName">{{ file.name }}</p>

      <p class="MomUploadFileList__FileSize">{{ formatSize(file.size) }}</p>

      <MomLink
        v-if="file.uploadCompleted"
        :text="$lang('momuploadfilelist.view')"
        class="MomUploadFileList__ViewLink"
        :href="url + '/' + file.id"
        :path="path"
        type="securelink"
        :headers="headers"
        :withCredentials="withCredentials"
      />

      <div v-else class="MomUploadFileList__FileProgress">
        <span class="MomUploadFileList__FileProgressBar" :style="{ width: file.progress + '%' }">
        </span>
      </div>

      <button
        class="MomUploadFileList__FileAction"
        @click="file.uploadCompleted ? onRemove(file) : onCancel(file)"
      >
        <MomIcon :icon="file.uploadCompleted ? 'delete' : 'close'" />
      </button>
    </li>
  </ul>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomUploadFileList",
  components: {
    MomIcon,
    MomLink,
  },
  props: {
    /**
     * List of files <br />
     * `{ id, name, size, type, progress, uploadCompleted }`
     */
    files: {
      type: Array,
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
     * Download/view link url
     */
    url: {
      type: String,
    },

    /**
     * Download/view link path
     */
    path: {
      type: String,
    },
  },
  methods: {
    formatSize(size) {
      if (size < 1024) {
        return size + " B"
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed() + " KB"
      } else {
        return (size / (1024 * 1024)).toFixed(2) + " MB"
      }
    },

    onRemove(file) {
      /**
       * When the delete button is clicked
       * @event remove
       * @param {object} file
       */
      this.$emit("remove", file)
    },

    onCancel(file) {
      /**
       * When the cancel button is clicked
       * @event cancel
       * @param {object} file
       */
      this.$emit("cancel", file)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomUploadFileList {
  width: rem(480);
  max-width: 100%;
  @include stack-margin(rem(16));
}

.MomUploadFileList__File {
  display: flex;
  padding: rem(11) rem(15) rem(11) rem(23);
  border: rem(1) solid $color-blue-40;
  border-radius: $border-radius-corner;
  @include stack-margin(rem(16));
  align-items: center;

  &--upload-completed {
    background-color: $color-blue-00;
  }
}

.MomUploadFileList__FileName {
  @include font-size(m);
  @include line-height(m);
  color: $color-cool-grey-90;
  width: calc(100% - #{rem(192)});
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.MomUploadFileList__FileSize {
  @include font-size(s);
  @include line-height(s);
  color: $color-cool-grey-50;
  width: rem(64);
  text-align: right;
  margin-left: rem(8);
}

.MomUploadFileList__FileProgress {
  position: relative;
  width: rem(48);
  height: rem(8);
  margin-left: rem(24);
  margin-right: rem(24);
  background-color: $color-grey-20;
  border-radius: $border-radius-corner;
}

.MomUploadFileList__FileProgressBar {
  position: absolute;
  height: 100%;
  background-color: $color-blue-50;
  border-radius: $border-radius-corner;
}

.MomUploadFileList__ViewLink {
  margin-left: auto;
  margin-right: rem(24);
}

.MomUploadFileList__FileAction {
  color: $color-cool-grey-50;
}
</style>
