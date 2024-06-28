import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    link: "/",
    icon: 'house-user'
  },
  {
    text: "插件指南",
    link: "/插件指南/",
    icon: 'list',
    children: [
      {
        text: "安装方式",
        link: "/插件指南/插件的使用/install.md",
      },
      {
        text: "使用方式",
        link: "/插件指南/插件的使用/usage.md",
      },
      {
        text: "删除后门",
        link: "/插件指南/插件的使用/removebackdoor.md",
      },
      {
        text: "配置文件",
        link: "/插件指南/插件的使用/config.md",
      },
    ]
  },
  {
    text: "打赏",
    link: "/打赏/",
    icon: 'heart'
  },
]);
