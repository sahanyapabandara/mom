import { mount } from "@vue/test-utils"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const sizeArray = ["s", "m", "l", "xl", "2xl"]

describe("MomIcon", () => {
  beforeEach(() => {
    component = mount(MomIcon, {
      propsData: {
        icon: "home",
      },
    })
  })

  test("Default icon", () => {
    expect(component.classes()).toContain("MomIcon")
  })

  describe("Icon size", () => {
    test.each(sizeArray)("Icon size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomIcon--size-${size}`)
    })
  })
})
