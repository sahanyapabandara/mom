<template>
  <ul class="MomUploadErrorFiles">
    <li v-for="file in files" :key="file.id" class="MomUploadErrorFiles__File">
      <div class="MomUploadErrorFiles__FileInfo">
        <p class="MomUploadErrorFiles__FileName">{{ file.name }}</p>

        <MomFormMessage
          :messageText="
            $lang('momupload') && $lang('momupload.' + file.message)
              ? $lang('momupload.' + file.message)
              : file.message
          "
          inputState="error"
        />
      </div>

      <button class="MomUploadErrorFiles__Action" @click="onRemove(file.id)">
        <MomIcon icon="close" />
      </button>
    </li>
  </ul>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"
import MomFormMessage from "@/components/form/_MomFormMessage.vue"

export default {
  name: "MomUploadErrorFiles",
  components: {
    MomIcon,
    MomFormMessage,
  },
  props: {
    /**
     * List of error files <br />
     * `{ id, name, message }`
     */
    files: {
      type: Array,
    },
  },
  methods: {
    onRemove(fileId) {
      /**
       * When the delete button is clicked
       * @event remove
       * @param {string} fileId
       */
      this.$emit("remove", fileId)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomUploadErrorFiles {
  width: rem(480);
  max-width: 100%;
}

.MomUploadErrorFiles__File {
  display: flex;
  padding: rem(11) rem(15) rem(11) rem(23);
  border: rem(1) solid $color-red-80;
  background-color: $color-red-00;
  border-radius: $border-radius-corner;
  @include stack-margin(rem(16));
  align-items: center;
}

.MomUploadErrorFiles__FileInfo {
  margin-right: auto;
  width: calc(100% - #{rem(32)});
}

.MomUploadErrorFiles__FileName {
  @include font-size(m);
  @include line-height(m);
  color: $color-cool-grey-90;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.MomUploadErrorFiles__Action {
  color: $color-cool-grey-50;
  margin-left: rem(8);
  align-self: flex-start;
}
</style>
