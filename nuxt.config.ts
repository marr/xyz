// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  future: {
    compatibilityVersion: 4
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
  shadcn: {
    componentDir: "~/components/ui",
  },
  components: [
    "~/components",
    {
      path: "~/components/ui",
      global: true, // sets the path to global so you can use the components in your markdown
      pathPrefix: false,
    },
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    },
    renderer: {
      alias: {
        button: "Button",
      },
    },
  },
})