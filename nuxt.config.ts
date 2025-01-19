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
  components: [
    "~/components",
    {
      path: "~/components/ui",
      global: true, // sets the path to global so you can use the components in your markdown
      pathPrefix: false,
    },
  ],
})