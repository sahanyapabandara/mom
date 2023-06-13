import { mount } from "@vue/test-utils"
import MomRadialBar from "@/components/charts/MomRadialBar.vue"
import MomLink from "@/components/link/MomLink.vue"

let component
const types = ["individual", "firm"]
const link = {
  text: "View Workforce Profile",
  href: "javascript:void(0);",
}

describe("MomRadialBar", () => {
  beforeEach(() => {
    component = mount(MomRadialBar, {
      propsData: {
        name: "MUI KENG CHEAM",
      },
    })
  })

  test("Default radial", () => {
    expect(component.classes()).toContain("MomRadialBar")
    expect(component.find(".MomRadialBar__Chart").classes()).toContain(
      "MomRadialBar__Chart--type-individual"
    )
    expect(component.find(".MomRadialBar__Name").exists()).toBeTruthy()
    expect(component.find(".MomRadialBar__Name").text()).toEqual("MUI KENG CHEAM")
    expect(component.find(".MomRadialBar__Label").exists()).toBeTruthy()
    expect(component.find(".MomRadialBar__Label").text()).toEqual("Individual")
    expect(component.findComponent(MomLink).exists()).toBeFalsy()
  })

  describe("Radial type", () => {
    test.each(types)("Type: %p", async type => {
      await component.setProps({ type: type })
      expect(component.find(".MomRadialBar__Chart").classes()).toContain(
        `MomRadialBar__Chart--type-${type}`
      )
      if (type === "individual") {
        expect(component.find(".MomRadialBar__Label").text()).toEqual("Individual")
      } else {
        expect(component.find(".MomRadialBar__Label").text()).toEqual("Firm-Related")
      }
    })
  })

  test("Radial value", async () => {
    await component.setProps({ value: "20" })
    expect(component.find(".MomRadialBar__Score").text()).toEqual("20")
  })

  test("Radial link", async () => {
    await component.setProps({ link: link })
    let linkText = component.findComponent(MomLink)
    expect(linkText.exists()).toBeTruthy()
    expect(linkText.classes()).toContain("MomRadialBar__Link")
    expect(linkText.find(".MomLink__Text").text()).toEqual("View Workforce Profile")
  })
})
