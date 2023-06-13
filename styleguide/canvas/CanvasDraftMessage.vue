<template>
  <div id="CanvasDraftMessage">
    <div class="rsg--preview-66">
      <MomDraftMessage :type="type || 'delete'" :timeout="timeout || 10">
        <p class="mom-p">Draft message text</p>
      </MomDraftMessage>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasDraftMessage",
  data() {
    return {
      type: null,
      timeout: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "type",
          label: "Type",
          type: "options",
          options: [null, "delete", "undo"],
        },
        {
          name: "timeout",
          label: "Timeout (seconds)",
          type: "text",
          size: 20,
        },
      ]
    },
    hasProp() {
      return this.type || this.timeout
    },
    code() {
      let html = ""
      html += "<mom-draft-message"
      html += this.hasProp ? "\n" : ""
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.timeout ? `\ttimeout="${this.timeout}"\n` : ""
      html += ">\n"
      html += '\t<p class="mom-p">Draft message text</p>\n'
      html += "</mom-draft-message>"

      return html
    },
  },
}
</script>
