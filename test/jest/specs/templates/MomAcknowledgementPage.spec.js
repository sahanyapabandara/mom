import { mount, createLocalVue } from "@vue/test-utils"
import MomAcknowledgementPage from "@/templates/MomAcknowledgementPage.vue"
import MomCard from "@/components/card/MomCard.vue"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomBanner from "@/components/alert/MomBanner.vue"

let component, cards
const statusArray = ["success", "info", "error", "warning"]
const localVue = createLocalVue()
localVue.component("MomBanner", MomBanner)
const content = '<div class="content"></div>'
const precard = `<MomBanner variant="page-banner" title="Page banner title" size="full">
                  <p class="mom-p">This is a page banner.</p>
                </MomBanner>`
const additionalCard = '<div class="additional-card-content"></div>'

describe("MomAcknowledgementPage", () => {
  beforeEach(() => {
    component = mount(MomAcknowledgementPage, {
      slots: {
        default: content,
      },
    })
    cards = component.findAllComponents(MomCard)
  })

  test("Default acknowledgement page", () => {
    expect(component.classes()).toContain("MomAcknowledgementPage")
    expect(cards.length).toBe(1)
    expect(cards.at(0).classes()).toContain("MomAcknowledgementPage__ContentCard")
    expect(cards.at(0).find(".MomAcknowledgementPage__Header").exists()).toBeFalsy()
  })

  test("Acknowledgement page title", async () => {
    await component.setProps({ title: "Acknowledgement page title" })
    expect(cards.at(0).find(".MomAcknowledgementPage__Header").exists()).toBeTruthy()
    expect(cards.at(0).find(".MomAcknowledgementPage__Title").text()).toEqual(
      "Acknowledgement page title"
    )
    expect(cards.at(0).findComponent(MomIcon).exists()).toBeTruthy()
    expect(cards.at(0).findComponent(MomIcon).classes()).toContain("MomAcknowledgementPage__Icon")
  })

  test("Acknowledgement page title (Html input)", async () => {
    await component.setProps({ title: "Acknowledgement page <em>title</em>" })
    expect(cards.at(0).find(".MomAcknowledgementPage__Header").exists()).toBeTruthy()
    expect(cards.at(0).find(".MomAcknowledgementPage__Title").find("em").html()).toEqual(
      "<em>title</em>"
    )
  })

  describe("Acknowledgement page status", () => {
    test.each(statusArray)("Status: %p", async status => {
      await component.setProps({ status: status })
      expect(component.classes()).toContain(`MomAcknowledgementPage--status-${status}`)
    })
  })

  test("Print link", async () => {
    await component.setProps({ showPrint: true })
    expect(cards.at(0).findComponent(MomLink).exists()).toBeTruthy()
    expect(cards.at(0).findComponent(MomLink).classes()).toContain("MomAcknowlegdementPage__Link")
    expect(cards.at(0).findComponent(MomLink).find(".MomLink__Text").text()).toEqual(
      "Print acknowledgement page"
    )
    await cards.at(0).findComponent(MomLink).trigger("click")
    expect(component.emitted("print")).toBeTruthy()
  })

  test("Download link", async () => {
    await component.setProps({ showDownload: true })
    expect(cards.at(0).findComponent(MomLink).exists()).toBeTruthy()
    expect(cards.at(0).findComponent(MomLink).classes()).toContain("MomAcknowlegdementPage__Link")
    expect(cards.at(0).findComponent(MomLink).find(".MomLink__Text").text()).toEqual(
      "Download acknowledgement as PDF"
    )
    await cards.at(0).findComponent(MomLink).trigger("click")
    expect(component.emitted("download")).toBeTruthy()
  })

  test("Download link text", async () => {
    await component.setProps({ showDownload: true })
    await component.setProps({ downloadText: "Download" })
    expect(cards.at(0).findComponent(MomLink).exists()).toBeTruthy()
    expect(cards.at(0).findComponent(MomLink).classes()).toContain("MomAcknowlegdementPage__Link")
    expect(cards.at(0).findComponent(MomLink).find(".MomLink__Text").text()).toEqual("Download")
    await cards.at(0).findComponent(MomLink).trigger("click")
    expect(component.emitted("download")).toBeTruthy()
  })

  test("Print link and download link", async () => {
    await component.setProps({ showPrint: true })
    await component.setProps({ showDownload: true })
    expect(cards.at(0).findAllComponents(MomLink).length).toBe(2)
    expect(cards.at(0).findAllComponents(MomLink).at(0).classes()).toContain(
      "MomAcknowlegdementPage__Link"
    )
    expect(cards.at(0).findAllComponents(MomLink).at(1).classes()).toContain(
      "MomAcknowlegdementPage__Link"
    )
    await cards.at(0).findAllComponents(MomLink).at(0).trigger("click")
    expect(component.emitted("download")).toBeTruthy()
    await cards.at(0).findAllComponents(MomLink).at(1).trigger("click")
    expect(component.emitted("print")).toBeTruthy()
  })

  test("Additional card", () => {
    component = mount(MomAcknowledgementPage, {
      propsData: {
        additionalCardTitle: "Card title",
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
    expect(cards.at(1).classes()).toContain("MomAcknowledgementPage__ActionCard")
    expect(cards.at(1).findAllComponents(MomLink).length).toBe(2)
    actions.forEach((action, i) => {
      expect(cards.at(1).findAllComponents(MomLink).at(i).find(".MomLink__Text").text()).toEqual(
        action.text
      )
    })
  })

  test("Pre card", () => {
    component = mount(MomAcknowledgementPage, {
      localVue,
      slots: {
        default: content,
        precard: precard,
      },
    })
    expect(component.findComponent(MomBanner).exists()).toBeTruthy()
  })
})
