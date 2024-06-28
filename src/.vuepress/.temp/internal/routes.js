export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/%E6%89%93%E8%B5%8F/", { loader: () => import(/* webpackChunkName: "打赏_index.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/打赏/index.html.js"), meta: {"t":"打赏"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E5%8A%9F%E8%83%BD/%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8.html", { loader: () => import(/* webpackChunkName: "插件指南_功能_功能列表.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/功能/功能列表.html.js"), meta: {"t":"插件功能介绍"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/config.html", { loader: () => import(/* webpackChunkName: "插件指南_插件的使用_config.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/插件的使用/config.html.js"), meta: {"t":"配置文件"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/install.html", { loader: () => import(/* webpackChunkName: "插件指南_插件的使用_install.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/插件的使用/install.html.js"), meta: {"t":"安装插件"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/removebackdoor.html", { loader: () => import(/* webpackChunkName: "插件指南_插件的使用_removebackdoor.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/插件的使用/removebackdoor.html.js"), meta: {"t":"删除后门"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/usage.html", { loader: () => import(/* webpackChunkName: "插件指南_插件的使用_usage.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/插件的使用/usage.html.js"), meta: {"t":"插件使用方式"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E5%8A%9F%E8%83%BD/", { loader: () => import(/* webpackChunkName: "插件指南_功能_index.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/功能/index.html.js"), meta: {"t":"功能"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "插件指南_index.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/index.html.js"), meta: {"t":"插件指南"} }],
  ["/%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8D%97/%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/", { loader: () => import(/* webpackChunkName: "插件指南_插件的使用_index.html" */"E:/仓库/plugin-doc/src/.vuepress/.temp/pages/插件指南/插件的使用/index.html.js"), meta: {"t":"插件的使用"} }],
]);
