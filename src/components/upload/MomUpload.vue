<template>
  <div class="MomUpload">
    <div class="MomUpload__Dropzone">
      <dropzone
        ref="dropzone"
        :id="idForDropzone"
        :key="key"
        :options="uploaderOptions"
        :includeStyling="false"
        useCustomSlot
        @vdropzone-files-added="onFilesAdded"
        @vdropzone-sending="onFileSending"
        @vdropzone-upload-progress="onFileUploadProgress"
        @vdropzone-complete="onFileUploadComplete"
        @vdropzone-error="onFileUploadError"
        @vdropzone-queue-complete="onQueueCompleted"
      >
        <MomUploadDropzone
          :mainText="mainText"
          :subText="subText"
          :inputState="inputState"
          :fileSize="maxTotalFileSizeNumber"
          :isUploading="isUploading"
        />
      </dropzone>
      <span :id="idForHiddenInput" />
      <div v-if="isUploading || inputState === 'disabled'" class="MomUpload__Overlay" />
    </div>

    <MomUploadFileList
      v-if="uploadedFiles.length > 0"
      :files="uploadedFiles"
      :withCredentials="withCredentials"
      :headers="headers"
      :url="previewUrl"
      :path="previewPath"
      @remove="onRemove"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import uniqueId from "@/utils/uniqueId"
import { v4 as uuidv4 } from "uuid"
import dropzone from "vue2-dropzone"
import MomUploadDropzone from "@/components/upload/_MomUploadDropzone.vue"
import MomUploadFileList from "@/components/upload/_MomUploadFileList.vue"

