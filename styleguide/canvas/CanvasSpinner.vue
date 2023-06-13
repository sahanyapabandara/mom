<template>
  <div id="CanvasSpinner">
    <div class="rsg--preview-66 d:f"><MomSpinner :size="size || 'm'" /></div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasSpinner",
  data() {
    return {
      size: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "s", "m", "l", "xl", "2xl"],
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-spinner"
      html += this.size ? ` size="${this.size}"` : ""
      html += " />"

      return html
    },
  },
}
</script>
