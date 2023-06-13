import { mount } from "@vue/test-utils"
import MomPageHeader from "@/components/page/MomPageHeader.vue"
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomBreadcrumb from "@/components/navigation/MomBreadcrumb.vue"
import MomLanguageDropdown from "@/components/language/MomLanguageDropdown.vue"
import MomHorizontalLine from "@/components/layout/MomHorizontalLine.vue"
import MomLink from "@/components/link/MomLink.vue"
import MomButton from "@/components/button/MomButton.vue"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomTooltip from "@/components/tooltip/MomTooltip.vue"

let component, layoutWrapper
const breadcrumb = [
  {
    text: "Dashboard",
    href: "#",
  },
  {
    text: "Navigation",
    href: "#",
  },
]
const languages = [
  {
    text: "English",
    code: "en",
  },
  {
    text: "Chinese",
    code: "cn",
  },
  {
    text: "Malay",
    code: "my",
  },
  {
    text: "Tamil",
    code: "ta",
  },
]
const currentLanguage = "en"

describe("MomPageHeader", () => {
  beforeEach(() => {
    component = mount(MomPageHeader)
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
  })

  test("Default page header", () => {
    expect(component.classes()).toContain("MomPageHeader")
    expect(component.find(".MomPageHeader__Masthead").exists()).toBeTruthy()
    expect(component.find(".MomPageHeader__MainWrapper").exists()).toBeTruthy()
    expect(component.find(".MomPageHeader__TitleWrapper").exists()).toBeFalsy()
    expect(component.find(".MomPageHeader__StickyBarWrapper").exists()).toBeFalsy()
    expect(layoutWrapper.length).toBe(2)
    expect(layoutWrapper.at(0).find(".MomPageHeader__MastheadLink").exists()).toBeTruthy()
    expect(layoutWrapper.at(0).find(".MomPageHeader__MastheadDescriptor").text()).toEqual(
      "A Singapore Government Agency Website"
    )
    expect(layoutWrapper.at(1).find(".MomPageHeader__Main").exists()).toBeTruthy()
    expect(layoutWrapper.at(1).find(".MomPageHeader__User").exists()).toBeFalsy()
  })

  describe("User section", () => {
    beforeEach(async () => {
      await component.setProps({ allowLogout: true })
    })

    test("User info and logout", async () => {
      expect(layoutWrapper.at(1).find(".MomPageHeader__User").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__UserInfo").exists()).toBeFalsy()
      expect(layoutWrapper.at(1).findAllComponents(MomLink).length).toBe(2)
      expect(layoutWrapper.at(1).findAllComponents(MomLink).at(0).classes()).toContain(
        "MomPageHeader__LogoutLink"
      )
      expect(layoutWrapper.at(1).findAllComponents(MomLink).at(1).classes()).toContain(
        "MomPageHeader__LogoutLink--tablet"
      )
      await layoutWrapper.at(1).findAllComponents(MomLink).at(1).trigger("click")
      expect(component.emitted("logout")).toBeTruthy()
    })

    test("User name", async () => {
      await component.setProps({ userName: "User name" })
      expect(layoutWrapper.at(1).find(".MomPageHeader__UserInfo").exists()).toBeTruthy()
      expect(component.find(".MomPageHeader__UserName").text()).toEqual("User name")
    })

    test("Company name", async () => {
      await component.setProps({ companyName: "Company name" })
      expect(layoutWrapper.at(1).find(".MomPageHeader__UserInfo").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__Company").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyName").text()).toEqual("Company name")
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyUen").exists()).toBeFalsy()
      expect(layoutWrapper.at(1).findComponent(MomTooltip).exists()).toBeTruthy()
      expect(layoutWrapper.at(1).findComponent(MomTooltip).classes()).toContain(
        "MomPageHeader__CompanyTooltip"
      )
    })

    test("Branch name", async () => {
      await component.setProps({ companyName: "Company name" })
      await component.setProps({ branchName: "Branch name" })
      expect(layoutWrapper.at(1).find(".MomPageHeader__UserInfo").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__Company").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyName").text()).toEqual(
        "Company name/Branch name"
      )
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyUen").exists()).toBeFalsy()
      expect(layoutWrapper.at(1).findComponent(MomTooltip).exists()).toBeTruthy()
      expect(layoutWrapper.at(1).findComponent(MomTooltip).classes()).toContain(
        "MomPageHeader__CompanyTooltip"
      )
    })

    test("Company UEN", async () => {
      await component.setProps({ companyName: "Company name" })
      await component.setProps({ companyUen: "Company UEN" })
      expect(layoutWrapper.at(1).find(".MomPageHeader__UserInfo").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__Company").exists()).toBeTruthy()
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyName").text()).toEqual("Company name")
      expect(layoutWrapper.at(1).find(".MomPageHeader__CompanyUen").text()).toEqual("Company UEN")
    })
  })

  test("Page title", async () => {
    await component.setProps({ title: "Page title" })
    expect(component.find(".MomPageHeader__TitleWrapper").exists()).toBeTruthy()
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
    expect(layoutWrapper.length).toBe(3)
    expect(layoutWrapper.at(2).find(".MomPageHeader__Title").text()).toEqual("Page title")
    expect(layoutWrapper.at(2).findComponent(MomHorizontalLine).exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__Breadcrumb").exists()).toBeFalsy()
  })

  test("Page title (Html input)", async () => {
    await component.setProps({ title: "Page <em>title</em>" })
    expect(component.find(".MomPageHeader__TitleWrapper").exists()).toBeTruthy()
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
    expect(layoutWrapper.length).toBe(3)
    expect(layoutWrapper.at(2).find(".MomPageHeader__Title").find("em").html()).toEqual(
      "<em>title</em>"
    )
    expect(layoutWrapper.at(2).find(".MomPageHeader__Breadcrumb").exists()).toBeFalsy()
  })

  test("Page breadcrumb", async () => {
    await component.setProps({ breadcrumb: breadcrumb })
    expect(component.find(".MomPageHeader__TitleWrapper").exists()).toBeTruthy()
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
    expect(layoutWrapper.length).toBe(3)
    let pageBreadcrumb = layoutWrapper.at(2).findComponent(MomBreadcrumb)
    expect(pageBreadcrumb.exists()).toBeTruthy()
    expect(pageBreadcrumb.classes()).toContain("MomPageHeader__Breadcrumb")
    expect(pageBreadcrumb.findAllComponents(MomLink).length).toBe(2)
    expect(layoutWrapper.at(2).findComponent(MomHorizontalLine).exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__Title").exists()).toBeFalsy()
  })

  test("Page subtitle", async () => {
    await component.setProps({ subtitle: "Page subtitle" })
    expect(component.classes()).toContain("MomPageHeader--has-stickybar")
    expect(component.find(".MomPageHeader__StickyBarWrapper").exists()).toBeTruthy()
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
    expect(layoutWrapper.length).toBe(3)
    expect(layoutWrapper.at(2).find(".MomPageHeader__StickyBar").exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__SubtitleWrapper").exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__Subtitle").text()).toEqual("Page subtitle")
    let tooltip = layoutWrapper.at(2).findComponent(MomTooltip)
    expect(tooltip.exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__SaveInfo").exists()).toBeFalsy()
  })

  test("Page subtitle (Html input)", async () => {
    await component.setProps({ subtitle: "Page <em>subtitle</em>" })
    expect(component.classes()).toContain("MomPageHeader--has-stickybar")
    expect(component.find(".MomPageHeader__StickyBarWrapper").exists()).toBeTruthy()
    layoutWrapper = component.findAllComponents(MomLayoutWrapper)
    expect(layoutWrapper.length).toBe(3)
    expect(layoutWrapper.at(2).find(".MomPageHeader__StickyBar").exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__SubtitleWrapper").exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__Subtitle").find("em").html()).toEqual(
      "<em>subtitle</em>"
    )
    let tooltip = layoutWrapper.at(2).findComponent(MomTooltip)
    expect(tooltip.exists()).toBeTruthy()
    expect(layoutWrapper.at(2).find(".MomPageHeader__SaveInfo").exists()).toBeFalsy()
  })

  describe("Save button", () => {
    let saveButton

    beforeEach(async () => {
      await component.setProps({ hasSaveButton: true })
      layoutWrapper = component.findAllComponents(MomLayoutWrapper)
      saveButton = layoutWrapper.at(2).findComponent(MomButton)
    })

    test("Show button", () => {
      expect(component.classes()).toContain("MomPageHeader--has-stickybar")
      expect(component.find(".MomPageHeader__StickyBarWrapper").exists()).toBeTruthy()
      expect(layoutWrapper.length).toBe(3)
      expect(layoutWrapper.at(2).find(".MomPageHeader__StickyBar").exists()).toBeTruthy()
      expect(layoutWrapper.at(2).find(".MomPageHeader__SaveInfo").exists()).toBeTruthy()
      expect(saveButton.classes()).toContain("MomPageHeader__SaveButton")
      expect(saveButton.find(".MomButton__Text").text()).toEqual("Save draft")
      expect(saveButton.findComponent(MomIcon).exists()).toBeFalsy()
      expect(layoutWrapper.at(2).find(".MomPageHeader__LastSavedTime").exists()).toBeFalsy()
      expect(layoutWrapper.at(2).find(".MomPageHeader__Subtitle").exists()).toBeFalsy()
    })

    test("Save button text", async () => {
      await component.setProps({ saveText: "Download" })
      expect(saveButton.find(".MomButton__Text").text()).toEqual("Download")
    })

    test("Save button icon", async () => {
      await component.setProps({ saveIcon: "download" })
      expect(saveButton.findComponent(MomIcon).exists()).toBeTruthy()
    })

    test("Last saved time", async () => {
      await component.setProps({ lastSavedTime: "05 May 2021, 12:00pm" })
      expect(layoutWrapper.at(2).find(".MomPageHeader__LastSavedTime").text()).toEqual(
        "Last saved at 05 May 2021, 12:00pm"
      )
    })

    test("Disabled save button", async () => {
      await component.setProps({ allowSave: false })
      expect(saveButton.classes()).toContain("MomButton--is-disabled")
    })

    test("Save event", async () => {
      await saveButton.trigger("click")
      expect(component.emitted("save")).toBeTruthy()
    })
  })

  test("Language dropdown", async () => {
    await component.setProps({
      showLanguage: true,
      languages: languages,
      currentLanguage: currentLanguage,
    })
    let languageDropdown = component.findComponent(MomLanguageDropdown)
    expect(languageDropdown.exists()).toBeTruthy()
    let toggleButton = languageDropdown.find(".MomLanguageDropdown__ToggleButton")
    await toggleButton.trigger("click")
    let dropdown = languageDropdown.find(".MomLanguageDropdown__Dropdown")
    expect(dropdown.exists()).toBeTruthy()
    let dropdownOptions = dropdown.findAll(".MomLanguageDropdown__Option")
    await dropdownOptions.at(1).trigger("click")
    dropdown = component.find(".MomLanguageDropdown__Dropdown")
    expect(dropdown.exists()).toBeFalsy()
    expect(languageDropdown.emitted("select")[0]).toEqual(["cn"])
    expect(component.emitted("selectLanguage")[0]).toEqual(["cn"])
  })
})
