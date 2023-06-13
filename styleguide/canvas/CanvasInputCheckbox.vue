<template>
  <div id="CanvasInputCheckbox">
    <div class="rsg--preview-66">
      <MomInputCheckbox
        :name="name"
        :options="options"
        :variant="variant || 'vertical'"
        :inputState="inputState"
        :disabled="disabled"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputCheckbox",
  data() {
    return {
      name: null,
      options: [
        {
          label: "Option one",
          value: "1",
        },
        {
          label: "Option two",
          value: "2",
        },
        {
          label: "Option three",
          value: "3",
        },
      ],
      variant: null,
      inputState: null,
      disabled: false,
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
          name: "options",
          label: "Options",
          type: "objectArray",
          attr: [
            { name: "label", label: "Label", type: "text" },
            { name: "value", label: "Value", type: "text", size: "10" },
            { name: "description", label: "Description", type: "text" },
            {
              name: "supportingText",
              label: "Supporting text",
              type: "text",
              show: this.variant === "card",
            },
            { name: "disabled", label: "Disabled", type: "boolean" },
          ],
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "horizontal", "vertical", "card"],
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning"],
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
        },
        {
          name: "value",
          label: "Input value",
          type: "value",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-input-checkbox\n"
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += '\t:options="[\n'
      this.options.forEach(option => {
        html += "\t\t{\n"
        html += `\t\t\tlabel: '${option.label || ""}',\n`
        html += `\t\t\tvalue: '${option.value || ""}',\n`
        html += option.description ? `\t\t\tdescription: '${option.description}',\n` : ""
        html +=
          this.variant === "card" && option.supportingText
            ? `\t\t\tsupporting-text: '${option.supportingText}',\n`
            : ""
        html += option.disabled ? "\t\t\tdisabled: true,\n" : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += !this.disabled && this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.disabled ? "\tdisabled\n" : ""
      html += "/>"

      return html
    },
  },
}
</script>
