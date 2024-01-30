export default defineNuxtConfig({
	devtools: { enabled: true },
	site: {
		url: 'https://bentomaru.ru'
	},
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
		'@nuxtjs/sitemap'
	],
	pinia: {
		storesDirs: ['./stores/**'],
	},
	sitemap: {
		xsl: false,
		exclude: [
		  'project-case-old',
		  'projects-old'
		],
	}
})