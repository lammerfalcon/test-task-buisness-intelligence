import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import styles from "./styles/styles.scss";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(store)
  .use(router)
  .use(styles)
  .use(VueAxios, axios)
  .mount("#app");
