import { mount } from "@vue/test-utils"
import MomBreadcrumb from "@/components/navigation/MomBreadcrumb.vue"
import MomLink from "@/components/link/MomLink.vue"

let component
const action = jest.fn()
const links = [
  {
    text: "Dashboard",
    href: "javascript:void(0);",
    action: action,
  },
  {
    text: "Navigation",
    href: "javascript:void(0);",
  },
]

describe("MomBreadcrumb", () => {
  beforeEach(() => {
    component = mount(MomBreadcrumb, {
      propsData: {
        links: links,
      },
    })
  })

  test("Default breadcrumb", () => {
    expect(component.classes()).toContain("MomBreadcrumb")
    expect(component.findAll(".MomBreadcrumb__Item").length).toBe(links.length)
    expect(component.findAllComponents(MomLink).length).toBe(links.length)
    for (let i = 0; i < links.length; i++) {
      let breadcrumbLink = component.findAllComponents(MomLink).at(i)
      expect(breadcrumbLink.classes()).toContain("MomBreadcrumb__Link")
      expect(breadcrumbLink.classes()).toContain("MomLink--size-s")
    }
  })

  test("Click event", async () => {
    let breadcrumbLink = component.findAllComponents(MomLink).at(0)
    await breadcrumbLink.trigger("click")
    expect(breadcrumbLink.emitted("click")).toBeTruthy()
    expect(action).toHaveBeenCalled()
  })
})
