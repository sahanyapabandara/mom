import { mount, createLocalVue } from "@vue/test-utils"
import MomBlockerPage from "@/templates/MomBlockerPage.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component, blockers
const localVue = createLocalVue()
localVue.component("MomButton", MomButton)
localVue.component("MomBanner", MomBanner)
const blocker = `<div>
                  <h3 class="mom-h3">This is blocker title.</h3>
                  <p class="mom-p m-b:32">This is a blocker description.</p>
                  <MomButton text="Action" />
                </div>`
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`

describe("MomBlockerPage", () => {
  beforeEach(() => {
    component = mount(MomBlockerPage)
    blockers = component.findAllComponents(MomCard)
  })

  test("Default blocker page", () => {
    expect(component.classes()).toContain("MomBlockerPage")
    expect(component.find(".MomBlockerPage_Grid").exists()).toBeTruthy()
    expect(blockers.length).toBe(1)
    expect(blockers.at(0).classes()).toContain("MomBlockerPage__Blocker")
  })

  test("Blocker page title", async () => {
    await component.setProps({ title: "Blocker page title" })
    expect(component.find(".MomBlockerPage__Title").text()).toEqual("Blocker page title")
  })

  test("Blocker page title (Html input)", async () => {
    await component.setProps({ title: "Blocker page <em>title</em>" })
    expect(component.find(".MomBlockerPage__Title").find("em").html()).toEqual("<em>title</em>")
  })

  test("Single blocker", () => {
    component = mount(MomBlockerPage, {
      localVue,
      slots: {
        blocker1: blocker,
      },
    })
    blockers = component.findAllComponents(MomCard)
    expect(blockers.length).toBe(1)
    expect(blockers.at(0).find(".mom-h3").text()).toEqual("This is blocker title.")
    expect(blockers.at(0).find(".mom-p").text()).toEqual("This is a blocker description.")
    expect(blockers.at(0).findComponent(MomButton).exists()).toBeTruthy()
    expect(blockers.at(0).findComponent(MomButton).find(".MomButton__Text").text()).toEqual(
      "Action"
    )
  })

  test("Two blocker", () => {
    component = mount(MomBlockerPage, {
      localVue,
      propsData: {
        blocker: 2,
      },
      slots: {
        blocker1: blocker,
        blocker2: blocker,
      },
    })
    blockers = component.findAllComponents(MomCard)
    expect(blockers.length).toBe(2)
    for (let i = 0; i < 2; i++) {
      expect(blockers.at(i).find(".mom-h3").text()).toEqual("This is blocker title.")
      expect(blockers.at(i).find(".mom-p").text()).toEqual("This is a blocker description.")
      expect(blockers.at(i).findComponent(MomButton).exists()).toBeTruthy()
      expect(blockers.at(i).findComponent(MomButton).find(".MomButton__Text").text()).toEqual(
        "Action"
      )
    }
  })

  test("Pre card", () => {
    component = mount(MomBlockerPage, {
      localVue,
      slots: {
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
