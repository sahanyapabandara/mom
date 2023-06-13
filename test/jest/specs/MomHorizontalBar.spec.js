import { mount } from "@vue/test-utils"
import MomHorizontalBar from "@/components/charts/MomHorizontalBar.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

let component, barMin, main, chart, lines, items, item
const successPointArray = ["20", "50", "75"]
const maxArray = ["50", "100", "200"]
const chartItems = [
  {
    type: "individual",
    value: 20,
  },
  {
    type: "firm",
    value: 10,
  },
]

describe("MomHorizontalBar", () => {
  beforeEach(() => {
    component = mount(MomHorizontalBar, {
      propsData: {
        items: chartItems,
      },
    })
    main = component.find(".MomHorizontalBar__Main")
    barMin = main.find(".MomHorizontalBar__Min")
    chart = main.find(".MomHorizontalBar__Chart")
    lines = chart.find(".MomHorizontalBar__Lines")
    items = chart.find(".MomHorizontalBar__ChartItems")
    item = items.findAll(".MomHorizontalBar__ChartItem")
  })

  test("Default horizontal bar", () => {
    expect(component.classes()).toContain("MomHorizontalBar")
    let score = component.find(".MomHorizontalBar__Score")
    expect(score.exists()).toBeTruthy()
    expect(score.find(".MomHorizontalBar__Total").exists()).toBeTruthy()
    expect(score.find(".mom-h3").exists()).toBeTruthy()
    expect(score.find(".MomHorizontalBar__Total").text()).toEqual("30")
    expect(score.find(".mom-h3").text()).toEqual("POINTS")
    expect(main.exists()).toBeTruthy()
    expect(barMin.element.style.flexBasis).toBe("0%")
    expect(barMin.text()).toEqual("0")
    expect(
      main.find(".MomHorizontalBar__Value").find(".MomHorizontalBar__SuccessPoint").text()
    ).toEqual("0")
    expect(chart.exists()).toBeTruthy()
    expect(lines.exists()).toBeTruthy()
    expect(lines.find(".MomHorizontalBar__LeftLine").exists()).toBeTruthy()
    expect(lines.find(".MomHorizontalBar__RightLine").exists()).toBeTruthy()
    expect(lines.find(".MomHorizontalBar__SuccessLine").element.style.left).toBe("0%")
    expect(items.exists()).toBeTruthy()
    expect(item.length).toBe(2)
    expect(item.at(0).classes()).toContain("MomHorizontalBar__ChartItem--type-individual")
    expect(item.at(0).element.style.flexBasis).toBe("20%")
    expect(item.at(1).classes()).toContain("MomHorizontalBar__ChartItem--type-firm")
    expect(item.at(1).element.style.flexBasis).toBe("10%")
    expect(main.find(".MomHorizontalBar__Legends").exists()).toBeTruthy()
    let legend = main.find(".MomHorizontalBar__Legends").findAll(".MomHorizontalBar__Legend")
    expect(legend.length).toBe(2)
    let legendIcon = component.findAllComponents(MomIcon)
    expect(legendIcon.length).toBe(2)
    expect(legendIcon.at(0).classes()).toContain("MomHorizontalBar__LegendIcon--type-individual")
    expect(legendIcon.at(1).classes()).toContain("MomHorizontalBar__LegendIcon--type-firm")
  })

  describe("Horizontal bar max", () => {
    test.each(maxArray)("Max: %p", async max => {
      await component.setProps({ max: max })
      switch (max) {
        case "50": {
          expect(item.at(0).element.style.flexBasis).toBe("40%")
          expect(item.at(1).element.style.flexBasis).toBe("20%")
          break
        }
        case "100": {
          expect(item.at(0).element.style.flexBasis).toBe("20%")
          expect(item.at(1).element.style.flexBasis).toBe("10%")
          break
        }
        case "200": {
          expect(item.at(0).element.style.flexBasis).toBe("10%")
          expect(item.at(1).element.style.flexBasis).toBe("5%")
          break
        }
      }
    })
  })

  describe("Horizontal bar success point", () => {
    test.each(successPointArray)("Success point: %p", async successPoint => {
      await component.setProps({ successPoint: successPoint })
      switch (successPoint) {
        case "20": {
          expect(barMin.element.style.flexBasis).toBe("20%")
          expect(main.find(".MomHorizontalBar__SuccessPoint").text()).toEqual("20")
          expect(main.find(".MomHorizontalBar__SuccessPointInfo").exists()).toBeFalsy()
          break
        }
        case "50": {
          expect(barMin.element.style.flexBasis).toBe("50%")
          expect(main.find(".MomHorizontalBar__SuccessPoint").text()).toEqual("50")
          expect(main.find(".MomHorizontalBar__SuccessPointInfo").text()).toEqual(
            "(20 more points to pass)"
          )
          break
        }
        case "75": {
          expect(barMin.element.style.flexBasis).toBe("75%")
          expect(main.find(".MomHorizontalBar__SuccessPoint").text()).toEqual("75")
          expect(main.find(".MomHorizontalBar__SuccessPointInfo").text()).toEqual(
            "(45 more points to pass)"
          )
          break
        }
      }
    })
  })
})
