import { mount, createLocalVue } from "@vue/test-utils"
import MomAccordion from "@/components/accordion/MomAccordion.vue"
import MomAccordionItem from "@/components/accordion/MomAccordionItem.vue"

let component, accordionItems
const localVue = createLocalVue()
localVue.component("MomAccordionItem", MomAccordionItem)

describe("MomAccordion", () => {
  beforeEach(() => {
    component = mount(MomAccordion, {
      localVue,
      slots: {
        default:
          '<MomAccordionItem title="Accordion title 1" />' +
          '<MomAccordionItem title="Accordion title 2" />',
      },
    })
    accordionItems = component.findAllComponents(MomAccordionItem)
  })

  test("Default accordion", () => {
    expect(component.classes()).toContain("MomAccordion")
    expect(accordionItems.length).toBe(2)
    expect(accordionItems.at(0).classes()).toContain("MomAccordionItem--is-expanded")
    expect(accordionItems.at(1).classes()).not.toContain("MomAccordionItem--is-expanded")
  })

  test("Card style accordion", async () => {
    await component.setProps({ variant: "card" })
    expect(component.classes()).toContain("MomAccordion--variant-card")
  })

  test("Disabled accordion", async () => {
    await component.setProps({ disabled: true })
    for (let i = 0; i < accordionItems.length; i++) {
      expect(accordionItems.at(i).classes()).toContain("MomAccordionItem--is-disabled")
    }
  })

  test("Set open child index", async () => {
    for (let i = 0; i < accordionItems.length; i++) {
      await component.setProps({ openChildIndex: i })
      expect(accordionItems.at(i).classes()).toContain("MomAccordionItem--is-expanded")
      for (let j = 0; j < accordionItems.length; j++) {
        if (j !== i) {
          expect(accordionItems.at(j).classes()).not.toContain("MomAccordionItem--is-expanded")
        }
      }
    }
  })

  describe("Toggle event", () => {
    test("Collapse current accordion item", async () => {
      await accordionItems.at(0).find(".MomAccordionItem__Header").trigger("click")
      expect(accordionItems.at(0).classes()).not.toContain("MomAccordionItem--is-expanded")
    })

    test("Expand other accordion item", async () => {
      for (let i = 1; i < accordionItems.length; i++) {
        await accordionItems.at(i).find(".MomAccordionItem__Header").trigger("click")
        for (let j = 0; j < accordionItems.length; j++) {
          if (j === i) {
            expect(accordionItems.at(j).classes()).toContain("MomAccordionItem--is-expanded")
          } else {
            expect(accordionItems.at(j).classes()).not.toContain("MomAccordionItem--is-expanded")
          }
        }
      }
    })
  })

  describe("Keydown event", () => {
    test("Collapse current accordion item", async () => {
      await accordionItems.at(0).find(".MomAccordionItem__Header").trigger("keydown.space")
      expect(accordionItems.at(0).classes()).not.toContain("MomAccordionItem--is-expanded")
    })

    test("Expand next and previous accordion item", async () => {
      await accordionItems.at(0).find(".MomAccordionItem__Header").trigger("keydown.down")
      expect(accordionItems.at(0).classes()).not.toContain("MomAccordionItem--is-expanded")
      expect(accordionItems.at(1).classes()).toContain("MomAccordionItem--is-expanded")
      await accordionItems.at(1).find(".MomAccordionItem__Header").trigger("keydown.up")
      expect(accordionItems.at(1).classes()).not.toContain("MomAccordionItem--is-expanded")
      expect(accordionItems.at(0).classes()).toContain("MomAccordionItem--is-expanded")
    })
  })
})
