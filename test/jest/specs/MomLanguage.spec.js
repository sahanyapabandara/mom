import { mount } from "@vue/test-utils"
import MomLanguage from "@/components/language/MomLanguage.vue"
import MomLink from "@/components/link/MomLink.vue"

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
const currentLanguage = "en"

describe("MomLanguage", () => {
  beforeEach(() => {
    component = mount(MomLanguage, {
      propsData: {
        languages: languages,
        currentLanguage: currentLanguage,
      },
    })
  })

  test("Default language options", () => {
    expect(component.classes()).toContain("MomLanguage")
    expect(component.findAllComponents(MomLink).length).toBe(languages.length)
    for (let i = 0; i < languages.length; i++) {
      let language = component.findAllComponents(MomLink).at(i)
      expect(language.classes()).toContain("MomLanguage__Language")
      if (language.code === currentLanguage) {
        expect(language.classes()).toContain("MomLanguage__Language--is-current")
      }
    }
  })

  test("Click event", async () => {
    await component.findAllComponents(MomLink).at(1).trigger("click")
    expect(component.emitted("select")[0]).toEqual(["cn"])
  })
})
