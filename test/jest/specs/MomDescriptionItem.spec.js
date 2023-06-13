import { mount } from "@vue/test-utils"
import MomDescriptionItem from "@/components/descriptionlist/MomDescriptionItem.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component
const termWidthArray = ["s", "m", "l"]
const variantArray = ["vertical", "horizontal", "table"]

describe("MomDescriptionItem", () => {
  beforeEach(() => {
    component = mount(MomDescriptionItem, {
      propsData: {
        term: "Term",
        details: "Details",
      },
    })
  })

  test("Default description item", () => {
    expect(component.classes()).toContain("MomDescriptionItem")
    expect(component.find(".MomDescriptionItem__Term").text()).toEqual("Term")
    expect(component.find(".MomDescriptionItem__Details").text()).toEqual("Details")
  })

  test("Term (Html input)", async () => {
    await component.setProps({ term: "<em>Term</em>" })
    expect(component.find(".MomDescriptionItem__Term").find("em").html()).toEqual("<em>Term</em>")
  })

  test("Details (Html input)", async () => {
    await component.setProps({ details: "<em>Details</em>" })
    expect(component.find(".MomDescriptionItem__Details").find(".mom-p").find("em").html()).toEqual(
      "<em>Details</em>"
    )
  })

  test("Tooltip", async () => {
    await component.setProps({ tooltip: "Tooltip text" })
    expect(component.findComponent(MomTooltip).exists()).toBeTruthy()
  })

  test("Bold text", async () => {
    await component.setProps({ boldText: true })
    expect(component.classes()).toContain("MomDescriptionItem--is-bold")
  })

  test("Top border", async () => {
    await component.setProps({ topBorder: true })
    expect(component.classes()).toContain("MomDescriptionItem--has-top-border")
  })

  test("Bottom border", async () => {
    await component.setProps({ bottomBorder: true })
    expect(component.classes()).toContain("MomDescriptionItem--has-bottom-border")
  })

  describe("Term width", () => {
    test.each(termWidthArray)("Term width %p", async termWidth => {
      await component.setProps({ termWidth: termWidth })
      expect(component.find(".MomDescriptionItem__Term").classes()).toContain(
        `MomDescriptionItem__Term--width-${termWidth}`
      )
    })
  })

  describe("Description item variant", () => {
    test.each(variantArray)("Variant: %p", async variant => {
      await component.setProps({ variant: variant })
      expect(component.classes()).toContain(`MomDescriptionItem--variant-${variant}`)
      if (variant === "vertical" || variant === "table") {
        termWidthArray.forEach(termWidth => {
          expect(component.find(".MomDescriptionItem__Term").classes()).not.toContain(
            `MomDescriptionItem__Term--width-${termWidth}`
          )
        })
      }
    })
  })
})
