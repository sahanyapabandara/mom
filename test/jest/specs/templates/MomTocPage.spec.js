import { mount, createLocalVue } from "@vue/test-utils"
import MomTocPage from "@/templates/MomTocPage.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomBanner from "@/components/alert/MomBanner.vue"
import MomLink from "@/components/link/MomLink.vue"

let component
const localVue = createLocalVue()
localVue.component("MomCard", MomCard)
localVue.component("MomBanner", MomBanner)
const content = `<MomCard id="section1">
                  <h2 class="mom-h2">Title 1</h2>
                  <p class="mom-p">This is description.</p>
                </MomCard>
                <MomCard id="section2">
                  <h2 class="mom-h2">Title 2</h2>
                  <p class="mom-p">This is description.</p>
                </MomCard>`
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`

describe("MomTocPage", () => {
  beforeEach(() => {
    component = mount(MomTocPage, {
      localVue,
      slots: {
        default: content,
      },
    })
  })

  test("Default table of content page", () => {
    expect(component.classes()).toContain("MomTocPage")
    expect(component.find(".MomTocPage__Wrapper").exists()).toBeTruthy()
    expect(component.find(".MomTocPage__Content").exists()).toBeTruthy()
    expect(component.findAllComponents(MomLink).length).toBe(2)
  })

  test("Pre card", () => {
    component = mount(MomTocPage, {
      localVue,
      slots: {
        default: content,
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
