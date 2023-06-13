import { mount } from "@vue/test-utils"
import MomDescriptionList from "@/components/descriptionlist/MomDescriptionList.vue"
import MomDescriptionItem from "@/components/descriptionlist/MomDescriptionItem.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component, descriptionItems
const termWidthArray = ["s", "m", "l"]
const variantArray = ["vertical", "horizontal", "table"]

const items = [
  {
    term: "Term 1",
    details: "Details 1",
    tooltip: "Tooltip",
  },
  {
    term: "Term 2",
    details: "Details 2",
  },
  {
    term: "Term 3",
    details: "Details 3",
    boldText: true,
    topBorder: true,
  },
]

describe("MomDescriptionList", () => {
  beforeEach(() => {
    component = mount(MomDescriptionList, {
      propsData: {
        items: items,
      },
    })
    descriptionItems = component.findAllComponents(MomDescriptionItem)
  })

  test("Default description list", () => {
    expect(component.classes()).toContain("MomDescriptionList")
    expect(descriptionItems.length).toBe(items.length)
  })

  test("Description list divider", async () => {
    await component.setProps({ divider: true })
    expect(component.classes()).toContain("MomDescriptionList--has-divider")
  })

  describe("Term width", () => {
    test.each(termWidthArray)("Term width %p", async termWidth => {
      await component.setProps({ termWidth: termWidth })
      for (let i = 0; i < items.length; i++) {
        expect(descriptionItems.at(i).find(".MomDescriptionItem__Term").classes()).toContain(
          `MomDescriptionItem__Term--width-${termWidth}`
        )
      }
    })
  })

  describe("Description list variant", () => {
    describe.each(variantArray)("Variant: %p", variant => {
      test.each(termWidthArray)("Term width %p", async termWidth => {
        await component.setProps({ variant: variant })
        await component.setProps({ termWidth: termWidth })
        expect(component.classes()).toContain(`MomDescriptionList--variant-${variant}`)
        for (let i = 0; i < items.length; i++) {
          if (variant === "horizontal") {
            expect(descriptionItems.at(i).find(".MomDescriptionItem__Term").classes()).toContain(
              `MomDescriptionItem__Term--width-${termWidth}`
            )
          } else if (variant === "vertical" || variant === "table") {
            expect(component.classes()).not.toContain(
              `MomDescriptionItem__Term--width-${termWidth}`
            )
          }
        }
      })
    })
  })

  describe("Description items", () => {
    let descriptionItem
    test.each(items)("Description item %#", item => {
      descriptionItem = descriptionItems.at(items.indexOf(item))
      if (item.tooltip) {
        expect(descriptionItem.findComponent(MomTooltip).exists()).toBeTruthy()
      } else {
        expect(descriptionItem.findComponent(MomTooltip).exists()).toBeFalsy()
      }
      if (item.boldText) {
        expect(descriptionItem.classes()).toContain("MomDescriptionItem--is-bold")
      } else {
        expect(descriptionItem.classes()).not.toContain("MomDescriptionItem--is-bold")
      }
      if (item.topBorder) {
        expect(descriptionItem.classes()).toContain("MomDescriptionItem--has-top-border")
      } else {
        expect(descriptionItem.classes()).not.toContain("MomDescriptionItem--has-top-border")
      }
    })
  })
})
