// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'unplugin-icons/nuxt',
    'nuxt-particles',
    '@nuxtjs/seo'
  ],
  // @ts-ignore
  site: {
    url: 'https://www.moonwitch.art',
    name: 'moonwitch webdesign & development',
    description: 'Check out our projects and get in touch for awesome web development and designs!',
    defaultLocale: 'en',
  },
  particles: {
    mode: 'slim'
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "moonwitch",
      link: [
        { rel: "icon", type: "image/png", href: "/moon.png" }
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
      script: [
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        },
      ]
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
