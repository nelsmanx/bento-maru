export default function useClientWidth() {
	const clientWidth = ref(0);
	const setClientWidth = () => {
		clientWidth.value = document.body.clientWidth;
		// console.log(clientWidth.value);
	};

	if (process.client) {
		setClientWidth();
		window.addEventListener('resize', setClientWidth);
	}

	return {
		clientWidth
	};
}