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
		'@nuxtjs/sitemap',
		[
			'yandex-metrika-module-nuxt3',
			{
			  id: '95849402',
			  webvisor: true,
			  consoleLog: false,
			  clickmap: true,
			  useCDN: false,
			  trackLinks: true,
			  accurateTrackBounce: true,
			}
		]
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
	},
	// plugins: [
	// 	{ src: '~/plugins/ymapPlugin.js',  mode: 'client' }
	// ]
})