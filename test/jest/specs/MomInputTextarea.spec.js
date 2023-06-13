import { mount } from "@vue/test-utils"
import MomInputTextarea from "@/components/input/textarea/MomInputTextarea.vue"

let component, textarea, input
const inputStateArray = ["error", "warning"]

describe("MomInputTextarea", () => {
  beforeEach(() => {
    component = mount(MomInputTextarea)
    textarea = component.find(".MomInputTextarea")
    input = component.find(".MomInputTextarea__Input")
  })

  test("Default textarea", () => {
    expect(textarea.exists()).toBeTruthy()
    expect(input.exists()).toBeTruthy()
    expect(input.attributes("spellcheck")).toEqual("true")
  })

  test("Textarea with placeholder", async () => {
    await component.setProps({ placeholder: "placeholder" })
    expect(input.attributes("placeholder")).toEqual("placeholder")
  })

  describe("Textarea with input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(textarea.classes()).toContain(`MomInputTextarea--input-state-${inputState}`)
    })
  })

  test("Disabled textarea", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(textarea.classes()).toContain("MomInputTextarea--input-state-disabled")
    expect(input.attributes("disabled")).toEqual("disabled")
    await input.trigger("click")
    expect(component.emitted("click")).toBeFalsy()
  })

  test("Textarea with maxlength", async () => {
    await component.setProps({ maxlength: 50 })
    expect(input.attributes("maxlength")).toEqual("50")
    expect(component.find(".MomInputTextarea__Character").text()).toEqual("(50 characters left)")
  })

  test("Textarea with disabled resize", async () => {
    await component.setProps({ resize: false })
    expect(input.classes()).toContain("MomInputTextarea__Input--no-resize")
  })

  test("Input event", async () => {
    await input.setValue("input")
    expect(component.emitted("input")[0]).toEqual(["input"])
  })

  test("Blur event", async () => {
    input.element.value = "blur"
    await input.trigger("blur")
    expect(component.emitted("input")[0]).toEqual(["blur"])
    expect(component.emitted("blur")).toBeTruthy()
  })
})
