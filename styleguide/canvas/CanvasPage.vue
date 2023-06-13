<template>
  <div id="CanvasPage">
    <div class="rsg--preview-66">
      <MomPage :verticalCenteredContent="verticalCenteredContent">
        <MomPageHeader
          slot="header"
          :title="title"
          :subtitle="subtitle"
          :breadcrumb="breadcrumb"
          :allowLogout="allowLogout"
          :userName="userName"
          :companyName="companyName"
          :branchName="branchName"
          :companyUen="companyUen"
          :showLanguage="showLanguage"
          :languages="languages"
          :currentLanguage="currentLanguage"
          :hasSaveButton="hasSaveButton"
          :saveText="saveText"
          :saveIcon="saveIcon"
          :lastSavedTime="lastSavedTime"
          :allowSave="allowSave"
        />

        <MomLayoutWrapper>
          <MomCard>
            <p class="mom-p">Main Content</p>
          </MomCard>
        </MomLayoutWrapper>

        <MomPageFooter slot="footer" :lastUpdatedDate="lastUpdatedDate" />
      </MomPage>
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
import ICON_SET from "@/assets/icons/icon-set"

export default {
  name: "CanvasPage",
  data() {
    return {
      title: "Page title",
      subtitle: null,
      breadcrumb: [
        {
          text: "<em>myMOM</em> Portal",
          href: "javascript:void(0);",
        },
        {
          text: "Quick Menu",
          href: "javascript:void(0);",
        },
      ],
      allowLogout: false,
      userName: null,
      companyName: null,
      branchName: null,
      companyUen: null,
      showLanguage: false,
      languages: [],
      currentLanguage: null,
      hasSaveButton: false,
      saveText: null,
      saveIcon: null,
      lastSavedTime: null,
      allowSave: true,
      lastUpdatedDate: null,
      verticalCenteredContent: false,
    }
  },
  computed: {
    languageList() {
      let arr = [null]
      this.languages.forEach(language => {
        arr.push(language.code)
      })
      return arr
    },
    attrList() {
      return [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "subtitle",
          label: "Subtitle",
          type: "text",
        },
        {
          name: "breadcrumb",
          label: "Breadcrumb",
          type: "objectArray",
          attr: [
            { name: "text", label: "Text", type: "text" },
            { name: "href", label: "Href", type: "text" },
            {
              name: "target",
              label: "Target",
              type: "options",
              options: ["", "_self", "_blank", "_parent", "_top"],
            },
          ],
        },
        {
          name: "allowLogout",
          label: "Show user info",
          type: "boolean",
        },
        {
          name: "userName",
          label: "User name",
          type: "text",
          show: this.allowLogout,
        },
        {
          name: "companyName",
          label: "Company Name",
          type: "text",
          show: this.allowLogout,
        },
        {
          name: "branchName",
          label: "Branch Name",
          type: "text",
          show: this.allowLogout,
        },
        {
          name: "companyUen",
          label: "Company UEN",
          type: "text",
          show: this.allowLogout,
        },
        {
          name: "showLanguage",
          label: "Show langugae options",
          type: "boolean",
          show: !this.allowLogout,
        },
        {
          name: "languages",
          label: "Languages",
          type: "objectArray",
          attr: [
            { name: "text", label: "Text", type: "text" },
            { name: "code", label: "Code", type: "text" },
          ],
          show: !this.allowLogout && this.showLanguage,
        },
        {
          name: "currentLanguage",
          label: "Current Language",
          type: "options",
          options: this.languageList,
          show: !this.allowLogout && this.showLanguage,
        },
        {
          name: "hasSaveButton",
          label: "Show save button",
          type: "boolean",
        },
        {
          name: "saveText",
          label: "Save button text",
          type: "text",
          show: this.hasSaveButton,
        },
        {
          name: "saveIcon",
          label: "Save button icon",
          type: "options",
          options: [null].concat(Object.keys(ICON_SET)),
          show: this.hasSaveButton,
        },
        {
          name: "lastSavedTime",
          label: "Last saved time",
          type: "text",
          show: this.hasSaveButton,
        },
        {
          name: "allowSave",
          label: "Enable save button",
          type: "boolean",
          show: this.hasSaveButton,
        },
        {
          name: "lastUpdatedDate",
          label: "Last updated date",
          type: "text",
        },
        {
          name: "verticalCenteredContent",
          label: "Vertically center align content",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-page"
      html += this.verticalCenteredContent ? " vertical-centered-content" : ""
      html += ">\n"

      html += "\t<mom-page-header\n"
      html += '\t\tslot="header"\n'
      html += this.title ? `\t\ttitle="${this.title}"\n` : ""
      html += this.subtitle ? `\t\tsubtitle="${this.subtitle}"\n` : ""
      if (this.breadcrumb && this.breadcrumb.length > 0) {
        html += '\t\t:breadcrumb="[\n'
        this.breadcrumb.forEach(link => {
          html += "\t\t\t{\n"
          html += `\t\t\t\ttext: '${link.text || ""}',\n`
          html += link.href ? `\t\t\t\thref: '${link.href}',\n` : ""
          html += link.target ? `\t\t\t\ttarget: '${link.target}',\n` : ""
          html += "\t\t\t},\n"
        })
        html += '\t\t]"\n'
      }
      if (this.allowLogout) {
        html += "\t\tallow-logout\n"
        html += this.userName ? `\t\tuser-name="${this.userName}"\n` : ""
        html += this.companyName ? `\t\tcompany-name="${this.companyName}"\n` : ""
        html += this.branchName ? `\t\tbranch-name="${this.branchName}"\n` : ""
        html += this.companyUen ? `\t\tcompany-uen="${this.companyUen}"\n` : ""
      } else if (this.showLanguage) {
        html += "\t\tshow-language\n"
        if (this.languages && this.languages.length > 0) {
          html += '\t\t:languages="[\n'
          this.languages.forEach(language => {
            html += "\t\t\t{\n"
            html += `\t\t\t\ttext: '${language.text || ""}',\n`
            html += `\t\t\t\tcode: '${language.code || ""}',\n`
            html += "\t\t\t},\n"
          })
          html += '\t\t]"\n'
        }
        html += this.currentLanguage ? `\t\tcurrent-language="${this.currentLanguage}"\n` : ""
      }
      if (this.hasSaveButton) {
        html += "\t\thas-save-button\n"
        html += this.saveText ? `\t\tsave-text="${this.saveText}"\n` : ""
        html += this.saveIcon ? `\t\tsave-icon="${this.saveIcon}"\n` : ""
        html += this.lastSavedTime ? `\t\tlast-saved-time="${this.lastSavedTime}"\n` : ""
        html += !this.allowSave ? '\t\t:allow-save="false"\n' : ""
      }
      html += "\t/>\n\n"

      html += "\t<mom-layout-wrapper>\n"
      html += "\t\t<mom-card>\n"
      html += '\t\t\t<p class="mom-p">Main content</p>\n'
      html += "\t\t</mom-card>\n"
      html += "\t</mom-layout-wrapper>\n\n"

      html += "\t<mom-page-footer"
      html += this.lastUpdatedDate ? ` last-updated-date="${this.lastUpdatedDate}"` : ""

      html += " />\n"

      html += "</mom-page>"

      return html
    },
  },
}
</script>
