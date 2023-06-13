import { mount } from "@vue/test-utils"
import MomButton from "@/components/button/MomButton.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const sizeArray = ["s", "m"]
const variantArray = ["primary", "secondary"]
const statusArray = ["success", "error", "warning"]

describe("MomButton", () => {
  beforeEach(() => {
    component = mount(MomButton, {
      propsData: {
        text: "Button text",
      },
    })
  })

  test("Default button", () => {
    expect(component.element.tagName.toLowerCase()).toEqual("button")
    expect(component.classes()).toContain("MomButton")
    expect(component.classes()).toContain("MomButton--variant-primary")
    expect(component.classes()).toContain("MomButton--size-m")
    expect(component.find(".MomButton__Text").classes()).toContain("mom-p")
    expect(component.find(".MomButton__Text").text()).toEqual("Button text")
  })

  test("Html input", async () => {
    await component.setProps({ text: "Button <em>text</em>" })
    expect(component.find(".MomButton__Text").find("em").html()).toEqual("<em>text</em>")
  })

  test("Link type button", async () => {
    await component.setProps({ type: "link" })
    expect(component.element.tagName.toLowerCase()).toEqual("a")
  })

  test("Disabled button", async () => {
    await component.setProps({ disabled: true })
    expect(component.classes()).toContain("MomButton--is-disabled")
  })

  describe("Button size", () => {
    test.each(sizeArray)("Button size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomButton--size-${size}`)
      switch (size) {
        case "s": {
          expect(component.find(".MomButton__Text").classes()).toContain("mom-p-s")
          break
        }
        case "m": {
          expect(component.find(".MomButton__Text").classes()).toContain("mom-p")
          break
        }
      }
    })
  })

  describe("Button variant", () => {
    test.each(variantArray)("Button variant: %p", async variant => {
      await component.setProps({ variant: variant })
      expect(component.classes()).toContain(`MomButton--variant-${variant}`)
    })
  })

  describe("Button status", () => {
    test.each(statusArray)("Button status: %p", async status => {
      await component.setProps({ status: status })
      expect(component.classes()).toContain(`MomButton--status-${status}`)
    })
  })

  describe("Button icon", () => {
    let icon

    beforeEach(async () => {
      await component.setProps({ icon: "edit" })
      icon = component.findComponent(MomIcon)
    })

    test("Default icon", () => {
      expect(icon.exists()).toBeTruthy()
      expect(icon.classes()).toContain("MomButton__Icon")
      expect(icon.classes()).toContain("MomButton__Icon--left")
      expect(icon.classes()).not.toContain("MomButton__Icon--right")
    })

    test("Left icon", async () => {
      await component.setProps({ iconPosition: "left" })
      expect(icon.classes()).toContain("MomButton__Icon--left")
      expect(icon.classes()).not.toContain("MomButton__Icon--right")
    })

    test("Right icon", async () => {
      await component.setProps({ iconPosition: "right" })
      expect(icon.classes()).not.toContain("MomButton__Icon--left")
      expect(icon.classes()).toContain("MomButton__Icon--right")
    })

    test("Icon only", async () => {
      await component.setProps({ hideText: true })
      expect(component.classes()).toContain("MomButton--hide-text")
      expect(icon.classes()).not.toContain("MomButton__Icon--left")
      expect(icon.classes()).not.toContain("MomButton__Icon--right")
    })

    test.each(sizeArray)("Button size: %p", async size => {
      await component.setProps({ size: size })
      expect(icon.classes()).toContain(`MomIcon--size-${size}`)
    })
  })

  describe("Click event", () => {
    test("Default button", async () => {
      await component.trigger("click")
      expect(component.emitted("click")).toBeTruthy()
    })

    test("Disabled button", async () => {
      await component.setProps({ disabled: true })
      await component.trigger("click")
      expect(component.emitted("click")).toBeFalsy()
    })
  })
})
