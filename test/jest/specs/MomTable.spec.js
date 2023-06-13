import { mount } from "@vue/test-utils"
import MomTable from "@/components/table/MomTable.vue"
import MomTableThead from "@/components/table/MomTableThead.vue"
import MomTableTbody from "@/components/table/MomTableTbody.vue"
import MomTableTfoot from "@/components/table/MomTableTfoot.vue"
import MomTableTr from "@/components/table/MomTableTr.vue"
import MomTableTh from "@/components/table/MomTableTh.vue"
import MomTableTd from "@/components/table/MomTableTd.vue"
import MomInputRadioButton from "@/components/input/radiobutton/MomInputRadioButton.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomPagination from "@/components/navigation/MomPagination.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

let component, table, tableHeader, tableBody, tableFooter
const header = {
  col1: { value: "Column header 1", tooltip: "Tooltip text" },
  col2: { value: "Column header 2" },
}
const body = [
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
]
const verticalAlignArray = ["top", "middle"]
const inputStateArray = ["error", "warning"]

describe("MomTable", () => {
  beforeEach(() => {
    component = mount(MomTable, {
      propsData: {
        header: header,
        body: body,
      },
    })
    table = component.find("table")
    tableHeader = component.findComponent(MomTableThead)
    tableBody = component.findComponent(MomTableTbody)
  })

  test("Default table", () => {
    expect(component.classes()).toContain("MomTable__Wrapper")
    expect(component.find(".MomTable").exists()).toBeTruthy()
    expect(table.classes()).toContain("MomTable__Table")
    expect(table.classes()).toContain("MomTable__Table--vertical-align-top")
    expect(tableHeader.findAllComponents(MomTableTh).length).toBe(2)
    Object.keys(header).forEach((cell, i) => {
      let headerCell = tableHeader.findAllComponents(MomTableTh).at(i)
      expect(headerCell.text()).toContain(header[cell].value)
      if (header[cell].tooltip) {
        expect(headerCell.findComponent(MomTooltip).exists()).toBeTruthy()
      }
    })
    expect(tableBody.findAllComponents(MomTableTr).length).toBe(2)
    body.forEach((row, i) => {
      let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
      Object.keys(header).forEach((cell, j) => {
        expect(tableRow.findAllComponents(MomTableTd).at(j).text()).toBe(body[i][cell])
      })
    })
  })

  test("Table footer", async () => {
    let footer = {
      col1: { value: "Column footer 1" },
      col2: { value: "Column footer 2" },
    }
    await component.setProps({ footer: footer })
    tableFooter = component.findComponent(MomTableTfoot)
    expect(tableFooter.findAllComponents(MomTableTd).length).toBe(2)
    Object.keys(header).forEach((cell, i) => {
      expect(tableFooter.findAllComponents(MomTableTd).at(i).text()).toBe(footer[cell].value)
    })
  })

  test("Html input", async () => {
    let header_html = {
      col1: { value: "Column <em>header</em>" },
    }
    let body_html = [
      {
        col1: "Column <em>body</em>",
      },
    ]
    let footer_html = {
      col1: { value: "Column <em>footer</em>" },
    }
    await component.setProps({ header: header_html })
    await component.setProps({ body: body_html })
    await component.setProps({ footer: footer_html })
    expect(tableHeader.findComponent(MomTableTh).find("em").html()).toEqual("<em>header</em>")
    expect(tableBody.findComponent(MomTableTd).find("em").html()).toEqual("<em>body</em>")
    tableFooter = component.findComponent(MomTableTfoot)
    expect(tableFooter.findComponent(MomTableTd).find("em").html()).toEqual("<em>footer</em>")
  })

  test("Empty header", async () => {
    await component.setProps({ header: {} })
    expect(tableBody.findComponent(MomSpinner).exists()).toBeTruthy()
  })

  test("Empty body", async () => {
    await component.setProps({ body: [] })
    expect(tableBody.findComponent(MomTableTd).text()).toEqual("No records found.")
  })

  test("Full width table", async () => {
    await component.setProps({ fullWidth: true })
    expect(table.classes()).toContain("MomTable__Table--fullwidth")
  })

  describe("Vertical align", () => {
    test.each(verticalAlignArray)("Vertical align: %p", async verticalAlign => {
      await component.setProps({ verticalAlign: verticalAlign })
      expect(table.classes()).toContain(`MomTable__Table--vertical-align-${verticalAlign}`)
    })
  })

  describe("Sortable table", () => {
    beforeEach(async () => {
      let sortable_header = {
        col1: { value: "Column header 1" },
        col2: { value: "Column header 2", sortable: true },
      }
      await component.setProps({ header: sortable_header })
      await component.setProps({ sortKey: "col2" })
      await component.setProps({ sortOrder: "asc" })
    })

    test("Sort key", async () => {
      await component.setProps({ sortOrder: "des" })
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        Object.keys(header).forEach((cell, j) => {
          expect(tableRow.findAllComponents(MomTableTd).at(j).text()).toBe(
            body[body.length - 1 - i][cell]
          )
        })
      })
    })

    test("Sort button", () => {
      let sortButton = tableHeader.findAllComponents(MomTableTh).at(1).find("button")
      expect(sortButton.exists()).toBeTruthy()
      sortButton.trigger("click")
      expect(component.emitted("sort")[0]).toEqual([{ key: "col2", order: "des" }])
    })
  })

  describe("Selectable table", () => {
    describe("Single select", () => {
      beforeEach(async () => {
        await component.setProps({ selectMode: "single" })
        await component.setProps({ inputName: "radio" })
      })

      test("Show radio button", async () => {
        expect(tableHeader.findComponent(MomTableTr).classes()).toContain(
          "MomTableTr--is-selectable"
        )
        expect(tableHeader.findComponent(MomInputRadioButton).exists()).toBeFalsy()
        body.forEach((row, i) => {
          let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
          expect(tableRow.findComponent(MomInputRadioButton).exists()).toBeTruthy()
        })
      })

      test("Select radio button", async () => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
        tableRow
          .findComponent(MomInputRadioButton)
          .find(".MomInputRadioButton__Input")
          .trigger("click")
        expect(component.emitted("input")[0]).toEqual(["2"])
      })

      describe("Table input state", () => {
        test.each(inputStateArray)("Input state: %p", async inputState => {
          await component.setProps({ inputState: inputState })
          body.forEach((row, i) => {
            let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
            expect(tableRow.findComponent(MomInputRadioButton).classes()).toContain(
              `MomInputRadioButton--input-state-${inputState}`
            )
          })
        })
      })

      test("Disabled row", async () => {
        let disabled_row = [
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
            disabled: true,
            value: "2",
          },
        ]
        await component.setProps({ body: disabled_row })
        let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
        expect(tableRow.classes()).toContain("MomTableTr--is-disabled")
        expect(tableRow.findComponent(MomInputRadioButton).classes()).toContain(
          "MomInputRadioButton--is-disabled"
        )
        tableRow
          .findComponent(MomInputRadioButton)
          .find(".MomInputRadioButton__Input")
          .trigger("click")
        expect(component.emitted("input")).toBeFalsy()
      })

      test("Disabled table", async () => {
        await component.setProps({ disabled: true })
        body.forEach((row, i) => {
          let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
          expect(tableRow.findComponent(MomInputRadioButton).classes()).toContain(
            "MomInputRadioButton--is-disabled"
          )
          tableRow
            .findComponent(MomInputRadioButton)
            .find(".MomInputRadioButton__Input")
            .trigger("click")
          expect(component.emitted("input")).toBeFalsy()
        })
      })
    })

    describe("Multiple select", () => {
      beforeEach(async () => {
        await component.setProps({ selectMode: "multiple" })
        await component.setProps({ inputName: "checkbox" })
      })

      test("Show checkbox", async () => {
        expect(tableHeader.findComponent(MomTableTr).classes()).toContain(
          "MomTableTr--is-selectable"
        )
        expect(tableHeader.findComponent(MomInputCheckboxButton).exists()).toBeTruthy()
        body.forEach((row, i) => {
          let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
          expect(tableRow.findComponent(MomInputCheckboxButton).exists()).toBeTruthy()
        })
      })

      test("Select checkbox", async () => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
        tableRow
          .findComponent(MomInputCheckboxButton)
          .find(".MomInputCheckboxButton__Input")
          .trigger("click")
        expect(component.emitted("input")[0]).toEqual([["2"]])
      })

      test("Select all checkbox", async () => {
        let headerRow = tableHeader.findComponent(MomTableTr)
        headerRow
          .findComponent(MomInputCheckboxButton)
          .find(".MomInputCheckboxButton__Input")
          .trigger("click")
        expect(component.emitted("input")[0]).toEqual([["1", "2"]])
      })

      describe("Table input state", () => {
        test.each(inputStateArray)("Input state: %p", async inputState => {
          await component.setProps({ inputState: inputState })
          body.forEach((row, i) => {
            let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
            expect(tableRow.findComponent(MomInputCheckboxButton).classes()).toContain(
              `MomInputCheckboxButton--input-state-${inputState}`
            )
          })
        })
      })

      test("Disabled row", async () => {
        let disabled_row = [
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
            disabled: true,
            value: "2",
          },
        ]
        await component.setProps({ body: disabled_row })
        let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
        expect(tableRow.classes()).toContain("MomTableTr--is-disabled")
        expect(tableRow.findComponent(MomInputCheckboxButton).classes()).toContain(
          "MomInputCheckboxButton--is-disabled"
        )
        tableRow
          .findComponent(MomInputCheckboxButton)
          .find(".MomInputCheckboxButton__Input")
          .trigger("click")
        expect(component.emitted("input")).toBeFalsy()
      })

      test("Disabled table", async () => {
        await component.setProps({ disabled: true })
        body.forEach((row, i) => {
          let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
          expect(tableRow.findComponent(MomInputCheckboxButton).classes()).toContain(
            "MomInputCheckboxButton--is-disabled"
          )
          tableRow
            .findComponent(MomInputCheckboxButton)
            .find(".MomInputCheckboxButton__Input")
            .trigger("click")
          expect(component.emitted("input")).toBeFalsy()
        })
      })
    })
  })

  describe("Expandable table", () => {
    beforeEach(async () => {
      await component.setProps({ selectMode: "expandable" })
    })

    test("Show expandable button", async () => {
      expect(tableHeader.find("button").exists()).toBeFalsy()
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        if (tableRow.find(".MomTableTr--expanded-content").exists()) {
          expect(tableRow.find("button").exists()).toBeFalsy()
        } else {
          expect(tableRow.find("button").exists()).toBeTruthy()
        }
      })
    })

    test("Expand row", async () => {
      let tableRow = tableBody.findAllComponents(MomTableTr).at(0)
      tableRow.find("button").trigger("click")
      expect(component.emitted("toggle")[0]).toEqual(["row1"])
    })

    test("Disabled row", async () => {
      let disabled_row = [
        {
          id: "row1",
          col1: "Row 1 column 1",
          col2: "Row 1 column 2",
        },
        {
          id: "row2",
          col1: "Row 2 column 1",
          col2: "Row 2 column 2",
          disabled: true,
        },
      ]
      await component.setProps({ body: disabled_row })
      let tableRow = tableBody.findAllComponents(MomTableTr).at(2)
      expect(tableRow.classes()).toContain("MomTableTr--is-disabled")
      expect(tableRow.find("button").attributes("disabled")).toBeTruthy()
      tableRow.find("button").trigger("click")
      expect(component.emitted("toggle")).toBeFalsy()
    })

    test("Disabled table", async () => {
      await component.setProps({ disabled: true })
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        if (tableRow.find(".MomTableTr--expanded-content").exists()) {
          expect(tableRow.find("button").exists()).toBeFalsy()
        } else {
          expect(tableRow.find("button").attributes("disabled")).toBeTruthy()
          tableRow.find("button").trigger("click")
          expect(component.emitted("toggle")).toBeFalsy()
        }
      })
    })
  })

  describe("Clickable table", () => {
    beforeEach(async () => {
      await component.setProps({ clickable: true })
    })

    test("Default state", async () => {
      expect(tableHeader.findComponent(MomTableTr).classes()).toContain("MomTableTr--is-clickable")
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        expect(tableRow.classes()).toContain("MomTableTr--is-clickable")
      })
    })

    test("Select row", async () => {
      let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
      tableRow.trigger("click")
      expect(component.emitted("click")[0]).toEqual(["row2"])
    })

    test("Locked row", async () => {
      let locked_row = [
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
          locked: true,
          value: "2",
        },
      ]
      await component.setProps({ body: locked_row })
      let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
      expect(tableRow.classes()).toContain("MomTableTr--is-locked")
      tableRow.trigger("click")
      expect(component.emitted("click")).toBeFalsy()
    })

    test("Disabled row", async () => {
      let locked_row = [
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
          disabled: true,
          value: "2",
        },
      ]
      await component.setProps({ body: locked_row })
      let tableRow = tableBody.findAllComponents(MomTableTr).at(1)
      expect(tableRow.classes()).toContain("MomTableTr--is-disabled")
      tableRow.trigger("click")
      expect(component.emitted("click")).toBeFalsy()
    })

    test("Disabled table", async () => {
      await component.setProps({ disabled: true })
      expect(tableHeader.findComponent(MomTableTr).classes()).toContain("MomTableTr--is-disabled")
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        expect(tableRow.classes()).toContain("MomTableTr--is-disabled")
        tableRow.trigger("click")
        expect(component.emitted("click")).toBeFalsy()
      })
    })
  })

  describe("Table pagination", () => {
    let pagination

    beforeEach(async () => {
      await component.setProps({ pagination: true })
      await component.setProps({ rowsPerPage: 1 })
      pagination = component.findComponent(MomPagination)
    })

    test("Show pagination", () => {
      expect(pagination.exists()).toBeTruthy()
      expect(pagination.find(".MomPagination__Index").text()).toEqual("1 to 1 of 2")
      expect(pagination.find(".MomPagination__Button--prev").classes()).toContain(
        "MomPagination__Button--is-disabled"
      )
      expect(pagination.find(".MomPagination__Button--current-page").text()).toEqual("1")
      expect(pagination.find(".MomPagination__Button--next").classes()).not.toContain(
        "MomPagination__Button--is-disabled"
      )
    })

    test("Pagination click", async () => {
      expect(pagination.findAll(".MomPagination__Button").at(2).text()).toEqual("2")
      pagination.findAll(".MomPagination__Button").at(2).trigger("click")
      expect(component.emitted("pageClick")[0]).toEqual([{ page: 2, rowsPerPage: 1 }])
    })
  })

  describe("Sticky columns", () => {
    test("First column sticky", async () => {
      await component.setProps({ firstColumnSticky: true })
      expect(tableHeader.findAllComponents(MomTableTh).at(0).classes()).toContain(
        "MomTableTh--first-column"
      )
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        expect(tableRow.findAllComponents(MomTableTd).at(0).classes()).toContain(
          "MomTableTd--first-column"
        )
      })
    })

    test("Last column sticky", async () => {
      await component.setProps({ lastColumnSticky: true })
      expect(tableHeader.findAllComponents(MomTableTh).at(1).classes()).toContain(
        "MomTableTh--last-column"
      )
      body.forEach((row, i) => {
        let tableRow = tableBody.findAllComponents(MomTableTr).at(i)
        expect(tableRow.findAllComponents(MomTableTd).at(1).classes()).toContain(
          "MomTableTd--last-column"
        )
      })
    })
  })
})
