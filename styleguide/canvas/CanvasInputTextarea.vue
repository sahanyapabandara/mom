<template>
  <div id="CanvasInputTextarea">
    <div class="rsg--preview-66">
      <MomInputTextarea
        :name="name"
        :inputState="inputState"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :resize="resize"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputTextarea",
  data() {
    return {
      name: null,
      inputState: null,
      placeholder: null,
      maxlength: null,
      resize: true,
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
          name: "maxlength",
          label: "Max input length",
          type: "text",
          size: 20,
        },
        {
          name: "resize",
          label: "Allow resize (height)",
          type: "boolean",
        },
        {
          name: "value",
          label: "Input value",
          type: "value",
        },
      ]
    },
    hasProp() {
      return this.name || this.inputState || this.placeholder || this.maxlength || !this.resize
    },
    code() {
      let html = ""
      html += "<mom-input-textarea"
      html += this.hasProp ? "\n" : ""
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += this.maxlength ? `\tmaxlength="${this.maxlength}"\n` : ""
      html += !this.resize ? '\t:resize="false"\n' : ""
      html += this.hasProp ? "/>" : " />"

      return html
    },
  },
}
</script>
