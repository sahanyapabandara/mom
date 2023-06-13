import { mount } from "@vue/test-utils"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"

let component

describe("MomHorizontalLine", () => {
  beforeEach(() => {
    component = mount(MomHorizontalLine)
  })

  test("Display horizontal divider", () => {
    expect(component.classes()).toContain("MomHorizontalLine")
  })

  test("Full width divider", async () => {
    await component.setProps({ isFullWidth: true })
    expect(component.classes()).toContain("MomHorizontalLine--is-full-width")
  })

  test("Footer divider", async () => {
    await component.setProps({ isLastLine: true })
    expect(component.classes()).toContain("MomHorizontalLine--is-last-line")
  })
})
