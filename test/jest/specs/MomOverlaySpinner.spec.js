import { mount } from "@vue/test-utils"
import MomOverlaySpinner from "@/components/spinner/MomOverlaySpinner.vue"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

let component, spinner, overlay

describe("MomOverlaySpinner", () => {
  beforeEach(() => {
    component = mount(MomOverlaySpinner)
    overlay = component.find("div.MomOverlaySpinner")
    spinner = component.findComponent(MomSpinner)
  })

  test("Default spinner", () => {
    expect(overlay.exists()).toBeTruthy()
    expect(spinner.exists()).toBeTruthy()
  })
})
