<script setup>
import { useAppStore } from '~/stores/appStore';

const appStore = useAppStore();
onMounted(() => appStore.updateScrollbarWidth());
</script>

<template>
	<div>
		<TheHeader />
		<main>
			<slot />
		</main>
		<TheFooter />
		<SidebarMenu />
		<ButtonScrollToTop />
	</div>
</template >