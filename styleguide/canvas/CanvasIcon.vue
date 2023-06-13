<template>
  <div id="CanvasIcon">
    <div class="rsg--preview-66 d:f"><MomIcon :icon="icon" :size="size || 'm'" /></div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasIcon",
  data() {
    return {
      icon: "home",
      size: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "icon",
          label: "Icon",
          type: "options",
          options: Object.keys(ICON_SET),
        },
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
      html += "<mom-icon"
      html += ` icon="${this.icon}"`
      html += this.size ? ` size="${this.size}"` : ""
      html += " />"

      return html
    },
  },
}
</script>
