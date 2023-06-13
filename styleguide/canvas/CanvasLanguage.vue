<template>
  <div id="CanvasLanguage">
    <div class="rsg--preview-66">
      <MomLanguage :languages="languages" :currentLanguage="currentLanguage" />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasLanguage",
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
      currentLanguage: "en",
    }
  },
  computed: {
    languageList() {
      let arr = [null]
      this.languages.forEach(language => {
        arr.push(language.code)
      })
      return arr
    },
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
        {
          name: "currentLanguage",
          label: "Current Language",
          type: "options",
          options: this.languageList,
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-language\n"
      html += '\t:languages="[\n'
      this.languages.forEach(language => {
        html += "\t\t{\n"
        html += `\t\t\ttext: '${language.text || ""}',\n`
        html += `\t\t\tcode: '${language.code || ""}',\n`
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += this.currentLanguage ? `\tcurrent-language="${this.currentLanguage}"\n` : ""
      html += "/>"

      return html
    },
  },
}
</script>
