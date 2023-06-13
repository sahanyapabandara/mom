<template>
  <div id="CanvasInputText">
    <div class="rsg--preview-66">
      <MomInputText
        :name="name"
        :size="size || 'l'"
        :inputState="inputState"
        :placeholder="placeholder"
        :prefix="prefix"
        :suffix="suffix"
        :maxlength="maxlength"
        :pattern="pattern"
        :isPassword="isPassword"
        :textAlignment="textAlignment"
        :textTransform="textTransform"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputText",
  data() {
    return {
      name: null,
      size: null,
      inputState: null,
      placeholder: null,
      prefix: null,
      suffix: null,
      maxlength: null,
      pattern: null,
      isPassword: false,
      textAlignment: null,
      textTransform: null,
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
          name: "prefix",
          label: "Prefix",
          type: "text",
          size: 20,
        },
        {
          name: "suffix",
          label: "Suffix",
          type: "text",
          size: 20,
        },
        {
          name: "maxlength",
          label: "Max input length",
          type: "text",
          size: 20,
        },
        {
          name: "pattern",
          label: "Allow character pattern",
          type: "options",
          options: [
            null,
            "alphanumeric",
            "alphanumeric_space",
            "alphabets",
            "digits",
            "name",
            "name_new",
            "wpno",
          ],
        },
        {
          name: "isPassword",
          label: "Password style",
          type: "boolean",
        },
        {
          name: "textAlignment",
          label: "Text alignment",
          type: "options",
          options: [null, "center"],
        },
        {
          name: "textTransform",
          label: "Text transform",
          type: "options",
          options: [null, "uppercase", "lowercase"],
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
        this.name ||
        this.size ||
        this.inputState ||
        this.placeholder ||
        this.prefix ||
        this.suffix ||
        this.maxlength ||
        this.pattern ||
        this.isPassword ||
        this.textAlignment ||
        this.textTransform
      )
    },
    code() {
      let html = ""
      html += "<mom-input-text"
      html += this.hasProp ? "\n" : ""
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += this.prefix ? `\tprefix="${this.prefix}"\n` : ""
      html += this.suffix ? `\tsuffix="${this.suffix}"\n` : ""
      html += this.maxlength ? `\tmaxlength="${this.maxlength}"\n` : ""
      html += this.pattern ? `\tpattern="${this.pattern}"\n` : ""
      html += this.isPassword ? "\tis-password\n" : ""
      html += this.textAlignment ? `\ttext-alignment="${this.textAlignment}"\n` : ""
      html += this.textTransform ? `\ttext-transform="${this.textTransform}"\n` : ""
      html += this.hasProp ? "/>" : " />"

      return html
    },
  },
}
</script>
