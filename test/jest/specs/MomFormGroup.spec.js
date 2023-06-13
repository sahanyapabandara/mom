import { mount, createLocalVue } from "@vue/test-utils"
import MomFormGroup from "@/components/form/MomFormGroup.vue"
import MomFormLabel from "@/components/form/MomFormLabel.vue"
import MomFormMessage from "@/components/form/_MomFormMessage.vue"
import MomInputText from "@/components/input/textfield/MomInputText.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"
import MomModal from "@/components/modal/MomModal.vue"

let component
const localVue = createLocalVue()
localVue.component("MomInputText", MomInputText)
localVue.component("MomInputCheckboxButton", MomInputCheckboxButton)
localVue.component("MomModal", MomModal)
const sizeArray = ["xs", "xs1", "s", "m", "l", "xl", "full"]
const inputStateArray = ["error", "warning"]

describe("MomFormGroup", () => {
  beforeEach(() => {
    component = mount(MomFormGroup, {
      localVue,
      propsData: {
        label: "Label text",
        idForInput: "demo",
      },
      slots: {
        default: '<MomInputText id-for-input="demo" />',
      },
    })
  })

  test("Default form group", () => {
    expect(component.element.tagName.toLowerCase()).toEqual("div")
    expect(component.classes()).toContain("MomFormGroup")
    expect(component.classes()).toContain("MomFormGroup--size-xl")
    expect(component.find(".MomFormGroup__Header").exists()).toBeTruthy()
    let label = component.findComponent(MomFormLabel)
    expect(label.exists()).toBeTruthy()
    expect(label.element.tagName.toLowerCase()).toEqual("label")
    expect(label.classes()).toContain("mom-p-s")
    expect(component.find(".MomFormGroup__Modal").exists()).toBeFalsy()
    expect(component.find(".MomFormGroup__Input").exists()).toBeTruthy()
    let input = component.findComponent(MomInputText)
    expect(input.exists()).toBeTruthy()
    expect(component.find(".MomFormGroup__Footer").exists()).toBeFalsy()
  })

  test("Form group with inline input", async () => {
    component = mount(MomFormGroup, {
      localVue,
      propsData: {
        label: "Label text",
        idForInput: "demo",
        inlineInput: true,
      },
      slots: {
        default: '<MomInputCheckboxButton label="Checkbox label" value="1" />',
      },
    })
    let label = component.findComponent(MomFormLabel)
    expect(label.classes()).toContain("mom-p")
    expect(component.find(".MomFormGroup__InlineInput").exists()).toBeTruthy()
    let input = component.findComponent(MomInputCheckboxButton)
    expect(input.exists()).toBeTruthy()
    expect(component.find(".MomFormGroup__Input").exists()).toBeFalsy()
  })

  test("Fieldset type form group", async () => {
    await component.setProps({ type: "fieldset" })
    expect(component.element.tagName.toLowerCase()).toEqual("fieldset")
    let label = component.findComponent(MomFormLabel)
    expect(label.element.tagName.toLowerCase()).toEqual("legend")
  })

  test("Form label tooltip", async () => {
    await component.setProps({ tooltip: "Tooltip text" })
    let tooltip = component.findComponent(MomTooltip)
    expect(tooltip.exists()).toBeTruthy()
  })

  test("Form label hint text", async () => {
    await component.setProps({ hintText: "hint text" })
    expect(component.find(".MomFormGroup__Footer").exists()).toBeTruthy()
    expect(component.find(".MomFormGroup__Hint").text()).toEqual("hint text")
  })

  test("Disabled form group", async () => {
    await component.setProps({ inputState: "disabled" })
    expect(component.classes()).toContain("MomFormGroup--input-state-disabled")
  })

  describe("Form group modal", () => {
    test("Default form group", () => {
      component = mount(MomFormGroup, {
        localVue,
        propsData: {
          label: "Label",
          idForInput: "demo",
        },
        slots: {
          default: '<MomInputText id-for-input="demo" />',
          modal:
            '<MomModal slot="modal" toggleType="link" toggleText="View guide" toggleIcon="lightbulb" toggleSize="s"><p class="mom-p">Form group modal</p></MomModal>',
        },
      })
      expect(component.find(".MomFormGroup__Modal").exists()).toBeTruthy()
      let modal = component.findComponent(MomModal)
      expect(modal.exists()).toBeTruthy()
    })

    test("Form group with inline input", () => {
      component = mount(MomFormGroup, {
        localVue,
        propsData: {
          label: "Label",
          idForInput: "demo",
          inlineInput: true,
        },
        slots: {
          default: '<MomInputCheckboxButton label="Checkbox label" value="1" />',
          modal:
            '<MomModal slot="modal" toggleType="link" toggleText="View guide" toggleIcon="lightbulb" toggleSize="s"><p class="mom-p">Form group modal</p></MomModal>',
        },
      })
      expect(component.find(".MomFormGroup__Modal").exists()).toBeFalsy()
    })
  })

  describe("Form group size", () => {
    test.each(sizeArray)("Form group size: %p", async size => {
      await component.setProps({ size: size })
      expect(component.classes()).toContain(`MomFormGroup--size-${size}`)
    })
  })

  describe.each(inputStateArray)("Form group input state: %p", inputState => {
    beforeEach(async () => {
      await component.setProps({ inputState: inputState })
      await component.setProps({ messageText: "Message text" })
    })

    test("Default message text", () => {
      expect(component.classes()).toContain(`MomFormGroup--input-state-${inputState}`)
      expect(component.find(".MomFormGroup__Footer").exists()).toBeTruthy()
      let message = component.findComponent(MomFormMessage)
      expect(message.findAll(".MomFormMessage__Item").length).toBe(1)
      expect(message.findAll("p.MomFormMessage__Text").length).toBe(1)
      expect(message.find("p.MomFormMessage__Text").text()).toEqual("Message text")
    })

    test("Html input (message text)", async () => {
      await component.setProps({ messageText: "Message <em>text</em>" })
      let message = component.findComponent(MomFormMessage)
      expect(message.find(".MomFormMessage__Text").find("em").html()).toEqual("<em>text</em>")
    })

    test("Multiple message text", async () => {
      await component.setProps({ messageText: ["Message text 1", "Message text 2"] })
      let message = component.findComponent(MomFormMessage)
      expect(message.findAll(".MomFormMessage__Item").length).toBe(2)
      expect(message.findAll("p.MomFormMessage__Text").length).toBe(2)
    })

    test("List style message text", async () => {
      await component.setProps({
        messageText: ["Message text 1", "Message text 2", "Message text 3"],
      })
      await component.setProps({ messageType: "list" })
      let message = component.findComponent(MomFormMessage)
      expect(message.findAll(".MomFormMessage__Item").length).toBe(1)
      expect(message.findAll("p.MomFormMessage__Text").length).toBe(1)
      expect(message.find("ul.MomFormMessage__Text").findAll("li").length).toBe(2)
    })

    test("Hide hint text", async () => {
      await component.setProps({ hintText: "hint text" })
      expect(component.find(".MomFormGroup__Hint").exists()).toBeFalsy()
    })
  })

  test("Optional form group", async () => {
    await component.setProps({ optional: true })
    let label = component.findComponent(MomFormLabel)
    expect(label.find(".MomFormLabel__OptionalText").exists()).toBeTruthy()
  })
})
