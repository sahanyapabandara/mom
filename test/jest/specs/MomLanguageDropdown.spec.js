import { mount } from "@vue/test-utils"
import MomLanguageDropdown from "@/components/language/MomLanguageDropdown.vue"

let component, toggleButton, dropdown, dropdownOptions
const languages = [
  {
    text: "English",
    code: "en",
  },
  {
    text: "Chinese",
    code: "cn",
  },
  {
    text: "Malay",
    code: "my",
  },
  {
    text: "Tamil",
    code: "ta",
  },
]
const currentLanguage = "en"

describe("MomLanguageDropdown", () => {
  beforeEach(() => {
    component = mount(MomLanguageDropdown, {
      propsData: {
        languages: languages,
        currentLanguage: currentLanguage,
      },
    })
    toggleButton = component.find(".MomLanguageDropdown__ToggleButton")
    dropdown = component.find(".MomLanguageDropdown__Dropdown")
  })

  test("Default language options", () => {
    expect(component.classes()).toContain("MomLanguageDropdown")
    expect(toggleButton.exists()).toBeTruthy()
    expect(toggleButton.find(".MomLanguageDropdown__ToggleText").text()).toEqual("English")
    expect(dropdown.exists()).toBeFalsy()
  })

  describe("Dropdown", () => {
    beforeEach(async () => {
      await toggleButton.trigger("click")
      dropdown = component.find(".MomLanguageDropdown__Dropdown")
      dropdownOptions = dropdown.findAll(".MomLanguageDropdown__Option")
    })

    test("Show dropdown", async () => {
      expect(dropdown.exists()).toBeTruthy()
      expect(dropdownOptions.length).toEqual(4)

      languages.forEach((language, i) => {
        expect(dropdownOptions.at(i).find(".MomLanguageDropdown__OptionLabel").text()).toEqual(
          language.text
        )
        if (language.code === currentLanguage) {
          expect(dropdownOptions.at(i).classes()).toContain(
            "MomLanguageDropdown__Option--is-current"
          )
        }
      })
    })

    test("Html input", async () => {
      const html_languages = [
        {
          text: "<em>English</em>",
          code: "en",
          active: true,
        },
      ]
      await component.setProps({ languages: html_languages })
      expect(
        dropdownOptions.at(0).find(".MomLanguageDropdown__OptionLabel").find("em").html()
      ).toEqual("<em>English</em>")
    })

    test("Select option", async () => {
      await dropdownOptions.at(1).trigger("click")
      dropdown = component.find(".MomLanguageDropdown__Dropdown")
      expect(dropdown.exists()).toBeFalsy()
      expect(component.emitted("select")[0]).toEqual(["cn"])
    })
  })
})
