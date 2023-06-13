<template>
  <div id="CanvasTooltip">
    <div class="rsg--preview-66 d:f">
      <MomTooltip
        :tooltipText="!defaultSlot ? tooltipText : null"
        :iconSize="!toggleText ? iconSize || 's' : null"
        :toggleText="!toggleSlot ? toggleText : null"
      >
        <p v-if="defaultSlot" class="mom-p" v-html="tooltipText" />

        <p v-if="toggleSlot && toggleText" slot="toggle" class="mom-p" v-html="toggleText" />
      </MomTooltip>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasTooltip",
  data() {
    return {
      iconSize: null,
      tooltipText: "Tooltip text",
      toggleText: null,
      defaultSlot: false,
      toggleSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "tooltipText",
          label: "Tooltip content",
          type: "text",
        },
        {
          name: "iconSize",
          label: "Icon size",
          type: "options",
          options: [null, "s", "m"],
          show: !this.toggleText,
        },
        {
          name: "toggleText",
          label: "Toggle text",
          type: "text",
        },
        {
          name: "defaultSlot",
          label: "Use default slot",
          type: "boolean",
        },
        {
          name: "toggleSlot",
          label: "Use 'toggle' slot",
          type: "boolean",
        },
      ]
    },
    hasProp() {
      return !this.defaultSlot || this.iconSize || (!this.toggleSlot && this.toggleText)
    },
    code() {
      let html = ""
      html += "<mom-tooltip"
      html += this.hasProp ? "\n" : ""
      html += !this.defaultSlot ? `\ttooltip-text="${this.tooltipText}"\n` : ""
      html += !this.toggleText && this.iconSize ? `\ticon-size="${this.iconSize}"\n` : ""
      html += !this.toggleSlot && this.toggleText ? `\ttoggle-text="${this.toggleText}"\n` : ""
      if (!this.defaultSlot && !this.toggleSlot) {
        html += "/>"
      } else {
        html += ">\n"
        html += this.defaultSlot ? `\t<p class="mom-p">${this.tooltipText}</p>\n` : ""
        html += this.defaultSlot && this.toggleSlot ? "\n" : ""
        html +=
          this.toggleSlot && this.toggleText
            ? `\t<span slot="toggle">${this.toggleText}</span>\n`
            : ""
        html += "</mom-tooltip>"
      }

      return html
    },
  },
}
</script>
