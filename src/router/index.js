import Vue from "vue"
import VueRouter from "vue-router"
import Index from "@/pages/Index"
Vue.use(VueRouter)

let backstop = require.context("@/pages/backstop/", true, /^\.\/[a-zA-Z0-9/]*\.html$/)
let backstopPages = backstop.keys().map(key => {
  let componentName = key.slice(2, -5)
  return {
    path: `/Component/${componentName}`,
    name: componentName,
    component: { template: backstop(key) },
  }
})

let demo = require.context("@/pages/demo/", true, /^\.\/[a-zA-Z0-9/]*\.vue$/)
let demoPages = demo.keys().map(key => {
  let pageName = key.slice(2, -4)
  return {
    path: `/Demo/${pageName}`,
    name: pageName,
    component: demo(key).default,
  }
})

let pages = [
  {
    path: "*",
    name: "Index",
    component: Index,
  },
]
  .concat(backstopPages)
  .concat(demoPages)

export default new VueRouter({
  routes: pages,
})
