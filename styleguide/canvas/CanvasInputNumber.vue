<template>
  <div id="CanvasInputNumber">
    <div class="rsg--preview-66">
      <MomInputNumber
        :name="name"
        :size="size || 'l'"
        :inputState="inputState"
        :placeholder="placeholder"
        :prefix="prefix"
        :suffix="suffix"
        :maxlength="maxlength"
        :max="max || 9007199254740991"
        :allowZero="allowZero"
        :isPassword="isPassword"
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
  name: "CanvasInputNumber",
  data() {
    return {
      name: null,
      size: null,
      inputState: null,
      placeholder: null,
      prefix: null,
      suffix: null,
      maxlength: null,
      max: null,
      allowZero: true,
      isPassword: false,
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
          name: "max",
          label: "Max number allowed",
          type: "text",
          size: 20,
        },
        {
          name: "allowZero",
          label: "Allow zero",
          type: "boolean",
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
        this.max ||
        !this.allowZero ||
        this.isPassword ||
        this.textAlignment
      )
    },
    code() {
      let html = ""
      html += "<mom-input-number"
      html += this.hasProp ? "\n" : ""
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += this.prefix ? `\tprefix="${this.prefix}"\n` : ""
      html += this.suffix ? `\tsuffix="${this.suffix}"\n` : ""
      html += this.maxlength ? `\tmaxlength="${this.maxlength}"\n` : ""
      html += this.max ? `\tmax="${this.max}"\n` : ""
      html += !this.allowZero ? '\t:allow-zero="false"\n' : ""
      html += this.isPassword ? "\tis-password\n" : ""
      html += this.textAlignment ? `\ttext-alignment="${this.textAlignment}"\n` : ""
      html += this.hasProp ? "/>" : " />"

      return html
    },
  },
}
</script>
