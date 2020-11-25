import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Danger } from "./directives/button.directive";

createApp(App)
  .use(store)
  .use(router)
  .directive("danger", Danger)
  .mount("#app");
