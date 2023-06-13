import { mount } from "@vue/test-utils"
import MomInputDateMonth from "@/components/input/datefield/MomInputDateMonth.vue"
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import datepicker from "vuejs-datepicker"
import moment from "moment"

let component, textField, pickerButton, picker
const inputStateArray = ["error", "warning"]

describe("MomInputDateMonth", () => {
  beforeEach(() => {
    component = mount(MomInputDateMonth)
    textField = component.findComponent(MomInputText)
    pickerButton = component.find(".MomInputDate__Picker")
    picker = component.findComponent(datepicker)
  })

  test("Default datemonth field", () => {
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

  test("Date month input with placeholder", async () => {
    await component.setProps({ placeholder: "MMM YYYY" })
    expect(textField.find(".MomInputText__Input").attributes("placeholder")).toEqual("MMM YYYY")
  })

  describe("Date month input with input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(component.classes()).toContain(`MomInputDate--input-state-${inputState}`)
    })
  })

  test("Disabled date month input", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomInputDate--input-state-disabled")
    expect(textField.find(".MomInputText__Input").attributes("disabled")).toEqual("disabled")
    expect(pickerButton.attributes("disabled")).toEqual("disabled")
    await pickerButton.trigger("click")
    expect(picker.isVisible()).toBeFalsy()
  })

  test("Input event (text)", async () => {
    await textField.find(".MomInputText__Input").setValue("Jun 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Jun 2021" },
    ])
  })

  test("Input event (picker)", async () => {
    await picker.vm.$emit("input", "Jun 2021")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Jun 2021" },
    ])
  })

  test("Min month", async () => {
    let minMonth = "May 2021"
    await component.setProps({ minDate: minMonth })
    expect(picker.props("disabledDates")).toEqual({
      from: null,
      to: moment(minMonth, "MMM YYYY").toDate(),
    })
    await textField.find(".MomInputText__Input").setValue("Jun 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Jun 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("Apr 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "Apr 2021" },
    ])
  })

  test("Max date", async () => {
    let maxMonth = "May 2021"
    await component.setProps({ maxDate: maxMonth })
    expect(picker.props("disabledDates")).toEqual({
      from: moment(maxMonth, "MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
      to: null,
    })
    await textField.find(".MomInputText__Input").setValue("Apr 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Apr 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("Jun 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "Jun 2021" },
    ])
  })

  test("Min month and max month (two side disabled)", async () => {
    let minMonth = "Apr 2021"
    let maxMonth = "Jun 2021"
    await component.setProps({ minDate: minMonth })
    await component.setProps({ maxDate: maxMonth })
    expect(picker.props("disabledDates")).toEqual({
      from: moment(maxMonth, "MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
      to: moment(minMonth, "MMM YYYY").toDate(),
    })
    await textField.find(".MomInputText__Input").setValue("Mar 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "Mar 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("Jul 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[2]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "Jul 2021" },
    ])
  })

  test("Min month and max month (range disabled)", async () => {
    let minMonth = "Jun 2021"
    let maxMonth = "Apr 2021"
    await component.setProps({ minDate: minMonth })
    await component.setProps({ maxDate: maxMonth })
    expect(picker.props("disabledDates")).toEqual({
      ranges: [
        {
          to: moment(minMonth, "MMM YYYY").toDate(),
          from: moment(maxMonth, "MMM YYYY").add(23, "h").add(59, "m").add(59, "s").toDate(),
        },
      ],
    })
    await textField.find(".MomInputText__Input").setValue("Mar 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[0]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Mar 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("May 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[1]).toEqual([
      { isValidDate: true, isValidDateRange: false, value: "May 2021" },
    ])
    await textField.find(".MomInputText__Input").setValue("Jul 2021")
    await textField.vm.$emit("enter")
    expect(component.emitted("input")[2]).toEqual([
      { isValidDate: true, isValidDateRange: true, value: "Jul 2021" },
    ])
  })
})
