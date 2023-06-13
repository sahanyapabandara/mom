<template>
  <mom-page>
    <mom-layout-wrapper>
      <mom-card>
        <mom-table
          ref="table"
          full-width
          :sort-key="sortKey"
          :sort-order="sortOrder"
          pagination
          :total-rows="totalRows"
          :rows-per-page="rowsPerPage"
          @sort="handleSort"
          @pageClick="handlePageClick"
        >
          <mom-table-thead slot="header">
            <mom-table-tr row-type="header">
              <mom-table-th sortable column-key="name">Name (NRIC)</mom-table-th>
              <mom-table-th sortable column-key="gender">Gender</mom-table-th>
              <mom-table-th sortable column-key="nationality">Nationality</mom-table-th>
            </mom-table-tr>
          </mom-table-thead>
          <mom-table-tbody slot="body">
            <mom-table-tr v-for="(bodyRow, i) in pageData" :key="i">
              <mom-table-td
                >{{ bodyRow.name }} <br />
                <em>{{ bodyRow.nric }}</em>
              </mom-table-td>
              <mom-table-td>{{ bodyRow.gender }} </mom-table-td>
              <mom-table-td>{{ bodyRow.nationality }} </mom-table-td>
            </mom-table-tr>
          </mom-table-tbody>
        </mom-table>
      </mom-card>

      <mom-card>
        <mom-table ref="table2" select-mode="expandable">
          <mom-table-thead slot="header">
            <mom-table-tr row-type="header">
              <mom-table-th text="Column header 1" />
              <mom-table-th text="Column header 2" />
            </mom-table-tr>
          </mom-table-thead>

          <mom-table-tbody slot="body">
            <mom-table-tr @toggle="toggleRow('row1')">
              <mom-table-td text="Row 1 column 1" />
              <mom-table-td text="Row 1 column 2" />
            </mom-table-tr>

            <mom-table-tr
              is-single-column
              v-show="expandedRows.findIndex(id => id === 'row1') >= 0"
            >
              <mom-table-td colspan="100%">
                <p class="mom-p-s">Expanded content</p>
              </mom-table-td>
            </mom-table-tr>
          </mom-table-tbody>
        </mom-table>
      </mom-card>
    </mom-layout-wrapper>
  </mom-page>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      headerData: {
        name: { value: "Name" },
        nric: { value: "NRIC" },
        gender: { value: "Gender" },
        nationality: { value: "Nationality" },
      },
      bodyData: [
        {
          name: "AAA",
          nric: "S1234567A",
          gender: "Male",
          nationality: "Singaporean",
        },
        {
          name: "BBB",
          nric: "S1234567C",
          gender: "Female",
          nationality: "Malaysian",
        },
        {
          name: "CCC",
          nric: "S1234567B",
          gender: "Male",
          nationality: "Chinese",
        },
        {
          name: "DDD",
          nric: "S1234567D",
          gender: "Female",
          nationality: "Singaporean",
        },
      ],
      sortKey: "name",
      sortOrder: "asc",
      sortedBodyData: [],
      pageData: [],
      pageNumber: 1,
      rowsPerPage: 2,
      expandedRows: [],
    }
  },
  computed: {
    totalRows() {
      return this.bodyData.length
    },
  },
  mounted() {
    this.updateData()
  },
  methods: {
    updateData() {
      this.sortedBodyData = this.$refs.table.sortData(this.bodyData, this.sortKey, this.sortOrder)
      this.pageData = this.$refs.table.filterPage(
        this.sortedBodyData,
        this.pageNumber,
        this.rowsPerPage
      )
    },
    handleSort(e) {
      this.sortKey = e.key
      this.sortOrder = e.order
      this.updateData()
    },
    handlePageClick(e) {
      this.pageNumber = e.page
      this.updateData()
    },
    toggleRow(rowId) {
      if (this.expandedRows.findIndex(id => id === rowId) < 0) {
        this.expandedRows.push(rowId)
      } else {
        this.expandedRows = this.expandedRows.filter(id => id != rowId)
      }
    },
  },
}
</script>
