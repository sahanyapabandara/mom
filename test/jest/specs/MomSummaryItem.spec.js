import { mount } from "@vue/test-utils"
import MomSummaryItem from "@/components/summary/MomSummaryItem.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component

describe("MomSummaryItem", () => {
  beforeEach(() => {
    component = mount(MomSummaryItem, {
      propsData: {
        label: "Label",
        description: "Description",
      },
    })
  })

  test("Default summary item", () => {
    expect(component.classes()).toContain("MomSummaryItem")
    expect(component.find("p.MomSummaryItem__LabelText").text()).toEqual("Label")
    expect(component.find("div.MomSummaryItem__Description").exists()).toBeTruthy()
    expect(component.find("p.MomSummaryItem__DescriptionText").text()).toEqual("Description")
    expect(component.find("ul.MomSummaryItem__DescriptionText").exists()).toBeFalsy()
    expect(component.findComponent(MomTooltip).exists()).toBeFalsy()
  })

  test("Label (Html input)", async () => {
    await component.setProps({ label: "<em>Label</em>" })
    expect(component.find("p.MomSummaryItem__LabelText").find("em").html()).toEqual(
      "<em>Label</em>"
    )
  })

  test("Description array", async () => {
    await component.setProps({ description: ["Description 1", "Description 2"] })
    expect(component.find("p.MomSummaryItem__DescriptionText").exists()).toBeFalsy()
    expect(component.findAll("ul.MomSummaryItem__DescriptionText li").at(0).text()).toEqual(
      "Description 1"
    )
    expect(component.findAll("ul.MomSummaryItem__DescriptionText li").at(1).text()).toEqual(
      "Description 2"
    )
  })

  test("Description type", async () => {
    await component.setProps({ descriptionType: "others" })
    expect(component.classes()).toContain("MomSummaryItem--type-others")
  })

  test("Tooltip", async () => {
    await component.setProps({ tooltip: "Tooltip text" })
    expect(component.findComponent(MomTooltip).exists()).toBeTruthy()
  })

  test("Show bullet", async () => {
    await component.setProps({ showBullet: true })
    expect(component.classes()).toContain("MomSummaryItem--show-bullet")
  })
})
