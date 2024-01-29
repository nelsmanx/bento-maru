<script setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore();
productStore.activeCategory();
productStore.getActiveProducts();
watch(() => productStore.category, () => {
	productStore.getActiveProducts();
})
/*Временный костыль*/
productStore.getBento();
productStore.getCurry();

const { clientWidth } = useClientWidth();

const decorIconsQuantity = computed(() => {
	if (clientWidth.value < 576) return 8;
	return 10;
});

const backgroundDecor = ref(null);
if (backgroundDecor.value) {
	console.log(backgroundDecor.value);
	const handleBackgroundDecor = useBackgroundDecorHandler(backgroundDecor);
	handleBackgroundDecor();
}
</script>

<template>
	<CategoryTitleList v-if="clientWidth < 576" class="category-title--index" />
	<CarouselHero v-if="clientWidth >= 576" />

	<TitleWithDecor
		class="title-w-d--japan-food title-w-d--japan-food-index-top"
		:decorIconsQuantity="decorIconsQuantity">
		ЯПОНСКИЕ КОРОБОЧКИ&nbsp;С&nbsp;ЕДОЙ
	</TitleWithDecor>

	<CarouselHero v-if="clientWidth < 576" />

	<div class="background-decor" ref="backgroundDecor">
		<CategoryTitleList v-if="clientWidth >= 576" class="category-title--index" />
		<Category id="new"
			:title="productStore.category.name"
			:classModifier="productStore.category.alias"
			:category="productStore.category"
			:productList="productStore.products"
		/>

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
	</div>

	<TitleWithDecor v-if="clientWidth < 576"
		class="title-w-d--japan-food title-w-d--japan-food-index-bottom"
		:decorIconsQuantity="decorIconsQuantity">
		ЯПОНСКИЕ КОРОБОЧКИ&nbsp;С&nbsp;ЕДОЙ
	</TitleWithDecor>

	<NavMenu v-if="clientWidth < 576" />
</template>

<style scoped>
.product {
	padding-top: 40px;
}

.product__title-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px
}

.product__title {
	margin-right: 10px;
	font-family: "Century Gothic";
	font-size: 54px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.54px;
	color: var(--accent-color);
}

.product__title-decor {}

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