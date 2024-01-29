export default defineNuxtConfig({
	devtools: { enabled: true },
	builder: 'vite',
	vite: {
		build: {
		  modulePreload: false
		}
	},
	modules: ['@pinia/nuxt', 'nuxt-swiper'],
	pinia: {
		storesDirs: ['./stores/**'],
	},
})