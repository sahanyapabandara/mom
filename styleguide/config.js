const path = require("path")
const webpackConfig = require("./webpack.js")
const packageConfig = require("../package.json")
const chalk = require("chalk")

module.exports = {
  title: "MOM Design System",
  version: packageConfig.version,
  theme: {
    maxWidth: "100%",
    sidebarWidth: 250,
    fontFamily: {
      base: ["Open Sans"],
    },
  },
  tocMode: "collapse",
  assetsDir: path.join(__dirname, "./assets/"),
  skipComponentsWithoutExample: false,
  jssThemedEditor: false,
  require: [
    path.join(__dirname, "helper.js"),
    path.join(__dirname, "styles.scss"),
    "prismjs/themes/prism-okaidia.css",
  ],
  pagePerSection: true,
  sections: [
    {
      name: "Introduction",
      content: "./introduction/introduction.md",
      sections: [
        {
          name: "For designers",
          content: "./introduction/fordesigners.md",
        },
        {
          name: "For developers",
          content: "./introduction/fordevelopers.md",
        },
        {
          name: "Component list",
          content: "./introduction/componentlist.md",
        },
      ],
      sectionDepth: 1,
    },
    {
      name: "Styles",
      content: "./styles/styles.md",
      exampleMode: "hide",
      usageMode: "hide",
      sections: [
        {
          name: "Colors",
          content: "./styles/colors.md",
        },
        {
          name: "Typography",
          content: "./styles/typography.md",
        },
        {
          name: "Layout",
          content: "./styles/layout.md",
        },
        {
          name: "Spacing",
          content: "./styles/spacing.md",
        },
        {
          name: "Shadow",
          content: "./styles/shadow.md",
        },
        {
          name: "Z-index",
          content: "./styles/z-index.md",
        },
        {
          name: "CSS utility classes",
          content: "./styles/utilityclasses.md",
        },
      ],
      sectionDepth: 1,
    },
    {
      name: "Components",
      content: "./components/components.md",
      sections: [
        {
          name: "Accordion",
          content: "./components/accordion.md",
          components: "../src/components/accordion/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Alert",
          content: "./components/alert.md",
          components: "../src/components/alert/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Button",
          content: "./components/button.md",
          components: "../src/components/button/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Card",
          content: "./components/card.md",
          components: "../src/components/card/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Charts",
          content: "./components/charts.md",
          components: "../src/components/charts/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Description List",
          content: "./components/descriptionlist.md",
          components: "../src/components/descriptionlist/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Form",
          content: "./components/form.md",
          components: "../src/components/form/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Grid System",
          content: "./components/gridsystem.md",
          components: "../src/components/gridsystem/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Icon",
          content: "./components/icon.md",
          components: "../src/components/icon/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Image",
          content: "./components/image.md",
          components: "../src/components/image/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Input component",
          content: "./components/input.md",
          usageMode: "expand",
          sections: [
            {
              name: "Checkbox",
              content: "./components/input/checkbox.md",
              components: "../src/components/input/checkbox/[A-Z]*.vue",
              usageMode: "expand",
            },
            {
              name: "Date field",
              content: "./components/input/datefield.md",
              components: "../src/components/input/datefield/[A-Z]*.vue",
              usageMode: "expand",
            },
            {
              name: "Radio button",
              content: "./components/input/radiobutton.md",
              components: "../src/components/input/radiobutton/[A-Z]*.vue",
              usageMode: "expand",
            },
            {
              name: "Select field",
              content: "./components/input/selectfield.md",
              components: "../src/components/input/selectfield/[A-Z]*.vue",
              usageMode: "expand",
            },
            {
              name: "Text field",
              content: "./components/input/textfield.md",
              components: "../src/components/input/textfield/[A-Z]*.vue",
              usageMode: "expand",
            },
            {
              name: "Textarea",
              content: "./components/input/textarea.md",
              components: "../src/components/input/textarea/[A-Z]*.vue",
              usageMode: "expand",
            },
          ],
        },
        {
          name: "Language",
          content: "./components/language.md",
          components: "../src/components/language/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Layout",
          content: "./components/layout.md",
          components: "../src/components/layout/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Link",
          content: "./components/link.md",
          components: "../src/components/link/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Modal",
          content: "./components/modal.md",
          components: "../src/components/modal/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Navigation",
          content: "./components/navigation.md",
          components: "../src/components/navigation/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Page",
          content: "./components/page.md",
          components: "../src/components/page/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Spinner",
          content: "./components/spinner.md",
          components: "../src/components/spinner/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Status",
          content: "./components/status.md",
          components: "../src/components/status/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Summary",
          content: "./components/summary.md",
          components: "../src/components/summary/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Tab",
          content: "./components/tab.md",
          components: "../src/components/tab/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Table",
          content: "./components/table.md",
          components: "../src/components/table/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Tooltip",
          content: "./components/tooltip.md",
          components: "../src/components/tooltip/[A-Z]*.vue",
          usageMode: "expand",
        },
        {
          name: "Upload",
          content: "./components/upload.md",
          components: "../src/components/upload/[A-Z]*.vue",
          usageMode: "expand",
        },
      ],
      sectionDepth: 3,
    },
    {
      name: "Templates",
      content: "./templates/templates.md",
      components: "../src/templates/[A-Z]*.vue",
      usageMode: "expand",
      sectionDepth: 1,
    },
    {
      name: "Change log",
      content: "../CHANGELOG.md",
    },
    {
      name: "Styleguide components",
      components: () => ["canvas/[A-Z]*.vue", "utils/[A-Z]*.vue"],
    },
  ],
  sortProps: props => props,
  webpackConfig: webpackConfig,
  styleguideDir: "../dist/styleguide",
  printServerInstructions() {
    console.log(
      chalk.green("\n  Design system is running at: ") + chalk.cyan("  http://localhost:6060/ \n")
    )
  },
  printBuildInstructions(config) {
    console.log(
      chalk.green("\n  Design system documentation build complete.\n\n") +
        chalk.cyan("  Copy the build files from ") +
        chalk.yellow(config.styleguideDir) +
        "\n"
    )
  },
}
