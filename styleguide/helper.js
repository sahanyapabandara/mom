import Vue from "vue"
import DOMPurify from "dompurify"
Vue.config.productionTip = false
Vue.config.ignoredElements = ["portal"]

const messages = require("../lang/en.json")
Vue.prototype.$lang = str => {
  const strArr = str.split(".")
  let message = messages
  strArr.forEach(value => (message = message[value]))
  return message
}

const qa_tags = require("../qa/prod.json")
Vue.prototype.$qa = str => {
  const strArr = str.split(".")
  let qa_tag = qa_tags
  strArr.forEach(value => (qa_tag = qa_tag[value]))
  return qa_tag
}

Vue.prototype.$html = str => {
  return DOMPurify.sanitize(str)
}

window.addEventListener("mousedown", () => {
  document.body.classList.add("remove-outline")
})
window.addEventListener("keydown", () => {
  document.body.classList.remove("remove-outline")
})
