import { mount } from "@vue/test-utils"
import MomInputAutosuggest from "@/components/input/selectfield/MomInputAutosuggest.vue"
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import MomInputDropdown from "@/components/input/selectfield/_MomInputDropdownList.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component, textField, dropdown, dropdownCategories, dropdownOptions
const sizeArray = ["xs", "xs1", "s", "m", "l", "xl", "full"]
const inputStateArray = ["error", "warning"]
const options = [
  {
    label: "Option one",
    description: "Description one",
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
const categories = [
  {
    title: "Group A",
    options: [
      {
        label: "Option one",
        description: "Description one",
        value: "1",
      },
      {
        label: "Option two",
        value: "2",
      },
    ],
  },
  {
    title: "Group B",
    options: [
      {
        label: "Option three",
        description: "Description three",
        value: "3",
      },
      {
        label: "Option four",
        value: "4",
      },
    ],
  },
]

describe("MomInputAutosuggest", () => {
  beforeEach(() => {
    component = mount(MomInputAutosuggest, {
      propsData: {
        name: "autosuggest",
        options: options,
      },
    })
    textField = component.findComponent(MomInputText)
    dropdown = component.findComponent(MomInputDropdown)
  })

  test("Default autosuggest input", () => {
    expect(component.classes()).toContain("MomInputAutosuggest")
    expect(textField.exists()).toBeTruthy()
    expect(textField.find(".MomInputText__Input").attributes("placeholder")).toEqual(
      "Start typing to search..."
    )
    expect(component.findComponent(MomIcon).exists()).toBeTruthy()
    expect(dropdown.exists()).toBeFalsy()
  })

  describe("Autosuggest input size", () => {
    test.each(sizeArray)("Autosuggest input size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomInputAutosuggest--size-${size}`)
    })
  })

  describe("Autosuggest input input state", () => {
    test.each(inputStateArray)("Autosuggest input input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(component.classes()).toContain(`MomInputAutosuggest--input-state-${inputState}`)
    })
  })

  test("Placeholder", async () => {
    await component.setProps({ placeholder: "Placeholder text" })
    expect(textField.find(".MomInputText__Input").attributes("placeholder")).toEqual(
      "Placeholder text"
    )
  })

  test("Disabled autosuggest input", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomInputAutosuggest--input-state-disabled")
    await textField.find(".MomInputText__Input").trigger("click")
    dropdown = component.findComponent(MomInputDropdown)
    expect(dropdown.exists()).toBeFalsy()
  })

  describe("Dropdown", () => {
    beforeEach(async () => {
      await textField.find(".MomInputText__Input").trigger("click")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownCategories = dropdown.findAll(".MomInputDropdownList__Category")
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
    })

    test("Show dropdown", async () => {
      expect(dropdown.exists()).toBeTruthy()
      expect(dropdown.classes()).toContain("MomInputDropdownList")
      expect(dropdownCategories.length).toEqual(0)
      expect(dropdownOptions.length).toEqual(3)

      options.forEach((option, i) => {
        expect(dropdownOptions.at(i).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
          option.label
        )
        if (option.description) {
          expect(
            dropdownOptions.at(i).find(".MomInputDropdownList__OptionDescription").text()
          ).toEqual(option.description)
        } else {
          expect(
            dropdownOptions.at(i).find(".MomInputDropdownList__OptionDescription").exists()
          ).toBeFalsy()
        }
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
      expect(
        dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").find("em").html()
      ).toEqual("<em>one</em>")
      expect(
        dropdownOptions.at(0).find(".MomInputDropdownList__OptionDescription").find("em").html()
      ).toEqual("<em>one</em>")
    })

    test("Select option", async () => {
      await dropdownOptions.at(0).trigger("click")
      expect(dropdown.exists()).toBeFalsy()
      expect(textField.props().value).toEqual("Option one")
      expect(component.emitted("input")[0]).toEqual([
        { label: "Option one", description: "Description one", value: "1" },
      ])
    })
  })

  describe("Dropdown with categories", () => {
    beforeEach(async () => {
      await component.setProps({ useCategory: true, options: categories })
      textField = component.findComponent(MomInputText)
      dropdown = component.findComponent(MomInputDropdown)
      await textField.find(".MomInputText__Input").trigger("click")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownCategories = dropdown.findAll(".MomInputDropdownList__Category")
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
    })

    test("Show dropdown", async () => {
      expect(dropdown.exists()).toBeTruthy()
      expect(dropdown.classes()).toContain("MomInputDropdownList")
      expect(dropdownCategories.length).toEqual(2)
      expect(dropdownOptions.length).toEqual(4)

      categories.forEach((category, i) => {
        expect(dropdownCategories.at(i).text()).toEqual(category.title)
      })
    })

    test("Select option", async () => {
      await dropdownOptions.at(0).trigger("click")
      expect(dropdown.exists()).toBeFalsy()
      expect(textField.props().value).toEqual("Option one")
      expect(component.emitted("input")[0]).toEqual([
        { label: "Option one", description: "Description one", value: "1" },
      ])
    })
  })

  describe("Search option", () => {
    test("Filter text", async () => {
      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )
      expect(
        dropdownOptions
          .at(0)
          .find(".MomInputDropdownList__OptionLabel")
          .find(".MomInputDropdownList__MarkedText")
          .text()
      ).toEqual("one")
    })

    test("Filter length", async () => {
      await component.setProps({ filterLength: 3 })
      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )

      await component.setProps({ filterLength: 5 })
      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      expect(dropdown.exists()).toBeFalsy()
    })

    test("Filter type", async () => {
      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )

      await component.setProps({ filterType: "label" })
      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "No matches found."
      )
    })
  })

  describe("Free text", () => {
    test("Show free text when no exact match", async () => {
      await component.setProps({ allowFreeText: true })

      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(2)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )
      expect(dropdownOptions.at(1).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        'No matches found. Use "one"'
      )

      await textField.vm.$emit("input", "Option one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )

      await textField.vm.$emit("input", "test")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        'No matches found. Use "test"'
      )
    })

    test("Always show free text", async () => {
      await component.setProps({ allowFreeText: "always" })

      await textField.vm.$emit("input", "one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(2)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )
      expect(dropdownOptions.at(1).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        'Use "one"'
      )

      await textField.vm.$emit("input", "Option one")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(2)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        "Option one"
      )
      expect(dropdownOptions.at(1).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        'Use "Option one"'
      )

      await textField.vm.$emit("input", "test")
      dropdown = component.findComponent(MomInputDropdown)
      dropdownOptions = dropdown.findAll(".MomInputDropdownList__Option")
      expect(dropdownOptions.length).toEqual(1)
      expect(dropdownOptions.at(0).find(".MomInputDropdownList__OptionLabel").text()).toEqual(
        'Use "test"'
      )
    })
  })

  test("Autosuggest input hide icon", async () => {
    await component.setProps({ hideIcon: true })
    expect(textField.find(".MomInputText__Input").attributes("placeholder")).toEqual("")
    expect(component.findComponent(MomIcon).exists()).toBeFalsy()
  })
})
