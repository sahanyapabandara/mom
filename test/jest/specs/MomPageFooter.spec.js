import { mount } from "@vue/test-utils"
import MomPageFooter from "@/components/page/MomPageFooter.vue"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component, layoutWrapper

describe("MomPage", () => {
  beforeEach(() => {
    component = mount(MomPageFooter)
    layoutWrapper = component.findComponent(MomLayoutWrapper)
  })

  test("Default page footer", () => {
    expect(component.classes()).toContain("MomPageFooter")
    expect(layoutWrapper.exists()).toBeTruthy()
    expect(layoutWrapper.classes()).toContain("MomPageFooter__Content")
    expect(layoutWrapper.find(".MomPageFooter__Nav").exists()).toBeTruthy()
    expect(layoutWrapper.findAllComponents(MomLink).length).toBe(4)
    for (let i = 0; i < layoutWrapper.findAllComponents(MomLink).length; i++) {
      expect(layoutWrapper.findAllComponents(MomLink).at(i).classes()).toContain(
        "MomPageFooter__Link"
      )
    }
    expect(layoutWrapper.find(".MomPageFooter__Legal").exists()).toBeTruthy()
    let currentYear = new Date().getFullYear()
    expect(layoutWrapper.find(".MomPageFooter__Copyright").text()).toBe(
      `© ${currentYear} Government of Singapore.`
    )
    expect(layoutWrapper.find(".MomPageFooter__LastUpdatedDate").exists()).toBeFalsy()
  })

  test("Custom links", async () => {
    let customLinks = [
      {
        text: "Link 1",
        href: "javascript:void(0);",
        external: true,
      },
      {
        text: "Link 2",
        href: "javascript:void(0);",
      },
    ]
    await component.setProps({ links: customLinks })
    expect(layoutWrapper.findAllComponents(MomLink).length).toBe(2)
    customLinks.forEach((link, i) => {
      expect(layoutWrapper.findAllComponents(MomLink).at(i).find(".MomLink__Text").text()).toEqual(
        link.text
      )
      if (link.external) {
        expect(
          layoutWrapper.findAllComponents(MomLink).at(i).findComponent(MomIcon).exists()
        ).toBeTruthy()
      } else {
        expect(
          layoutWrapper.findAllComponents(MomLink).at(i).findComponent(MomIcon).exists()
        ).toBeFalsy()
      }
    })
  })

  test("Last updated date", async () => {
    await component.setProps({ lastUpdatedDate: "01 Jan 2021" })
    expect(layoutWrapper.find(".MomPageFooter__LastUpdatedDate").text()).toEqual(
      "Last updated 01 Jan 2021"
    )
  })
})
