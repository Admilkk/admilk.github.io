import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "反击插件",
  description: "反击插件文档",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
