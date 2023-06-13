<template>
  <div id="CanvasUpload">
    <div class="rsg--preview-66">
      <MomUpload
        :url="url"
        :inputState="inputState"
        :mainText="mainText"
        :subText="subText"
        :acceptedFiles="acceptedFiles || 'image/jpeg, image/png, application/pdf'"
        :maxTotalFileSize="maxTotalFileSize || 2"
        v-model="value"
        @remove="removeFile"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasUpload",
  data() {
    return {
      url: "https://httpbin.org/post",
      inputState: null,
      acceptedFiles: null,
      mainText: null,
      subText: null,
      maxTotalFileSize: null,
      value: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "url",
          label: "Upload URL",
          type: "text",
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning", "disabled"],
        },
        {
          name: "mainText",
          label: "Dropzone text",
          type: "text",
        },
        {
          name: "subText",
          label: "Dropzone subtext",
          type: "text",
        },
        {
          name: "acceptedFiles",
          label: "Accepted files MIME",
          type: "text",
        },
        {
          name: "maxTotalFileSize",
          label: "Max total file size allowed (MB)",
          type: "text",
          size: 20,
        },
      ]
    },
    code() {
      let html = "<mom-upload\n"
      html += this.url ? `\turl="${this.url}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.mainText ? `\tmain-text="${this.mainText}"\n` : ""
      html += this.subText ? `\tsub-text="${this.subText}"\n` : ""
      html += this.acceptedFiles ? `\taccepted-files="${this.acceptedFiles}"\n` : ""
      html += this.maxTotalFileSize ? `\tmax-total-file-size="${this.maxTotalFileSize}"\n` : ""
      html += "/>"

      return html
    },
  },
  methods: {
    removeFile(e) {
      this.value = this.value.filter(file => file.id !== e.id)
    },
  },
}
</script>
