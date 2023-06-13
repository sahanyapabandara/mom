import { mount } from "@vue/test-utils"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

let component
const sizeArray = ["s", "m", "l", "xl", "2xl"]

describe("MomSpinner", () => {
  beforeEach(() => {
    component = mount(MomSpinner)
  })

  test("Default spinner", () => {
    expect(component.classes()).toContain("MomSpinner")
  })

  describe("Spinner size", () => {
    test.each(sizeArray)("Spinner size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomSpinner--size-${size}`)
    })
  })
})
