import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "TETRA MLOps4ECM",
      description: "The webpage for the TETRA MLOps4ECM project",
    }
  },

  theme,

  shouldPrefetch: false,
});
