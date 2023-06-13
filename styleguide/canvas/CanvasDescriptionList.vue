<template>
  <div id="CanvasDescriptionList">
    <div class="rsg--preview-66">
      <MomDescriptionList
        :items="items"
        :variant="variant"
        :termWidth="!variant || variant === 'horizontal' ? termWidth || 'm' : null"
        :divider="divider"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasDescriptionList",
  data() {
    return {
      items: [
        {
          term: "Term 1",
          details: "Details 1",
        },
        {
          term: "Term 2",
          details: "Details 2",
        },
        {
          term: "Term 3",
          details: "Details 3",
        },
      ],
      variant: null,
      termWidth: null,
      divider: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "items",
          label: "Description items",
          type: "objectArray",
          attr: [
            { name: "term", label: "Term", type: "text" },
            { name: "details", label: "Details", type: "text" },
            { name: "tooltip", label: "Tooltip", type: "text" },
            { name: "boldText", label: "Bold text", type: "boolean" },
            { name: "topBorder", label: "Top border", type: "boolean" },
          ],
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "vertical", "horizontal", "table"],
        },
        {
          name: "termWidth",
          label: "Term width",
          type: "options",
          options: [null, "s", "m", "l"],
          show: !this.variant || this.variant === "horizontal",
        },
        {
          name: "divider",
          label: "Show divider",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-description-list\n"
      html += '\t:items="[\n'
      this.items.forEach(item => {
        html += "\t\t{\n"
        html += `\t\t\tterm: '${item.term || ""}',\n`
        html += `\t\t\tdetails: '${item.details || ""}',\n`
        html += item.tooltip ? `\t\t\ttooltip: '${item.tooltip}',\n` : ""
        html += item.boldText ? "\t\t\tboldText: true,\n" : ""
        html += item.topBorder ? "\t\t\ttopBorder: true,\n" : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html +=
        (!this.variant || this.variant === "horizontal") && this.termWidth
          ? `\tterm-width="${this.termWidth}"\n`
          : ""
      html += this.variant != "table" && this.divider ? "\tdivider\n" : ""
      html += "/>"

      return html
    },
  },
}
</script>
