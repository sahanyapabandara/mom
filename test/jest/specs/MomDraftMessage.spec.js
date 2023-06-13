import { mount } from "@vue/test-utils"
import MomDraftMessage from "@/components/alert/MomDraftMessage.vue"
import MomBanner from "@/components/alert/MomBanner.vue"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"

let component, draftmessage, statusIcon, closeButton, undoButton
const typeArray = ["delete", "undo"]

describe("MomDraftMessage", () => {
  beforeEach(() => {
    component = mount(MomDraftMessage)
    draftmessage = component.findComponent(MomBanner)
    statusIcon = draftmessage.findAllComponents(MomIcon).at(0)
    closeButton = draftmessage.find(".MomBanner__CloseButton")
    undoButton = draftmessage.findComponent(MomLink)
  })

  test("Default draft message", () => {
    expect(draftmessage.classes()).toContain("MomDraftMessage")
    expect(draftmessage.classes()).toContain("MomBanner")
    expect(draftmessage.classes()).toContain("MomBanner--type-delete")
    expect(draftmessage.classes()).toContain("MomBanner--size-m")
    expect(statusIcon.classes()).toContain("MomBanner__Icon")
    expect(statusIcon.classes()).toContain("MomIcon--size-m")
    expect(closeButton.exists()).toBeTruthy()
  })

  describe("Draft message type", () => {
    test.each(typeArray)("Draft message type: %p", async type => {
      await component.setProps({ type: type })
      expect(draftmessage.classes()).toContain(`MomBanner--type-${type}`)
      if (type === "delete") {
        expect(undoButton.classes()).toContain("MomBanner__UndoButton")
        expect(undoButton.classes()).toContain("MomLink--size-m")
      } else {
        expect(undoButton.exists()).toBeFalsy()
      }
    })
  })

  describe("Close event", () => {
    test("Close button", async () => {
      await closeButton.trigger("click")
      expect(component.emitted("close")).toBeTruthy()
      expect(draftmessage.html()).toBe("")
    })
  })

  describe("Undo event", () => {
    test("Undo event", async () => {
      await component.setProps({ type: "delete" })
      undoButton = draftmessage.findComponent(MomLink)
      await undoButton.trigger("click")
      expect(component.emitted("undo")).toBeTruthy()
      expect(draftmessage.html()).toBe("")
    })
  })

  describe("Draft message timeout", () => {
    beforeEach(() => {
      jest.setTimeout(11000)
    })

    test("Default timeout", done => {
      setTimeout(() => {
        expect(draftmessage.html()).toBe("")
        done()
      }, 10200)
    })

    test("Custom timeout", async done => {
      await component.setProps({ timeout: 5 })
      setTimeout(() => {
        expect(draftmessage.html()).toBe("")
        done()
      }, 5200)
    })
  })
})
