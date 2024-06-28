import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.37_vuepress@2.0.0-rc.14/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.37_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/Administrator/Desktop/Doc/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});