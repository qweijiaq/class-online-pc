import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 响应式 ref 省略 .value 处理数据，简化代码
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
  },
  // 配置 UnoCSS
  modules: ["@unocss/nuxt", "@pinia/nuxt"],
  unocss: {
    uno: true, // 激活unocss
    attributify: true, // 激活属性化模式
    shortcuts: [
      // 自定义快捷方式
      { flexc: "flex items-center justify-center" },
      { flexb: "flex items-center justify-between" },
      { btn: "rounded-5px text-center cursor-pointer select-none" },
      { "text-btn": "text-center cursor-pointer select-none" },
    ],
    rules: [
      //自定义规则
      [
        /^truncate-(\d+)$/,
        ([, d]) => ({
          overflow: "hidden",
          display: "-webkit-box",
          "text-overflow": "ellipsis",
          "-webkit-line-clamp": d,
          "-webkit-box-orient": "vertical",
        }),
      ],
      [
        /^center-text-(\d+)$/,
        ([, d]) => ({
          height: `${d}px`,
          "align-items": "center",
          "line-height": `${Number(d) - 2}px`,
        }),
      ],
      [
        /^wh-(\d+)$/,
        ([, d]) => ({
          width: `${d}px`,
          height: `${d}px`,
        }),
      ],
    ],
  },
});
