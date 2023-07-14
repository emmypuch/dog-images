// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router";

createApp(App).use(store).use(router).mount("#app");
