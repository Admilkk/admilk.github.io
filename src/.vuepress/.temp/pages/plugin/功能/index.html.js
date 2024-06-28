import comp from "E:/仓库/plugin-doc/src/.vuepress/.temp/pages/plugin/功能/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugin/%E5%8A%9F%E8%83%BD/\",\"title\":\"功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"功能\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/plugin/%E5%8A%9F%E8%83%BD/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"反击插件\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"功能\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hope\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"功能\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
