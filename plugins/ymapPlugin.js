import plugin from 'vue-yandex-maps';
import { defineNuxtPlugin } from 'nuxt/app';

const settings = {
	apiKey: '',
	lang: 'ru_RU',
	coordorder: 'latlong',
	debug: true,
	version: '2.1'
};

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(plugin, settings);
});
