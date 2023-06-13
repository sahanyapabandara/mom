import { mount } from "@vue/test-utils"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"

let component

describe("MomLayoutWrapper", () => {
  beforeEach(() => {
    component = mount(MomLayoutWrapper)
  })

  test("Default layout wrapper", () => {
    expect(component.classes()).toContain("MomLayoutWrapper")
  })
})
