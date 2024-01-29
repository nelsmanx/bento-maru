export default defineNuxtConfig({
	devtools: { enabled: true },
	builder: 'vite',
	vite: {
		build: {
		  modulePreload: false
		}
	},
	modules: [
		'@pinia/nuxt', 
		'nuxt-swiper',
		'@vueuse/nuxt',
		'@vee-validate/nuxt',
	],
	pinia: {
		storesDirs: ['./stores/**'],
	}
})