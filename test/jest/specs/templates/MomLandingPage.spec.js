import { mount, createLocalVue } from "@vue/test-utils"
import MomLandingPage from "@/templates/MomLandingPage.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomFormGroup from "@/components/form/MomFormGroup.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component
const localVue = createLocalVue()
localVue.component("MomFormGroup", MomFormGroup)
localVue.component("MomInputCheckboxButton", MomInputCheckboxButton)
localVue.component("MomBanner", MomBanner)
const content = '<div class="content"></div>'
const note = `<div>
                <h3 class="mom-h3">Things to note</h3>
                <ul class="mom-ul">
                <li>Note 1</li>
                <li>Note 2</li>
              </ul>
            </div>`
const declaration = `<div>
                      <MomFormGroup>
                        <MomInputCheckboxButton value="1" checked text="Declaration checkbox" />
                      </MomFormGroup>
                    </div>`
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`

describe("MomLandingPage", () => {
  beforeEach(() => {
    component = mount(MomLandingPage, {
      slots: {
        default: content,
      },
    })
  })

  test("Default landing page", () => {
    expect(component.classes()).toContain("MomLandingPage")
    expect(component.find(".MomLandingPage__Title").exists()).toBeFalsy()
    expect(component.find(".MomLandingPage__Content").exists()).toBeTruthy()
    expect(component.findComponent(MomButton).exists()).toBeTruthy()
    expect(component.findComponent(MomButton).find(".MomButton__Text").text()).toEqual("Start")
  })

  test("Landing page title", async () => {
    await component.setProps({ title: "Landing page title" })
    expect(component.find(".MomLandingPage__Title").text()).toEqual("Landing page title")
  })

  test("Landing page title (Html input)", async () => {
    await component.setProps({ title: "Landing page <em>title</em>" })
    expect(component.find(".MomLandingPage__Title").find("em").html()).toEqual("<em>title</em>")
  })

  test("Button text", async () => {
    await component.setProps({ buttonText: "Next" })
    expect(component.findComponent(MomButton).find(".MomButton__Text").text()).toEqual("Next")
  })

  test("Start event", async () => {
    await component.findComponent(MomButton).trigger("click")
    expect(component.emitted("start")).toBeTruthy()
  })

  test("Disabled button", async () => {
    await component.setProps({ buttonDisabled: true })
    expect(component.findComponent(MomButton).classes()).toContain("MomButton--is-disabled")
    await component.findComponent(MomButton).trigger("click")
    expect(component.emitted("continue")).toBeFalsy()
  })

  test("Duration", async () => {
    await component.setProps({ duration: "30 minutes" })
    expect(component.find(".MomLandingPage__Duration").exists()).toBeTruthy()
    expect(component.find(".MomLandingPage__Duration").text()).toContain(
      "Takes about 30 minutes to complete."
    )
  })

  test("Note", () => {
    component = mount(MomLandingPage, {
      slots: {
        default: content,
        note: note,
      },
    })
    expect(component.find(".MomLandingPage__Note").exists()).toBeTruthy()
  })

  test("Declaration", () => {
    component = mount(MomLandingPage, {
      localVue,
      slots: {
        default: content,
        declaration: declaration,
      },
    })
    expect(component.find(".MomLandingPage__Declaration").exists()).toBeTruthy()
    expect(component.findComponent(MomInputCheckboxButton).exists()).toBeTruthy()
  })

  test("Pre card", () => {
    component = mount(MomLandingPage, {
      localVue,
      slots: {
        default: content,
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
