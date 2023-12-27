import { useAppStore } from '~/stores/appStore';

export function useAddScrollLock() {
	const appStore = useAppStore();
	const scrollbarWidth = computed(() => appStore.scrollbarWidth);

	return () => {
		appStore.updateScrollbarWidth();
		document.body.classList.add('scroll-lock');
		document.body.style.paddingRight = `${scrollbarWidth.value}px`;
	};
}

export function useRemoveScrollLock() {
	return () => {
		document.body.classList.remove('scroll-lock');
		document.body.style.paddingRight = '';
	};
}
