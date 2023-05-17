// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "moonwitch",
      link: [
        { rel: "icon", type: "image/png", href: "/moon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sono:wght@200;300;400&family=Splash&display=swap",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "check out the projects and favorite tools of the web developer called moonwitch!",
        },
        { property: "og:title", content: "moonwitch portfolio" },
        {
          property: "og:description",
          content:
            "check out the projects and favorite tools of the web developer called moonwitch!",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://moonwitch.art" },
        { property: "og:locale", content: "en_US" },
        { property: "og:image", content: "https://moonwitch.art/moonwitch2.png" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  build: {
    transpile: ["gsap"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/main.scss";',
        },
      },
    },
  },
});
