import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  alias: {
    "@app": fileURLToPath(new URL("./app", import.meta.url)),
    "@assets": fileURLToPath(new URL("./app/assets", import.meta.url)),
    "@components": fileURLToPath(new URL("./app/components", import.meta.url)),
    "@ui": fileURLToPath(new URL("./app/components/ui", import.meta.url)),
    "@feature": fileURLToPath(
      new URL("./app/components/feature", import.meta.url),
    ),
    "@layout": fileURLToPath(
      new URL("./app/components/layout", import.meta.url),
    ),
    "@composables": fileURLToPath(
      new URL("./app/composables", import.meta.url),
    ),
  },
  modules: ["@nuxt/image", "@nuxt/eslint"],
  css: ["@assets/scss/main.scss"],
  components: [
    {
      path: "@/components/ui",
      pathPrefix: false,
    },
    {
      path: "@/components/feature",
      pathPrefix: false,
    },
    {
      path: "@/components/layout",
      pathPrefix: false,
    },
  ],
  devServer: {
    host: "127.0.0.1",
    port: 3000,
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: true,
        quotes: "single",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``,
        },
      },
    },
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  compatibilityDate: "2025-07-15",
});
