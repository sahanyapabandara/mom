/**
 *
 * To enable Google Analytics in your project please include this file in your application folder.
 * Please change the configurations below to sync with your Google Ananlytics dashboard
 *
 */

//Please replace with your Google Analytics Measurement Id
//const GA_MEASUREMENT_ID = "G-";
const GA_MEASUREMENT_ID = "G-07NXXFME5G"
//Please add your application name
const APP_NAME = "TEST_WEBSITE"
//Please add your custom events here
const customUserComponentEvents = [
  // Example "LogIn",
]
//Please use these events in your applicatin as required
const customComponentEvents = [
  "TaskInitiation",
  "FeatureUse",
  "AcceleratorSkipButton",
  "InputError",
  "PageLoad",
  "ErrorState",
  "SorryPage",
  "StepCompletion",
  "SaveDraft",
  "FormCompletion",
  "Login",
]

/**
 *
 *
 * ***********************************
 * Please DO NOT change the code below
 * ***********************************
 *
 *
 *
 */
if (GA_MEASUREMENT_ID) {
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, () => {
    console.info("Dx Metrics - Google Analytics loaded", GA_MEASUREMENT_ID)
  })
}
//load
function loadScript(src, callback) {
  var s, r, t
  r = false
  s = document.createElement("script")
  s.type = "text/javascript"
  s.src = src
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState == "complete")) {
      r = true
      callback()
    }
  }
  t = document.getElementsByTagName("script")[0]
  t.parentNode.insertBefore(s, t)
}

//gtag
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
if (GA_MEASUREMENT_ID) {
  gtag("js", new Date())

  gtag("config", GA_MEASUREMENT_ID, {
    page_title: window.location.href,
    page_path: window.location.href,
  })

  const componentEvents = [
    "button1",
    "button2",
    "MomButtonClick",
    "MomInputText",
    "MomInputSelect",
    "MomLinkClick",
    "MomContinueButtonClick",
  ]

  var allCustomEvents = customUserComponentEvents.concat(customComponentEvents)
  var allEvents = componentEvents.concat(allCustomEvents)

  allEvents.forEach(ev => {
    window.addEventListener(ev, function (e) {
      if (e.detail.googleAnalyticsDetails.gtagIsEvent) {
        // console.info(
        //   "Google Analytic Event trigered with",
        //   `${ev}`,
        //   e.detail.googleAnalyticsDetails,
        //   e.detail.timeSpent
        // );
        gtag("event", `${ev}`, {
          app_name: APP_NAME,
          screen_name: e.detail.currentUrl,
          tag_id: e.detail.googleAnalyticsDetails.gtagId,
          event_category: e.detail.googleAnalyticsDetails.gtagEventCategory,
          event_label: e.detail.googleAnalyticsDetails.gtagEventLabel,
          custom_name: e.detail.googleAnalyticsDetails.gtagCustomIdentifier,
          time_spent: e.detail.timeSpent ? e.detail.timeSpent : 0,
          page_loaded_at: e.detail.pageLoadedAt ? e.detail.pageLoadedAt : "",
          initiated_at: Date.now,
        })
      }

      if (e.detail.googleAnalyticsDetails.gtagIsException) {
        // console.info(
        //   "Google Analytic Exception/Error trigered with",
        //   `${e.detail.googleAnalyticsDetails.gEventName}-Error/Exception`,
        //   e.detail.googleAnalyticsDetails
        // );
        gtag("event", `${e.detail.googleAnalyticsDetails.gEventName}-Error/Exception`, {
          app_name: APP_NAME,
          screen_name: e.detail.currentUrl,
          description: e.detail.googleAnalyticsDetails.gtagExceptionDescription,
          fatal: e.detail.googleAnalyticsDetails.gtagIsFatalException, // set to true if the error is fatal
        })
      }
    })
  })
}
