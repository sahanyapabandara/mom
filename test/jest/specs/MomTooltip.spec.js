import { mount } from "@vue/test-utils"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const iconSizeArray = ["s", "m"]

describe("MomTooltip", () => {
  beforeEach(() => {
    component = mount(MomTooltip, {
      propsData: {
        tooltipText: "Tooltip text",
      },
    })
  })

  test("Default tooltip", () => {
    expect(component.classes()).toContain("MomTooltip")
    expect(component.find(".MomTooltip__Toggle").exists()).toBeTruthy()
    expect(component.find(".MomTooltip__Popout").exists()).toBeFalsy()
  })

  describe("Toggle", () => {
    let toggle, icon

    beforeEach(() => {
      toggle = component.find(".MomTooltip__Toggle")
      icon = component.findComponent(MomIcon)
    })

    test("Default icon", () => {
      expect(icon.exists()).toBeTruthy()
      expect(icon.classes()).toContain("MomIcon--size-s")
    })

    test.each(iconSizeArray)("Icon size: %p", async size => {
      await component.setProps({ iconSize: size })
      expect(icon.classes()).toContain(`MomIcon--size-${size}`)
    })

    test("Toggle text", async () => {
      await component.setProps({ toggleText: "Toggle text" })
      expect(toggle.exists()).toBeTruthy()
      expect(icon.exists()).toBeFalsy()
      expect(toggle.find("p.mom-p").text()).toEqual("Toggle text")
    })

    test("Toggle text (Html input)", async () => {
      await component.setProps({ toggleText: "Toggle <em>text</em>" })
      expect(toggle.find("p.mom-p").find("em").html()).toEqual("<em>text</em>")
    })
  })

  describe("Tooltip popout", () => {
    let toggle, popout

    beforeEach(async () => {
      toggle = component.find(".MomTooltip__Toggle")
      await toggle.trigger("mouseenter")
      await component.vm.$nextTick()
      popout = component.find(".MomTooltip__Popout")
    })

    test("Mouse enter event", () => {
      expect(popout.exists()).toBeTruthy()
      expect(popout.find(".MomTooltip__Content").find("p.mom-p-s").text()).toEqual("Tooltip text")
    })

    test("Html content", async () => {
      await component.setProps({ tooltipText: "Tooltip <em>text</em>" })
      expect(popout.find(".MomTooltip__Content").find("p.mom-p-s").find("em").html()).toEqual(
        "<em>text</em>"
      )
    })

    test("Mouse leave event", async () => {
      await toggle.trigger("mouseleave")
      await component.vm.$nextTick()
      popout = component.find(".MomTooltip__Popout")
      expect(popout.exists()).toBeFalsy()
    })
  })
})
