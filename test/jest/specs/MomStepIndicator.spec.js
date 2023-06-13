import { mount } from "@vue/test-utils"
import MomStepIndicator from "@/components/navigation/MomStepIndicator.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component
const action = jest.fn()
const steps = [
  {
    label: "Step one",
    action: action,
  },
  {
    label: "Step two",
  },
  {
    label: "Step three",
  },
  {
    label: "Step four",
  },
]

describe("MomStepIndicator", () => {
  beforeEach(() => {
    component = mount(MomStepIndicator, {
      propsData: {
        steps: steps,
      },
    })
  })

  test("Default step indicator", () => {
    expect(component.classes()).toContain("MomStepIndicator")
    expect(component.findAll(".MomStepIndicator__Step").length).toBe(steps.length)
    expect(component.findAllComponents(MomIcon).length).toBe(0)
    expect(component.findAll(".MomStepIndicator__StepNumber").length).toBe(steps.length)
    expect(component.findAllComponents(MomLink).length).toBe(steps.length)
    for (let i = 0; i < steps.length; i++) {
      let step = component.findAll(".MomStepIndicator__Step").at(i)
      let link = component.findAllComponents(MomLink).at(i)
      if (i === 0) {
        expect(step.classes()).toContain("MomStepIndicator__Step--current-step")
      } else {
        expect(step.classes()).toContain("MomStepIndicator__Step--disabled-step")
      }
      expect(link.classes()).toContain("MomStepIndicator__StepLabel")
    }
  })

  test("Click event", async () => {
    await component.setProps({ currentStep: 1 })
    let stepIndicatorLink = component.findAllComponents(MomLink).at(0)
    await stepIndicatorLink.trigger("click")
    expect(stepIndicatorLink.emitted("click")).toBeTruthy()
    expect(action).toHaveBeenCalled()
  })
})

describe("Current step", () => {
  test.each(steps)("Current step: %#", async step => {
    let current = steps.indexOf(step)
    await component.setProps({ currentStep: current })
    expect(component.classes()).toContain("MomStepIndicator")
    expect(component.findAll(".MomStepIndicator__Step").length).toBe(steps.length)
    expect(component.findAllComponents(MomIcon).length).toBe(current)
    expect(component.findAll(".MomStepIndicator__StepNumber").length).toBe(steps.length - current)
    expect(component.findAllComponents(MomLink).length).toBe(steps.length)
    for (let i = 0; i < steps.length; i++) {
      let step = component.findAll(".MomStepIndicator__Step").at(i)
      let link = component.findAllComponents(MomLink).at(i)
      if (i === current) {
        expect(step.classes()).toContain("MomStepIndicator__Step--current-step")
      } else if (i > current) {
        expect(step.classes()).toContain("MomStepIndicator__Step--disabled-step")
      } else if (i < current) {
        expect(step.classes()).toContain("MomStepIndicator__Step--completed-step")
        let icon = component.findAllComponents(MomIcon).at(i)
        expect(icon.classes()).toContain("MomStepIndicator__Icon")
      }
      expect(link.classes()).toContain("MomStepIndicator__StepLabel")
    }
  })
})
