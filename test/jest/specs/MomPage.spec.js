import { mount } from "@vue/test-utils"
import MomPage from "@/components/page/MomPage.vue"

let component

describe("MomPage", () => {
  beforeEach(() => {
    component = mount(MomPage)
  })

  test("Default page", () => {
    expect(component.classes()).toContain("MomPage")
    expect(component.find(".MomPage__Header").exists()).toBeTruthy()
    expect(component.find(".MomPage__Main").exists()).toBeTruthy()
    expect(component.find(".MomPage__Footer").exists()).toBeTruthy()
  })

  test("Vertically center content", async () => {
    await component.setProps({ verticalCenteredContent: true })
    expect(component.find(".MomPage__Main").classes()).toContain("MomPage__Main--vertical-centered")
  })
})
