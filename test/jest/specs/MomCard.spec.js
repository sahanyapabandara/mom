import { mount } from "@vue/test-utils"
import MomCard from "@/components/card/MomCard.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"

let component

describe("MomCard", () => {
  beforeEach(() => {
    component = mount(MomCard)
  })

  test("Default card", () => {
    expect(component.classes()).toContain("MomCard")
    expect(component.find(".MomCard__Header").exists()).toBeFalsy()
    expect(component.find(".MomCard__RequirementHeader").exists()).toBeFalsy()
    expect(component.find(".MomCard__EditLink").exists()).toBeFalsy()
    expect(component.find(".MomCard__Footer").exists()).toBeFalsy()
    expect(component.find(".MomCard__Action").exists()).toBeFalsy()
  })

  describe("Header", () => {
    beforeEach(async () => {
      await component.setProps({ title: "Card title" })
    })

    test("Title", async () => {
      expect(component.find(".MomCard__Header").exists()).toBeTruthy()
      expect(component.find("h3.MomCard__Title").text()).toEqual("Card title")
    })

    test("Title (Html input)", async () => {
      await component.setProps({ title: "Card <em>title</em>" })
      let title = component.find("h3.MomCard__Title")
      expect(title.find("em").html()).toEqual("<em>title</em>")
    })

    test("Card subtitle", async () => {
      await component.setProps({ subtitle: "Card subtitle" })
      expect(component.find("h4.MomCard__Title").text()).toEqual("Card subtitle")
    })

    test("Card subtitle (Html input)", async () => {
      await component.setProps({ subtitle: "Card <em>subtitle</em>" })
      let subtitle = component.find("h4.MomCard__Title")
      expect(subtitle.find("em").html()).toEqual("<em>subtitle</em>")
    })

    test("Title with tooltip", async () => {
      await component.setProps({ tooltip: "Tooltip text" })
      expect(component.find("h3.MomCard__Title").exists()).toBeTruthy()
      expect(component.find(".MomCard__Tooltip").exists()).toBeTruthy()
      expect(component.find(".MomCard__Tooltip").find(".MomTooltip").exists()).toBeTruthy()
      expect(component.findComponent(MomTooltip).exists()).toBeTruthy()
    })
  })

  describe("Action card", () => {
    let action

    beforeEach(async () => {
      await component.setProps({ variant: "action" })
    })

    test("Card body", () => {
      expect(component.classes()).toContain("MomCard--variant-action")
      expect(component.find(".MomCard__Header").exists()).toBeFalsy()
      expect(component.find(".MomCard__RequirementHeader").exists()).toBeFalsy()
      expect(component.find(".MomCard__EditLink").exists()).toBeFalsy()
      expect(component.find(".MomCard__Footer").exists()).toBeTruthy()
      let divider = component.findComponent(MomHorizontalLine)
      expect(divider.exists()).toBeTruthy()
      expect(divider.classes()).toContain("MomHorizontalLine--is-full-width")
      expect(divider.classes()).toContain("MomHorizontalLine--is-last-line")
    })

    describe("Single button", () => {
      beforeEach(() => {
        action = component.findComponent(MomButton)
      })

      test("Card button", () => {
        expect(action.exists()).toBeTruthy()
        expect(action.classes()).toContain("MomCard__Action")
        expect(action.classes()).toContain("MomButton--variant-primary")
      })

      test("Click event", async () => {
        await action.trigger("click")
        expect(component.emitted("continue")).toBeTruthy()
      })

      test("Disabled button", async () => {
        await component.setProps({ buttonDisabled: true })
        expect(action.classes()).toContain("MomButton--is-disabled")
        await action.trigger("click")
        expect(component.emitted("click")).toBeFalsy()
      })
    })

    describe("Two buttons", () => {
      beforeEach(async () => {
        await component.setProps({ secondaryButtonText: "Cancel" })
        action = component.findAllComponents(MomButton)
      })

      test("Card buttons", () => {
        expect(action.length).toBe(2)
        expect(action.at(0).classes()).toContain("MomButton--variant-secondary")
        expect(action.at(1).classes()).toContain("MomButton--variant-primary")
      })

      test("Click event (primary button)", async () => {
        await action.at(1).trigger("click")
        expect(component.emitted("continue")).toBeTruthy()
      })

      test("Disabled primary button", async () => {
        await component.setProps({ buttonDisabled: true })
        expect(action.at(1).classes()).toContain("MomButton--is-disabled")
        await action.at(1).trigger("click")
        expect(component.emitted("click")).toBeFalsy()
      })

      test("Click event (secondary button)", async () => {
        await action.at(0).trigger("click")
        expect(component.emitted("secondaryAction")).toBeTruthy()
      })

      test("Disabled secondary button", async () => {
        await component.setProps({ secondaryButtonDisabled: true })
        expect(action.at(0).classes()).toContain("MomButton--is-disabled")
        await action.at(0).trigger("click")
        expect(component.emitted("click")).toBeFalsy()
      })
    })
  })

  describe("Summary card", () => {
    let edit

    beforeEach(async () => {
      await component.setProps({ variant: "summary" })
      edit = component.findComponent(MomLink)
    })

    test("Card body", () => {
      expect(component.classes()).toContain("MomCard--variant-summary")
      expect(component.find(".MomCard__Header").exists()).toBeTruthy()
      expect(component.find(".MomCard__RequirementHeader").exists()).toBeFalsy()
      expect(edit.exists()).toBeTruthy()
      expect(edit.classes()).toContain("MomCard__EditLink")
      expect(component.find(".MomCard__Footer").exists()).toBeFalsy()
      expect(component.find(".MomCard__Action").exists()).toBeFalsy()
    })

    test("Edit event", async () => {
      await edit.trigger("click")
      expect(component.emitted("edit")).toBeTruthy()
    })
  })

  describe("Summary action card", () => {
    beforeEach(async () => {
      await component.setProps({ variant: "summary-action" })
    })

    test("Card body", () => {
      expect(component.classes()).toContain("MomCard--variant-summary-action")
      expect(component.find(".MomCard__Header").exists()).toBeTruthy()
      expect(component.find(".MomCard__RequirementHeader").exists()).toBeFalsy()
      let edit = component.findComponent(MomLink)
      expect(edit.exists()).toBeTruthy()
      expect(edit.classes()).toContain("MomCard__EditLink")
      expect(component.find(".MomCard__Footer").exists()).toBeTruthy()
      let action = component.findComponent(MomButton)
      expect(action.exists()).toBeTruthy()
      expect(action.classes()).toContain("MomCard__Action")
    })
  })

  describe("Requirement card", () => {
    beforeEach(async () => {
      await component.setProps({ variant: "requirement" })
      await component.setProps({ title: "Card title" })
    })

    test("Card body", () => {
      expect(component.classes()).toContain("MomCard--variant-requirement")
      expect(component.find(".MomCard__Header").exists()).toBeFalsy()
      expect(component.find(".MomCard__RequirementHeader").exists()).toBeTruthy()
      expect(component.findAll("h3.MomCard__RequirementTitle").at(0).text()).toEqual("Card title")
      expect(component.find(".MomCard__EditLink").exists()).toBeFalsy()
      expect(component.find(".MomCard__Footer").exists()).toBeFalsy()
      expect(component.find(".MomCard__Action").exists()).toBeFalsy()
    })

    test("Card subtitle", async () => {
      await component.setProps({ subtitle: "Card subtitle" })
      expect(component.findAll("h3.MomCard__RequirementTitle").at(1).text()).toEqual(
        "Card subtitle"
      )
    })

    test("Title tooltip", async () => {
      await component.setProps({ tooltip: "Tooltip text" })
      expect(component.find(".MomCard__Tooltip").exists()).toBeFalsy()
      let tooltip = component.findComponent(MomTooltip)
      expect(tooltip.exists()).toBeFalsy()
    })
  })
})
