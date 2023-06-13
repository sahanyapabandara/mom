import { mount, createLocalVue } from "@vue/test-utils"
import MomSummaryPage from "@/templates/MomSummaryPage2.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomFormGroup from "@/components/form/MomFormGroup.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component
const localVue = createLocalVue()
localVue.component("MomFormGroup", MomFormGroup)
localVue.component("MomInputCheckboxButton", MomInputCheckboxButton)
localVue.component("MomBanner", MomBanner)
const content = '<div class="content"></div>'
const declaration = `<div>
                      <MomFormGroup>
                        <MomInputCheckboxButton value="1" checked text="Declaration checkbox" />
                      </MomFormGroup>
                    </div>`
const declaration2 = `<div>
                      <p class="mom-p">Declaration2 text</p>
                    </div>`
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`

describe("MomSummaryPage", () => {
  beforeEach(() => {
    component = mount(MomSummaryPage, {
      slots: {
        default: content,
      },
    })
  })

  test("Default summary page", () => {
    expect(component.classes()).toContain("MomSummaryPage")
    expect(component.find(".MomSummaryPage__Content").exists()).toBeTruthy()
    expect(component.findComponent(MomButton).exists()).toBeTruthy()
    expect(component.findComponent(MomButton).classes()).toContain("MomSummaryPage__Button")
    expect(component.findComponent(MomButton).find(".MomButton__Text").text()).toEqual("Continue")
    expect(component.findComponent(MomLink).exists()).toBeFalsy()
  })

  test("Button text", async () => {
    await component.setProps({ buttonText: "Next" })
    expect(component.findComponent(MomButton).find(".MomButton__Text").text()).toEqual("Next")
  })

  test("Continue event", async () => {
    await component.findComponent(MomButton).trigger("click")
    expect(component.emitted("continue")).toBeTruthy()
  })

  test("Disabled button", async () => {
    await component.setProps({ buttonDisabled: true })
    expect(component.findComponent(MomButton).classes()).toContain("MomButton--is-disabled")
    await component.findComponent(MomButton).trigger("click")
    expect(component.emitted("continue")).toBeFalsy()
  })

  test("Download link", async () => {
    await component.setProps({ showDownload: true })
    expect(component.findComponent(MomLink).exists()).toBeTruthy()
    expect(component.findComponent(MomLink).classes()).toContain("MomSummaryPage__Link")
    expect(component.findComponent(MomLink).find(".MomLink__Text").text()).toEqual(
      "Download form summary as PDF"
    )
  })

  test("Download event", async () => {
    await component.setProps({ showDownload: true })
    await component.findComponent(MomLink).trigger("click")
    expect(component.emitted("download")).toBeTruthy()
  })

  test("Declaration", () => {
    component = mount(MomSummaryPage, {
      localVue,
      slots: {
        default: content,
        declaration: declaration,
      },
    })
    expect(component.find(".MomSummaryPage__Declaration").exists()).toBeTruthy()
    expect(component.findComponent(MomInputCheckboxButton).exists()).toBeTruthy()
  })

  test("Declaration2", () => {
    component = mount(MomSummaryPage, {
      localVue,
      slots: {
        default: content,
        declaration2: declaration2,
      },
    })
    expect(component.find(".MomSummaryPage__Declaration2").exists()).toBeTruthy()
  })

  test("Pre card", () => {
    component = mount(MomSummaryPage, {
      localVue,
      slots: {
        default: content,
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
