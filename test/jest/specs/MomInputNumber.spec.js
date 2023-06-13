import { mount } from "@vue/test-utils"
import MomInputNumber from "@/components/input/textfield/MomInputNumber.vue"

let component, input

describe("MomInputNumber", () => {
  beforeEach(() => {
    component = mount(MomInputNumber)
    input = component.find(".MomInputText__Input")
  })

  test("Default number field", async () => {
    expect(component.classes()).toContain("MomInputText")
    expect(component.classes()).toContain("MomInputText--size-l")
    expect(input.exists()).toBeTruthy()
  })

  test("Input event", async () => {
    input.element.value = "10000"
    await input.trigger("input")
    await input.trigger("blur")
    expect(component.emitted("input")[0]).toEqual(["10,000"])
  })
})
