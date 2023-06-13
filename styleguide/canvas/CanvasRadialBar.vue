<template>
  <div id="CanvasHorizontalBar">
    <div class="rsg--preview-66 d:f">
      <MomRadialBar :type="type" :value="value" :max="max" :name="name" :link="link" />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasRadialBar",
  data() {
    return {
      type: "individual",
      value: "20",
      max: "50",
      name: "MUI KENG CHEAM",
      link: {},
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "type",
          label: "Type",
          type: "options",
          options: ["individual", "firm"],
        },
        {
          name: "value",
          label: "Value",
          type: "text",
        },
        {
          name: "max",
          label: "Max value",
          type: "text",
        },
        {
          name: "name",
          label: "Name",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "object",
          attr: [
            { name: "text", label: "Text", type: "text" },
            { name: "href", label: "Href", type: "text" },
            {
              name: "target",
              label: "Target",
              type: "options",
              options: ["", "_self", "_blank", "_parent", "_top"],
            },
          ],
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-radial-bar\n"
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.value ? `\tvalue="${this.value}"\n` : ""
      html += this.max ? `\tmax="${this.max}"\n` : ""
      html += `\tname="${this.name}"\n`
      if (this.link && this.link.text && this.link.href) {
        html += '\t:link="{\n'
        html += this.link.text ? `\t\ttext: "${this.link.text}",\n` : ""
        html += this.link.href ? `\t\thref: "${this.link.href}",\n` : ""
        html += this.link.target ? `\t\ttarget: "${this.link.target}"\n` : ""
        html += '\t}"\n'
      }
      html += "/>"

      return html
    },
  },
}
</script>
