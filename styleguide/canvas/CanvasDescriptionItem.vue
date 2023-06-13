<template>
  <div id="CanvasDescriptionItem">
    <div class="rsg--preview-66">
      <MomDescriptionItem
        :term="term"
        :details="!defaultSlot ? details : null"
        :variant="variant"
        :termWidth="!variant ? termWidth || 'm' : null"
        :bottomBorder="bottomBorder"
        :boldText="boldText"
        :topBorder="topBorder"
        :tooltip="!tooltipSlot ? tooltip : null"
      >
        <span v-if="defaultSlot && details">{{ details }}</span>

        <MomTooltip slot="tooltip" v-if="tooltipSlot && tooltip" :tooltipText="tooltip" />
      </MomDescriptionItem>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasDescriptionItem",
  data() {
    return {
      term: "Term",
      details: "Details",
      variant: null,
      tooltip: null,
      termWidth: null,
      boldText: false,
      topBorder: false,
      bottomBorder: false,
      defaultSlot: false,
      tooltipSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "term",
          label: "Term",
          type: "text",
        },
        {
          name: "details",
          label: "Details",
          type: "text",
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "vertical", "horizontal", "table"],
        },
        {
          name: "tooltip",
          label: "Tooltip",
          type: "text",
        },
        {
          name: "termWidth",
          label: "Term width",
          type: "options",
          options: [null, "s", "m", "l"],
          show: !this.variant,
        },
        {
          name: "boldText",
          label: "Bold text",
          type: "boolean",
        },
        {
          name: "topBorder",
          label: "Show top border",
          type: "boolean",
        },
        {
          name: "bottomBorder",
          label: "Show bottom border",
          type: "boolean",
        },
        {
          name: "defaultSlot",
          label: "Use default slot",
          type: "boolean",
        },
        {
          name: "tooltipSlot",
          label: "Use 'tooltip' slot",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-description-item\n"
      html += `\tterm="${this.term}"\n`
      html += !this.defaultSlot && this.details ? `\tdetails="${this.details}"\n` : ""
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += !this.variant && this.termWidth ? `\tterm-width="${this.termWidth}"\n` : ""
      html += !this.tooltipSlot && this.tooltip ? `\ttooltip="${this.tooltip}"\n` : ""
      html += this.boldText ? "\tbold-text\n" : ""
      html += this.topBorder ? "\ttop-border\n" : ""
      html += this.bottomBorder ? "\tbottom-border\n" : ""
      if ((this.defaultSlot && this.details) || (this.tooltipSlot && this.tooltip)) {
        html += ">\n"
        if (this.defaultSlot && this.details) {
          html += `\t<span>${this.details}</span>\n`
        }
        if (this.tooltipSlot && this.tooltip) {
          html += `\t<mom-tooltip slot="tooltip" tooltip-text="${this.tooltip}" />\n`
        }
        html += "</mom-description-item>"
      } else {
        html += "/>"
      }

      return html
    },
  },
}
</script>
