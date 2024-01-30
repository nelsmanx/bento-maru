<script setup>
import { useAppStore } from '~/stores/appStore';
import { useProductStore } from '~/stores/productStore';

useHead(() => ({
	meta: [
		{ name: 'seovolga', content: '1' },
	],
	link: [
		{ rel: "apple-touch-icon", sizes: "57x57", type: "image/png", href: "/favicons/apple-icon-57x57.png" },
		{ rel: "apple-touch-icon", sizes: "60x60", type: "image/png", href: "/favicons/apple-icon-60x60.png" },
		{ rel: "apple-touch-icon", sizes: "72x72", type: "image/png", href: "/favicons/apple-icon-72x72.png" },
		{ rel: "apple-touch-icon", sizes: "76x76", type: "image/png", href: "/favicons/apple-icon-76x76.png" },
		{ rel: "apple-touch-icon", sizes: "114x114", type: "image/png", href: "/favicons/apple-icon-114x114.png" },
		{ rel: "apple-touch-icon", sizes: "120x120", type: "image/png", href: "/favicons/apple-icon-120x120.png" },
		{ rel: "apple-touch-icon", sizes: "144x144", type: "image/png", href: "/favicons/apple-icon-144x144.png" },
		{ rel: "apple-touch-icon", sizes: "152x152", type: "image/png", href: "/favicons/apple-icon-152x152.png" },
		{ rel: "apple-touch-icon", sizes: "180x180", type: "image/png", href: "/favicons/apple-icon-180x180.png" },
		{ rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/android-icon-192x192.png" },
		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
		{ rel: "icon", type: "image/png", sizes: "96x96", href: "/favicons/favicon-96x96.png" },
		{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
		{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }
	],
}));
const appStore = useAppStore();
const productStore = useProductStore();

appStore.getSiteParams();
productStore.getCategories();

onMounted(() => {
	appStore.updateScrollbarWidth();
	productStore.loadFavorites();
});
</script>

<template>
	<div>
		<TheHeader />
		<main>
			<slot />
		</main>

		<TheFooter />

		<SidebarMenu />

		<ModalWindow
			classModifier="modal--callback"
			:isOpen=appStore.modalCallback.isOpen
			@toggle-modal="appStore.toggleModalWindow('modalCallback')">
			<ModalCallback
				@toggle-modal="appStore.toggleModalWindow('modalCallback')" />
		</ModalWindow>

		<ModalWindow
			classModifier="modal--card"
			:isOpen="appStore.modalCard.isOpen"
			@toggle-modal="appStore.toggleModalWindow('modalCard')">
			<CardModal
				:product="appStore.modalCard.product"
				:isFav="appStore.modalCard.isFav"
				:productQuantity="appStore.modalCard.productQuantity"
				@toggle-modal="appStore.toggleModalWindow('modalCard')" />
		</ModalWindow>

		<modalWindow
			classModifier="modal--delivery"
			:isOpen="appStore.modalDelivery.isOpen"
			@toggle-modal="appStore.toggleModalWindow('modalDelivery')">
			<CartOrderModalDelivery
				:toggler-active-tab="appStore.modalDelivery.togglerActiveTab"
				@toggle-modal="appStore.toggleModalWindow('modalDelivery')" />
		</modalWindow>

		<modalWindow
			classModifier="modal--time"
			:isOpen="appStore.modalTime.isOpen"
			@toggle-modal="appStore.toggleModalWindow('modalTime')">
			<CartOrderModalTime
				:toggler-active-tab="appStore.modalTime.togglerActiveTab"
				@toggle-modal="appStore.toggleModalWindow('modalTime')" />
		</modalWindow>

		<ButtonScrollToTop />
	</div>
</template >