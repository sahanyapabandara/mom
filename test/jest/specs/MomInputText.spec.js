import { mount } from "@vue/test-utils"
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import MomSpinner from "@/components/spinner/MomSpinner.vue"

let component, input
const sizeArray = ["xs", "xs1", "s", "m", "l", "xl", "full"]
const inputStateArray = ["error", "warning"]
const textTransformArray = ["uppercase", "lowercase"]

describe("MomInputText", () => {
  beforeEach(() => {
    component = mount(MomInputText, {
      attachTo: document.body,
    })
    input = component.find(".MomInputText__Input")
  })

  test("Default text field", () => {
    expect(component.classes()).toContain("MomInputText")
    expect(component.classes()).toContain("MomInputText--size-l")
    expect(input.exists()).toBeTruthy()
    expect(input.attributes("type")).toEqual("text")
    expect(input.attributes("spellcheck")).toEqual("true")
    expect(input.attributes("autocomplete")).toEqual("off")
    expect(component.find(".MomInputText__Prefix").exists()).toBeFalsy()
    expect(component.find(".MomInputText__Suffix").exists()).toBeFalsy()
  })

  test("Text input with placeholder", async () => {
    await component.setProps({ placeholder: "placeholder" })
    expect(input.attributes("placeholder")).toEqual("placeholder")
  })

  test("Password field ", async () => {
    await component.setProps({ isPassword: true })
    expect(input.attributes("type")).toEqual("password")
  })

  test("Text input prefix", async () => {
    await component.setProps({ prefix: "Prefix" })
    let prefix = component.find(".MomInputText__Prefix")
    expect(prefix.text()).toEqual("Prefix")
    await prefix.trigger("click")
    expect(component.emitted("click")).toBeTruthy()
  })

  test("Text input suffix", async () => {
    await component.setProps({ suffix: "suffix" })
    let suffix = component.find(".MomInputText__Suffix")
    expect(suffix.text()).toEqual("suffix")
    await suffix.trigger("click")
    expect(component.emitted("click")).toBeTruthy()
  })

  describe("Text input size", () => {
    test.each(sizeArray)("Text input size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomInputText--size-${size}`)
    })
  })

  describe("Text input with input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(component.classes()).toContain(`MomInputText--input-state-${inputState}`)
    })
  })

  test("Text input with loading state", async () => {
    await component.setProps({ isLoading: true })
    expect(component.find(".MomInputText__Loading").exists()).toBeTruthy()
    expect(component.findComponent(MomSpinner).exists()).toBeTruthy()
  })

  test("Disabled text input", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomInputText--input-state-disabled")
    expect(input.attributes("disabled")).toEqual("disabled")
    await input.trigger("click")
    expect(component.emitted("click")).toBeFalsy()
  })

  test("Text input with maxlength", async () => {
    await component.setProps({ maxlength: 50 })
    expect(input.attributes("maxlength")).toEqual("50")
  })

  test("Text input with centered aligned", async () => {
    await component.setProps({ textAlignment: "center" })
    expect(component.classes()).toContain("MomInputText--text-align-center")
  })

  describe("Text input with text transform", () => {
    test.each(textTransformArray)("Text input transform: %p", async textTransform => {
      await component.setProps({ textTransform: textTransform })
      expect(component.classes()).toContain(`MomInputText--text-transform-${textTransform}`)
    })
  })

  describe("Text input patterns", () => {
    let charStr =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+[{]}|\\;:'‘’\"“”,<.>/? "
    let charArr = charStr.split("")

    describe("default", () => {
      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        expect(component.emitted("input")[0]).toEqual([char])
      })
    })

    describe("alphanumeric", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "alphanumeric" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[a-zA-Z0-9]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("alphanumeric_space", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "alphanumeric_space" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[ a-zA-Z0-9]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("alphabets", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "alphabets" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[a-zA-Z]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("digits", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "digits" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[0-9]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("name", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "name" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[ a-zA-Z'()/@-]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("name_new", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "name_new" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[ a-zA-Z'‘’,()/@-]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })

    describe("wpno", () => {
      beforeEach(async () => {
        await component.setProps({ pattern: "wpno" })
      })

      test.each(charArr)("Character: %p", async char => {
        await input.setValue(char)
        if (/^[ 0-9-]+$/.test(char)) {
          expect(component.emitted("input")[0]).toEqual([char])
        } else {
          expect(component.emitted("input")).toBeFalsy()
        }
      })
    })
  })

  test("Click event", async () => {
    await input.trigger("click")
    expect(component.emitted("click")).toBeTruthy()
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

  test("Focus event", async () => {
    await input.trigger("focus")
    expect(component.emitted("focus")).toBeTruthy()
  })

  test("Keydown event", async () => {
    await input.trigger("keydown")
    expect(component.emitted("keydown")).toBeTruthy()
    expect(component.emitted("enter")).toBeFalsy()
  })

  test("Enter event", async () => {
    await input.trigger("keydown.enter")
    expect(component.emitted("keydown")).toBeTruthy()
    expect(component.emitted("enter")).toBeTruthy()
  })
})
