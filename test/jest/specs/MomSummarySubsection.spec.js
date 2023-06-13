import { mount } from "@vue/test-utils"
import MomSummarySubsection from "@/components/summary/MomSummarySubsection.vue"
import MomSummaryItem from "@/components/summary/MomSummaryItem.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component, summaryItems
let items = [
  {
    label: "Label 1",
    description: "Description 1",
  },
  {
    label: "Label 2",
    description: ["Description 2a", "Description 2b"],
  },
]

describe("MomSummarySubsection", () => {
  beforeEach(() => {
    component = mount(MomSummarySubsection, {
      propsData: {
        title: "Subsection title",
        items: items,
      },
    })
    summaryItems = component.findAllComponents(MomSummaryItem)
  })

  test("Default summary subsection", () => {
    expect(component.classes()).toContain("MomSummarySubsection")
    expect(component.find("h3").text()).toEqual("Subsection title")
    expect(summaryItems.length).toBe(items.length)
  })

  test("Title (Html input)", async () => {
    await component.setProps({ title: "Subsection <em>title</em>" })
    expect(component.find("h3").find("em").html()).toEqual("<em>title</em>")
  })

  describe("Summary items", () => {
    let summaryItem
    test.each(items)("Summary item %#", item => {
      summaryItem = summaryItems.at(items.indexOf(item))
      if (item.tooltip) {
        expect(summaryItem.findComponent(MomTooltip).exists()).toBeTruthy()
      } else {
        expect(summaryItem.findComponent(MomTooltip).exists()).toBeFalsy()
      }
      expect(summaryItem.find("p.MomSummaryItem__LabelText").text()).toEqual(item.label)
    })
  })
})
