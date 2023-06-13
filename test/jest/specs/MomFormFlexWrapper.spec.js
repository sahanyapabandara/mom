import { mount } from "@vue/test-utils"
import MomFormFlexWrapper from "@/components/form/MomFormFlexWrapper.vue"

let component

describe("MomFormFlexWrapper", () => {
  beforeEach(() => {
    component = mount(MomFormFlexWrapper)
  })

  test("Default form flex wrapper", () => {
    expect(component.classes()).toContain("MomFormFlexWrapper")
  })
})
