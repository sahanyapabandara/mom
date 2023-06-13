import { mount } from "@vue/test-utils"
import MomNotification from "@/components/alert/MomNotification.vue"
import MomBanner from "@/components/alert/MomBanner.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component, notification, statusIcon, closeButton
const sizeArray = ["m", "l"]
const typeArray = ["info", "error", "warning", "success", "internet-lost"]

describe("MomNotification", () => {
  beforeEach(() => {
    component = mount(MomNotification)
    notification = component.findComponent(MomBanner)
    statusIcon = notification.findAllComponents(MomIcon).at(0)
    closeButton = notification.find(".MomBanner__CloseButton")
  })

  test("Default notification", () => {
    expect(notification.classes()).toContain("MomNotification")
    expect(notification.classes()).toContain("MomBanner")
    expect(notification.classes()).toContain("MomBanner--type-info")
    expect(notification.classes()).toContain("MomBanner--size-m")
    expect(statusIcon.classes()).toContain("MomBanner__Icon")
    expect(statusIcon.classes()).toContain("MomIcon--size-m")
    expect(closeButton.exists()).toBeTruthy()
  })

  test("Notification title", async () => {
    await component.setProps({ title: "Notification title" })
    expect(notification.find("h4.mom-h4").text()).toEqual("Notification title")
  })

  test("Notification title (Html input)", async () => {
    await component.setProps({ title: "Notification <em>title</em>" })
    expect(notification.find("h4.mom-h4").find("em").html()).toEqual("<em>title</em>")
  })

  describe("Notification size", () => {
    test.each(sizeArray)("Notification size: %p", async size => {
      await component.setProps({ size: size })
      expect(notification.classes()).toContain(`MomBanner--size-${size}`)
    })
  })

  describe("Notification type", () => {
    test.each(typeArray)("Notification type: %p", async type => {
      await component.setProps({ type: type })
      expect(notification.classes()).toContain(`MomBanner--type-${type}`)
    })
  })

  describe("Close event", () => {
    test("Close button", async () => {
      await closeButton.trigger("click")
      expect(component.emitted("close")).toBeTruthy()
      expect(notification.html()).toBe("")
    })
  })

  describe("Notification timeout", () => {
    beforeEach(() => {
      jest.setTimeout(11000)
    })

    test("Default timeout", done => {
      setTimeout(() => {
        expect(notification.html()).toBe("")
        done()
      }, 10200)
    })

    test("Custom timeout", async done => {
      await component.setProps({ timeout: 5 })
      setTimeout(() => {
        expect(notification.html()).toBe("")
        done()
      }, 5200)
    })
  })
})
