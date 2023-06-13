import { mount } from "@vue/test-utils"
import MomAccordion from "@/components/accordion/MomAccordion.vue"
import MomAccordionItem from "@/components/accordion/MomAccordionItem.vue"

let component
const statusArray = ["incomplete", "complete", "none"]

describe("MomAccordionItem", () => {
  beforeEach(() => {
    component = mount(MomAccordionItem, {
      parentComponent: MomAccordion,
      propsData: {
        title: "Accordion title",
      },
      provide: {
        $accordionDisabled() {
          return false
        },
      },
    })
  })

  test("Default accordion item", () => {
    expect(component.classes()).toContain("MomAccordionItem")
    expect(component.classes()).toContain("MomAccordionItem--is-expanded")
    expect(component.classes()).not.toContain("MomAccordionItem--has-summary")
    expect(component.find(".MomAccordionItem__Title").text()).toEqual("Accordion title")
    expect(component.find(".MomAccordionItem__StatusIcon").classes()).toContain(
      "MomAccordionItem__StatusIcon--status-incomplete"
    )
    expect(component.find(".MomAccordionItem__Content").exists()).toBeTruthy()
    expect(component.find(".MomAccordionItem__Summary").exists()).toBeFalsy()
    expect(component.find(".MomAccordionItem__EditLink").exists()).toBeFalsy()
  })

  test("Title (Html input)", async () => {
    await component.setProps({ title: "Accordion <em>title</em>" })
    expect(component.find(".MomAccordionItem__Title").find("em").html()).toEqual("<em>title</em>")
  })

  test("Disabled accordion", async () => {
    await component.setProps({ disabled: true })
    expect(component.classes()).toContain("MomAccordionItem--is-disabled")
  })

  test("Collapse accordion", async () => {
    await component.find(".MomAccordionItem__Header").trigger("click")
    expect(component.classes()).not.toContain("MomAccordionItem--is-expanded")
  })

  describe("Accordion status", () => {
    test.each(statusArray)("Accordion status: %p", async status => {
      await component.setProps({ status: status })
      if (status !== "none") {
        expect(component.find(".MomAccordionItem__StatusIcon").classes()).toContain(
          `MomAccordionItem__StatusIcon--status-${status}`
        )
      } else {
        expect(component.find(".MomAccordionItem__StatusIcon").exists()).toBeFalsy()
      }
    })
  })

  describe("Summary slots", () => {
    beforeEach(() => {
      component = mount(MomAccordionItem, {
        parentComponent: MomAccordion,
        propsData: {
          title: "Accordion title",
        },
        provide: {
          $accordionDisabled() {
            return false
          },
        },
        slots: {
          summary: ["Summary text"],
        },
      })
    })

    test("Do not display summary when expanded", () => {
      expect(component.classes()).toContain("MomAccordionItem--has-summary")
      expect(component.find(".MomAccordionItem__Summary").exists()).toBeFalsy()
    })

    test("Display summary when collapsed", async () => {
      await component.find(".MomAccordionItem__Header").trigger("click")
      expect(component.classes()).toContain("MomAccordionItem--has-summary")
      expect(component.classes()).not.toContain("MomAccordionItem--is-expanded")
      expect(component.find(".MomAccordionItem__Summary").exists()).toBeTruthy()
    })

    test("Edit event", async () => {
      await component.find(".MomAccordionItem__Header").trigger("click")
      await component.find(".MomAccordionItem__EditLink").trigger("click")
      expect(component.classes()).toContain("MomAccordionItem--is-expanded")
      expect(component.find(".MomAccordionItem__Summary").exists()).toBeFalsy()
    })
  })
})