export default {
  name: "MomUpload",
  release: "2.0.9",
  lastUpdated: "2.3.0",
  components: {
    dropzone,
    MomUploadDropzone,
    MomUploadFileList,
  },
  props: {
    /**
     *  Upload post url
     */
    url: {
      type: String,
      required: true,
    },

    /**
     *  Accepted file MIME types
     */
    acceptedFiles: {
      type: String,
      default: "image/jpeg, image/png, application/pdf",
    },

    /**
     *  Max total file size (MB)
     */
    maxTotalFileSize: {
      type: [Number, String],
      default: 2,
    },

    /**
     *  Dropzone main text
     */
    mainText: {
      type: String,
    },

    /**
     *  Dropzone sub text
     */
    subText: {
      type: String,
    },

    /**
     * Dropzone input state
     */
    inputState: {
      type: String,
      validator: val => ["error", "warning", "disabled"].includes(val),
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
     *  Preview Url
     */
    previewUrl: {
      type: String,
    },

    /**
     *  Preview path
     */
    previewPath: {
      type: String,
    },

    /**
     * `id` for upload dropzone
     */
    idForDropzone: {
      type: String,
      default: () => {
        return uniqueId()
      },
    },

    /**
     * `id` for hidden input
     */
    idForHiddenInput: {
      type: String,
      default: () => {
        return uniqueId()
      },
    },

    /**
     * Additional params
     */
    params: {
      type: Object,
    },

    /**
     *  Upload component value <br />
     * `{ id, name, size, type, uploadCompleted }`
     */
    value: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      uploadedFiles: [],
      uploadedFilesSize: 0,
      isUploading: false,
      hasError: false,
      key: 100,
    }
  },
  watch: {
    value() {
      this.uploadedFiles = this.value ? this.value.slice(0) : []
      this.uploadedFilesSize = 0
      if (this.uploadedFiles.length > 0) {
        this.uploadedFiles.forEach(file => {
          this.uploadedFilesSize += this.getFileSize(file)
        })
      }
    },
    params() {
      this.key++
    },
  },
  mounted() {
    this.uploadedFiles = this.value ? this.value.slice(0) : []
    if (this.uploadedFiles.length > 0) {
      this.uploadedFiles.forEach(file => {
        this.uploadedFilesSize += this.getFileSize(file)
      })
    }
  },
  computed: {
    maxTotalFileSizeNumber() {
      return this.maxTotalFileSize &&
        Number(this.maxTotalFileSize) &&
        Number(this.maxTotalFileSize) > 0
        ? Math.round(Number(this.maxTotalFileSize) * 100) / 100
        : 2
    },
    uploaderOptions() {
      return {
        url: this.url,
        acceptedFiles: this.acceptedFiles,
        maxFilesize: this.maxTotalFileSizeNumber,
        headers: this.headers,
        withCredentials: this.withCredentials,
        previewTemplate: "<div></div>",
        autoProcessQueue: false,
        parallelUploads: 10,
        params: this.params,
        hiddenInputContainer: `span#${this.idForHiddenInput}`,
      }
    },
  },
  methods: {
    getFileSize(file) {
      return Number((file.size / (1024 * 1024)).toFixed(4))
    },

    getTotalFileSize(files) {
      let totalFileSize = 0
      files.forEach(file => {
        totalFileSize += this.getFileSize(file)
      })
      return totalFileSize
    },

    getNonEmptyFiles(files) {
      let nonEmptyFiles = []
      files.forEach(file => {
        if (file.size && file.size > 0) {
          nonEmptyFiles.push(file)
        }
      })
      return nonEmptyFiles
    },

    getValidFiles(files) {
      let validFiles = []
      files.forEach(file => {
        if (file.type && this.acceptedFiles.includes(file.type)) {
          validFiles.push(file)
        }
      })
      return validFiles
    },

    checkDuplicateFiles(files) {
      let filenames = []
      this.uploadedFiles.forEach(uploadedFile => filenames.push(uploadedFile.name.toLowerCase()))
      files.forEach(file => filenames.push(file.name.toLowerCase()))
      let filenamesUnique = [...new Set(filenames)]
      return filenamesUnique.length !== filenames.length
    },

    processQueuedFiles(files) {
      let processQueue = setInterval(() => {
        files = files.filter(file => file.status === "queued")
        if (this.$refs.dropzone.getQueuedFiles().length === files.length) {
          this.$refs.dropzone.processQueue()
          this.isUploading = true
          clearInterval(processQueue)
        }
      })
    },

    clearQueuedFiles(files) {
      let clearQueue = setInterval(() => {
        files = files.filter(file => file.status === "queued")
        if (this.$refs.dropzone.getQueuedFiles().length === files.length) {
          files.forEach(file => this.$refs.dropzone.removeFile(file))
          clearInterval(clearQueue)
        }
        this.hasError = false
      }, 100)
    },

    async onFilesAdded(addedFiles) {
      let files = !Array.isArray(await addedFiles)
        ? Object.keys(addedFiles).map(i => addedFiles[i])
        : addedFiles.slice(0)

      files.forEach(file => (file.upload.uuid = uuidv4()))

      let nonEmptyFiles = this.getNonEmptyFiles(files)

      if (nonEmptyFiles.length !== files.length) {
        this.clearQueuedFiles(files)
        this.$emit("error", "emptyFile")
      } else {
        let validFiles = this.getValidFiles(files)

        if (validFiles.length !== files.length) {
          this.clearQueuedFiles(files)
          this.$emit("error", "invalidFileFormat")
        } else {
          let addedFilesSize = this.getTotalFileSize(files)

          if (this.uploadedFilesSize + addedFilesSize > this.maxTotalFileSizeNumber) {
            this.clearQueuedFiles(files)
            this.$emit("error", "invalidFileSize")
          } else {
            let hasDuplicateFiles = this.checkDuplicateFiles(files)

            if (hasDuplicateFiles) {
              this.clearQueuedFiles(files)
              this.$emit("error", "duplicateFiles")
            } else {
              this.processQueuedFiles(files)
            }
          }
        }
      }
    },

    onFileSending(file, xhr, formData) {
      this.uploadedFiles.push({
        file: file,
        id: file.upload.uuid,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        uploadCompleted: false,
      })
      this.uploadedFilesSize += file.size / (1024 * 1024)
      formData.append("id", file.upload.uuid)
      formData.append("name", file.name)
      formData.append("size", file.size)
      formData.append("type", file.type)
    },

    onFileUploadProgress(uploadingFile, uploadingProgress) {
      let resultFile = this.uploadedFiles.find(file => file.id === uploadingFile.upload.uuid)
      resultFile.progress = Math.round(uploadingProgress)
    },

    onFileUploadComplete(response) {
      let uploadedFile = this.uploadedFiles.find(file => file.id === response.upload.uuid)
      if (response.status === "success") {
        uploadedFile.uploadCompleted = true
        uploadedFile.response = response.xhr.response
        /**
         * When a file is uploaded
         * @event file-uploaded
         * @param {object} uploadedFile
         */
        this.$emit("file-uploaded", uploadedFile)
      } else {
        if (response.status !== "canceled") {
          this.$refs.dropzone.removeAllFiles(true)
        }
        this.$emit("error", "networkError")
      }
    },

    onQueueCompleted() {
      this.isUploading = false
      if (!this.hasError) {
        /**
         * When file list is updated
         * @event input
         * @param {array} uploadedFiles
         */
        this.$emit("input", this.uploadedFiles)
      }
      this.hasError = false
    },

    onFileUploadError(file, error) {
      this.hasError = true
      if (
        typeof error !== "string" ||
        (error !== "Upload canceled." &&
          error !== "You can't upload files of this type." &&
          !error.includes("File is too big"))
      ) {
        this.$refs.dropzone.removeAllFiles(true)
        this.removeFile({ id: file.upload.uuid, size: file.size })
        /**
         * When error is triggered
         * @event error
         * @param {string/object} error
         */
        this.$emit("error", error)
      }
    },

    onRemove(file) {
      /**
       * When a remove button is clicked
       * @event remove
       * @param {object} file
       */
      this.$emit("remove", file)
    },

    onCancel(file) {
      this.$refs.dropzone.removeFile(file.file)
      this.removeFile(file)
      /**
       * When a cancel button is clicked
       * @event cancel
       * @param {object} file
       */
      this.$emit("cancel", file)
    },

    /**
     * To remove a file from component
     *
     * @param {object}
     * @public
     */
    removeFile(file) {
      this.uploadedFiles = this.uploadedFiles.filter(uploadedFile => uploadedFile.id !== file.id)
      this.uploadedFilesSize -= file.size / (1024 * 1024)
      /**
       * When a file is removed
       * @event file-removed
       * @param {object} file
       */
      this.$emit("file-removed", file)
      this.$emit("input", this.uploadedFiles)
    },
  },
}
</script>

<style lang="scss" scoped>
.MomUpload {
  width: rem(480);
  max-width: 100%;
  @include stack-margin(rem(24));
}

.MomUpload__Dropzone {
  position: relative;
  @include stack-margin(rem(24));
}

.MomUpload__Overlay {
  position: absolute;
  z-index: 1;
  background-color: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: not-allowed;
}

.MomUpload__HiddenInput {
  display: none;
}
</style>
