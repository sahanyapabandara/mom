import { mount } from "@vue/test-utils"
import MomPagination from "@/components/navigation/MomPagination.vue"

let component
const totalItems = 100
const itemsPerPageArray = [5, 10, 20, 25, 50]

describe("MomPagination", () => {
  beforeEach(() => {
    component = mount(MomPagination, {
      propsData: {
        totalItems: totalItems,
      },
    })
  })

  test("Default pagination", () => {
    expect(component.classes()).toContain("MomPagination")
    expect(component.find(".MomPagination__Index").text()).toBe(`1 to 10 of ${totalItems}`)
    expect(component.find(".MomPagination__Navigation").exists()).toBeTruthy()
    let buttons = component.find(".MomPagination__Navigation").findAll(".MomPagination__Button")
    expect(buttons.length).toBe(5)
    let prevButton = buttons.at(0)
    let currentButton = buttons.at(1)
    let currentNextButton = buttons.at(2)
    let lastButton = buttons.at(3)
    let nextButton = buttons.at(4)
    expect(prevButton.classes()).toContain("MomPagination__Button--prev")
    expect(prevButton.classes()).toContain("MomPagination__Button--is-disabled")
    expect(prevButton.text()).toContain("Prev")
    expect(currentButton.text()).toEqual("1")
    expect(currentButton.classes()).toContain("MomPagination__Button--current-page")
    expect(currentNextButton.text()).toEqual("2")
    expect(lastButton.text()).toEqual((totalItems / 10).toString())
    expect(nextButton.classes()).toContain("MomPagination__Button--next")
    expect(nextButton.classes()).not.toContain("MomPagination__Button--is-disabled")
    expect(nextButton.text()).toContain("Next")
  })

  describe("Current page", () => {
    for (let i = 1; i <= 10; i++) {
      test(`Current page: ${i}`, async () => {
        await component.setProps({ page: i })
        expect(component.find(".MomPagination__Index").text()).toBe(
          `${(i - 1) * 10 + 1} to ${i * 10} of 100`
        )
        expect(component.find(".MomPagination__Navigation").exists()).toBeTruthy()
        let buttons = component.find(".MomPagination__Navigation").findAll(".MomPagination__Button")
        if (i === 1 || i === 10) {
          expect(buttons.length).toBe(5)
        } else if (i === 2 || i === 9) {
          expect(buttons.length).toBe(6)
        } else {
          expect(buttons.length).toBe(7)
        }
        let prevButton = buttons.at(0)
        let firstButton = buttons.at(1)
        let currentPrevButton = i > 2 ? buttons.at(2) : buttons.at(i - 1)
        let currentButton = i > 2 ? buttons.at(3) : buttons.at(i)
        let currentNextButton = i > 2 ? buttons.at(4) : buttons.at(i + 1)
        let lastButton = buttons.at(buttons.length - 2)
        let nextButton = buttons.at(buttons.length - 1)
        expect(prevButton.classes()).toContain("MomPagination__Button--prev")
        expect(prevButton.text()).toContain("Prev")
        expect(firstButton.text()).toEqual("1")
        if (i !== 1) {
          expect(prevButton.classes()).not.toContain("MomPagination__Button--is-disabled")
          expect(currentPrevButton.text()).toEqual((i - 1).toString())
        } else {
          expect(prevButton.classes()).toContain("MomPagination__Button--is-disabled")
          expect(currentPrevButton.classes()).toContain("MomPagination__Button--prev")
          expect(currentPrevButton.text()).toContain("Prev")
        }
        expect(currentButton.text()).toEqual(i.toString())
        expect(currentButton.classes()).toContain("MomPagination__Button--current-page")
        expect(lastButton.text()).toEqual((totalItems / 10).toString())
        expect(nextButton.classes()).toContain("MomPagination__Button--next")
        expect(nextButton.text()).toContain("Next")
        if (i !== 10) {
          expect(nextButton.classes()).not.toContain("MomPagination__Button--is-disabled")
          expect(currentNextButton.text()).toEqual((i + 1).toString())
        } else {
          expect(nextButton.classes()).toContain("MomPagination__Button--is-disabled")
          expect(currentNextButton.classes()).toContain("MomPagination__Button--next")
          expect(currentNextButton.text()).toContain("Next")
        }
      })
    }
  })

  describe("Items per page", () => {
    test.each(itemsPerPageArray)("Items per page: %p", async itemsPerPage => {
      await component.setProps({ itemsPerPage: itemsPerPage })
      expect(component.find(".MomPagination__Index").text()).toBe(
        `1 to ${itemsPerPage} of ${totalItems}`
      )
      expect(component.find(".MomPagination__Navigation").exists()).toBeTruthy()
      let buttons = component.find(".MomPagination__Navigation").findAll(".MomPagination__Button")
      if (totalItems / itemsPerPage > 2) {
        expect(buttons.length).toBe(5)
      } else {
        expect(buttons.length).toBe(4)
      }
      let prevButton = buttons.at(0)
      let currentButton = buttons.at(1)
      let currentNextButton = buttons.at(2)
      let lastButton = totalItems / itemsPerPage > 2 ? buttons.at(3) : buttons.at(2)
      let nextButton = totalItems / itemsPerPage > 2 ? buttons.at(4) : buttons.at(3)
      expect(prevButton.classes()).toContain("MomPagination__Button--prev")
      expect(prevButton.classes()).toContain("MomPagination__Button--is-disabled")
      expect(prevButton.text()).toContain("Prev")
      expect(currentButton.text()).toEqual("1")
      expect(currentButton.classes()).toContain("MomPagination__Button--current-page")
      expect(currentNextButton.text()).toEqual("2")
      expect(lastButton.text()).toEqual((totalItems / itemsPerPage).toString())
      expect(nextButton.classes()).toContain("MomPagination__Button--next")
      expect(nextButton.classes()).not.toContain("MomPagination__Button--is-disabled")
      expect(nextButton.text()).toContain("Next")
    })
  })

  describe("Click event", () => {
    let buttons

    beforeEach(() => {
      buttons = component.find(".MomPagination__Navigation").findAll(".MomPagination__Button")
    })

    test("Current page", async () => {
      let currentButton = buttons.at(1)
      await currentButton.trigger("click")
      expect(component.emitted("pageClick")).toBeFalsy()
    })

    test("Other pages", async () => {
      let currentNextButton = buttons.at(2)
      await currentNextButton.trigger("click")
      expect(component.emitted("pageClick")).toBeTruthy()
    })

    test("Prev button", async () => {
      let prevButton = buttons.at(0)
      await prevButton.trigger("click")
      expect(component.emitted("pageClick")).toBeFalsy()
    })

    test("Next button", async () => {
      let nextButton = buttons.at(4)
      await nextButton.trigger("click")
      expect(component.emitted("pageClick")).toBeTruthy()
    })
  })
})
