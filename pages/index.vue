<script setup>
import { useProductStore } from '@/stores/productStore';

useSeoMeta({
	title: 'Бэнто Мару - Доставка Бенто по Южно-Сахалинску'
});

const productStore = useProductStore();
productStore.activeCategory();
productStore.getActiveProducts();
watch(() => productStore.category, () => {
	productStore.getActiveProducts();
});
/*Временный костыль*/
productStore.getBento();
productStore.getCurry();

const { clientWidth } = useClientWidth();


const decorIconsQuantity = computed(() => {
	if (clientWidth.value < 576) return 8;
	return 10;
});

// const backgroundDecor = ref(null);
// if (backgroundDecor.value) {
// 	const handleBackgroundDecor = useBackgroundDecorHandler(backgroundDecor);
// 	handleBackgroundDecor();
// }
</script>

<template>
	<CategoryTitleList v-if="clientWidth < 576" class="category-title--index" />
	<CarouselHero v-if="clientWidth >= 576" />

	<TitleWithDecor
		id="title-w-d-japan-food-index"
		class="title-w-d--japan-food title-w-d--japan-food-index"
		:decorIconsQuantity="decorIconsQuantity">
		ЯПОНСКИЕ КОРОБОЧКИ&nbsp;С&nbsp;ЕДОЙ
	</TitleWithDecor>

	<CarouselHero v-if="clientWidth < 576" />

	<BackgroundDecor>
		<CategoryTitleList v-if="clientWidth >= 576" class="category-title--index" />
		<Category id="new"
			:title="productStore.category.name"
			:classModifier="productStore.category.alias"
			:category="productStore.category"
			:productList="productStore.products" />

		<Reasons v-if="clientWidth >= 576" />

		<Category id="vip-bento"
			title="VIP-Бенто"
			classModifier="vip-bento"
			:productList="productStore.bento" />

		<Category id="curry"
			class="category--without-mb"
			classModifier="curry"
			title="Карри"
			:productList="productStore.curry" />
		<Support class="support--index" />
	</BackgroundDecor>
</template>

<style scoped>
.title-w-d--japan-food-index {
	padding: 40px 0 30px;
}

#title-w-d-japan-food-index:target {
	/* --header-height определяется в компоненте "TheHeader" 
	scroll-margin-top: var(--headerHeight);*/
	scroll-margin-top: 115px;
}

.category-title--index {
	margin-bottom: 50px;
	padding: 0 0 20px;
}

.support--index {
	padding: 40px 0 55px;
}

@media (max-width: 575.98px) {
	.category-title--index {
		padding: 10px 0 0;
		margin-bottom: 0;
	}

	.support--index {
		padding: 25px 0 0;
	}
}
</style>