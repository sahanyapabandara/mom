<template>
  <div class="MomTable__Wrapper">
    <div :class="['MomTable', disabled && 'MomTable--is-disabled']">
      <div
        ref="wrapper"
        :class="[
          'MomTable__ScrollWrapper',
          (leftShadow || rightShadow) && 'MomTable__ScrollWrapper--scrollable',
        ]"
        @scroll="updateShadow"
      >
        <transition name="mom-transition-fade">
          <div
            v-if="leftShadow"
            class="MomTable__Shadow MomTable__Shadow--left"
            :style="{
              left: `${selectableColumnWidth + stickyFirstColumnWidth}rem`,
            }"
          ></div>
        </transition>

        <table
          ref="table"
          :id="idForInput"
          :class="[
            'MomTable__Table',
            fullWidth && 'MomTable__Table--fullwidth',
            verticalAlign && `MomTable__Table--vertical-align-${verticalAlign}`,
          ]"
        >
          <!-- @slot Header -->
          <slot name="header">
            <MomTableThead>
              <MomTableTr v-if="header && Object.keys(header).length > 0" rowType="header">
                <MomTableTh
                  v-for="(col, key) in header"
                  :key="key"
                  :text="typeof col === 'object' ? col.value : col"
                  :tooltip="typeof col === 'object' ? col.tooltip : null"
                  :columnKey="key"
                  :sortable="typeof col === 'object' ? col.sortable : false"
                  :rightAlign="typeof col === 'object' ? col.rightAlign : false"
                  :minWidth="typeof col === 'object' ? col.minWidth : null"
                />
              </MomTableTr>

              <MomTableTr v-else rowType="header" isPlaceholder>
                <MomTableTh colspan="100%">&nbsp;</MomTableTh>
              </MomTableTr>
            </MomTableThead>
          </slot>

          <!-- @slot Body -->
          <slot name="body">
            <MomTableTbody>
              <template v-if="header && Object.keys(header).length > 0 && body && body.length > 0">
                <template v-for="(row, i) in pageData">
                  <MomTableTr
                    :key="i"
                    :rowId="row.id"
                    :value="row.value"
                    :disabled="row.disabled"
                    :locked="row.locked"
                    @toggle="toggleRow(row.id)"
                  >
                    <template v-for="(col, key) in header">
                      <MomTableTd
                        v-if="
                          getType(col) === 'text' ||
                          getType(col) === 'date' ||
                          getType(col) === 'datetime'
                        "
                        :key="key"
                        :text="
                          getType(col) === 'text'
                            ? getData(row[key], 'value')
                            : getDate(row[key], getType(col))
                        "
                        :rightAlign="typeof col === 'object' ? col.rightAlign : false"
                      />

                      <MomTableTd
                        v-else
                        :key="key"
                        :rightAlign="typeof col === 'object' ? col.rightAlign : false"
                      >
                        <MomLink
                          v-if="getType(col) === 'link' || getType(col) === 'button'"
                          :text="getData(row[key], 'value')"
                          size="s"
                          :icon="getData(row[key], 'icon')"
                          :type="getType(col)"
                          :href="getType(col) === 'link' ? getData(row[key], 'href') : null"
                          :target="getType(col) === 'link' ? getData(row[key], 'target') : null"
                          v-on="{ click: row[key].action ? row[key].action : () => {} }"
                        />

                        <MomStatus
                          v-else-if="getType(col) === 'status'"
                          :text="getData(row[key], 'value')"
                          size="s"
                          :color="getData(row[key], 'color')"
                          :icon="getData(row[key], 'icon')"
                        />
                      </MomTableTd>
                    </template>
                  </MomTableTr>

                  <MomTableTr
                    v-if="selectMode === 'expandable'"
                    v-show="expandedRows.findIndex(id => id === row.id) >= 0"
                    class="MomTableTr--expanded-content"
                    :key="row.id + 'content'"
                    isSingleColumn
                  >
                    <MomTableTd colspan="100%">
                      <slot :name="row.id"></slot>
                    </MomTableTd>
                  </MomTableTr>
                </template>
              </template>

              <MomTableTr v-else isPlaceholder>
                <MomTableTd colspan="100%">
                  <MomSpinner
                    v-if="!header || Object.keys(header).length === 0"
                    class="MomTable__Spinner"
                  />

                  <span v-else-if="!body || body.length === 0">{{ $lang("momtable.empty") }}</span>
                </MomTableTd>
              </MomTableTr>
            </MomTableTbody>
          </slot>

          <!-- @slot Footer content -->
          <slot name="footer">
            <MomTableTfoot
              v-if="
                header && Object.keys(header).length > 0 && footer && Object.keys(footer).length > 0
              "
            >
              <MomTableTr rowType="footer">
                <MomTableTd
                  v-for="(col, key) in header"
                  :key="key"
                  :text="typeof footer[key] === 'object' ? footer[key].value : footer[key]"
                  :rightAlign="col.rightAlign"
                />
              </MomTableTr>
            </MomTableTfoot>
          </slot>
        </table>

        <transition name="mom-transition-fade">
          <div
            v-if="rightShadow"
            class="MomTable__Shadow MomTable__Shadow--right"
            :style="{
              right: `${stickyLastColumnWidth}rem`,
            }"
          ></div>
        </transition>
      </div>
    </div>

    <MomPagination
      v-if="!disabled && pagination && rowCount > 0"
      class="MomTable__Pagination"
      :totalItems="rowCount"
      :itemsPerPage="rowsPerPageInt"
      :page="currentPage"
      @pageClick="onPageClick"
    />
  </div>
