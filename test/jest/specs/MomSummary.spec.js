import { mount } from "@vue/test-utils"
import MomSummary from "@/components/summary/MomSummary.vue"
import MomSummarySubsection from "@/components/summary/MomSummarySubsection.vue"
import MomSummaryItem from "@/components/summary/MomSummaryItem.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component, summarySubsections, summaryItems
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
let subsections = [
  {
    title: "Subsection 1",
    items: [
      {
        label: "Subsection label 1",
        description: "Subsection description 1",
      },
      {
        label: "Subsection label 2",
        description: "Subsection description 2",
      },
    ],
  },
  {
    items: [
      {
        label: "Subsection label 3",
        description: "Subsection description 3",
      },
      {
        label: "Subsection label 4",
        description: "Subsection description 4",
      },
    ],
  },
]

describe("MomSummary", () => {
  beforeEach(() => {
    component = mount(MomSummary, {
      propsData: {
        title: "Summary section title",
        items: items,
      },
    })
  })

  test("Default summary", () => {
    expect(component.classes()).toContain("MomSummary")
    expect(component.find(".MomSummary__Header").exists()).toBeTruthy()
    expect(component.find("h2.MomSummary__Title").text()).toEqual("Summary section title")
    expect(component.findComponent(MomLink).classes()).toContain("MomSummary__EditLink")
    summaryItems = component.findAllComponents(MomSummaryItem)
    expect(summaryItems.length).toBe(items.length)
  })

  test("Summary with subsections", async () => {
    await component.setProps({ useSubsection: true, items: subsections })
    summarySubsections = component.findAllComponents(MomSummarySubsection)
    expect(summarySubsections.length).toBe(subsections.length)
  })

  test("Title (Html input)", async () => {
    await component.setProps({ title: "Summary section <em>title</em>" })
    expect(component.find("h2.MomSummary__Title").find("em").html()).toEqual("<em>title</em>")
  })

  test("Hide edit link", async () => {
    await component.setProps({ showEdit: false })
    expect(component.findComponent(MomLink).exists()).toBeFalsy()
  })

  test("Edit event", async () => {
    await component.findComponent(MomLink).trigger("click")
    expect(component.emitted("edit")).toBeTruthy()
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
