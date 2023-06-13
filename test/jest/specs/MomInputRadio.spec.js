import { mount } from "@vue/test-utils"
import MomInputRadio from "@/components/input/radiobutton/MomInputRadio.vue"
import MomInputRadioButton from "@/components/input/radiobutton/MomInputRadioButton.vue"
import MomInputRadioCard from "@/components/input/radiobutton/MomInputRadioCard.vue"

let component, radioButtons
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

describe("MomInputRadio", () => {
  beforeEach(() => {
    component = mount(MomInputRadio, {
      propsData: {
        name: "radio",
        options: options,
      },
    })
    radioButtons = component.findAllComponents(MomInputRadioButton)
  })

  test("Default radio buttons", () => {
    expect(component.classes()).toContain("MomInputRadio")
    expect(component.classes()).toContain("MomInputRadio--variant-vertical")
    expect(radioButtons.length).toEqual(3)
    options.forEach((option, i) => {
      expect(radioButtons.at(i).classes()).toContain("MomInputRadioButton")
      expect(radioButtons.at(i).find(".MomInputRadioButton__LabelText").text()).toEqual(
        option.label
      )
      if (option.description) {
        expect(radioButtons.at(i).find(".MomInputRadioButton__LabelDescription").text()).toEqual(
          option.description
        )
      } else {
        expect(
          radioButtons.at(i).find(".MomInputRadioButton__LabelDescription").exists()
        ).toBeFalsy()
      }
      expect(radioButtons.at(i).find(".MomInputRadioButton__LabelSupporting").exists()).toBeFalsy()
      expect(radioButtons.at(i).find(".MomInputRadioButton__Input").attributes("name")).toEqual(
        "radio"
      )
      expect(radioButtons.at(i).find(".MomInputRadioButton__Input").attributes("value")).toEqual(
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
    expect(radioButtons.at(0).find(".MomInputRadioButton__LabelText").find("em").html()).toEqual(
      "<em>one</em>"
    )
    expect(
      radioButtons.at(0).find(".MomInputRadioButton__LabelDescription").find("em").html()
    ).toEqual("<em>one</em>")
  })

  test("Disabled radio buttons", async () => {
    await component.setProps({ disabled: true })
    for (let i = 0; i < options.length; i++) {
      expect(radioButtons.at(i).classes()).toContain("MomInputRadioButton--is-disabled")
    }
  })

  describe("Radio buttons variant", () => {
    test.each(variantArray)("Radio variants: %p", async variant => {
      await component.setProps({ variant: variant })
      expect(component.classes()).toContain(`MomInputRadio--variant-${variant}`)
    })
  })

  describe("Radio buttons input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      for (let i = 0; i < options.length; i++) {
        expect(radioButtons.at(i).classes()).toContain(
          `MomInputRadioButton--input-state-${inputState}`
        )
      }
    })
  })

  describe("Radio cards", () => {
    beforeEach(async () => {
      await component.setProps({ variant: "card" })
      radioButtons = component.findAllComponents(MomInputRadioCard)
    })

    test("Default radio cards", async () => {
      expect(component.classes()).toContain("MomInputRadio--variant-card")
      expect(radioButtons.length).toEqual(3)

      options.forEach((option, i) => {
        expect(radioButtons.at(i).classes()).toContain("MomInputRadioButton")
        expect(radioButtons.at(i).classes()).toContain("MomInputRadioCard")
        expect(radioButtons.at(i).find(".MomInputRadioButton__LabelText").text()).toEqual(
          option.label
        )
        if (option.description) {
          expect(radioButtons.at(i).find(".MomInputRadioButton__LabelDescription").text()).toEqual(
            option.description
          )
        } else {
          expect(
            radioButtons.at(i).find(".MomInputRadioButton__LabelDescription").exists()
          ).toBeFalsy()
        }
        if (option.supportingText) {
          expect(radioButtons.at(i).find(".MomInputRadioButton__LabelSupporting").text()).toEqual(
            option.supportingText
          )
        } else {
          expect(
            radioButtons.at(i).find(".MomInputRadioButton__LabelSupporting").exists()
          ).toBeFalsy()
        }
        expect(radioButtons.at(i).find(".MomInputRadioButton__Input").attributes("name")).toEqual(
          "radio"
        )
        expect(radioButtons.at(i).find(".MomInputRadioButton__Input").attributes("value")).toEqual(
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
      expect(radioButtons.at(0).find(".MomInputRadioButton__LabelText").find("em").html()).toEqual(
        "<em>one</em>"
      )
      expect(
        radioButtons.at(0).find(".MomInputRadioButton__LabelDescription").find("em").html()
      ).toEqual("<em>one</em>")
      expect(
        radioButtons.at(0).find(".MomInputRadioButton__LabelSupporting").find("em").html()
      ).toEqual("<em>one</em>")
    })

    test("Disabled radio cards", async () => {
      await component.setProps({ disabled: true })
      for (let i = 0; i < options.length; i++) {
        expect(radioButtons.at(i).classes()).toContain("MomInputRadioButton--is-disabled")
      }
    })

    describe("Radio cards input state", () => {
      test.each(inputStateArray)("Input state: %p", async inputState => {
        await component.setProps({ inputState: inputState })
        for (let i = 0; i < options.length; i++) {
          expect(radioButtons.at(i).classes()).toContain(
            `MomInputRadioButton--input-state-${inputState}`
          )
        }
      })
    })
  })

  describe("Select event", () => {
    test("Active radio button", async () => {
      await radioButtons.at(0).find(".MomInputRadioButton__Input").trigger("click")
      expect(radioButtons.at(0).emitted("change")).toBeTruthy()
      expect(component.emitted("input")[0]).toEqual(["1"])
    })

    test("Disabled button", async () => {
      await component.setProps({ disabled: true })
      await radioButtons.at(0).find(".MomInputRadioButton__Input").trigger("click")
      expect(component.emitted("input")).toBeFalsy()
    })
  })
})
