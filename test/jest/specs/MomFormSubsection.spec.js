import { mount } from "@vue/test-utils"
import MomFormSubsection from "@/components/form/MomFormSubsection.vue"

let component
const sizeArray = ["xs", "xs1", "s", "m", "l", "xl", "full"]

describe("MomFormSubsection", () => {
  beforeEach(() => {
    component = mount(MomFormSubsection)
  })

  test("Default form subsection", () => {
    expect(component.classes()).toContain("MomFormSubsection")
  })

  describe("Form group size", () => {
    test.each(sizeArray)("Form group size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomFormSubsection--size-${size}`)
    })
  })
})
