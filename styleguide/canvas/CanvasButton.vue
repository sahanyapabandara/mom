<template>
  <div id="CanvasButton">
    <div class="rsg--preview-66 d:f">
      <MomButton
        :text="!defaultSlot ? text : null"
        :size="size || 'm'"
        :variant="variant || 'primary'"
        :status="!disabled ? status : null"
        :icon="icon"
        :iconPosition="icon ? iconPosition || 'left' : null"
        :hideText="icon ? hideText : null"
        :type="type"
        :href="type === 'link' ? href || 'javascript:void(0);' : null"
        :target="type === 'link' ? target : null"
        :disabled="disabled"
      >
        <span v-if="defaultSlot" v-html="text"></span>
      </MomButton>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasButton",
  data() {
    return {
      text: "Button text",
      size: null,
      variant: null,
      status: null,
      icon: null,
      iconPosition: null,
      hideText: false,
      type: null,
      href: null,
      target: null,
      disabled: false,
      defaultSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "text",
          label: "Text",
          type: "text",
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "primary", "secondary"],
        },
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "s", "m"],
        },
        {
          name: "icon",
          label: "Icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
        },
        {
          name: "iconPosition",
          label: "Icon position",
          type: "options",
          options: [null, "left", "right"],
          show: this.icon ? true : false,
        },
        {
          name: "hideText",
          label: "Hide text",
          type: "boolean",
          show: this.icon ? true : false,
        },
        {
          name: "status",
          label: "Status",
          type: "options",
          options: [null, "success", "error", "warning"],
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
        },
        {
          name: "type",
          label: "Type",
          type: "options",
          options: [null, "button", "submit", "reset", "link"],
        },
        {
          name: "href",
          label: "Link href",
          type: "text",
          show: this.type === "link" ? true : false,
        },
        {
          name: "target",
          label: "Link target",
          type: "options",
          options: [null, "_self", "_blank", "_parent", "_top"],
          show: this.type === "link" ? true : false,
        },
        {
          name: "defaultSlot",
          label: "Use default slot",
          type: "boolean",
        },
      ]
    },
    hasProp() {
      return (
        !this.defaultSlot ||
        this.variant ||
        this.size ||
        this.icon ||
        this.hideText ||
        this.status ||
        this.disabled ||
        this.type
      )
    },
    code() {
      let html = ""
      html += "<mom-button"
      html += this.hasProp ? "\n" : ""
      html += !this.defaultSlot ? `\ttext="${this.text}"\n` : ""
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.icon ? `\ticon="${this.icon}"\n` : ""
      html += this.icon && this.iconPosition ? `\ticon-position="${this.iconPosition}"\n` : ""
      html += this.icon && this.hideText ? "\thide-text\n" : ""
      html += !this.disabled && this.status ? `\tstatus="${this.status}"\n` : ""
      html += this.disabled ? "\tdisabled\n" : ""
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.type === "link" && this.href ? `\thref="${this.href}"\n` : ""
      html += this.type === "link" && this.target ? `\ttarget="${this.target}"\n` : ""
      if (!this.defaultSlot) {
        html += "/>"
      } else {
        html += ">\n"
        html += `\t${this.text}\n`
        html += "</mom-button>"
      }

      return html
    },
  },
}
</script>
