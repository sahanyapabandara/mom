<template>
  <div id="CanvasTable">
    <div class="rsg--preview-66">
      <MomTable
        :header="!slot ? header : null"
        :body="!slot ? body : null"
        :footer="!slot && footer.show ? footer : null"
        :fullWidth="fullWidth"
        :verticalAlign="verticalAlign ? verticalAlign : 'top'"
        :sortKey="sortKey"
        :sortOrder="sortKey ? sortOrder : null"
        :selectMode="selectMode"
        :inputName="selectMode ? 'table' : null"
        :inputState="selectMode ? inputState : null"
        :clickable="clickable"
        :disabled="disabled"
        :pagination="pagination"
        :rowsPerPage="rowsPerPage"
        :totalRows="slot ? totalRows : null"
        :firstColumnSticky="firstColumnSticky"
        :lastColumnSticky="lastColumnSticky"
      >
        <template v-if="slot">
          <MomTableThead slot="header">
            <MomTableTr rowType="header">
              <MomTableTh
                v-for="(col, key) in header"
                :key="key"
                :text="!col.slot ? col.value : null"
                :columnKey="key"
                :tooltip="col.tooltip"
                :sortable="col.sortable"
                :rightAlign="col.rightAlign"
                :minWidth="col.minWidth"
              >
                <span v-if="col.slot">{{ col.value }}</span>
              </MomTableTh>
            </MomTableTr>
          </MomTableThead>

          <MomTableTbody slot="body">
            <MomTableTr
              v-for="(row, i) in body"
              :key="i"
              :rowId="row.id"
              :value="row.value"
              :locked="row.locked"
              :disabled="row.disabled"
            >
              <MomTableTd
                v-for="(col, key) in header"
                :key="key"
                :text="row[key]"
                :rightAlign="col.rightAlign"
              >
                <span v-if="row.slot">{{ row[key] }}</span>
              </MomTableTd>
            </MomTableTr>
          </MomTableTbody>

          <MomTableTfoot v-if="footer.show" slot="footer">
            <MomTableTr rowType="footer">
              <MomTableTd
                v-for="(col, key) in header"
                :key="key"
                :text="footer[key]"
                :rightAlign="col.rightAlign"
              >
                <span v-if="footer.slot">{{ footer[key] }}</span>
              </MomTableTd>
            </MomTableTr>
          </MomTableTfoot>
        </template>
      </MomTable>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasTable",
  data() {
    return {
      columns: [
        { key: "col1", value: "Column header 1" },
        { key: "col2", value: "Column header 2" },
      ],
      rows: [
        {
          id: "row1",
          col1: "Row 1 column 1",
          col2: "Row 1 column 2",
          value: "1",
        },
        {
          id: "row2",
          col1: "Row 2 column 1",
          col2: "Row 2 column 2",
          value: "2",
        },
      ],
      footer: {
        show: false,
        slot: false,
      },
      fullWidth: false,
      verticalAlign: null,
      sortKey: null,
      sortOrder: null,
      clickable: false,
      selectMode: null,
      inputState: null,
      disabled: false,
      pagination: false,
      rowsPerPage: null,
      totalRows: null,
      firstColumnSticky: false,
      lastColumnSticky: false,
      slot: false,
    }
  },
  computed: {
    rowAttr() {
      let arr = []
      arr.push({ name: "id", label: "Row id", type: "text" })
      this.columns.forEach(col => {
        if (col.key) {
          arr.push({
            name: col.key,
            label: col.key,
            type: "text",
          })
        }
      })
      arr.push({ name: "value", label: "Row value", type: "text" })
      arr.push({ name: "locked", label: "Locked", type: "boolean" })
      arr.push({ name: "disabled", label: "Disabled", type: "boolean" })
      arr.push({ name: "slot", label: "Slot", type: "boolean" })
      return arr
    },
    footerAttr() {
      let arr = []
      arr.push({ name: "show", label: "Show footer", type: "boolean" })
      this.columns.forEach(col => {
        if (col.key) {
          arr.push({
            name: col.key,
            label: col.key,
            type: "text",
            show: this.footer.show,
          })
        }
      })
      arr.push({ name: "slot", label: "Slot", type: "boolean", show: this.footer.show })
      return arr
    },
    sortKeyAttr() {
      let arr = []
      this.columns.forEach(col => {
        if (col.sortable) {
          arr.push(col.key)
        }
      })
      return arr
    },
    attrList() {
      return [
        {
          name: "columns",
          label: "Table header",
          type: "objectArray",
          attr: [
            { name: "key", label: "Column key", type: "text" },
            { name: "value", label: "Text", type: "text" },
            { name: "tooltip", label: "Tooltip", type: "text" },
            { name: "sortable", label: "Sortable", type: "boolean" },
            { name: "rightAlign", label: "Right aligned", type: "boolean" },
            { name: "minWidth", label: "Min width", type: "text", size: 20 },
            { name: "slot", label: "Slot", type: "boolean" },
          ],
        },
        {
          name: "rows",
          label: "Table body",
          type: "objectArray",
          attr: this.rowAttr,
        },
        {
          name: "footer",
          label: "Table footer",
          type: "object",
          attr: this.footerAttr,
        },
        {
          name: "fullWidth",
          label: "Full width",
          type: "boolean",
        },
        {
          name: "verticalAlign",
          label: "Vertical align (body)",
          type: "options",
          options: [null, "top", "middle"],
        },
        {
          name: "sortKey",
          label: "Sort key",
          type: "options",
          options: [null].concat(this.sortKeyAttr),
        },
        {
          name: "sortOrder",
          label: "Sort order",
          type: "options",
          options: [null, "asc", "des"],
          show: this.sortKey ? true : false,
        },
        {
          name: "selectMode",
          label: "Select mode",
          type: "options",
          options: [null, "single", "multiple"],
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning"],
          show: this.selectMode ? true : false,
        },
        {
          name: "clickable",
          label: "Clickable",
          type: "boolean",
        },
        {
          name: "disabled",
          label: "Disabled",
          type: "boolean",
        },
        {
          name: "pagination",
          label: "Pagination",
          type: "boolean",
        },
        {
          name: "rowsPerPage",
          label: "Rows per page",
          type: "text",
          size: 20,
          show: this.pagination,
        },
        {
          name: "totalRows",
          label: "Total rows (slot table)",
          type: "text",
          size: 20,
          show: this.pagination && this.slot,
        },
        {
          name: "firstColumnSticky",
          label: "First column sticky",
          type: "boolean",
        },
        {
          name: "lastColumnSticky",
          label: "Last column sticky",
          type: "boolean",
        },
        {
          name: "slot",
          label: "Use 'header', 'body' and 'footer' slot",
          type: "boolean",
        },
      ]
    },
    header() {
      let obj = {}
      this.columns.forEach(
        col =>
          (obj[col.key] = {
            value: col.value,
            tooltip: col.tooltip || null,
            sortable: col.sortable || false,
            rightAlign: col.rightAlign || false,
            minWidth: col.minWidth || null,
            slot: col.slot || false,
          })
      )
      return obj
    },
    body() {
      let arr = []
      this.rows.forEach(row => {
        let obj = {}
        obj.id = row.id
        this.columns.forEach(col => (obj[col.key] = row[col.key] || ""))
        obj.value = row.value
        obj.locked = row.locked || false
        obj.disabled = row.disabled || false
        obj.slot = row.slot || false
        arr.push(obj)
      })
      return arr
    },
    hasProp() {
      return (
        !this.slot ||
        this.fullWidth ||
        this.sortKey ||
        this.sortOrder ||
        this.clickable ||
        this.selectMode ||
        this.inputState ||
        this.disabled ||
        this.firstColumnSticky ||
        this.lastColumnSticky ||
        this.verticalAlign ||
        this.pagination
      )
    },
    code() {
      let html = ""
      html += "<mom-table"
      html += this.hasProp ? "\n" : ""
      if (!this.slot) {
        html += '\t:header="{\n'
        this.columns.forEach(col => {
          html += `\t\t${col.key}: {`
          html += ` value: '${col.value}'`
          html += col.tooltip ? `, tooltip: '${col.tooltip}'` : ""
          html += col.sortable ? `, sortable: ${col.sortable}` : ""
          html += col.rightAlign ? `, rightAlign: ${col.rightAlign}` : ""
          html += col.minWidth ? `, minWidth: ${col.minWidth}` : ""
          html += " },\n"
        })
        html += '\t}"\n'
        html += '\t:body="[\n'
        this.body.forEach(row => {
          html += "\t\t{\n"
          html += row.id ? `\t\t\tid: '${row.id}',\n` : ""
          this.columns.forEach(col => {
            html += `\t\t\t${col.key}: '${row[col.key]}',\n`
          })
          html += row.value ? `\t\t\tvalue: '${row.value}',\n` : ""
          html += row.locked ? `\t\t\tlocked: ${row.locked},\n` : ""
          html += row.disabled ? `\t\t\tdisabled: ${row.disabled},\n` : ""
          html += "\t\t},\n"
        })
        html += '\t]"\n'
        if (this.footer.show) {
          html += '\t:footer="{\n'
          this.columns.forEach(col => {
            if (this.footer[col.key]) {
              html += `\t\t${col.key}: {`
              html += ` value: '${this.footer[col.key]}'`
              html += " },\n"
            }
          })
          html += '\t}"\n'
        }
      }
      html += this.fullWidth ? "\tfull-width\n" : ""
      html += this.verticalAlign ? `\tvertical-align="${this.verticalAlign}"\n` : ""
      html += this.sortKey ? `\tsort-key="${this.sortOrder}"\n` : ""
      html += this.sortKey && this.sortOrder ? `\tsort-order="${this.sortOrder}"\n` : ""
      html += this.selectMode ? `\tselect-mode="${this.selectMode}"\n` : ""
      html += this.selectMode ? '\tinput-name="table"\n' : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.clickable ? "\tclickable\n" : ""
      html += this.disabled ? "\tdisabled\n" : ""
      html += this.pagination ? "\tpagination\n" : ""
      html += this.pagination && this.rowsPerPage ? `\trows-per-page="${this.rowsPerPage}"\n` : ""
      html +=
        this.slot && this.pagination && this.totalRows ? `\ttotal-rows="${this.totalRows}"\n` : ""
      html += this.firstColumnSticky ? "\tfirst-column-sticky\n" : ""
      html += this.lastColumnSticky ? "\tlast-column-sticky\n" : ""
      if (!this.slot) {
        html += "/>"
      } else {
        html += ">\n"
        html += '\t<mom-table-thead slot="header">\n'
        html += '\t\t<mom-table-tr row-type="header">\n'
        this.columns.forEach(col => {
          html += "\t\t\t<mom-table-th"
          html += !col.slot ? ` text="${col.value}"` : ""
          html += col.tooltip ? ` tooltip="${col.tooltip}"` : ""
          html += col.sortable ? ` column-key="${col.key}"` : ""
          html += col.sortable ? " sortable" : ""
          html += col.rightalign ? " right-align" : ""
          html += col.minWidth ? ` min-width="${col.minWidth}"` : ""
          if (col.slot) {
            html += ">"
            html += col.value
            html += "</mom-table-th>\n"
          } else {
            html += " />\n"
          }
        })
        html += "\t\t</mom-table-tr>\n"
        html += "\t</mom-table-thead>\n"
        html += '\t<mom-table-tbody slot="body">\n'
        this.body.forEach(row => {
          html += "\t\t<mom-table-tr"
          html += this.clickable ? ` row-id="${row.id}"` : ""
          html += this.selectMode ? ` value="${row.value}"` : ""
          html += this.clickable && row.locked ? " locked" : ""
          html += row.disabled ? " disabled" : ""
          html += ">\n"
          this.columns.forEach(col => {
            html += "\t\t\t<mom-table-td"
            html += !row.slot ? ` text="${row[col.key]}"` : ""
            html += col.rightAlign ? " right-align" : ""
            if (row.slot) {
              html += ">"
              html += row[col.key] ? row[col.key] : ""
              html += "</mom-table-td>\n"
            } else {
              html += " />\n"
            }
          })
          html += "\t\t</mom-table-tr>\n"
        })
        html += "\t</mom-table-tbody>\n"
        if (this.footer.show) {
          html += '\t<mom-table-tfoot slot="footer">\n'
          html += '\t\t<mom-table-tr row-type="footer">\n'
          this.columns.forEach(col => {
            html += "\t\t\t<mom-table-td"
            html += !this.footer.slot ? ` text="${this.footer[col.key]}"` : ""
            html += col.rightAlign ? " right-align" : ""
            if (this.footer.slot) {
              html += ">"
              html += this.footer[col.key] ? this.footer[col.key] : ""
              html += "</mom-table-td>\n"
            } else {
              html += " />\n"
            }
          })
          html += "\t\t</mom-table-tr>\n"
          html += "\t</mom-table-tfoot>\n"
        }
        html += "</mom-table>"
      }

      return html
    },
  },
}
</script>
