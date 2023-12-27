<script setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore();

const productNew = productStore.categoryNew;
const productVipBento = productStore.categoryVipBento;
const productCurry = productStore.categoryCurry;

</script>

<template>
	<CarouselHero />

	<div class="product">
		<div class="container">
			<div class="product__title-wrap">
				<h2 class="product__title">ЯПОНСКИЕ КОРОБОЧКИ С ЕДОЙ</h2>
				<DecorIcons :quantity="10" class="product__title-decor" />
			</div>
		</div>
	</div>
	<CategoryTitleList class="category-title--index" />
	<Category id="new"
		title="Новинки"
		classModifier="new"
		:productList="productNew" />

	<Reasons />

	<Category id="vip-bento"
		title="VIP-Бенто"
		classModifier="vip-bento"
		:productList="productVipBento" />

	<Category id="curry"
		title="Карри"
		classModifier="curry"
		:productList="productCurry" />

	<Support class="support--index" />
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
	padding: 5px 0 55px;
}
</style>