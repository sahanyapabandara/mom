import { mount } from "@vue/test-utils"
import MomFormLabel from "@/components/form/MomFormLabel.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component
const sizeArray = ["s", "m"]

describe("MomFormLabel", () => {
  beforeEach(() => {
    component = mount(MomFormLabel, {
      propsData: {
        text: "Label text",
        idForInput: "demo",
      },
    })
  })

  test("Default form label", () => {
    expect(component.element.tagName.toLowerCase()).toEqual("label")
    expect(component.classes()).toContain("MomFormLabel")
    expect(component.classes()).toContain("mom-p-s")
    expect(component.text()).toEqual("Label text")
  })

  describe("Label font size", () => {
    test.each(sizeArray)("Label font size: %p", async size => {
      await component.setProps({ size: size })
      switch (size) {
        case "s": {
          expect(component.classes()).toContain("mom-p-s")
          break
        }
        case "m": {
          expect(component.classes()).toContain("mom-p")
          break
        }
      }
    })
  })

  test("Form legend", async () => {
    await component.setProps({ type: "legend" })
    expect(component.element.tagName.toLowerCase()).toEqual("legend")
  })

  test("Html input", async () => {
    await component.setProps({ text: "Label <em>text</em>" })
    expect(component.find("em").html()).toEqual("<em>text</em>")
  })

  test("Label tooltip input", async () => {
    await component.setProps({ tooltip: "Tooltip text" })
    let tooltip = component.findComponent(MomTooltip)
    expect(tooltip.exists()).toBeTruthy()
  })

  test("Label with bullet", async () => {
    await component.setProps({ showBullet: true })
    expect(component.classes()).toContain("MomFormLabel--show-bullet")
  })

  test("Label with optional text", async () => {
    await component.setProps({ optional: true })
    expect(component.find(".MomFormLabel__OptionalText").exists()).toBeTruthy()
  })
})
