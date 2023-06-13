<template>
  <div id="CanvasCard">
    <div class="rsg--preview-66">
      <MomCard
        :title="title"
        :subtitle="subtitle"
        :variant="variant"
        :buttonText="hasButton ? buttonText : null"
        :buttonIcon="hasButton ? buttonIcon : null"
        :buttonDisabled="hasButton ? buttonDisabled : null"
        :secondaryButtonText="hasSecondaryButton ? secondaryButtonText : null"
        :secondaryButtonIcon="hasSecondaryButton ? secondaryButtonIcon : null"
        :secondaryButtonDisabled="hasSecondaryButton ? secondaryButtonDisabled : null"
        :tooltip="title && !tooltipSlot ? tooltip : null"
      >
        <p class="mom-p">Card content</p>

        <MomTooltip slot="tooltip" v-if="title && tooltipSlot && tooltip" :tooltipText="tooltip" />
      </MomCard>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasCard",
  data() {
    return {
      variant: null,
      title: null,
      subtitle: null,
      tooltip: null,
      buttonText: null,
      buttonIcon: null,
      buttonDisabled: false,
      secondaryButtonText: null,
      secondaryButtonIcon: null,
      secondaryButtonDisabled: false,
      tooltipSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "action", "summary", "summary-action", "requirement"],
        },
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "subtitle",
          label: "Subtitle",
          type: "text",
        },
        {
          name: "tooltip",
          label: "Tooltip text",
          type: "text",
        },
        {
          name: "buttonText",
          label: "Button text",
          type: "text",
          show: this.hasButton,
        },
        {
          name: "buttonIcon",
          label: "Button icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
          show: this.hasButton,
        },
        {
          name: "buttonDisabled",
          label: "Button disabled",
          type: "boolean",
          show: this.hasButton,
        },
        {
          name: "secondaryButtonText",
          label: "Secondary button text",
          type: "text",
          show: this.hasButton,
        },
        {
          name: "secondaryButtonIcon",
          label: "Secondary button icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
          show: this.hasButton,
        },
        {
          name: "secondaryButtonDisabled",
          label: "Secondary button disabled",
          type: "boolean",
          show: this.hasButton,
        },
        {
          name: "tooltipSlot",
          label: "Use 'tooltip' slot",
          type: "boolean",
        },
      ]
    },
    hasButton() {
      return this.variant === "action" || this.variant === "summary-action"
    },
    hasSecondaryButton() {
      return (
        (this.variant === "action" || this.variant === "summary-action") && this.secondaryButtonText
      )
    },
    hasProp() {
      return this.variant || this.title || this.subtitle
    },
    code() {
      let html = ""
      html += "<mom-card"
      html += this.hasProp ? "\n" : ""
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += this.title ? `\ttitle="${this.title}"\n` : ""
      html += this.subtitle ? `\tsubtitle="${this.subtitle}"\n` : ""
      html += this.title && !this.tooltipSlot && this.tooltip ? `\ttooltip="${this.tooltip}"\n` : ""
      html += this.hasButton && this.buttonText ? `\tbutton-text="${this.buttonText}"\n` : ""
      html += this.hasButton && this.buttonIcon ? `\tbutton-icon="${this.buttonIcon}"\n` : ""
      html += this.hasButton && this.buttonDisabled ? "\tbutton-disabled\n" : ""
      html += this.hasSecondaryButton
        ? `\tsecondary-button-text="${this.secondaryButtonText}"\n`
        : ""
      html +=
        this.hasSecondaryButton && this.secondaryButtonIcon
          ? `\tsecondary-button-icon="${this.secondaryButtonIcon}"\n`
          : ""
      html +=
        this.hasSecondaryButton && this.secondaryButtonDisabled
          ? "\tsecondary-button-disabled\n"
          : ""
      html += ">\n"
      html += '\t<p class="mom-p">Card content</p>\n'
      if (this.title && this.tooltipSlot && this.tooltip) {
        html += `\t<mom-tooltip slot="tooltip" tooltip-text="${this.tooltip}" />\n`
      }
      html += "</mom-card>"

      return html
    },
  },
}
</script>
