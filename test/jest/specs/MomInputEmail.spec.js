import { mount } from "@vue/test-utils"
import MomInputEmail from "@/components/input/textfield/MomInputEmail.vue"

let component, input

describe("MomInputEmail", () => {
  beforeEach(() => {
    component = mount(MomInputEmail)
    input = component.find(".MomInputText__Input")
  })

  test("Default email input", () => {
    expect(input.attributes("inputmode")).toEqual("email")
  })

  describe("Valid email input", () => {
    let valid_emails = ["test@email.com"]

    test.each(valid_emails)("Email: %p", async email => {
      input.element.value = email
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(email)
      expect(component.emitted().input[0][0].isValidEmail).toBeTruthy()
    })
  })

  describe("Invalid email input", () => {
    let invalid_emails = ["test.com", "test@email@com", "test@email", "test(abc)@email.com"]

    test.each(invalid_emails)("Email: %p", async email => {
      input.element.value = email
      await input.trigger("blur")
      if (/^[^() ]*$/.test(email)) {
        expect(component.emitted().input[0][0].value).toEqual(email)
      } else {
        expect(component.emitted().input[0][0].value).toEqual("")
      }
      expect(component.emitted().input[0][0].isValidEmail).toBeFalsy()
    })
  })
})
