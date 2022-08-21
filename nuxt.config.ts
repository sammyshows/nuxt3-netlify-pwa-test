import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            DOMAIN: process.env.DOMAIN,
            AWS_AUTH_URL: process.env.AWS_AUTH_URL,
            AWS_CLIENT_ID: process.env.AWS_CLIENT_ID
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@kevinmarrec/nuxt-pwa'
    ],

    alias: {
        'amazon-cognito-identity-js': 'amazon-cognito-identity-js/lib'
    },

    pwa: {
        meta: {
            author: '@sammyshows',
            theme_color: '#FFFFFF'
        },

        icon: {
            source: 'static/icon.png'
        },

        workbox: {
            enabled: true
        }
    },

    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
        ],
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap' }
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/big.js@6.2.0/big.min.js' },
            { src: './js/polyfills.js' }
        ]
    }
})
