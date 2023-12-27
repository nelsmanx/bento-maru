// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 	modules: ['@pinia/nuxt','nuxt-swiper'],
	css: [
		'~/assets/css/fonts.css',
		'~/assets/css/style.css'
	],
	devtools: { enabled: true }
})
