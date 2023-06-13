import { mount } from "@vue/test-utils"
import MomGridColumn from "@/components/gridsystem/MomGridColumn.vue"

let component
const columnSizeArray = ["default", "Sm", "Md", "Lg", "Xl"]
const columnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

describe("MomGridColumn", () => {
  beforeEach(() => {
    component = mount(MomGridColumn)
  })

  test("Display grid column", () => {
    expect(component.classes()).toContain("MomGridColumn")
  })

  describe("Column size", () => {
    describe.each(columnSizeArray)("Column prop: %p", size => {
      test.each(columnArray)(`Column size for size${size}: %p`, async column => {
        if (size === "default") {
          await component.setProps({ size: column })
          expect(component.classes()).toContain(`MomGridColumn--col-${column}`)
        } else {
          await component.setProps({ ["size" + size]: column })
          expect(component.classes()).toContain(
            `MomGridColumn--col-${size.toLowerCase()}-${column}`
          )
        }
      })
    })
  })
})
