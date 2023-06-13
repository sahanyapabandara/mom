import { mount } from "@vue/test-utils"
import MomInputWp from "@/components/input/textfield/MomInputWp.vue"

let component, input

describe("MomInputWp", () => {
  beforeEach(() => {
    component = mount(MomInputWp)
    input = component.find(".MomInputText__Input")
  })

  test("Default wp input", () => {
    expect(component.classes()).toContain("MomInputText--size-s")
    expect(input.attributes("maxlength")).toEqual("10")
  })

  describe("Valid WP", () => {
    let valid_wp = ["0 12345678", "0 1234567-"]

    test.each(valid_wp)("NRIC: %p", async wp => {
      input.element.value = wp
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(wp)
      expect(component.emitted().input[0][0].isWpFormat).toBeTruthy()
    })
  })

  describe("Invalid WP", () => {
    let invalid_wp = ["0 1234567", "0 1234567$"]

    test.each(invalid_wp)("WP: %p", async wp => {
      input.element.value = wp
      await input.trigger("blur")
      if (/^[ 0-9-]+$/.test(wp)) {
        expect(component.emitted().input[0][0].value).toEqual(wp)
      } else {
        expect(component.emitted().input[0][0].value).toEqual("")
      }
      expect(component.emitted().input[0][0].isWpFormat).toBeFalsy()
    })
  })
})
