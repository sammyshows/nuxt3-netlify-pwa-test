import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@kevinmarrec/nuxt-pwa'
    ],

    pwa: {
        meta: {
            author: '@zeebats',
            theme_color: '#FFFFFF'
        },

        icon: {
            source: 'static/icon.png'
        },

        manifest: {
            // id: 'https://www.stockwise.app/portfolios/',
            start_url: '/',
            name: 'Stockwise',
            short_name: 'Stockwise',
            description: 'Stockwise brings you the ability to track your portfolios and study companies in one place.',
            lang: 'en',
            display: 'standalone',
            theme_color: '#FFE100',
            background_color: '#FFE100'
        },

        workbox: {
            enabled: true
        }
    }
})
