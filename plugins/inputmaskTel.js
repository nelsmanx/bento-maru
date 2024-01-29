import Inputmask from "inputmask";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('inputmaskTel', {
		mounted: (el) => Inputmask({
			"mask": "+7 (\\999) 999-99-99",
			"showMaskOnHover": false
		}).mask(el)
	});
});
