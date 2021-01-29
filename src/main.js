import Vue from "vue";

import "./plugins/bootstrap-vue";
import "./plugins/font-awesome";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery";
import "popper.js";
import "bootstrap";
import "../src/assets/App.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
