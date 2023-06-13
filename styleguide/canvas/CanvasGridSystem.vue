<template>
  <div id="CanvasGridSystem">
    <div class="rsg--preview-66">
      <MomGridContainer :gutterSize="gutterSize || 'l'">
        <MomGridColumn
          v-for="i in columnsCount"
          :key="i"
          :size="columns[i].size"
          :sizeXs="columns[i].sizeXs"
          :sizeSm="columns[i].sizeSm"
          :sizeMd="columns[i].sizeMd"
          :sizeLg="columns[i].sizeLg"
          :sizeXl="columns[i].sizeXl"
        >
          <div class="grid-demo">Column {{ i }}</div>
        </MomGridColumn>
      </MomGridContainer>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data">
      <tr>
        <th>Columns size</th>
        <td>
          <div style="overflow: scroll">
            <table class="AttributeList">
              <thead>
                <td width="120"></td>
                <th width="120">Size</th>
                <th width="120">SizeXs <br />(>320px)</th>
                <th width="120">SizeSm <br />(>520px)</th>
                <th width="120">SizeMd <br />(>720px)</th>
                <th width="120">SizeLg <br />(>920px)</th>
                <th width="120">SizeXl <br />(>1120px)</th>
              </thead>
              <tbody>
                <tr v-for="i in columnsCount" :key="i">
                  <th>Column {{ i }}</th>
                  <td>
                    <select v-model="columns[i].size">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="columns[i].sizeXs">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="columns[i].sizeSm">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="columns[i].sizeMd">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="columns[i].sizeLg">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="columns[i].sizeXl">
                      <option></option>
                      <option v-for="j in 12" :key="j" :value="j">{{ j }}</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </DocsAttributeList>
  </div>
</template>

<script>
export default {
  name: "CanvasGridSystem",
  data() {
    return {
      gutterSize: null,
      columnsCount: 1,
      columns: {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {},
        11: {},
        12: {},
      },
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "columnsCount",
          label: "Number of columns",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "gutterSize",
          label: "Gutter size",
          type: "options",
          options: [null, "s", "m", "l", "none"],
        },
      ]
    },
    columnAttrList() {
      return [
        {
          name: "size",
          label: "Size",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "sizeXs",
          label: "SizeSm (>320px)",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "sizeSm",
          label: "SizeSm (>520px)",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "sizeMd",
          label: "SizeMd (>720px)",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "sizeLg",
          label: "SizeLg (>920px)",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: "sizeXl",
          label: "SizeXl (>1120px)",
          type: "options",
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-grid-container"
      html += this.gutterSize ? ` gutter-size="${this.gutterSize}"` : ""
      html += ">\n"
      for (let i = 1; i <= this.columnsCount; i++) {
        html += i > 1 ? "\n" : ""
        html += "\t<mom-grid-column"
        html += Object.keys(this.columns[i]).length ? "\n" : ""
        html += this.columns[i].size ? `\t\tsize="${this.columns[i].size}"\n` : ""
        html += this.columns[i].sizeXs ? `\t\tsize-xs="${this.columns[i].sizeXs}"\n` : ""
        html += this.columns[i].sizeSm ? `\t\tsize-sm="${this.columns[i].sizeSm}"\n` : ""
        html += this.columns[i].sizeMd ? `\t\tsize-md="${this.columns[i].sizeMd}"\n` : ""
        html += this.columns[i].sizeLg ? `\t\tsize-lg="${this.columns[i].sizeLg}"\n` : ""
        html += this.columns[i].sizeXl ? `\t\tsize-xl="${this.columns[i].sizeXl}"\n` : ""
        html += Object.keys(this.columns[i]).length ? "\t>\n" : ">\n"
        html += "\t\tColumn " + i + "\n"
        html += "\t</mom-grid-column>\n"
      }
      html += "</mom-grid-container>"

      return html
    },
  },
}
</script>
