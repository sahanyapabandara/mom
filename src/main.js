import Vue from "vue"
import App from "@/App"
import router from "@/router"
import Meta from "vue-meta"
import PortalVue from "portal-vue"
import "@babel/polyfill"
import "isomorphic-fetch"
import DesignSystem from "@/system"

Vue.use(DesignSystem, { production: true, lang: "en" })
Vue.use(PortalVue)
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
})
