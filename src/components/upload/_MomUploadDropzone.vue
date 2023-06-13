<template>
  <div
    :class="[
      'MomUploadDropzone',
      inputState && `MomUploadDropzone--input-state-${inputState}`,
      isUploading && 'MomUploadDropzone--is-uploading',
    ]"
  >
    <MomIcon class="MomUploadDropzone__Icon" icon="document-upload" size="2xl" />
    <div>
      <p
        class="mom-p MomUploadDropzone__Maintext"
        v-html="$html(mainText) || $lang('momuploaddropzone.maintext')"
      />
      <p
        class="mom-p-s MomUploadDropzone__Subtext"
        v-html="
          $html(subText) ||
          $lang('momuploaddropzone.subtext_part1') +
            fileSize +
            $lang('momuploaddropzone.subtext_part2')
        "
      />
    </div>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomUploadDropzone",
  components: {
    MomIcon,
  },
  props: {
    /**
     *  Main text
     */
    mainText: {
      type: String,
    },

    /**
     *  Sub text
     */
    subText: {
      type: String,
    },

    /**
     *  File size (MB)
     */
    fileSize: {
      type: Number,
    },

    /**
     * Input state
     */
    inputState: {
      type: String,
      validator: val => ["error", "warning", "disabled"].includes(val),
    },

    /**
     *  isUploading
     */
    isUploading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.MomUploadDropzone {
  position: relative;
  width: rem(480);
  padding: rem(14) rem(22);
  max-width: 100%;
  overflow: hidden;
  background-color: $color-white;
  border: rem(2) dashed $color-cool-grey-20;
  border-radius: $border-radius-corner;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: $color-blue-00;
    border-color: $color-blue-50;
    cursor: pointer;
  }

  &--input-state-error {
    background-color: $color-red-00 !important;
    border-color: $color-red-70 !important;
  }

  &--input-state-warning {
    background-color: $color-orange-00 !important;
    border-color: $color-orange-70 !important;
  }

  &--input-state-disabled,
  &--is-uploading {
    background-color: $color-white !important;
    border-color: $color-grey-30 !important;
  }
}

.MomUploadDropzone__Icon {
  display: inline-block;
  margin-right: rem(16);
}

.MomUploadDropzone__Maintext {
  margin-bottom: rem(4);
}

.MomUploadDropzone__Icon {
  color: $color-cool-grey-50;

  .MomUploadDropzone--input-state-disabled &,
  .MomUploadDropzone--is-uploading & {
    color: $color-grey-30;
  }
}

.MomUploadDropzone__Maintext {
  color: $color-cool-grey-90;

  .MomUploadDropzone--input-state-disabled &,
  .MomUploadDropzone--is-uploading & {
    color: $color-grey-40;
  }
}

.MomUploadDropzone__Subtext {
  color: $color-cool-grey-70;

  .MomUploadDropzone--input-state-disabled &,
  .MomUploadDropzone--is-uploading & {
    color: $color-grey-40;
  }
}
</style>
