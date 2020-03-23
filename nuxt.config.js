export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        type: "text/javascript",
        src: "https://js.api.here.com/v3/3.1/mapsjs-core.js",
        charset: "utf-8"
      },
      {
        type: "text/javascript",
        src: "https://js.api.here.com/v3/3.1/mapsjs-service.js",
        charset: "utf-8"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss", "@/assets/css/bootstrap-grid.min.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/axios-accessor",
    "@/plugins/store-accessor",
    "@/plugins/global-component",
    "@/plugins/vue-trend-chart"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/dotenv"],
  transpileDependencies: ["vuex-module-decorators"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
