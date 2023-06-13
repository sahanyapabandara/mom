<template>
  <div id="CanvasSummary">
    <div class="rsg--preview-66">
      <MomSummary
        :title="title"
        :items="!defaultSlot ? (useSubsection ? subsections : items) : null"
        :useSubsection="useSubsection"
        :showEdit="showEdit"
      >
        <template v-if="defaultSlot">
          <template v-if="!useSubsection">
            <MomSummaryItem
              v-for="(item, i) in items"
              :key="'item' + i"
              :label="item.label || ''"
              :description="!item.defaultSlot ? item.description : null"
              :descriptionType="item.descriptionType"
              :tooltip="item.tooltip"
              :showBullet="item.showBullet"
            >
              <template v-if="item.defaultSlot">
                <ul
                  v-if="Array.isArray(item.description) && item.description.length > 1"
                  class="mom-ul"
                >
                  <li v-for="(description, i) in item.description" :key="i">{{ description }}</li>
                </ul>
                <p v-else-if="Array.isArray(item.description)" class="mom-p">
                  {{ item.description[0] }}
                </p>
                <p v-else class="mom-p">{{ item.description }}</p>
              </template>
            </MomSummaryItem>
          </template>

          <template v-else>
            <MomSummarySubsection
              v-for="(subsection, i) in subsections"
              :key="'subsection' + i"
              :title="subsection.title || ''"
              :items="!subsection.defaultSlot ? subsection.items : null"
            >
              <template v-if="subsection.defaultSlot">
                <MomSummaryItem
                  v-for="(item, j) in subsection.items"
                  :key="'item' + j"
                  :label="item.label || ''"
                  :description="!item.defaultSlot ? item.description : null"
                  :descriptionType="item.descriptionType"
                  :tooltip="item.tooltip"
                  :showBullet="item.showBullet"
                >
                  <template v-if="item.defaultSlot">
                    <ul
                      v-if="Array.isArray(item.description) && item.description.length > 1"
                      class="mom-ul"
                    >
                      <li v-for="(description, i) in item.description" :key="i">
                        {{ description }}
                      </li>
                    </ul>
                    <p v-else-if="Array.isArray(item.description)" class="mom-p">
                      {{ item.description[0] }}
                    </p>
                    <p v-else class="mom-p">{{ item.description }}</p>
                  </template>
                </MomSummaryItem>
              </template>
            </MomSummarySubsection>
          </template>
        </template>
      </MomSummary>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasSummary",
  data() {
    return {
      title: "Summary section title",
      showEdit: true,
      useSubsection: false,
      items: [
        {
          label: "Label 1",
          description: "Description 1",
          descriptionType: null,
          tooltip: "",
          showBullet: false,
          defaultSlot: false,
        },
        {
          label: "Label 2",
          description: ["Description 2a", "Description 2b"],
          descriptionType: null,
          tooltip: "",
          showBullet: false,
          defaultSlot: false,
        },
      ],
      subsections: [
        {
          subsection: true,
          title: "Subsection 1",
          items: [
            {
              label: "Label 1",
              description: "Description 1",
              descriptionType: null,
              tooltip: "",
              showBullet: false,
              defaultSlot: false,
            },
            {
              label: "Label 2",
              description: "Description 2",
              descriptionType: null,
              tooltip: "",
              showBullet: false,
              defaultSlot: false,
            },
          ],
        },
        {
          subsection: true,
          title: "Subsection 2",
          items: [
            {
              label: "Label 3",
              description: "Description 3",
              descriptionType: null,
              tooltip: "",
              showBullet: false,
              defaultSlot: false,
            },
            {
              label: "Label 4",
              description: "Description 4",
              descriptionType: null,
              tooltip: "",
              showBullet: false,
              defaultSlot: false,
            },
          ],
        },
      ],
      defaultSlot: false,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "title",
          label: "Title",
          type: "text",
          value: this.title,
        },
        {
          name: "showEdit",
          label: "Show edit link",
          type: "boolean",
          value: this.showEdit,
        },
        {
          name: "useSubsection",
          label: "Use subsection",
          type: "boolean",
          value: this.useSubsection,
        },
        {
          name: "items",
          label: "Summary items",
          type: "objectArray",
          attr: [
            { name: "label", label: "Label", type: "text" },
            { name: "description", label: "Description", type: "textArray" },
            {
              name: "descriptionType",
              label: "Description type",
              type: "options",
              options: [null, "others"],
            },
            { name: "tooltip", label: "Tooltip", type: "text" },
            { name: "showBullet", label: "Show bullet", type: "boolean" },
            { name: "defaultSlot", label: "Use default slot", type: "boolean" },
          ],
          show: !this.useSubsection,
        },
        {
          name: "subsections",
          label: "Summary subsections",
          type: "objectArray",
          attr: [
            { name: "title", label: "Title", type: "text" },
            {
              name: "items",
              label: "Summary items",
              type: "objectArray",
              attr: [
                { name: "label", label: "Label", type: "text" },
                { name: "description", label: "Description", type: "textArray" },
                {
                  name: "descriptionType",
                  label: "Description type",
                  type: "options",
                  options: [null, "others"],
                },
                { name: "tooltip", label: "Tooltip", type: "text" },
                { name: "showBullet", label: "Show bullet", type: "boolean" },
                { name: "defaultSlot", label: "Use default slot", type: "boolean" },
              ],
            },
            { name: "defaultSlot", label: "Use default slot", type: "boolean" },
          ],
          show: this.useSubsection,
        },
        {
          name: "defaultSlot",
          label: "Use default slot",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-summary\n"
      html += `\ttitle="${this.title}"\n`
      html += !this.showEdit ? '\t:show-edit="false"\n' : ""
      html += this.useSubsection ? "\tuse-subsection\n" : ""
      if (!this.defaultSlot) {
        html += '\t:items="[\n'
        if (!this.useSubsection) {
          this.items.forEach(item => {
            html += "\t\t{\n"
            html += `\t\t\tlabel: '${item.label || ""}',\n`
            if (item.description) {
              if (Array.isArray(item.description) && item.description.length > 1) {
                html += "\t\t\tdescription: [\n"
                item.description.forEach(description => {
                  html += `\t\t\t\t'${description}',\n`
                })
                html += "\t\t\t],\n"
              } else if (Array.isArray(item.description)) {
                html += `\t\t\tdescription: '${item.description[0]}',\n`
              } else {
                html += `\t\t\tdescription: '${item.description}',\n`
              }
            }
            html += item.descriptionType
              ? `\t\t\tdescriptionType: '${item.descriptionType}',\n`
              : ""
            html += item.tooltip ? `\t\t\ttooltip: '${item.tooltip}',\n` : ""
            html += item.showBullet ? "\t\t\tshowBullet: true,\n" : ""
            html += "\t\t},\n"
          })
        } else {
          this.subsections.forEach(subsection => {
            html += "\t\t{\n"
            html += subsection.title ? `\t\t\ttitle: '${subsection.title || ""}',\n` : ""
            if (subsection.items) {
              html += "\t\t\titems: [\n"
              subsection.items.forEach(subitem => {
                html += "\t\t\t\t{\n"
                html += `\t\t\t\t\tlabel: '${subitem.label || ""}',\n`
                if (subitem.description) {
                  if (Array.isArray(subitem.description) && subitem.description.length > 1) {
                    html += "\t\t\t\t\tdescription: [\n"
                    subitem.description.forEach(description => {
                      html += `\t\t\t\t\t\t'${description}',\n`
                    })
                    html += "\t\t\t\t\t],\n"
                  } else if (Array.isArray(subitem.description)) {
                    html += `\t\t\t\t\tdescription: '${subitem.description[0]}',\n`
                  } else {
                    html += `\t\t\t\t\tdescription: '${subitem.description}',\n`
                  }
                }
                html += subitem.descriptionType
                  ? `\t\t\tdescriptionType: '${subitem.descriptionType}',\n`
                  : ""
                html += subitem.tooltip ? `\t\t\ttooltip: '${subitem.tooltip}',\n` : ""
                html += subitem.showBullet ? "\t\t\t\t\tshowBullet: true,\n" : ""
                html += "\t\t\t\t},\n"
              })
              html += "\t\t\t]\n"
            }
            html += "\t\t},\n"
          })
        }
        html += '\t]"\n'
        html += "/>"
      } else {
        html += ">\n"
        if (!this.useSubsection) {
          this.items.forEach((item, i) => {
            html += i > 0 ? "\n" : ""
            html += "\t<mom-summary-item\n"
            html += `\t\tlabel="${item.label || ""}"\n`
            if (!item.defaultSlot) {
              if (item.description) {
                if (Array.isArray(item.description) && item.description.length > 1) {
                  html += '\t\t:description="[\n'
                  item.description.forEach(description => {
                    html += `\t\t\t'${description}',\n`
                  })
                  html += '\t\t]"\n'
                } else if (Array.isArray(item.description)) {
                  html += `\t\tdescription="${item.description[0]}"\n`
                } else {
                  html += `\t\tdescription="${item.description}"\n`
                }
              }
              html += item.descriptionType ? `\t\tdescription-type="${item.descriptionType}"\n` : ""
              html += item.tooltip ? `\t\ttooltip="${item.tooltip}"\n` : ""
              html += item.showBullet ? "\t\tshow-bullet\n" : ""
              html += "\t/>\n"
            } else {
              html += item.descriptionType ? `\t\tdescription-type="${item.descriptionType}"\n` : ""
              html += item.tooltip ? `\t\ttooltip="${item.tooltip}"\n` : ""
              html += item.showBullet ? "\t\tshow-bullet\n" : ""
              html += "\t>\n"
              if (Array.isArray(item.description) && item.description.length > 1) {
                html += '\t\t<ul class="mom-ul">\n'
                item.description.forEach(description => {
                  html += `\t\t\t<li>${description || ""}</li>\n`
                })
                html += "\t\t</ul>\n"
              } else if (Array.isArray(item.description)) {
                html += `\t\t<p class="mom-p">${item.description[0] || ""}</p>\n`
              } else {
                html += `\t\t<p class="mom-p">${item.description || ""}</p>\n`
              }
              html += "\t</mom-summary-item>\n"
            }
          })
        } else {
          this.subsections.forEach((subsection, i) => {
            html += i > 0 ? "\n" : ""
            html += "\t<mom-summary-subsection\n"
            html += `\t\ttitle="${subsection.title || ""}"\n`
            if (!subsection.defaultSlot) {
              if (subsection.items) {
                html += '\t\t:items="[\n'
                subsection.items.forEach(subitem => {
                  html += "\t\t\t{\n"
                  html += `\t\t\t\tlabel: '${subitem.label || ""}',\n`
                  if (subitem.description) {
                    if (Array.isArray(subitem.description) && subitem.description.length > 1) {
                      html += "\t\t\t\tdescription: [\n"
                      subitem.description.forEach(description => {
                        html += `\t\t\t\t\t'${description}',\n`
                      })
                      html += "\t\t\t\t],\n"
                    } else if (Array.isArray(subitem.description)) {
                      html += `\t\t\t\tdescription: '${subitem.description[0]}',\n`
                    } else {
                      html += `\t\t\t\tdescription: '${subitem.description}',\n`
                    }
                  }
                  html += subitem.descriptionType
                    ? `\t\t\t\tdescriptionType: '${subitem.descriptionType}',\n`
                    : ""
                  html += subitem.tooltip ? `\t\t\t\ttooltip: '${subitem.tooltip}',\n` : ""
                  html += subitem.showBullet ? "\t\t\t\tshowBullet: true,\n" : ""
                  html += "\t\t\t},\n"
                })
                html += '\t\t]"\n'
              }
              html += "\t/>\n"
            } else {
              html += "\t>\n"
              if (subsection.items) {
                subsection.items.forEach((subitem, j) => {
                  html += j > 0 ? "\n" : ""
                  html += "\t\t<mom-summary-item\n"
                  html += `\t\t\tlabel="${subitem.label || ""}"\n`
                  if (!subitem.defaultSlot) {
                    if (subitem.description) {
                      if (Array.isArray(subitem.description) && subitem.description.length > 1) {
                        html += '\t\t\t:description="[\n'
                        subitem.description.forEach(description => {
                          html += `\t\t\t\t'${description}',\n`
                        })
                        html += '\t\t\t]"\n'
                      } else if (Array.isArray(subitem.description)) {
                        html += `\t\t\tdescription="${subitem.description[0]}"\n`
                      } else {
                        html += `\t\t\tdescription="${subitem.description}"\n`
                      }
                    }
                    html += subitem.descriptionType
                      ? `\t\t\tdescription-type="${subitem.descriptionType}"\n`
                      : ""
                    html += subitem.tooltip ? `\t\t\ttooltip="${subitem.tooltip}"\n` : ""
                    html += subitem.showBullet ? "\t\t\tshow-bullet\n" : ""
                    html += "\t\t/>\n"
                  } else {
                    html += subitem.descriptionType
                      ? `\t\t\tdescription-type="${subitem.descriptionType}"\n`
                      : ""
                    html += subitem.tooltip ? `\t\t\ttooltip="${subitem.tooltip}"\n` : ""
                    html += subitem.showBullet ? "\t\t\tshow-bullet\n" : ""
                    html += "\t\t>\n"
                    if (Array.isArray(subitem.description) && subitem.description.length > 1) {
                      html += '\t\t\t<ul class="mom-ul">\n'
                      subitem.description.forEach(description => {
                        html += `\t\t\t\t<li>${description || ""}</li>\n`
                      })
                      html += "\t\t\t</ul>\n"
                    } else if (Array.isArray(subitem.description)) {
                      html += `\t\t\t<p class="mom-p">${subitem.description[0] || ""}</p>\n`
                    } else {
                      html += `\t\t\t<p class="mom-p">${subitem.description || ""}</p>\n`
                    }
                    html += "\t\t</mom-summary-item>\n"
                  }
                })
              }
              html += "\t</mom-summary-subsection>\n"
            }
          })
        }
        html += "</mom-summary>"
      }

      return html
    },
  },
}
</script>
