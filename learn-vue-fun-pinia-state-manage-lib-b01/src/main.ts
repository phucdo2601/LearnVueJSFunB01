// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { SecretPiniaPlugin } from "./stores/plugins/SecretPiniaPlugin.ts";
import { hasErrorPlugin } from "./stores/plugins/hasErrorPlugin.ts";

const app = createApp(App);

const pinia = createPinia();

pinia.use(SecretPiniaPlugin);

pinia.use(() => ({ hello: "world" }));
pinia.use(({ store }) => {
  store.message = "Hello world!";

  if (process.env.NODE_ENV === "development") {
    // add any keys you set on the store
    store._customProperties.add("message");
  }
});

pinia.use(hasErrorPlugin);

app.use(pinia);
app.use(router);

app.mount("#app");
