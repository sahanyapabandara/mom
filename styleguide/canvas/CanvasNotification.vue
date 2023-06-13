<template>
  <div id="CanvasNotification">
    <div class="rsg--preview-66">
      <MomNotification
        :type="type || 'info'"
        :size="size || 'm'"
        :title="title"
        :timeout="timeout || 10"
      >
        <p class="mom-p">Notification text</p>
      </MomNotification>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasNotification",
  data() {
    return {
      type: null,
      size: null,
      title: null,
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
          options: [null, "info", "error", "warning", "success", "internet-lost"],
        },
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "m", "l"],
        },
        {
          name: "title",
          label: "Title",
          type: "text",
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
      return this.type || this.size || this.title || this.timeout
    },
    code() {
      let html = ""
      html += "<mom-notification"
      html += this.hasProp ? "\n" : ""
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.title ? `\ttitle="${this.title}"\n` : ""
      html += this.timeout ? `\ttimeout="${this.timeout}"\n` : ""
      html += ">\n"
      html += '\t<p class="mom-p">Notification text</p>\n'
      html += "</mom-notification>"

      return html
    },
  },
}
</script>
