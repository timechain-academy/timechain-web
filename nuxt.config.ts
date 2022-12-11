// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      modules: [
            '@nuxt/content',
            '@nuxtjs/tailwindcss',
            '@nuxt/image-edge',
            '@nuxtjs/color-mode',
      ],
      content: { 
            highlight: {
                  theme: {
                        default: 'one-dark-pro', 
                  },
               },
            documentDriven: true
            // https://content.nuxtjs.org/api/configuration
      },
      css: ['@/assets/base.css'],
      colorMode: {    
            preference: 'dark', // default value of $colorMode.preference    
            fallback: 'light', // fallback value if not system preference found  
            hid: 'nuxt-color-mode-script',    
            globalName: '__NUXT_COLOR_MODE__',    
            componentName: 'ColorScheme',    
            classPrefix: '',   
            classSuffix: '-mode',    
            storageKey: 'nuxt-color-mode' 
      }, 
      image: {    // The screen sizes predefined by `@nuxt/image`:   
             screens: {      
                  xs: 320,      
                  sm: 640,      
                  md: 768,      
                  lg: 1024,      
                  xl: 1280,      
                  xxl: 1536,      
                  '2xl': 1536    
            },  
      },
})
