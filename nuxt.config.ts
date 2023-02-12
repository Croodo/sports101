export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
      },
modules: ['nuxt-icon'],

 app: {
    head: {
htmlAttrs: {
    lang: "hi",
     },
     link: [
     
       { rel: "apple-touch-icon", sizes: "180x180", href: "/ic/apple-touch-icon.png" },
       { rel: "icon", type:"image/png", sizes: "32x32", href: "/ic/favicon-32x32.png" },{ rel: "icon", type:"image/png", sizes:"16x16", href: "/ic/favicon-16x16.png" },{
      rel: "icon",  type: "image/x-icon", href: "/ic/favicon.ico"
    },
     ],
 
}  
  }, 
  	nitro: {
      plugins: ["~/server/api/db/index.ts"],
    //   prerender: {
    //   routes: ['/sitemap.xml']
    // }
  },
})
