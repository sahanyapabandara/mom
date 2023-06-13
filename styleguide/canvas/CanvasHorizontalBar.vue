<template>
  <div id="CanvasHorizontalBar">
    <div class="rsg--preview-66 d:f">
      <MomHorizontalBar :max="max" :success-point="successPoint" :items="items" />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasHorizontalBar",
  data() {
    return {
      max: null,
      successPoint: "50",
      items: [
        {
          type: "individual",
          value: 20,
        },
        {
          type: "firm",
          value: 10,
        },
      ],
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "max",
          label: "Max value",
          type: "text",
        },
        {
          name: "successPoint",
          label: "Success point",
          type: "text",
        },
        {
          name: "items",
          label: "Items",
          type: "objectArray",
          attr: [
            { name: "type", type: "options", options: ["individual", "firm"] },
            { name: "value", label: "Value", type: "text" },
          ],
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-horizontal-bar\n"
      html += this.max ? `\tmax-value="${this.max}"\n` : ""
      html += this.successPoint ? `\tsuccess-point="${this.successPoint}"\n` : ""
      html += '\t:items="[\n'
      this.items.forEach(item => {
        html += "\t\t{\n"
        html += item.type ? `\t\t\ttype: '${item.type}',\n` : ""
        html += item.value ? `\t\t\tvalue: '${item.value}',\n` : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += "/>"

      return html
    },
  },
}
</script>
