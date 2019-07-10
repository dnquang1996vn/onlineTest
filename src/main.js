import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import authUser from "@/helpers/mixins/authUser";
import "./plugins/element.js";

Vue.mixin(authUser);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
