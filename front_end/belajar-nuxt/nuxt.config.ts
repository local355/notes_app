// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    pages: false,
    runtimeConfig: {
        apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
        public: {
            apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        },
    },
    css:['~/assets/css/main.css'],
    postcss:{ 
        plugins:{
            tailwindcss:{},
            autoprefixer:{},
        },
    },
    app: {
  head: {
    link: [
      {
        //rel: "stylesheet",
        //href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      },
    ],
  },
},
})


