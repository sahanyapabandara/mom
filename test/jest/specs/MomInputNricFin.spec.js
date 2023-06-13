import { mount } from "@vue/test-utils"
import MomInputNricFin from "@/components/input/textfield/MomInputNricFin.vue"

let component, input

describe("MomInputNricFin", () => {
  beforeEach(() => {
    component = mount(MomInputNricFin)
    input = component.find(".MomInputText__Input")
  })

  test("Default nric/fin input", () => {
    expect(component.classes()).toContain("MomInputText--size-s")
    expect(component.classes()).toContain("MomInputText--text-transform-uppercase")
    expect(input.attributes("maxlength")).toEqual("9")
  })

  describe("Valid NRIC", () => {
    let valid_nric = ["S9876543A", "S9876543B", "T0123456A", "T0123456B"]

    test.each(valid_nric)("NRIC: %p", async nric => {
      input.element.value = nric
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(nric)
      expect(component.emitted().input[0][0].isNricFormat).toBeTruthy()
      expect(component.emitted().input[0][0].isFinFormat).toBeFalsy()
    })
  })

  describe("Valid FIN", () => {
    let valid_fin = ["F9876543A", "F9876543B", "G0123456A", "G0123456B"]

    test.each(valid_fin)("FIN: %p", async fin => {
      input.element.value = fin
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(fin)
      expect(component.emitted().input[0][0].isNricFormat).toBeFalsy()
      expect(component.emitted().input[0][0].isFinFormat).toBeTruthy()
    })
  })

  describe("M series FIN", () => {
    let m_series_fin = ["M9876543A", "M9876543B"]

    test.each(m_series_fin)("FIN: %p", async fin => {
      input.element.value = fin
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(fin)
      expect(component.emitted().input[0][0].isNricFormat).toBeFalsy()
      expect(component.emitted().input[0][0].isFinFormat).toBeFalsy()
    })

    test.each(m_series_fin)("FIN: %p", async fin => {
      await component.setProps({ mSeriesFin: true })
      input.element.value = fin
      await input.trigger("blur")
      expect(component.emitted().input[0][0].value).toEqual(fin)
      expect(component.emitted().input[0][0].isNricFormat).toBeFalsy()
      expect(component.emitted().input[0][0].isFinFormat).toBeTruthy()
    })
  })

  describe("Invalid NRIC/FIN", () => {
    let invalid_nric_fin = ["B9876543A", "S98765432", "T9876543", "G9876543$"]

    test.each(invalid_nric_fin)("NRIC/FIN: %p", async nric_fin => {
      input.element.value = nric_fin
      await input.trigger("blur")
      if (/^[a-zA-Z0-9]+$/.test(nric_fin)) {
        expect(component.emitted().input[0][0].value).toEqual(nric_fin)
      } else {
        expect(component.emitted().input[0][0].value).toEqual("")
      }
      expect(component.emitted().input[0][0].isNricFormat).toBeFalsy()
      expect(component.emitted().input[0][0].isFinFormat).toBeFalsy()
    })
  })
})
