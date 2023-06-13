/**
 * System.js creates the Design System Library.
 * It's used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */

import DOMPurify from "dompurify"

window.addEventListener("mousedown", () => {
  document.body.classList.add("remove-outline")
})
window.addEventListener("keydown", () => {
  document.body.classList.remove("remove-outline")
})

// Define contexts to require
const contexts = [
  require.context("@/components/", true, /\.vue$/),
  require.context("@/templates/", true, /\.vue$/),
]

// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const System = {
  install(Vue, options) {
    const production = options && options.production
    const qa_tags = production ? require("../qa/prod.json") : require("../qa/dev.json")
    Vue.prototype.$qa = str => {
      const strArr = str.split(".")
      let qa_tag = qa_tags
      strArr.forEach(value => (qa_tag = qa_tag[value]))
      return qa_tag
    }

    const language = options && options.lang ? options.lang : "en"
    const messages = require("../lang/" + language + ".json")
    Vue.prototype.$lang = str => {
      const strArr = str.split(".")
      let message = messages
      strArr.forEach(value => (message = message[value]))
      return message
    }

    Vue.prototype.$html = str => {
      return DOMPurify.sanitize(str)
    }

    components.forEach(component => Vue.component(component.name, component))
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System)
}

// Finally export as default
export default System
