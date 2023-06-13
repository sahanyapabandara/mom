import { mount, createLocalVue } from "@vue/test-utils"
import MomOutcomePage from "@/templates/MomOutcomePage.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component, cards
const localVue = createLocalVue()
localVue.component("MomBanner", MomBanner)
const content = '<div class="content"></div>'
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`
const additionalCard = '<div class="additional-card-content"></div>'

describe("MomOutcomePage", () => {
  beforeEach(() => {
    component = mount(MomOutcomePage, {
      slots: {
        default: content,
      },
    })
    cards = component.findAllComponents(MomCard)
  })

  test("Default outcome page", () => {
    expect(component.classes()).toContain("MomOutcomePage")
    expect(cards.length).toBe(1)
    expect(cards.at(0).classes()).toContain("MomOutcomePage__ContentCard")
    expect(cards.at(0).find("h2").exists()).toBeFalsy()
  })

  test("Outcome page title", async () => {
    await component.setProps({ title: "Outcome page title" })
    expect(cards.at(0).find("h2").text()).toEqual("Outcome page title")
  })

  test("Acknowledgement page title (Html input)", async () => {
    await component.setProps({ title: "Outcome page <em>title</em>" })
    expect(cards.at(0).find("h2").find("em").html()).toEqual("<em>title</em>")
  })

  test("Files", async () => {
    let files = [
      {
        name: "File 1",
        type: "pdf",
      },
      {
        name: "File 2",
        type: "pdf",
      },
    ]
    await component.setProps({ files: files })
    cards = component.findAllComponents(MomCard)
    expect(cards.length).toBe(1)
    expect(cards.at(0).findAllComponents(MomLink).length).toBe(2)
    files.forEach((file, i) => {
      expect(cards.at(0).findAllComponents(MomLink).at(i).find(".MomLink__Text").text()).toEqual(
        file.name
      )
    })
  })

  test("Additional card", () => {
    let additionalFiles = [
      {
        name: "File 1",
        type: "pdf",
      },
      {
        name: "File 2",
        type: "pdf",
      },
    ]

    component = mount(MomOutcomePage, {
      propsData: {
        additionalCardTitle: "Card title",
        additionalFiles: additionalFiles,
      },
      localVue,
      slots: {
        default: content,
        additionalCard: additionalCard,
      },
    })
    cards = component.findAllComponents(MomCard)
    expect(cards.length).toBe(2)
    expect(cards.at(1).find(".MomCard__Title").text()).toEqual("Card title")
    expect(cards.at(1).findAllComponents(MomLink).length).toBe(2)
    additionalFiles.forEach((file, i) => {
      expect(cards.at(1).findAllComponents(MomLink).at(i).find(".MomLink__Text").text()).toEqual(
        file.name
      )
    })
  })

  test("Additional card 2", () => {
    component = mount(MomOutcomePage, {
      propsData: {
        additionalCard2Title: "Card title",
      },
      localVue,
      slots: {
        default: content,
        additionalCard2: additionalCard,
      },
    })
    cards = component.findAllComponents(MomCard)
    expect(cards.length).toBe(2)
    expect(cards.at(1).find(".MomCard__Title").text()).toEqual("Card title")
  })

  test("Next actions", async () => {
    let actions = [
      {
        text: "Action 1",
        href: "#",
      },
      {
        text: "Action 2",
        href: "#",
      },
    ]
    await component.setProps({ actions: actions })
    cards = component.findAllComponents(MomCard)
    expect(cards.length).toBe(2)
    expect(cards.at(1).classes()).toContain("MomOutcomePage__ActionCard")
    expect(cards.at(1).findAllComponents(MomLink).length).toBe(2)
    actions.forEach((action, i) => {
      expect(cards.at(1).findAllComponents(MomLink).at(i).find(".MomLink__Text").text()).toEqual(
        action.text
      )
    })
  })

  test("Pre card", () => {
    component = mount(MomOutcomePage, {
      localVue,
      slots: {
        default: content,
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
