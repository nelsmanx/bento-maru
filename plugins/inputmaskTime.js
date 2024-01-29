import Inputmask from "inputmask";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('inputmaskTime', {
		mounted: (el) => Inputmask("datetime", {
			inputFormat: "HH:MM",
			placeholder: "__:__",
			max: 24,
			showMaskOnHover: false,
		}).mask(el)
	});
});
