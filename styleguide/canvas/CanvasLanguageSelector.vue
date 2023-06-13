<template>
  <div id="CanvasLanguage">
    <div class="rsg--preview-66">
      <MomLanguageSelector :languages="languages" />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasLanguageSelector",
  data() {
    return {
      languages: [
        {
          text: "English",
          code: "en",
        },
        {
          text: "Chinese",
          code: "cn",
        },
        {
          text: "Malay",
          code: "my",
        },
        {
          text: "Tamil",
          code: "ta",
        },
      ],
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "languages",
          label: "Languages",
          type: "objectArray",
          attr: [
            { name: "text", label: "Text", type: "text" },
            { name: "code", label: "Code", type: "text" },
          ],
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-language-selector\n"
      html += '\t:languages="[\n'
      this.languages.forEach(language => {
        html += "\t\t{\n"
        html += `\t\t\ttext: '${language.text || ""}',\n`
        html += `\t\t\tcode: '${language.code || ""}',\n`
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += "/>"

      return html
    },
  },
}
</script>
