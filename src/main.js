// import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/bootstrap-vue.js";
// require("./plugins/fontawesome");
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
