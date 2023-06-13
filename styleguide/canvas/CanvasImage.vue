<template>
  <div class="CanvasImage">
    <div class="rsg--preview-66"><MomImage :source="source" :alt="alt" /></div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasImage",
  data() {
    return {
      source: "https://via.placeholder.com/600x600.png",
      alt: "Image alt",
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "source",
          label: "Image url",
          type: "text",
          size: 100,
        },
        {
          name: "alt",
          label: "Image alt",
          type: "text",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-image\n"
      html += `\tsource="${this.source}"\n`
      html += this.alt ? `\talt="${this.alt}"\n` : ""
      html += "/>"

      return html
    },
  },
}
</script>
