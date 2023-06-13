<template>
  <div id="CanvasInputSelect">
    <div class="rsg--preview-66">
      <MomInputSelect
        :name="name"
        :useCategory="useCategory"
        :options="useCategory ? categories : options"
        :size="size || 'l'"
        :inputState="inputState"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputSelect",
  data() {
    return {
      name: null,
      useCategory: false,
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
      categories: [
        {
          title: "Group A",
          options: [
            {
              label: "Option one",
              value: "1",
            },
            {
              label: "Option two",
              value: "2",
            },
          ],
        },
        {
          title: "Group B",
          options: [
            {
              label: "Option three",
              value: "3",
            },
            {
              label: "Option four",
              value: "4",
            },
          ],
        },
      ],
      size: null,
      inputState: null,
      placeholder: null,
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
          name: "useCategory",
          label: "Use category",
          type: "boolean",
          value: this.useCategory,
        },
        {
          name: "options",
          label: "Options",
          type: "objectArray",
          attr: [
            { name: "label", label: "Label", type: "text" },
            { name: "value", label: "Value", type: "text" },
            { name: "description", label: "Description", type: "text" },
            { name: "disabled", label: "Disabled", type: "boolean" },
          ],
          show: !this.useCategory,
        },
        {
          name: "categories",
          label: "Categories",
          type: "objectArray",
          attr: [
            { name: "title", label: "Category title", type: "text" },
            {
              name: "options",
              label: "Options",
              type: "objectArray",
              attr: [
                { name: "label", label: "Label", type: "text" },
                { name: "value", label: "Value", type: "text" },
                { name: "description", label: "Description", type: "text" },
                { name: "disabled", label: "Disabled", type: "boolean" },
              ],
            },
          ],
          show: this.useCategory,
        },
        {
          name: "size",
          label: "Input size",
          type: "options",
          options: [null, "xs", "xs1", "s", "m", "l", "xl", "full"],
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
          name: "value",
          label: "Input value",
          type: "value",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-input-select\n"
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.useCategory ? "\tuse-category\n" : ""
      html += '\t:options="[\n'
      if (this.useCategory) {
        this.categories.forEach(category => {
          html += "\t\t{\n"
          html += `\t\t\ttitle: '${category.title || ""}',\n`
          html += "\t\t\toptions: [\n"
          category.options.forEach(option => {
            html += "\t\t\t\t{\n"
            html += `\t\t\t\t\tlabel: '${option.label || ""}',\n`
            html += `\t\t\t\t\tvalue: '${option.value || ""}',\n`
            html += option.description ? `\t\t\t\t\tdescription: '${option.description}',\n` : ""
            html += option.disabled ? "\t\t\t\t\tdisabled: true,\n" : ""
            html += "\t\t\t\t},\n"
          })
          html += "\t\t\t],\n"
          html += "\t\t},\n"
        })
      } else {
        this.options.forEach(option => {
          html += "\t\t{\n"
          html += `\t\t\tlabel: '${option.label || ""}',\n`
          html += `\t\t\tvalue: '${option.value || ""}',\n`
          html += option.description ? `\t\t\tdescription: '${option.description}',\n` : ""
          html += option.disabled ? "\t\t\tdisabled: true,\n" : ""
          html += "\t\t},\n"
        })
      }
      html += '\t]"\n'
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += "/>"

      return html
    },
  },
}
</script>
