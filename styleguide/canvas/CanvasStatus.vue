<template>
  <div id="CanvasStatus">
    <div class="rsg--preview-66 d:f">
      <MomStatus
        :text="text"
        :size="size || 'm'"
        :color="color"
        :icon="icon"
        :uppercase="uppercase"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasStatus",
  data() {
    return {
      text: "Status text",
      size: null,
      color: null,
      icon: null,
      uppercase: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "text",
          label: "Text",
          type: "text",
        },
        {
          name: "size",
          label: "Status size",
          type: "options",
          options: [null, "s", "m", "l"],
        },
        {
          name: "color",
          label: "Status color",
          type: "options",
          options: [null, "green", "red", "orange", "blue", "purple", "grey"],
        },
        {
          name: "icon",
          label: "Icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
        },
        {
          name: "uppercase",
          label: "Uppercase text",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-status\n"
      html += `\ttext="${this.text}"\n`
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.color ? `\tcolor="${this.color}"\n` : ""
      html += this.icon ? `\ticon="${this.icon}"\n` : ""
      html += this.uppercase ? "\tuppercase\n" : ""
      html += "/>"

      return html
    },
  },
}
</script>
