<template>
  <div id="CanvasModal">
    <div class="rsg--preview-66">
      <MomModal
        :toggleType="toggleType"
        :toggleText="toggleType ? toggleText : null"
        :toggleSize="toggleType ? toggleSize || 'm' : null"
        :toggleIcon="toggleType ? toggleIcon : null"
        :disabled="disabled"
        :title="title"
        :maxWidth="maxWidth"
        :showModal="showModal"
        :showCloseButton="showCloseButton"
        :closeOnOverlayClick="closeOnOverlayClick"
        :closeOnEsc="closeOnEsc"
      >
        <p class="mom-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <div v-if="footerSlot" slot="footer"><p class="mom-p">Modal footer content</p></div>
      </MomModal>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasModal",
  data() {
    return {
      toggleType: "button",
      toggleText: "Show modal",
      toggleSize: null,
      toggleIcon: null,
      disabled: null,
      title: null,
      maxWidth: null,
      showModal: false,
      showCloseButton: true,
      closeOnOverlayClick: true,
      closeOnEsc: true,
      footerSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "toggleType",
          label: "Toggle type",
          type: "options",
          options: [null, "button", "link"],
        },
        {
          name: "toggleText",
          label: "Toggle text",
          type: "text",
          show: this.toggleType != null,
        },
        {
          name: "toggleSize",
          label: "Toggle size",
          type: "options",
          options: [null, "s", "m"],
          show: this.toggleType != null,
        },
        {
          name: "toggleIcon",
          label: "Toggle icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
          show: this.toggleType != null,
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
          value: this.disabled,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "maxWidth",
          label: "Modal max width",
          type: "options",
          options: [null, "none"],
          value: this.maxWidth,
        },
        {
          name: "showModal",
          label: "Show modal",
          type: "boolean",
          value: this.showModal,
        },
        {
          name: "showCloseButton",
          label: "Show close button",
          type: "boolean",
          value: this.showCloseButton,
        },
        {
          name: "closeOnOverlayClick",
          label: "Close on overlay click",
          type: "boolean",
          value: this.closeOnOverlayClick,
        },
        {
          name: "closeOnEsc",
          label: "Close on ESC",
          type: "boolean",
          value: this.closeOnEsc,
        },
        {
          name: "footerSlot",
          label: "Use 'footer' slot",
          type: "boolean",
          value: this.footerSlot,
        },
      ]
    },
    hasProp() {
      return (
        this.toggleType ||
        this.toggleText ||
        this.toggleSize ||
        this.toggleIcon ||
        this.title ||
        this.maxWidth ||
        this.showModal ||
        !this.showCloseButton ||
        !this.closeOnOverlayClick ||
        !this.closeOnEsc ||
        this.disabled ||
        this.footerSlot
      )
    },
    code() {
      let html = ""
      html += "<mom-modal"
      html += this.hasProp ? "\n" : ""
      html += this.toggleType ? `\ttoggle-type="${this.toggleType}"\n` : ""
      html += this.toggleType && this.toggleText ? `\ttoggle-text="${this.toggleText}"\n` : ""
      html += this.toggleType && this.toggleSize ? `\ttoggle-size="${this.toggleSize}"\n` : ""
      html += this.toggleType && this.toggleIcon ? `\ttoggle-icon="${this.toggleIcon}"\n` : ""
      html += this.disabled ? "\tdisabled\n" : ""
      html += this.title ? `\ttitle="${this.title}"\n` : ""
      html += this.maxWidth ? `\tmax-width="${this.maxWidth}"\n` : ""
      html += this.showModal ? "\tshow-modal\n" : ""
      html += !this.showCloseButton ? '\t:show-close-button="false"\n' : ""
      html += !this.closeOnOverlayClick ? '\t:show-close-button="false"\n' : ""
      html += !this.closeOnEsc ? '\t:close-on-esc="false"\n' : ""
      html += ">\n"
      html += '\t<p class="mom-p">'
      html +=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      html += "</p>\n"
      if (this.footerSlot) {
        html += "\n"
        html += '\t<div slot="footer">\n'
        html += '\t\t<p class="mom-p">Modal footer content</p>\n'
        html += "\t</div>\n"
      }
      html += "</mom-modal>"

      return html
    },
  },
}
</script>
