import { mount } from "@vue/test-utils"
import MomInputSelect from "@/components/input/selectfield/MomInputSelect.vue"
import MomInputDropdown from "@/components/input/selectfield/_MomInputDropdownList.vue"

let component, toggleButton, dropdown, dropdownCategories, dropdownOptions
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

describe("MomInputSelect", () => {
  beforeEach(() => {
    component = mount(MomInputSelect, {
      propsData: {
        name: "select",
        options: options,
      },
    })
    toggleButton = component.find(".MomInputSelect__ToggleButton")
    dropdown = component.findComponent(MomInputDropdown)
  })

  test("Default select input", () => {
    expect(component.classes()).toContain("MomInputSelect")
    expect(toggleButton.exists()).toBeTruthy()
    expect(toggleButton.find(".MomInputSelect__ToggleText").exists()).toBeFalsy()
    expect(toggleButton.find(".MomInputSelect__Placeholder").exists()).toBeTruthy()
    expect(dropdown.exists()).toBeFalsy()
  })

  describe("Select input size", () => {
    test.each(sizeArray)("Select input size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomInputSelect--size-${size}`)
    })
  })

  describe("Select input input state", () => {
    test.each(inputStateArray)("Select input input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(component.classes()).toContain(`MomInputSelect--input-state-${inputState}`)
    })
  })

  test("Placeholder", async () => {
    await component.setProps({ placeholder: "Placeholder text" })
    expect(component.find(".MomInputSelect__Placeholder").text()).toEqual("Placeholder text")
  })

  test("Disabled select input", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomInputSelect--input-state-disabled")
    await toggleButton.trigger("click")
    dropdown = component.findComponent(MomInputDropdown)
    expect(dropdown.exists()).toBeFalsy()
  })

  describe("Dropdown", () => {
    beforeEach(async () => {
      await toggleButton.trigger("click")
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
      expect(toggleButton.find(".MomInputSelect__ToggleText").text()).toEqual("Option one")
      expect(toggleButton.find(".MomInputSelect__Placeholder").exists()).toBeFalsy()
      expect(component.emitted("input")[0]).toEqual(["1"])
    })
  })

  describe("Dropdown with categories", () => {
    beforeEach(async () => {
      await component.setProps({ useCategory: true, options: categories })
      toggleButton = component.find(".MomInputSelect__ToggleButton")
      dropdown = component.findComponent(MomInputDropdown)
      await toggleButton.trigger("click")
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
      expect(toggleButton.find(".MomInputSelect__ToggleText").text()).toEqual("Option one")
      expect(toggleButton.find(".MomInputSelect__Placeholder").exists()).toBeFalsy()
      expect(component.emitted("input")[0]).toEqual(["1"])
    })
  })
})
