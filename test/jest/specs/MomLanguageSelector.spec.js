import { mount } from "@vue/test-utils"
import MomLanguageSelector from "@/components/language/MomLanguageSelector.vue"

let component
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

describe("MomLanguageSelector", () => {
  beforeEach(() => {
    component = mount(MomLanguageSelector, {
      propsData: {
        languages: languages,
      },
    })
  })

  test("Default language options", () => {
    expect(component.classes()).toContain("MomLanguageSelector")
    expect(component.findAll("button").length).toBe(languages.length)
    for (let i = 0; i < languages.length; i++) {
      let language = component.findAll("button").at(i)
      expect(language.classes()).toContain("MomLanguage__Button")
    }
  })

  test("Click event", async () => {
    await component.findAll("button").at(1).trigger("click")
    expect(component.emitted("select")[0]).toEqual(["cn"])
  })
})
