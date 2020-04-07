import { registerApplication, start } from "single-spa";

registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => (location.pathname === "/react" ? false : true)
);

registerApplication(
  "react",
  () => import("./src/react/react.app.js"),
  () => (location.pathname === "/vue" ? false : true)
);

start();
