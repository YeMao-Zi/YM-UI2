import { createApp } from "vue";
import router from "./router";
import "./style.css";
import 'material-icons/iconfont/material-icons.css';
import App from "./App.vue";

createApp(App).use(router).mount("#app");
