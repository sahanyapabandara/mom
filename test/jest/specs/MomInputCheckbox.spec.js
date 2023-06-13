import { mount } from "@vue/test-utils"
import MomInputCheckbox from "@/components/input/checkbox/MomInputCheckbox.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomInputCheckboxCard from "@/components/input/checkbox/MomInputCheckboxCard.vue"

let component, checkboxes
const variantArray = ["vertical", "horizontal"]
const inputStateArray = ["error", "warning"]
const options = [
  {
    label: "Option one",
    description: "Description one",
    supportingText: "Supporting one",
    value: "1",
  },
  {
    label: "Option two",
    description: "Description two",
    value: "2",
  },
  {
    label: "Option three",
    value: "3",
  },
]

describe("MomInputCheckbox", () => {
  beforeEach(() => {
    component = mount(MomInputCheckbox, {
      propsData: {
        name: "checkbox",
        options: options,
      },
    })
    checkboxes = component.findAllComponents(MomInputCheckboxButton)
  })

  test("Default checkboxes", () => {
    expect(component.classes()).toContain("MomInputCheckbox")
    expect(component.classes()).toContain("MomInputCheckbox--variant-vertical")
    expect(checkboxes.length).toEqual(3)
    options.forEach((option, i) => {
      expect(checkboxes.at(i).classes()).toContain("MomInputCheckboxButton")
      expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelText").text()).toEqual(
        option.label
      )
      if (option.description) {
        expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelDescription").text()).toEqual(
          option.description
        )
      } else {
        expect(
          checkboxes.at(i).find(".MomInputCheckboxButton__LabelDescription").exists()
        ).toBeFalsy()
      }
      expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelSupporting").exists()).toBeFalsy()
      expect(checkboxes.at(i).find(".MomInputCheckboxButton__Input").attributes("name")).toEqual(
        "checkbox"
      )
      expect(checkboxes.at(i).find(".MomInputCheckboxButton__Input").attributes("value")).toEqual(
        option.value
      )
    })
  })

  test("Html input", async () => {
    const html_options = [
      {
        label: "Option <em>one</em>",
        description: "Description <em>one</em>",
        value: "1",
      },
    ]
    await component.setProps({ options: html_options })
    expect(checkboxes.at(0).find(".MomInputCheckboxButton__LabelText").find("em").html()).toEqual(
      "<em>one</em>"
    )
    expect(
      checkboxes.at(0).find(".MomInputCheckboxButton__LabelDescription").find("em").html()
    ).toEqual("<em>one</em>")
  })

  test("Disabled checkboxes", async () => {
    await component.setProps({ disabled: true })
    for (let i = 0; i < options.length; i++) {
      expect(checkboxes.at(i).classes()).toContain("MomInputCheckboxButton--is-disabled")
    }
  })

  describe("Checkboxes variant", () => {
    test.each(variantArray)("Checkbox variants: %p", async variant => {
      await component.setProps({ variant: variant })
      expect(component.classes()).toContain(`MomInputCheckbox--variant-${variant}`)
    })
  })

  describe("Checkboxes input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      for (let i = 0; i < options.length; i++) {
        expect(checkboxes.at(i).classes()).toContain(
          `MomInputCheckboxButton--input-state-${inputState}`
        )
      }
    })
  })

  describe("Checkbox cards", () => {
    beforeEach(async () => {
      await component.setProps({ variant: "card" })
      checkboxes = component.findAllComponents(MomInputCheckboxCard)
    })

    test("Default checkbox cards", async () => {
      expect(component.classes()).toContain("MomInputCheckbox--variant-card")
      expect(checkboxes.length).toEqual(3)

      options.forEach((option, i) => {
        expect(checkboxes.at(i).classes()).toContain("MomInputCheckboxButton")
        expect(checkboxes.at(i).classes()).toContain("MomInputCheckboxCard")
        expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelText").text()).toEqual(
          option.label
        )
        if (option.description) {
          expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelDescription").text()).toEqual(
            option.description
          )
        } else {
          expect(
            checkboxes.at(i).find(".MomInputCheckboxButton__LabelDescription").exists()
          ).toBeFalsy()
        }
        if (option.supportingText) {
          expect(checkboxes.at(i).find(".MomInputCheckboxButton__LabelSupporting").text()).toEqual(
            option.supportingText
          )
        } else {
          expect(
            checkboxes.at(i).find(".MomInputCheckboxButton__LabelSupporting").exists()
          ).toBeFalsy()
        }
        expect(checkboxes.at(i).find(".MomInputCheckboxButton__Input").attributes("name")).toEqual(
          "checkbox"
        )
        expect(checkboxes.at(i).find(".MomInputCheckboxButton__Input").attributes("value")).toEqual(
          option.value
        )
      })
    })

    test("Html input", async () => {
      const html_options = [
        {
          label: "Option <em>one</em>",
          description: "Description <em>one</em>",
          supportingText: "Supporting <em>one</em>",
          value: "1",
        },
      ]
      await component.setProps({ options: html_options })
      expect(checkboxes.at(0).find(".MomInputCheckboxButton__LabelText").find("em").html()).toEqual(
        "<em>one</em>"
      )
      expect(
        checkboxes.at(0).find(".MomInputCheckboxButton__LabelDescription").find("em").html()
      ).toEqual("<em>one</em>")
      expect(
        checkboxes.at(0).find(".MomInputCheckboxButton__LabelSupporting").find("em").html()
      ).toEqual("<em>one</em>")
    })

    test("Disabled checkbox cards", async () => {
      await component.setProps({ disabled: true })
      for (let i = 0; i < options.length; i++) {
        expect(checkboxes.at(i).classes()).toContain("MomInputCheckboxButton--is-disabled")
      }
    })

    describe("Checkbox cards input state", () => {
      test.each(inputStateArray)("Input state: %p", async inputState => {
        await component.setProps({ inputState: inputState })
        for (let i = 0; i < options.length; i++) {
          expect(checkboxes.at(i).classes()).toContain(
            `MomInputCheckboxButton--input-state-${inputState}`
          )
        }
      })
    })
  })

  describe("Select event", () => {
    test("Active radio button", async () => {
      await checkboxes.at(0).find(".MomInputCheckboxButton__Input").trigger("click")
      expect(checkboxes.at(0).emitted("change")).toBeTruthy()
      expect(component.emitted("input")[0]).toEqual([["1"]])
      await checkboxes.at(1).find(".MomInputCheckboxButton__Input").trigger("click")
      expect(checkboxes.at(1).emitted("change")).toBeTruthy()
      expect(component.emitted("input")[1]).toEqual([["1", "2"]])
    })

    test("Disabled button", async () => {
      await component.setProps({ disabled: true })
      await checkboxes.at(0).find(".MomInputCheckboxButton__Input").trigger("click")
      expect(component.emitted("input")).toBeFalsy()
    })
  })
})
