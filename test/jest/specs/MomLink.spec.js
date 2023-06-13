import { mount } from "@vue/test-utils"
import MomLink from "@/components/link/MomLink.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const sizeArray = ["s", "m", "l"]

describe("MomIcon", () => {
  beforeEach(() => {
    component = mount(MomLink, {
      propsData: {
        text: "Link text",
      },
    })
  })

  test("Default link", () => {
    expect(component.element.tagName.toLowerCase()).toEqual("a")
    expect(component.classes()).toContain("MomLink")
    expect(component.classes()).toContain("MomLink--size-m")
    expect(component.find(".MomLink__Text").classes()).toContain("mom-p")
    expect(component.find(".MomLink__Text").text()).toEqual("Link text")
  })

  test("Html input", async () => {
    await component.setProps({ text: "Link <em>text</em>" })
    expect(component.find(".MomLink__Text").find("em").html()).toEqual("<em>text</em>")
  })

  test("Inline link", async () => {
    await component.setProps({ display: "inline" })
    expect(component.classes()).toContain("MomLink--display-inline")
  })

  test("Darkmode link", async () => {
    await component.setProps({ darkMode: true })
    expect(component.classes()).toContain("MomLink--dark-mode")
  })

  test("Underline link", async () => {
    await component.setProps({ underline: true })
    expect(component.classes()).toContain("MomLink--underline")
  })

  test("Button type link", async () => {
    await component.setProps({ type: "button" })
    expect(component.element.tagName.toLowerCase()).toEqual("button")
  })

  test("Disabled link", async () => {
    await component.setProps({ disabled: true })
    expect(component.classes()).toContain("MomLink--is-disabled")
  })

  describe("Link size", () => {
    test.each(sizeArray)("Link size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomLink--size-${size}`)
      switch (size) {
        case "s": {
          expect(component.find(".MomLink__Text").classes()).toContain("mom-p-s")
          break
        }
        case "m": {
          expect(component.find(".MomLink__Text").classes()).toContain("mom-p")
          break
        }
        case "l": {
          expect(component.find(".MomLink__Text").classes()).toContain("mom-h3")
          break
        }
      }
    })
  })

  describe("Link icon", () => {
    let icon

    beforeEach(async () => {
      await component.setProps({ icon: "edit" })
      icon = component.findComponent(MomIcon)
    })

    test("Default icon", () => {
      expect(icon.exists()).toBeTruthy()
      expect(icon.classes()).toContain("MomLink__Icon")
      expect(icon.classes()).toContain("MomLink__Icon--left")
      expect(icon.classes()).not.toContain("MomLink__Icon--right")
    })

    test("Left icon", async () => {
      await component.setProps({ iconPosition: "left" })
      expect(icon.classes()).toContain("MomLink__Icon--left")
      expect(icon.classes()).not.toContain("MomLink__Icon--right")
    })

    test("Right icon", async () => {
      await component.setProps({ iconPosition: "right" })
      expect(icon.classes()).not.toContain("MomLink__Icon--left")
      expect(icon.classes()).toContain("MomLink__Icon--right")
    })

    test("Icon only", async () => {
      await component.setProps({ hideText: true })
      expect(component.classes()).toContain("MomLink--hide-text")
      expect(icon.classes()).not.toContain("MomLink__Icon--left")
      expect(icon.classes()).not.toContain("MomLink__Icon--right")
    })

    test.each(sizeArray)("Link size: %p", async size => {
      await component.setProps({ size: size })
      expect(icon.classes()).toContain(`MomIcon--size-${size}`)
    })
  })

  describe("Click event", () => {
    test("Default link", async () => {
      await component.trigger("click")
      expect(component.emitted("click")).toBeTruthy()
    })

    test("Disabled link", async () => {
      await component.setProps({ disabled: true })
      await component.trigger("click")
      expect(component.emitted("click")).toBeFalsy()
    })
  })
})
