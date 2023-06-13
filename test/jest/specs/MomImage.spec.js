import { mount } from "@vue/test-utils"
import MomImage from "@/components/image/MomImage.vue"

let component
const source = "https://via.placeholder.com/400x400.png"

describe("MomImage", () => {
  beforeEach(() => {
    component = mount(MomImage, {
      propsData: {
        source: source,
      },
    })
  })

  test("Default image", () => {
    expect(component.element.tagName.toLowerCase()).toEqual("img")
    expect(component.classes()).toContain("MomImage")
  })

  test("Click event", async () => {
    await component.trigger("click")
    expect(component.emitted("click")).toBeTruthy()
  })
})
