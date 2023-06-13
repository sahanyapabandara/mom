import { mount } from "@vue/test-utils"
import MomBanner from "@/components/alert/MomBanner.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component, statusIcon
const sizeArray = ["m", "l", "xl", "full"]
const typeArray = ["info", "error", "warning", "success"]

describe("MomBanner", () => {
  beforeEach(() => {
    component = mount(MomBanner)
    statusIcon = component.findComponent(MomIcon)
  })

  test("Default banner", () => {
    expect(component.classes()).toContain("MomBanner")
    expect(component.classes()).toContain("MomBanner--type-info")
    expect(component.classes()).toContain("MomBanner--size-xl")
    expect(statusIcon.classes()).toContain("MomBanner__Icon")
    expect(statusIcon.classes()).toContain("MomIcon--size-m")
  })

  test("Banner title", async () => {
    await component.setProps({ title: "Banner title" })
    expect(component.find("h4.mom-h4").text()).toEqual("Banner title")
  })

  test("Banner title (Html input)", async () => {
    await component.setProps({ title: "Banner <em>title</em>" })
    expect(component.find("h4.mom-h4").find("em").html()).toEqual("<em>title</em>")
  })

  describe("Banner size", () => {
    test.each(sizeArray)("Banner size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomBanner--size-${size}`)
    })
  })

  describe("Banner type", () => {
    test.each(typeArray)("Banner type: %p", async type => {
      await component.setProps({ type: type })
      expect(component.classes()).toContain(`MomBanner--type-${type}`)
    })
  })

  describe("Page banner", () => {
    beforeEach(async () => {
      await component.setProps({ variant: "page-banner" })
    })

    test("Display page banner", () => {
      expect(component.classes()).toContain("MomBanner--variant-page-banner")
      expect(statusIcon.classes()).toContain("MomBanner__Icon")
      expect(statusIcon.classes()).toContain("MomIcon--size-l")
    })

    test("Page banner title", async () => {
      await component.setProps({ title: "Page banner title" })
      expect(component.find("h3.mom-h3").text()).toEqual("Page banner title")
    })
  })
})
