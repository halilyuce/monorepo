import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  imports: {
    dirs: ["stores"],
  },

  modules: [
    "nuxt-windicss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  vite: {
    ssr: {
      noExternal: ["ant-design-vue", "@ant-design/icons-vue", "dayjs"],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
        path: require.resolve("path-browserify"),
        "@": path.resolve(__dirname),
        "@@": path.resolve(__dirname),
        "~": path.resolve(__dirname),
        "~~": path.resolve(__dirname),
        assets: path.resolve(__dirname, "/assets"),
        public: path.resolve(__dirname, "/public"),
        "#portal": path.resolve(__dirname, "../../portal"),
        "#app": path.resolve(__dirname, "../../node_modules/nuxt/dist/app"),
      },
    },
  },
});
