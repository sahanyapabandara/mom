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

    <MomUploadErrorFiles
      v-if="errorFiles && errorFiles.length > 0"
      :files="errorFiles"
      @remove="onErrorFileRemove"
    />
  </div>
</template>

<script>
import uniqueId from "@/utils/uniqueId"
import { v4 as uuidv4 } from "uuid"
import dropzone from "vue2-dropzone"
// import FileType from "file-type-es5"
// import { PDFDocument } from "pdf-lib"
//import * as pdfjsLib from 'pdfjs-dist/es5/build/pdf';
//import { pdfJsWorker } from 'pdfjs-dist/es5/build/pdf.worker.entry';
import MomUploadDropzone from "@/components/upload/_MomUploadDropzone.vue"
import MomUploadFileList from "@/components/upload/_MomUploadFileList.vue"
import MomUploadErrorFiles from "@/components/upload/_MomUploadErrorFiles.vue"

//pdfjsLib.workerSrc = pdfJsWorker;

export default {
  name: "MomUpload2",
  release: "2.3.10",
  lastUpdated: "2.3.10",
  components: {
    dropzone,
    MomUploadDropzone,
    MomUploadFileList,
    MomUploadErrorFiles,
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
      errorFiles: [],
      isUploading: false,
      key: 100,
    }
  },
  watch: {
    value() {
      this.uploadedFiles = this.value ? this.value.slice(0) : []
      this.uploadedFilesSize = 0
      if (this.uploadedFiles.length > 0) {
        this.uploadedFiles.forEach(file => {
          this.uploadedFilesSize += this.formatFileSize(file.size)
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
        this.uploadedFilesSize += this.formatFileSize(file.size)
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
    /**
     * To remove a file from component
     *
     * @param {object}
     * @public
     */
    removeFile(file) {
      this.uploadedFiles = this.uploadedFiles.filter(item => item.id !== file.id)
      this.uploadedFilesSize -= this.formatFileSize(file.size)
      /**
       * When a file is removed
       * @event file-removed
       * @param {object} file
       */
      this.$emit("file-removed", file)
      this.$emit("input", this.uploadedFiles)
    },

    formatFileSize(fileSize) {
      return Number((fileSize / (1024 * 1024)).toFixed(4))
    },

    getTotalFileSize(files) {
      let totalFileSize = 0
      files.forEach(file => {
        totalFileSize += this.formatFileSize(file.size)
      })
      return totalFileSize
    },

    isValidFileType(fileType) {
      return fileType && this.acceptedFiles.includes(fileType)
    },

    isValidCharacterLength(filename) {
      return filename.split(/\.(?=[^.]+$)/)[0].length <= 100
    },

    isValidFileName(filename) {
      const pattern = /^[0-9a-z-_() ]{1,100}\.(jpg|jpeg|png|pdf)$/i
      return pattern.test(filename)
    },

    isNonEmptyFile(fileSize) {
      return fileSize && fileSize > 0
    },

    isNotDuplicateFile(filename) {
      let filenames = []
      this.uploadedFiles.forEach(uploadedFile => {
        filenames.push(uploadedFile.name.toLowerCase())
      })
      return filenames.indexOf(filename.toLowerCase()) < 0
    },

    removeErrorFile(file, message) {
      this.errorFiles.push({
        id: file.upload.uuid,
        name: file.name,
        message: message,
      })
      this.$refs.dropzone.removeFile(file)
    },

    async onFilesAdded(addedFiles) {
      let files = !Array.isArray(await addedFiles)
        ? Object.keys(addedFiles).map(i => addedFiles[i])
        : addedFiles.slice(0)

      files.forEach(file => (file.upload.uuid = uuidv4()))
      let addedFilesSize = this.getTotalFileSize(files)

      if (this.uploadedFilesSize + addedFilesSize > this.maxTotalFileSizeNumber) {
        this.$refs.dropzone.removeAllFiles(true)
        this.$emit("error", "limit_file_size")
      } else {
        for (let file of files) {
          if (!this.isValidFileType(file.type)) {
            this.removeErrorFile(file, "invalid_file_type")
          } else if (!this.isValidCharacterLength(file.name)) {
            this.removeErrorFile(file, "invalid_character_length")
          } else if (!this.isValidFileName(file.name)) {
            this.removeErrorFile(file, "invalid_file_name")
          } else if (!this.isNonEmptyFile(file.size)) {
            this.removeErrorFile(file, "empty_file")
          } else if (!this.isNotDuplicateFile(file.name)) {
            this.removeErrorFile(file, "duplicate_file")
          } else {
            // const fileURL = await URL.createObjectURL(file)
            // const fileBuffer = await fetch(fileURL).then(res => res.arrayBuffer())
            // const fileType = await FileType(fileBuffer)
            // if (fileType && file.type === fileType.mime) {
            //   if (file.type === "application/pdf") {
            //     try {
            //       await PDFDocument.load(fileBuffer, { updateMetadata: false })
            //     } catch (e) {
            //       if (e.message.toLowerCase().includes("encrypted")) {
            //         /*try {
            //           await pdfjsLib.getDocument(fileURL).promise
            //           this.removeErrorFile(file, "corrupted_file_error")
            //         } catch (e) {
            //           if (e.name === "PasswordException") {
            //             this.removeErrorFile(file, "pdf_encrypted_error")
            //           } else {
            //             this.removeErrorFile(file, "corrupted_file_error")
            //           }
            //         }*/
            //         /**
            //          * remove below line when uncomment above pdfjsLib related validation part
            //          */
            //         this.removeErrorFile(file, "pdf_encrypted_error")
            //       } else {
            //         this.removeErrorFile(file, "corrupted_file_error")
            //       }
            //     }
            //   }
            // } else {
            //   this.removeErrorFile(file, "corrupted_file_error")
            // }
          }
        }

        if (this.$refs.dropzone.getQueuedFiles().length > 0) {
          this.$refs.dropzone.processQueue()
          this.isUploading = true
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
      this.uploadedFilesSize += this.formatFileSize(file.size)
      formData.append("id", file.upload.uuid)
      formData.append("name", file.name)
      formData.append("size", file.size)
      formData.append("type", file.type)
    },

    onFileUploadProgress(file, progress) {
      let uploadingFile = this.uploadedFiles.find(item => item.id === file.upload.uuid)
      uploadingFile.progress = Math.round(progress)
    },

    onFileUploadComplete(response) {
      if (response.status === "success") {
        let uploadedFile = this.uploadedFiles.find(item => item.id === response.upload.uuid)
        uploadedFile.uploadCompleted = true
        uploadedFile.response = response.xhr.response
        /**
         * When a file is uploaded
         * @event file-uploaded
         * @param {object} uploadedFile
         */
        this.$emit("file-uploaded", uploadedFile)
      }
    },

    onFileUploadError(file, message) {
      if (
        typeof message !== "string" ||
        (!message.includes("Upload canceled") &&
          !message.includes("You can't upload files of this type") &&
          !message.includes("File is too big"))
      ) {
        this.$refs.dropzone.removeFile(file)
        this.removeFile({ id: file.upload.uuid, size: file.size })
        /**
         * When error is triggered
         * @event error
         * @param {string/object} message
         */
        this.$emit("error", message)
      }
    },

    onQueueCompleted() {
      this.isUploading = false
      /**
       * When file list is updated
       * @event input
       * @param {array} uploadedFiles
       */
      this.$emit("input", this.uploadedFiles)
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

    onErrorFileRemove(fileId) {
      this.errorFiles = this.errorFiles.filter(item => item.id !== fileId)
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
