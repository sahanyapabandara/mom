<template>
  <div id="CanvasBanner">
    <div class="rsg--preview-66">
      <MomBanner :type="type || 'info'" :size="size || 'xl'" :title="title" :variant="variant">
        <p class="mom-p">Banner text</p>
      </MomBanner>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasBanner",
  data() {
    return {
      type: null,
      size: null,
      title: null,
      variant: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "type",
          label: "Type",
          type: "options",
          options: [null, "info", "error", "warning", "success"],
        },
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "m", "l", "xl", "full"],
        },
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "page-banner"],
        },
      ]
    },
    hasProp() {
      return this.type || this.size || this.title || this.variant
    },
    code() {
      let html = ""
      html += "<mom-banner"
      html += this.hasProp ? "\n" : ""
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.title ? `\ttitle="${this.title}"\n` : ""
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += ">\n"
      html += '\t<p class="mom-p">Banner text</p>\n'
      html += "</mom-banner>"

      return html
    },
  },
}
</script>
