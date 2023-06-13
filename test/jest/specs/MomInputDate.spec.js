import { mount } from "@vue/test-utils"
import MomInputDate from "@/components/input/datefield/MomInputDate.vue"
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import datepicker from "vuejs-datepicker"
import moment from "moment"

let component, textField, pickerButton, picker
const inputStateArray = ["error", "warning"]

describe("MomInputDate", () => {
  beforeEach(() => {
    component = mount(MomInputDate)
    textField = component.findComponent(MomInputText)
    pickerButton = component.find(".MomInputDate__Picker")
    picker = component.findComponent(datepicker)
  })

  test("Default date field", () => {
    expect(component.classes()).toContain("MomInputDate")
    expect(component.classes()).not.toContain("MomInputDate--is-picker-show")
    expect(textField.exists()).toBeTruthy()
    expect(pickerButton.exists()).toBeTruthy()
    expect(picker.exists()).toBeTruthy()
    expect(picker.isVisible()).toBeFalsy()
  })

  test("Show datepicker", async () => {
    await pickerButton.trigger("click")
    expect(picker.isVisible()).toBeTruthy()
  })

  test("Date input with placeholder", async () => {
    await component.setProps({ placeholder: "DD MMM YYYY" })
    expect(textField.find(".MomInputText__Input").attributes("placeholder")).toEqual("DD MMM YYYY")
  })

  describe("Date input with input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(component.classes()).toContain(`MomInputDate--input-state-${inputState}`)
    })
  })

  test("Disabled date input", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomInputDate--input-state-disabled")
    expect(textField.find(".MomInputText__Input").attributes("disabled")).toEqual("disabled")
    expect(pickerButton.attributes("disabled")).toEqual("disabled")
    await pickerButton.trigger("click")
    expect(picker.isVisible()).toBeFalsy()
  })

  test("Input event (text)", async () => {
    await textField.find(".MomInputText__Input").setValue("15 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "15 May 2021" },
    ])
  })

  test("Input event (picker)", async () => {
    await picker.vm.$emit("input", "15 May 2021")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "15 May 2021" },
    ])
  })

  test("Min date", async () => {
    let minDate = "15 May 2021"
    await component.setProps({ minDate: minDate })
    expect(picker.props("disabledDates")).toEqual({
      from: null,
      to: moment(minDate, "DD MMM YYYY").toDate(),
    })
    await textField.find(".MomInputText__Input").setValue("25 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "25 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("5 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "05 May 2021" },
    ])
  })

  test("Max date", async () => {
    let maxDate = "15 May 2021"
    await component.setProps({ maxDate: maxDate })
    expect(picker.props("disabledDates")).toEqual({
      from: moment(maxDate, "DD MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
      to: null,
    })
    await textField.find(".MomInputText__Input").setValue("5 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "05 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("25 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "25 May 2021" },
    ])
  })

  test("Min date and max date (two side disabled)", async () => {
    let minDate = "10 May 2021"
    let maxDate = "20 May 2021"
    await component.setProps({ minDate: minDate })
    await component.setProps({ maxDate: maxDate })
    expect(picker.props("disabledDates")).toEqual({
      from: moment(maxDate, "DD MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
      to: moment(minDate, "DD MMM YYYY").toDate(),
    })
    await textField.find(".MomInputText__Input").setValue("5 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "05 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("15 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "15 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("25 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[2]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "25 May 2021" },
    ])
  })

  test("Min date and max date (range disabled)", async () => {
    let minDate = "20 May 2021"
    let maxDate = "10 May 2021"
    await component.setProps({ minDate: minDate })
    await component.setProps({ maxDate: maxDate })
    expect(picker.props("disabledDates")).toEqual({
      ranges: [
        {
          to: moment(minDate, "DD MMM YYYY").toDate(),
          from: moment(maxDate, "DD MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
        },
      ],
    })
    await textField.find(".MomInputText__Input").setValue("5 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "05 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("15 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "15 May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("25 May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[2]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "25 May 2021" },
    ])
  })
})
