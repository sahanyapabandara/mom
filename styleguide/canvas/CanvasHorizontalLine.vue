<template>
  <div id="CanvasHorizontalLine">
    <div class="rsg--preview-66">
      <MomCard>
        <p class="mom-p">Card content</p>

        <MomHorizontalLine :isFullWidth="isFullWidth" :isLastLine="isLastLine" />

        <MomButton text="Button" />
      </MomCard>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasHorizontalLine",
  data() {
    return {
      isFullWidth: false,
      isLastLine: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "isFullWidth",
          label: "Full width line",
          type: "boolean",
        },
        {
          name: "isLastLine",
          label: "Section/card last line",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-horizontal-line"
      html += this.isFullWidth ? " is-full-width" : ""
      html += this.isLastLine ? " is-last-line" : ""
      html += " />"

      return html
    },
  },
}
</script>
