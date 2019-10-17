import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  BootstrapVue,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
