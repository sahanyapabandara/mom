<template>
  <div id="CanvasBreadcrumb">
    <div class="rsg--preview-66"><MomBreadcrumb :links="links" /></div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasBreadcrumb",
  data() {
    return {
      links: [
        {
          text: "<em>myMOM</em> Portal",
          href: "javascript:void(0);",
        },
        {
          text: "Quick Menu",
          href: "javascript:void(0);",
        },
      ],
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "links",
          label: "Links",
          type: "objectArray",
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
      html += "<mom-breadcrumb\n"
      html += '\t:links="[\n'
      this.links.forEach(link => {
        html += "\t\t{\n"
        html += `\t\t\ttext: '${link.text || ""}',\n`
        html += link.href ? `\t\t\thref: '${link.href}',\n` : ""
        html += link.target ? `\t\t\ttarget: '${link.target}',\n` : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += "/>"

      return html
    },
  },
}
</script>
