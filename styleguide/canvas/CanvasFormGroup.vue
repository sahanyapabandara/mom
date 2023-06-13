<template>
  <div id="CanvasFormGroup">
    <div class="rsg--preview-66">
      <component
        :is="isSubsection ? 'MomFormSubsection' : 'div'"
        :size="isSubsection ? size || 'xl' : null"
      >
        <MomFormGroup
          :idForInput="hasId ? 'canvas' : null"
          :type="type"
          :label="!labelSlot ? label : null"
          :inlineInput="inlineInput"
          :tooltip="!labelSlot && !tooltipSlot ? tooltip : null"
          :size="size || 'xl'"
          :hintText="!hintSlot ? hintText : null"
          :inputState="inputState"
          :messageText="inputState && inputState !== 'disabled' ? messageTextArray : null"
          :messageType="inputState && inputState !== 'disabled' ? messageType : null"
          :optional="!labelSlot && optional"
          :showBullet="showBullet"
        >
          <MomFormLabel
            v-if="labelSlot && label"
            slot="label"
            :type="type === 'fieldset' ? 'legend' : 'label'"
            :text="label"
            :tooltip="!tooltipSlot ? tooltip : null"
            :optional="optional"
            :showBullet="showBullet"
          >
            <MomTooltip slot="tooltip" v-if="tooltipSlot && tooltip" :tooltipText="tooltip" />
          </MomFormLabel>

          <MomTooltip slot="tooltip" v-else-if="tooltipSlot && tooltip" :tooltipText="tooltip" />

          <MomInputText
            v-if="input === 'text'"
            idForInput="canvas"
            :size="size || 'l'"
            :inputState="inputState"
          />

          <MomInputTextarea
            v-if="input === 'textarea'"
            idForInput="canvas"
            :maxlength="maxlength"
            :inputState="inputState"
          />

          <MomInputSelect
            v-else-if="input === 'select'"
            idForInput="canvas"
            :size="size || 'l'"
            :options="options"
            :inputState="inputState"
          />

          <MomInputRadio
            v-else-if="input === 'radio'"
            name="canvas"
            :options="options"
            :inputState="inputState !== 'disabled' ? inputState : null"
            :disabled="inputState === 'disabled'"
          />

          <MomInputCheckbox
            v-else-if="input === 'checkbox'"
            name="canvas"
            :options="options"
            :inputState="inputState !== 'disabled' ? inputState : null"
            :disabled="inputState === 'disabled'"
          />

          <MomUpload v-else-if="input === 'upload'" :url="url" :inputState="inputState" />

          <MomFormFlexWrapper v-else-if="input === 'flexWrapper'">
            <MomFormGroup
              v-for="i in 2"
              :key="i"
              :idForInput="'canvas' + i"
              :label="'Sublabel ' + i"
              size="s"
            >
              <MomInputText :idForInput="'canvas' + i" :inputState="inputState" />
            </MomFormGroup>
          </MomFormFlexWrapper>

          <span v-if="hintSlot && hintText" slot="hint">{{ hintText }}</span>

          <MomModal
            v-if="modalSlot"
            slot="modal"
            toggleType="link"
            toggleText="View guide"
            toggleIcon="lightbulb"
            toggleSize="s"
          >
            <p class="mom-p">Modal content</p>
          </MomModal>
        </MomFormGroup>
      </component>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasFormGroup",
  data() {
    return {
      input: "text",
      label: "Label",
      inlineInput: false,
      tooltip: null,
      size: null,
      hintText: null,
      inputState: null,
      messageText: null,
      messageType: null,
      optional: false,
      showBullet: false,
      labelSlot: false,
      tooltipSlot: false,
      hintSlot: false,
      modalSlot: false,
      isSubsection: false,
    }
  },
  computed: {
    messageTextArray() {
      return this.messageText ? this.messageText.filter(text => text) : null
    },
    attrList() {
      return [
        {
          name: "input",
          label: "Input type",
          type: "options",
          options: ["text", "textarea", "select", "radio", "checkbox", "upload", "flexWrapper"],
        },
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "inlineInput",
          label: "Inline Input",
          type: "boolean",
        },
        {
          name: "tooltip",
          label: "Label tooltip",
          type: "text",
        },
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [null, "xs", "xs1", "s", "m", "l", "xl", "full"],
        },
        {
          name: "hintText",
          label: "Hint text",
          type: "text",
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning", "disabled"],
        },
        {
          name: "messageText",
          label: "Message text",
          type: "textArray",
          show: this.inputState && this.inputState !== "disabled",
        },
        {
          name: "messageType",
          label: "Message type",
          type: "options",
          options: [null, "list"],
          show: this.inputState && this.inputState !== "disabled",
        },
        {
          name: "optional",
          label: "Optional",
          type: "boolean",
        },
        {
          name: "showBullet",
          label: "Show bullet",
          type: "boolean",
        },
        {
          name: "labelSlot",
          label: "Use 'label' slot",
          type: "boolean",
        },
        {
          name: "tooltipSlot",
          label: "Use 'tooltip' slot",
          type: "boolean",
        },
        {
          name: "hintSlot",
          label: "Use 'hint' slot",
          type: "boolean",
        },
        {
          name: "modalSlot",
          label: "Use 'modal' slot",
          type: "boolean",
        },
        {
          name: "isSubsection",
          label: "Is subsection",
          type: "boolean",
        },
      ]
    },
    type() {
      return ["radio", "checkbox", "flexWrapper"].includes(this.input) ? "fieldset" : null
    },
    hasId() {
      return ["text", "textarea", "select"].includes(this.input)
    },
    maxlength() {
      return "50"
    },
    options() {
      return [
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
      ]
    },
    url() {
      return "https://httpbin.org/post"
    },
    code() {
      let html = ""
      html += this.isSubsection ? "<mom-form-subsection>\n" : "<div>\n"
      html += "\t<mom-form-group\n"
      html += this.hasId ? '\t\tid-for-input="canvas"\n' : ""
      html += this.type ? `\t\ttype="${this.type}"\n` : ""
      html += this.inlineInput ? "\t\tinline-input\n" : ""
      html += !this.labelSlot && this.label ? `\t\tlabel="${this.label}"\n` : ""
      html +=
        !this.labelSlot && !this.tooltipSlot && this.tooltip
          ? `\t\ttooltip="${this.tooltip}"\n`
          : ""
      html += this.size ? `\t\tsize="${this.size}"\n` : ""
      html += !this.hintSlot && this.hintText ? `\t\thint-text="${this.hintText}"\n` : ""
      html += this.inputState ? `\t\tinput-state="${this.inputState}"\n` : ""
      if (
        this.inputState &&
        this.inputState !== "disabled" &&
        this.messageTextArray &&
        this.messageTextArray.length > 0
      ) {
        if (this.messageTextArray.length > 1) {
          html += '\t\t:message-text="[\n'
          this.messageTextArray.forEach(text => {
            html += `\t\t\t'${text}',\n`
          })
          html += '\t\t]"\n'
        } else {
          html += `\t\tmessage-text="${this.messageTextArray[0]}"\n`
        }
      }
      html +=
        this.inputState && this.inputState !== "disabled" && this.messageType
          ? `\t\tmessage-type="${this.messageType}"\n`
          : ""
      html += !this.labelSlot && this.optional ? "\t\toptional\n" : ""
      html += this.showBullet ? "\t\tshow-bullet\n" : ""
      html += "\t>\n"
      if (this.labelSlot && this.label) {
        html += "\t\t<mom-form-label\n"
        html += '\t\t\tslot="label"\n'
        html += `\t\t\ttext="${this.label}"\n`
        html += this.type === "fieldset" ? '\t\t\ttype="legend"\n' : ""
        html += !this.tooltipSlot && this.tooltip ? `\t\t\ttooltip="${this.tooltip}"\n` : ""
        html += this.optional ? "\t\t\toptional\n" : ""
        html += this.showBullet ? "\t\t\tshow-bullet\n" : ""
        if (this.tooltipSlot && this.tooltip) {
          html += "\t\t>\n"
          html += "\t\t\t<mom-tooltip\n"
          html += '\t\t\t\tslot="tooltip"\n'
          html += `\t\t\t\ttooltip-text="${this.tooltip}"\n`
          html += "\t\t\t/>\n"
          html += "\t\t</mom-form-label>\n"
        } else {
          html += "\t\t/>\n"
        }
        html += "\n"
      } else if (this.tooltipSlot && this.tooltip) {
        html += "\t\t<mom-tooltip\n"
        html += '\t\t\tslot="tooltip"\n'
        html += `\t\t\ttooltip-text="${this.tooltip}"\n`
        html += "\t\t/>\n"
        html += "\n"
      }
      if (this.input === "text") {
        html += "\t\t<mom-input-text\n"
        html += '\t\t\tid-for-input="canvas"\n'
        html += this.size ? `\t\t\tsize="${this.size}"\n` : ""
        html += this.inputState ? `\t\t\tinput-state="${this.inputState}"\n` : ""
        html += "\t\t/>\n"
      } else if (this.input === "textarea") {
        html += "\t\t<mom-input-textarea\n"
        html += '\t\t\tid-for-input="canvas"\n'
        html += `\t\t\tmaxlength="${this.maxlength}"\n`
        html += this.inputState ? `\t\t\tinput-state="${this.inputState}"\n` : ""
        html += "\t\t/>\n"
      } else if (this.input === "select") {
        html += "\t\t<mom-input-select\n"
        html += '\t\t\tid-for-input="canvas"\n'
        html += '\t\t\t:options="[\n'
        this.options.forEach(option => {
          html += "\t\t\t\t{\n"
          html += `\t\t\t\t\tlabel: '${option.label}',\n`
          html += `\t\t\t\t\tvalue: '${option.value}',\n`
          html += "\t\t\t\t},\n"
        })
        html += '\t\t\t]"\n'
        html += this.size ? `\t\t\tsize="${this.size}"\n` : ""
        html += this.inputState ? `\t\t\tinput-state="${this.inputState}"\n` : ""
        html += "\t\t/>\n"
      } else if (this.input === "radio" || this.input === "checkbox") {
        html += this.input === "radio" ? "\t\t<mom-input-radio\n" : ""
        html += this.input === "checkbox" ? "\t\t<mom-input-checkbox\n" : ""
        html += '\t\t\tname="canvas"\n'
        html += '\t\t\t:options="[\n'
        this.options.forEach(option => {
          html += "\t\t\t\t{\n"
          html += `\t\t\t\t\tlabel: '${option.label}',\n`
          html += `\t\t\t\t\tvalue: '${option.value}',\n`
          html += "\t\t\t\t},\n"
        })
        html += '\t\t\t]"\n'
        html +=
          this.inputState && this.inputState !== "disabled"
            ? `\t\t\tinput-state="${this.inputState}"\n`
            : ""
        html += this.inputState === "disabled" ? "\t\t\tdisabled\n" : ""
        html += "\t\t/>\n"
      } else if (this.input === "upload") {
        html += "\t\t<mom-upload\n"
        html += `\t\t\turl="${this.url}"\n`
        html += this.inputState ? `\t\t\tinput-state="${this.inputState}"\n` : ""
        html += "\t\t/>\n"
      } else if (this.input === "flexWrapper") {
        html += "\t\t<mom-form-flex-wrapper>\n"
        for (let i = 1; i <= 2; i++) {
          html += i > 1 ? "\n" : ""
          html += "\t\t\t<mom-form-group\n"
          html += `\t\t\t\tid-for-input="canvas${i}"\n`
          html += `\t\t\t\tlabel="Sublabel ${i}"\n`
          html += '\t\t\t\tsize="s"\n'
          html += "\t\t\t>\n"
          html += "\t\t\t\t<mom-input-text\n"
          html += `\t\t\t\t\tid-for-input="canvas${i}"\n`
          html += this.inputState ? `\t\t\t\t\tinput-state="${this.inputState}"\n` : ""
          html += "\t\t\t\t/>\n"
          html += "\t\t\t</mom-form-group>\n"
        }
        html += "\t\t</mom-form-flex-wrapper>\n"
      }
      if (this.hintSlot && this.hintText) {
        html += "\n"
        html += `\t\t<span slot="hint">${this.hintText}</span>\n`
      }
      if (this.modalSlot) {
        html += "\n"
        html += "\t\t<mom-modal\n"
        html += '\t\t\tslot="modal"\n'
        html += '\t\t\ttoggle-type="link"\n'
        html += '\t\t\ttoggle-text="View guide"\n'
        html += '\t\t\ttoggle-icon="lightbulb"\n'
        html += '\t\t\ttoggle-size="s"\n'
        html += "\t\t>\n"
        html += '\t\t\t<p class="mom-p">Modal content</p>\n'
        html += "\t\t</mom-modal>\n"
      }
      html += "\t</mom-form-group>\n"
      html += this.isSubsection ? "</mom-form-subsection>" : "</div>"

      return html
    },
  },
}
</script>
