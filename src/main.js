import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles.css";
Vue.config.productionTip = false;

Vue.component("blog-post", {
  // camelCase in JavaScript
  props: ["postTitle"],
  template: "<h1 style='color: red;'>{{ postTitle }}</h1>"
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
