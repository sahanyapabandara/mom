import { mount } from "@vue/test-utils"
import MomStatus from "@/components/status/MomStatus.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const colorArray = ["green", "red", "orange", "blue", "purple", "grey"]
const sizeArray = ["s", "m", "l"]

describe("MomStatus", () => {
  beforeEach(() => {
    component = mount(MomStatus, {
      propsData: {
        text: "Status text",
      },
    })
  })

  test("Default status", () => {
    expect(component.classes()).toContain("MomStatus")
    expect(component.classes()).toContain("MomStatus--size-m")
    expect(component.find(".MomStatus__Text").text()).toEqual("Status text")
    expect(component.find(".MomStatus__Text").classes()).not.toContain("MomStatus__Text--uppercase")
    expect(component.findComponent(MomIcon).exists()).toBeFalsy()
  })

  test("Html input", async () => {
    await component.setProps({ text: "Status <em>text</em>" })
    expect(component.find(".MomStatus__Text").find("em").html()).toEqual("<em>text</em>")
  })

  describe("Status size", () => {
    test.each(sizeArray)("Status size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomStatus--size-${size}`)
    })
  })

  describe("Status color", () => {
    test.each(colorArray)("Status color: %p", async color => {
      await component.setProps({ color: color })
      expect(component.classes()).toContain(`MomStatus--color-${color}`)
    })
  })

  test("Status icon", async () => {
    await component.setProps({ icon: "success" })
    expect(component.findComponent(MomIcon).classes()).toContain("MomStatus__Icon")
  })

  test("Status text uppercase", async () => {
    await component.setProps({ uppercase: true })
    expect(component.find(".MomStatus__Text").classes()).toContain("MomStatus__Text--uppercase")
  })
})
