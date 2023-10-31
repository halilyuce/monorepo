import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  imports: {
    dirs: ["stores"],
  },

  // Nuxt Layers: https://nuxt.com/docs/guide/going-further/layers
  extends: [
    "../apps/first-ui",
    "../apps/second-ui",
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: "Admin Portal",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Common Admin Portal for Products",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [{ src: "/js/env-config.js" }],
    },
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

  css: ["ant-design-vue/dist/antd.variable.less", "~/assets/scss/main.scss"],

  vite: {
    ssr: {
      noExternal: ["ant-design-vue", "dayjs"],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "layout-header-background": "#292a2d",
          },
          javascriptEnabled: true,
        },
        scss: {
          includePaths: ["./assets/scss"],
        },
      },
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname),
        "#app": path.resolve(__dirname, "../node_modules/nuxt/dist/app"),
        "#head": path.resolve(
          __dirname,
          "../node_modules/nuxt/dist/head/runtime"
        ),
        "#imports": path.resolve(__dirname, ".nuxt/imports"),
        "#components": path.resolve(__dirname, ".nuxt/components"),
        "@": path.resolve(__dirname),
        "~~": path.resolve(__dirname),
        "@@": path.resolve(__dirname),
        "#first-ui": path.resolve(__dirname, "../apps/first-ui"),
        "#second-ui": path.resolve(__dirname, "../apps/second-ui"),
        assets: path.resolve(__dirname, "/assets"),
        public: path.resolve(__dirname, "/public"),
        vue: "vue/dist/vue.esm-bundler.js",
        path: require.resolve("path-browserify"),
      },
    },
  },
});