</template>

<script>
import moment from "moment"
import { eventBus } from "../../utils/eventBus"
import inputId from "../../utils/inputId"
import inputStates from "../../utils/selectionStates"
import MomTableThead from "@/components/table/MomTableThead.vue"
import MomTableTbody from "@/components/table/MomTableTbody.vue"
import MomTableTfoot from "@/components/table/MomTableTfoot.vue"
import MomTableTr from "@/components/table/MomTableTr.vue"
import MomTableTh from "@/components/table/MomTableTh.vue"
import MomTableTd from "@/components/table/MomTableTd.vue"
import MomPagination from "@/components/navigation/MomPagination.vue"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

export default {
  name: "MomTable",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, inputStates],
  components: {
    MomTableThead,
    MomTableTbody,
    MomTableTfoot,
    MomTableTr,
    MomTableTh,
    MomTableTd,
    MomPagination,
    MomSpinner,
  },
  provide() {
    return {
      $tableDisabled: () => this.disabled,
      $tableSortKey: () => this.tableSortKey,
      $tableSortOrder: () => this.tableSortOrder,
      $clickable: () => this.clickable,
      $selectMode: () => this.selectMode,
      $inputName: () => this.inputName,
      $inputState: () => this.inputState,
      $selectedValue: () => this.selectedValue,
      $isCheckedAll: () => this.isCheckedAll,
    }
  },
  props: {
    /**
     * Header <br />
     * `{ value, type, tooltip, key, sortable, rightAlign, minWidth }`
     */
    header: {
      type: Object,
    },

    /**
     * Body <br/>
     * `{id, value, disabled, locked }`
     */
    body: {
      type: Array,
    },

    /**
     * Footer <br />
     * `{ value }`
     */
    footer: {
      type: Object,
    },

    /**
     * Full width
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /**
     * Vertical align body cell
     */
    verticalAlign: {
      type: String,
      default: "top",
      validator: val => ["top", "middle"].includes(val),
    },

    /**
     * Sort key
     */
    sortKey: {
      type: String,
    },

    /**
     * Sort order
     */
    sortOrder: {
      type: String,
      validator: val => ["asc", "des"].includes(val),
    },

    /**
     * Table select mode
     */
    selectMode: {
      type: String,
      validator: val => ["single", "multiple", "expandable"].includes(val),
    },

    /**
     * Input `name`
     */
    inputName: {
      type: String,
    },

    /**
     * Clickable
     */
    clickable: {
      type: Boolean,
      default: false,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Show pagination
     */
    pagination: {
      type: Boolean,
      default: false,
    },

    /**
     * Total number of rows
     */
    totalRows: {
      type: [String, Number],
    },

    /**
     * Rows per page
     */
    rowsPerPage: {
      type: [String, Number],
      default: 10,
    },

    /**
     * First column sticky
     */
    firstColumnSticky: {
      type: Boolean,
      default: false,
    },

    /**
     * Last column sticky
     */
    lastColumnSticky: {
      type: Boolean,
      default: false,
    },

    /**
     * Input `value`
     */
    value: {
      type: [String, Array],
      default: null,
    },
  },
  data() {
    return {
      headerInstance: null,
      bodyInstance: null,
      footerInstance: null,
      leftShadow: false,
      rightShadow: false,
      selectableColumnWidth: 0,
      stickyFirstColumnWidth: 0,
      stickyLastColumnWidth: 0,
      tableSortKey: this.sortKey,
      tableSortOrder: this.sortOrder,
      currentPage: 1,
      activeOptions: [],
      pageOptions: [],
      selectedValue: null,
      expandedRows: [],
    }
  },
  computed: {
    sortedData() {
      let data = null
      if (this.body) {
        data = this.body.slice(0)
        if (this.tableSortKey && this.tableSortOrder) {
          data = this.sortData(data, this.tableSortKey, this.tableSortOrder)
        }
      }
      return data
    },
    pageData() {
      let data = null
      if (this.body) {
        data = this.sortedData
        if (this.pagination) {
          data = this.filterPage(data, this.currentPage, this.rowsPerPageInt)
        }
      }
      return data
    },
    isCheckedAll() {
      return this.pageOptions.length > 0
        ? this.pageOptions.every(option => this.selectedValue.includes(option))
        : false
    },
    rowsPerPageInt() {
      return this.rowsPerPage &&
        Number(this.rowsPerPage) &&
        Number.isInteger(Number(this.rowsPerPage)) &&
        Number(this.rowsPerPage) > 0
        ? Number(this.rowsPerPage)
        : 10
    },
    totalRowsInt() {
      return this.totalRows &&
        Number(this.totalRows) &&
        Number.isInteger(Number(this.totalRows)) &&
        Number(this.totalRows) > 0
        ? Number(this.totalRows)
        : 0
    },
    rowCount() {
      return this.$slots.body ? this.totalRowsInt : this.body ? this.body.length : 0
    },
  },
  watch: {
    value() {
      if (this.selectMode) {
        this.updateSelectedValue()
      }
    },
    sortKey() {
      this.tableSortKey = this.sortKey
    },
    sortOrder() {
      this.tableSortOrder = this.sortOrder
    },
    selectMode() {
      this.updateSelectedValue()
    },
    body: {
      deep: true,
      handler() {
        if (this.selectMode) {
          this.updateActiveOptions()
          this.updateSelectedValue()
        }
      },
    },
    pageData: {
      deep: true,
      handler() {
        if (this.selectMode) {
          this.updatePageOptions()
        }
      },
    },
    firstColumnSticky() {
      this.initStickyColumns()
    },
    lastColumnSticky() {
      this.initStickyColumns()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.headerInstance = this.$children.find(child => child.$options.name === "MomTableThead")
      this.bodyInstance = this.$children.find(child => child.$options.name === "MomTableTbody")
      this.footerInstance = this.$children.find(child => child.$options.name === "MomTableTfoot")

      this.updateShadow()
      this.initStickyColumns()
      window.addEventListener("resize", this.updateShadow)

      eventBus.$on("sort", this.onSort)
      eventBus.$on("rowClick", this.onRowClick)
      this.updateActiveOptions()
      this.updatePageOptions()
      this.updateSelectedValue()
      eventBus.$on("radioChange", this.onRadioChange)
      eventBus.$on("checkboxChange", this.onCheckboxChange)
      eventBus.$on("checkAll", this.onCheckAll)
    })
  },
  methods: {
    updateShadow() {
      let table = this.$refs.table
      let wrapper = this.$refs.wrapper
      let horizontalScroll = table.offsetWidth > wrapper.offsetWidth
      let scroll_X = Math.round(wrapper.scrollLeft)
      let scroll_Max = wrapper.scrollWidth - wrapper.offsetWidth
      this.leftShadow = horizontalScroll && scroll_X > 0
      this.rightShadow = horizontalScroll && scroll_X < scroll_Max
    },

    initStickyColumns() {
      let headerRow =
        this.headerInstance && this.headerInstance.$children.length > 0
          ? this.headerInstance.$children[0]
          : null
      if (headerRow && headerRow.$children.length > 0) {
        let firstTh =
          this.selectMode && headerRow.$children.length > 1
            ? headerRow.$children[1].$el
            : headerRow.$children[0].$el
        let lastTh = headerRow.$children[headerRow.$children.length - 1].$el
        if (this.firstColumnSticky) {
          firstTh.classList.add("MomTableTh--first-column")
        } else {
          firstTh.classList.remove("MomTableTh--first-column")
        }
        if (this.lastColumnSticky) {
          lastTh.classList.add("MomTableTh--last-column")
        } else {
          lastTh.classList.remove("MomTableTh--last-column")
        }
        this.stickyFirstColumnWidth = this.firstColumnSticky ? firstTh.offsetWidth / 16 : 0
        this.stickyLastColumnWidth = this.lastColumnSticky ? lastTh.offsetWidth / 16 : 0
        this.selectableColumnWidth =
          this.selectMode && headerRow.$children.length > 1
            ? headerRow.$children[0].$el.offsetWidth / 16
            : 0
      } else {
        this.stickyFirstColumnWidth = 0
        this.stickyLastColumnWidth = 0
        this.selectableColumnWidth = 0
      }

      if (this.bodyInstance && this.bodyInstance.$children.length > 0) {
        let bodyRows = this.bodyInstance.$children
        bodyRows.forEach(row => {
          if (row.$children.length > 0) {
            let firstTd =
              this.selectMode && row.$children.length > 1
                ? row.$children[1].$el
                : row.$children[0].$el
            let lastTd = row.$children[row.$children.length - 1].$el
            if (this.firstColumnSticky) {
              firstTd.classList.add("MomTableTd--first-column")
            } else {
              firstTd.classList.remove("MomTableTd--first-column")
            }
            if (this.lastColumnSticky) {
              lastTd.classList.add("MomTableTd--last-column")
            } else {
              lastTd.classList.remove("MomTableTd--last-column")
            }
          }
        })
      }

      if (this.footerInstance && this.footerInstance.$children.length > 0) {
        let footerRows = this.footerInstance.$children
        footerRows.forEach(row => {
          if (row.$children.length > 0) {
            let firstTd =
              this.selectMode && row.$children.length > 1
                ? row.$children[1].$el
                : row.$children[0].$el
            let lastTd = row.$children[row.$children.length - 1].$el
            if (this.firstColumnSticky) {
              firstTd.classList.add("MomTableTd--first-column")
            } else {
              firstTd.classList.remove("MomTableTd--first-column")
            }
            if (this.lastColumnSticky) {
              lastTd.classList.add("MomTableTd--last-column")
            } else {
              lastTd.classList.remove("MomTableTd--last-column")
            }
          }
        })
      }
    },

    updateActiveOptions() {
      let options = []
      if (this.body) {
        this.body.forEach(row => {
          if (!row.disabled && !row.locked) {
            options.push(row.value)
          }
        })
      } else {
        let bodyRows = this.bodyInstance.$children
        bodyRows.forEach(row => {
          if (!row.disabled && !row.locked) options.push(row.value)
        })
      }
      this.activeOptions = options
    },

    updatePageOptions() {
      let options = []
      if (this.pageData) {
        this.pageData.forEach(row => {
          if (!row.disabled && !row.locked) {
            options.push(row.value)
          }
        })
      } else {
        let bodyRows = this.bodyInstance.$children
        bodyRows.forEach(row => {
          if (!row.disabled && !row.locked) options.push(row.value)
        })
      }
      this.pageOptions = options
    },

    updateSelectedValue() {
      if (this.selectMode === "single") {
        this.selectedValue = this.value ? this.value.toString() : ""
        this.selectedValue = this.activeOptions.includes(this.selectedValue)
          ? this.selectedValue
          : ""
      } else if (this.selectMode === "multiple") {
        this.selectedValue = this.value
          ? Array.isArray(this.value)
            ? this.value
            : [this.value]
          : []
        this.selectedValue = this.selectedValue.filter(options =>
          this.activeOptions.includes(options)
        )
      } else {
        this.selectedValue = null
      }
      if (this.value && this.value.length !== this.selectedValue.length) {
        this.$emit("input", this.selectedValue)
      }
    },

    getType(col) {
      return typeof col === "object" && col.type ? col.type : "text"
    },

    getData(cell, data) {
      return typeof cell === "object" && cell[data] ? cell[data] : data === "value" ? cell : null
    },

    getDate(cell, type) {
      let format = type === "date" ? "DD MMM YYYY" : "DD MMM YYYY hh:mm:ss a"
      return typeof cell === "object"
        ? moment(Number(cell.value)).format(format)
        : moment(Number(cell)).format(format)
    },

    /**
     * Data sorting method
     *
     * @param {array}
     * @param {string}
     * @param {string}
     * @public
     */
    sortData(data, sortKey, sortOrder) {
      return data.sort((a, b) => {
        let value_a = typeof a[sortKey] === "object" ? a[sortKey].value : a[sortKey]
        let value_b = typeof b[sortKey] === "object" ? b[sortKey].value : b[sortKey]
        if ((!a.disabled && !b.disabled) || (a.disabled && b.disabled)) {
          if (sortOrder === "asc") {
            return value_a < value_b ? -1 : 1
          } else if (sortOrder === "des") {
            return value_a > value_b ? -1 : 1
          }
        } else if (a.disabled && !b.disabled) {
          return 1
        } else if (!a.disabled && b.disabled) {
          return -1
        }
      })
    },

    /**
     * Page filtering method
     *
     * @param {array}
     * @param {number}
     * @param {number}
     * @public
     */
    filterPage(data, pageNumber, rowsPerPage) {
      let startIndex = (pageNumber - 1) * rowsPerPage
      let lastIndex = pageNumber * rowsPerPage
      return data.slice(startIndex, lastIndex)
    },

    /**
     * Go to first locked row
     *
     * @public
     */
    goToFirstLockedRow() {
      let data = this.sortedData
      let rowIndex = data.findIndex(row => row.locked === true)
      let pageIndex =
        rowIndex < 0 ? this.currentPage : Math.ceil((rowIndex + 1) / this.rowsPerPageInt)
      this.currentPage = pageIndex
    },

    toggleRow(rowId) {
      if (this.expandedRows.findIndex(id => id === rowId) < 0) {
        this.expandedRows.push(rowId)
      } else {
        this.expandedRows = this.expandedRows.filter(id => id != rowId)
      }
      this.$emit("toggle", rowId)
    },

    onSort(e) {
      if (this === e.table) {
        this.tableSortKey = e.key
        this.tableSortOrder = e.order

        /**
         * When table is sorted
         *
         * @event sort
         * @param {object} sortKey_and_sortOrder
         */
        this.$emit("sort", { key: this.tableSortKey, order: this.tableSortOrder })
      }
    },

    onPageClick(e) {
      this.currentPage = e
      /**
       * When table page number is clicked
       *
       * @event pageClick
       * @param {object} page_and_rowsPerPage
       */
      this.$emit("pageClick", { page: this.currentPage, rowsPerPage: this.rowsPerPageInt })
    },

    onRowClick(e) {
      if (this === e.table) {
        /**
         * When table receives row click
         *
         * @event click
         * @param {string} rowId
         */
        this.$emit("click", e.rowId)
      }
    },

    onRadioChange(e) {
      if (this === e.table) {
        this.selectedValue = e.value
        this.$emit("input", this.selectedValue)
      }
    },

    onCheckboxChange(e) {
      if (this === e.table) {
        if (e.checked) {
          this.selectedValue.push(e.value)
        } else {
          this.selectedValue = this.selectedValue.filter(value => value !== e.value)
        }
        this.$emit("input", this.selectedValue)
      }
    },

    onCheckAll(e) {
      if (this === e.table) {
        if (e.checkAll) {
          this.selectedValue = this.selectedValue.concat(this.pageOptions)
        } else {
          this.selectedValue = this.selectedValue.filter(item => !this.pageOptions.includes(item))
        }
        this.selectedValue = [...new Set(this.selectedValue)]
        /**
         * When table receives input
         *
         * @event input
         * @param {string | array} selectedValues
         */
        this.$emit("input", this.selectedValue)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.MomTable__Wrapper {
  @include stack-margin(rem(24));
}

.MomTable {
  position: relative;
}

.MomTable__ScrollWrapper {
  max-width: 100%;

  &--scrollable {
    overflow-x: auto;
  }
}

.MomTable__Table {
  border-collapse: separate;
  background-color: $color-white;

  &--fullwidth {
    width: 100%;
  }
}

.MomTable__Shadow {
  position: absolute;
  width: rem(8);
  height: 100%;
  top: 0;

  &--left {
    left: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  &--right {
    right: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  }
}

.MomTable__Spinner {
  margin: auto;
}

.MomTable__Pagination {
  margin-top: rem(8);
}
</style>
