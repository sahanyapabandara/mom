<template>
  <div id="CanvasAccordion">
    <div class="rsg--preview-66">
      <MomAccordion :variant="variant" :openChildIndex="openChildIndex" :disabled="disabled">
        <MomAccordionItem
          v-for="(item, i) in items"
          :key="i"
          :title="item.title || ''"
          :status="item.status || 'incomplete'"
          :disabled="item.disabled"
        >
          <p class="mom-p">Accordion item content {{ i + 1 }}</p>

          <p v-if="item.summary" slot="summary" class="mom-p">Summary content {{ i + 1 }}</p>
        </MomAccordionItem>
      </MomAccordion>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasAccordion",
  data() {
    return {
      items: [
        {
          title: "Accordion title 1",
        },
      ],
      variant: null,
      openChildIndex: null,
      disabled: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "items",
          label: "Accordion items",
          type: "objectArray",
          attr: [
            { name: "title", label: "Title", type: "text" },
            {
              name: "status",
              label: "Status",
              type: "options",
              options: ["incomplete", "complete", "none"],
            },
            { name: "disabled", label: "Disabled", type: "boolean" },
            { name: "summary", label: "Show summary when collapsed", type: "boolean" },
          ],
        },
        {
          name: "variant",
          label: "Variant",
          type: "options",
          options: [null, "card"],
        },
        {
          name: "openChildIndex",
          label: "Open child index",
          type: "options",
          options: [null].concat(Array.from(Array(this.accordionItemsCount).keys())),
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
        },
      ]
    },
    hasProp() {
      return this.variant || this.openChildIndex !== null || this.disabled
    },
    code() {
      let html = ""
      html += "<mom-accordion"
      html += this.hasProp ? "\n" : ""
      html += this.variant ? `\tvariant="${this.variant}"\n` : ""
      html += this.openChildIndex !== null ? `\topen-child-index="${this.openChildIndex}"\n` : ""
      html += this.disabled ? "\tdisabled\n" : ""
      html += ">\n"
      this.items.forEach((item, i) => {
        html += i > 0 ? "\n" : ""
        html += "\t<mom-accordion-item\n"
        html += `\t\ttitle="${item.title || ""}"\n`
        html += item.status ? `\t\tstatus="${item.status}"\n` : ""
        html += item.disabled ? "\t\tdisabled\n" : ""
        html += "\t>\n"
        html += '\t\t<p class="mom-p">Accordion item content ' + (i + 1) + "</p>\n"
        if (item.summary) {
          html += "\n"
          html += '\t\t<p slot="summary" class="mom-p">Summary content ' + (i + 1) + "<p>\n"
        }
        html += "\t</mom-accordion-item>\n"
      })
      html += "</mom-accordion>"

      return html
    },
  },
}
</script>
