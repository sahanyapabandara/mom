<template>
  <div id="CanvasInputAutosuggest">
    <div class="rsg--preview-66">
      <MomInputAutosuggest
        :name="name"
        :useCategory="useCategory"
        :options="useCategory ? categories : options"
        :size="size || 'l'"
        :inputState="inputState"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :hideIcon="hideIcon"
        :allowFreeText="allowFreeText"
        :filterType="filterType"
        :filterLength="filterLength"
        :maxOptions="maxOptions"
        :isLoading="isLoading"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputAutosuggest",
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
      maxlength: null,
      hideIcon: false,
      allowFreeText: false,
      filterType: null,
      filterLength: null,
      maxOptions: null,
      isLoading: false,
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
          name: "maxlength",
          label: "Max input length",
          type: "text",
          size: 20,
        },
        {
          name: "hideIcon",
          label: "Hide icon",
          type: "boolean",
        },
        {
          name: "allowFreeText",
          label: "Allow free text option",
          type: "options",
          options: [null, true, "always"],
        },
        {
          name: "filterType",
          label: "Filter type",
          type: "options",
          options: [null, "label"],
        },
        {
          name: "filterLength",
          label: "Min filter length",
          type: "text",
          size: 20,
        },
        {
          name: "maxOptions",
          label: "Max options showed in dropdown",
          type: "text",
          size: 20,
        },
        {
          name: "isLoading",
          label: "Loading state",
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
      return true
    },
    code() {
      let html = ""
      html += "<mom-input-autosuggest\n"
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
      html += this.maxlength ? `\tmaxlength="${this.maxlength}"\n` : ""
      html += this.hideIcon ? "\thide-icon\n" : ""
      html +=
        this.allowFreeText && this.allowFreeText === "always" ? '\tallow-free-text="always"\n' : ""
      html += this.allowFreeText && this.allowFreeText !== "always" ? "\tallow-free-text\n" : ""
      html += this.filterType ? `\tfilter-type="${this.filterType}"\n` : ""
      html += this.filterLength ? `\tfilter-length="${this.filterLength}"\n` : ""
      html += this.maxOptions ? `\tmax-options="${this.maxOptions}"\n` : ""
      html += this.isLoading ? "\tis-loading\n" : ""
      html += "/>"

      return html
    },
  },
}
</script>
