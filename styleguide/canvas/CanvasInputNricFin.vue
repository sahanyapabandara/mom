<template>
  <div id="CanvasInputNricFin">
    <div class="rsg--preview-66">
      <MomInputNricFin
        :name="name"
        :mSeriesFin="mSeriesFin"
        :inputState="inputState"
        :placeholder="placeholder"
        :textAlignment="textAlignment"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputNricFin",
  data() {
    return {
      name: null,
      mSeriesFin: false,
      inputState: null,
      placeholder: null,
      textAlignment: null,
      value: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "name",
          label: "Input name",
          type: "text",
        },
        {
          name: "mSeriesFin",
          label: "Support M-series FIN",
          type: "boolean",
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning", "disabled"],
        },
        {
          name: "placeholder",
          label: "Placeholder",
          type: "text",
        },
        {
          name: "textAlignment",
          label: "Text alignment",
          type: "options",
          options: [null, "center"],
        },
        {
          name: "value",
          label: "Input value",
          type: "value",
        },
      ]
    },
    hasProp() {
      return (
        this.name || this.mSeriesFin || this.inputState || this.placeholder || this.textAlignment
      )
    },
    code() {
      let html = ""
      html += "<mom-input-nric-fin"
      html += this.hasProp ? "\n" : ""
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.mSeriesFin ? "\tm-series-fin\n" : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += this.textAlignment ? `\ttext-alignment="${this.textAlignment}"\n` : ""
      html += this.hasProp ? "/>" : " />"

      return html
    },
  },
}
</script>
