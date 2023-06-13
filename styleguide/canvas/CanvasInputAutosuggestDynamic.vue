<template>
  <div id="CanvasInputAutosuggestDynamic">
    <div class="rsg--preview-66">
      <MomInputAutosuggestDynamic
        :name="name"
        :endpoint="endpoint"
        :size="size || 'l'"
        :inputState="inputState"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :hideIcon="hideIcon"
        :allowFreeText="allowFreeText"
        :filterType="filterType"
        :filterLength="filterLength"
        :maxOptions="maxOptions"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputAutosuggestDynamic",
  data() {
    return {
      name: null,
      endpoint: "/data/sample-data-options.json",
      size: null,
      inputState: null,
      placeholder: null,
      maxlength: null,
      hideIcon: false,
      allowFreeText: false,
      filterType: null,
      filterLength: null,
      maxOptions: null,
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
          name: "endpoint",
          label: "Endpoint URL",
          type: "text",
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
      html += "<mom-input-autosuggest-dynamic\n"
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += `\tendpoint="${this.endpoint}"\n`
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
      html += "/>"

      return html
    },
  },
}
</script>
