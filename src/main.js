import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import Vuex from "vuex";
Vue.use(Vuex);

console.log("store", store.state);
new Vue({
  render: (h) => h(App),
  store: store //new Vuex.Store({ state: {}, mutations: {} })
}).$mount("#app");
