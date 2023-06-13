import { mount } from "@vue/test-utils"
import MomModal from "@/components/modal/MomModal.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomCard from "@/components/card/MomCard.vue"

let component
const toggleTypeArray = ["button", "link", null]
const toggleSizeArray = ["s", "m"]

describe("MomModal", () => {
  beforeEach(() => {
    component = mount(MomModal, {
      propsData: {
        toggleType: "button",
      },
      attachTo: document.body,
    })
  })

  test("Default modal", () => {
    expect(component.classes()).toContain("MomModal__Wrapper")
    expect(component.findComponent(MomButton).exists()).toBeTruthy()
    expect(component.find(".overlay").exists()).toBeFalsy()
    expect(component.find(".MomModal").exists()).toBeFalsy()
  })

  describe("Modal toggle", () => {
    describe.each(toggleTypeArray)("Toggle type: %p", type => {
      beforeEach(async () => {
        await component.setProps({ toggleType: type })
      })

      if (type === "button" || type === "link") {
        test("Display toggle", () => {
          if (type === "button") {
            expect(component.findComponent(MomButton).exists()).toBeTruthy()
            expect(component.findComponent(MomLink).exists()).toBeFalsy()
          } else if (type === "link") {
            expect(component.findComponent(MomLink).exists()).toBeTruthy()
            expect(component.findComponent(MomButton).exists()).toBeFalsy()
          }
        })

        test("Toggle text", async () => {
          await component.setProps({ toggleText: "Click me" })
          if (type === "button") {
            expect(component.findComponent(MomButton).text()).toEqual("Click me")
          } else if (type === "link") {
            expect(component.findComponent(MomLink).text()).toEqual("Click me")
          }
        })

        test.each(toggleSizeArray)("Toggle size: %p", async size => {
          await component.setProps({ toggleSize: size })
          if (type === "button") {
            expect(component.findComponent(MomButton).classes()).toContain(
              `MomButton--size-${size}`
            )
          } else if (type === "link") {
            expect(component.findComponent(MomLink).classes()).toContain(`MomLink--size-${size}`)
          }
        })

        test("Disabled toggle", async () => {
          await component.setProps({ disabled: true })
          if (type === "button") {
            expect(component.findComponent(MomButton).classes()).toContain("MomButton--is-disabled")
          } else if (type === "link") {
            expect(component.findComponent(MomLink).classes()).toContain("MomLink--is-disabled")
          }
        })
      } else {
        test("Not display toggle", () => {
          expect(component.findComponent(MomButton).exists()).toBeFalsy()
          expect(component.findComponent(MomLink).exists()).toBeFalsy()
        })
      }
    })
  })

  test("Show modal by default", async () => {
    await component.setProps({ showModal: true })
    await component.vm.$nextTick()
    expect(component.find(".overlay").exists()).toBeTruthy()
    expect(component.find(".MomModal").exists()).toBeTruthy()
    expect(component.findComponent(MomCard).exists()).toBeTruthy()
  })

  describe("Modal card", () => {
    let modalCard

    beforeEach(async () => {
      await component.findComponent(MomButton).trigger("click")
      await component.vm.$nextTick()
      modalCard = component.findComponent(MomCard)
    })

    test("Show modal card", () => {
      expect(component.find(".overlay").exists()).toBeTruthy()
      expect(component.find(".MomModal").exists()).toBeTruthy()
      expect(modalCard.exists()).toBeTruthy()
    })

    test("Modal card title", async () => {
      await component.setProps({ title: "Modal title" })
      expect(modalCard.find("h3.mom-h3").text()).toEqual("Modal title")
    })

    test("Modal card title (Html input)", async () => {
      await component.setProps({ title: "Modal <em>title</em>" })
      expect(modalCard.find("h3.mom-h3").find("em").html()).toEqual("<em>title</em>")
    })

    test("Modal card with no max width", async () => {
      await component.setProps({ maxWidth: "none" })
      expect(modalCard.classes()).toContain("MomModal--max-width-none")
    })

    test("Hide close button", async () => {
      await component.setProps({ showCloseButton: false })
      expect(component.find(".MomModal__CloseButton").exists()).toBeFalsy()
    })

    describe("Click event", () => {
      test("Close button", async () => {
        await component.find(".MomModal__CloseButton").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomModal").exists()).toBeFalsy()
        expect(modalCard.exists()).toBeFalsy()
      })

      test("Close on overlay click", async () => {
        await component.find(".overlay").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomModal").exists()).toBeFalsy()
        expect(modalCard.exists()).toBeFalsy()
      })

      test("Disabled close on overlay click", async () => {
        await component.setProps({ closeOnOverlayClick: false })
        await component.find(".overlay").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeTruthy()
        expect(component.find(".MomModal").exists()).toBeTruthy()
        expect(modalCard.exists()).toBeTruthy()
      })

      test("Close on ESC", async () => {
        await component.trigger("keydown.esc")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomModal").exists()).toBeFalsy()
        expect(modalCard.exists()).toBeFalsy()
      })

      test("Disabled close on ESC", async () => {
        await component.setProps({ closeOnEsc: false })
        await component.trigger("keydown.esc")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeTruthy()
        expect(component.find(".MomModal").exists()).toBeTruthy()
        expect(modalCard.exists()).toBeTruthy()
      })
    })
  })
})
