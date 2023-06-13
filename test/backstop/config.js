const fs = require("fs")

const config = {
  id: "MomDS",
  viewports: [
    {
      label: "mobile",
      width: 480,
      height: 3500,
    },
    {
      label: "tablet",
      width: 768,
      height: 3500,
    },
    {
      label: "desktop",
      width: 1280,
      height: 3500,
    },
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  paths: {
    bitmaps_reference: "test/backstop/bitmaps_reference",
    bitmaps_test: "test/backstop/bitmaps_test",
    engine_scripts: "test/backstop/engine_scripts",
    html_report: "test/backstop/html_report",
    ci_report: "test/backstop/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 1,
  debug: false,
  debugWindow: false,
}

config.scenarios = fs.readdirSync("src/pages/backstop/").map(key => {
  let componentName = key.slice(0, -5)
  return {
    label: componentName,
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: `http://localhost:8080/#/Component/${componentName}`,
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [".snapshot"],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.01,
    requireSameDimensions: true,
  }
})

module.exports = config
