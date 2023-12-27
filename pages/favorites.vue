<script setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore();
const hasProductInFav = computed(() => productStore.hasProductInFav);
const productsInFav = computed(() => productStore.productsInFav);

</script>

<template>
	<CategoryTitleList class="category-title--fav" />

	<div class="favorites">
		<div class="container">
			<h1 v-if="hasProductInFav" class="favorites__title">Товары в избранном</h1>
			<h1 v-else class="favorites__title">У вас нет товаров в избранном</h1>
		</div>
	</div>

	<Category :productList="productsInFav" />
	<Support class="support--fav" />
</template>

<style scoped>
.favorites {
	padding: 35px 0 30px;
}

.favorites__title {
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}
</style>

<style>
.category-title--fav {
	padding: 10px 0 38px;
}

.support--fav {
	padding: 0px 0 70px;
}
</style>