import { mount } from "@vue/test-utils"
import MomInputPhone from "@/components/input/textfield/MomInputPhone.vue"

let component, input

describe("MomInputPhone", () => {
  beforeEach(() => {
    component = mount(MomInputPhone)
    input = component.find(".MomInputText__Input")
  })

  test("Default phone input", () => {
    expect(component.classes()).toContain("MomInputText--size-s")
    expect(input.attributes("inputmode")).toEqual("tel")
    expect(component.find(".MomInputText__Prefix").text()).toEqual("+65")
  })

  describe("Valid phone number", () => {
    let valid_phones = ["98765432", "87654321"]

    test.each(valid_phones)("Phone number: %p", async phone => {
      input.element.value = phone
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(phone)
      expect(component.emitted().input[0][0].isValidPhone).toBeTruthy()
    })
  })

  describe("Invalid phone number", () => {
    let invalid_phones = ["76543210", "9876543", "99912345", "99512345", "9876543A"]

    test.each(invalid_phones)("Phone number: %p", async phone => {
      input.element.value = phone
      await input.trigger("blur")
      if (/^[0-9]+$/.test(phone)) {
        expect(component.emitted().input[0][0].value).toEqual(phone)
      } else {
        expect(component.emitted().input[0][0].value).toEqual("")
      }
      expect(component.emitted().input[0][0].isValidPhone).toBeFalsy()
    })
  })
})
