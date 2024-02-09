<script setup>
import { useAppStore } from '~/stores/appStore';
import { emitter } from './services/MittService';

const appStore = useAppStore();
const router = useRouter();

appStore.init();

const isMobileScreen = useMediaQuery('(max-width: 575.98px)');
provide('isMobileScreen', isMobileScreen);

router.beforeEach(() => {
	emitter.emit('loader', 1);
	setTimeout(() => {
		emitter.emit('loader', -1);
	}, 500);
	return true;
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage :key="$route.fullPath" />
	</NuxtLayout>
</template>

<style src="~/assets/css/fonts.css"></style>
<style src="~/assets/css/style.css"></style>