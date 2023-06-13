import { mount } from "@vue/test-utils"
import MomGridContainer from "@/components/gridsystem/MomGridContainer.vue"

let component
const gutterSizeArray = ["s", "m", "l", "none"]

describe("MomGridContainer", () => {
  beforeEach(() => {
    component = mount(MomGridContainer)
  })

  test("Display grid container", () => {
    expect(component.classes()).toContain("MomGridContainer")
    expect(component.classes()).toContain("MomGridContainer--gutter-l")
  })

  describe("Gutter size", () => {
    test.each(gutterSizeArray)("Gutter size: %p", async gutterSize => {
      await component.setProps({ gutterSize: gutterSize })
      expect(component.classes()).toContain(`MomGridContainer--gutter-${gutterSize}`)
    })
  })
})
