import { mount, createLocalVue } from "@vue/test-utils"
import MomSorryPage from "@/templates/MomSorryPage.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component
const localVue = createLocalVue()
localVue.component("MomBanner", MomBanner)
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`

describe("MomSorryPage", () => {
  beforeEach(() => {
    component = mount(MomSorryPage)
  })

  test("Default sorry page", () => {
    expect(component.classes()).toContain("MomSorryPage")
    expect(component.find(".MomSorryPage_Grid").exists()).toBeTruthy()
  })

  test("Sorry page title", async () => {
    await component.setProps({ title: "Sorry page title" })
    expect(component.find("h1").text()).toEqual("Sorry page title")
  })

  test("Sorry page title (Html input)", async () => {
    await component.setProps({ title: "Sorry page <em>title</em>" })
    expect(component.find("h1").find("em").html()).toEqual("<em>title</em>")
  })

  test("Pre card", () => {
    component = mount(MomSorryPage, {
      localVue,
      slots: {
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
