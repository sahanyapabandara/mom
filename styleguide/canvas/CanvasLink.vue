<template>
  <div id="CanvasLink">
    <div class="rsg--preview-66 d:f" :class="darkMode && 'c:white bgc:black'">
      <MomLink
        :text="!defaultSlot ? text : null"
        :size="size || 'm'"
        :icon="icon"
        :iconPosition="icon ? iconPosition || 'left' : null"
        :hideText="icon ? hideText : null"
        :type="type || 'link'"
        :href="!type || type === 'link' ? href || 'javascript:void(0);' : null"
        :target="!type || type === 'link' ? target : null"
        :display="display"
        :darkMode="darkMode"
        :underline="underline"
        :disabled="disabled"
      >
        <span v-if="defaultSlot" v-html="text"></span>
      </MomLink>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasLink",
  data() {
    return {
      text: "Link text",
      href: null,
      target: null,
      size: null,
      icon: null,
      iconPosition: null,
      hideText: false,
      type: null,
      display: null,
      darkMode: false,
      underline: false,
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
          name: "href",
          label: "Link href",
          type: "text",
          show: !this.type || this.type === "link" ? true : false,
        },
        {
          name: "target",
          label: "Link target",
          type: "options",
          options: [null, "_self", "_blank", "_parent", "_top"],
          show: !this.type || this.type === "link" ? true : false,
        },
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "s", "m", "l"],
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
          name: "type",
          label: "Type",
          type: "options",
          options: [null, "link", "button"],
        },
        {
          name: "display",
          label: "Link display style",
          type: "options",
          options: [null, "inline"],
        },
        {
          name: "darkMode",
          label: "Dark mode",
          type: "boolean",
        },
        {
          name: "underline",
          label: "Underline",
          type: "boolean",
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
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
        this.href ||
        this.target ||
        this.size ||
        this.icon ||
        this.hideText ||
        this.type ||
        this.display ||
        this.darkMode ||
        this.underline ||
        this.disabled
      )
    },
    code() {
      let html = ""
      html += "<mom-link"
      html += this.hasProp ? "\n" : ""
      html += !this.defaultSlot ? `\ttext="${this.text}"\n` : ""
      html += (!this.type || this.type === "link") && this.href ? `\thref="${this.href}"\n` : ""
      html +=
        (!this.type || this.type === "link") && this.target ? `\ttarget="${this.target}"\n` : ""
      html += this.size ? `\tsize="${this.size}"\n` : ""
      html += this.icon ? `\ticon="${this.icon}"\n` : ""
      html += this.icon && this.iconPosition ? `\ticon-position="${this.iconPosition}"\n` : ""
      html += this.icon && this.hideText ? "\thide-text\n" : ""
      html += this.type ? `\ttype="${this.type}"\n` : ""
      html += this.display ? `\tdisplay="${this.display}"\n` : ""
      html += this.darkMode ? "\tdark-mode\n" : ""
      html += this.underline ? "\tunderline\n" : ""
      html += this.disabled ? "\tdisabled\n" : ""
      if (!this.defaultSlot) {
        html += "/>"
      } else {
        html += ">\n"
        html += `\t${this.text}\n`
        html += "</mom-link>"
      }

      return html
    },
  },
}
</script>
