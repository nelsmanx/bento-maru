<script setup>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
	title: {
		type: String,
	},
	classModifier: {
		type: String,
	},
	productList: {
		type: Array,
		required: true
	},
	category: {
		type: Object
	}
});

const classModifier = computed(() => props.classModifier ? `category__title--${props.classModifier}` : '');

const cartStore = useCartStore();
const productStore = useProductStore();
cartStore.loadCart();
const decreaseQuantity = useDecreaseQuantity();
const increaseQuantity = useIncreaseQuantity();
</script>

<template>
	<div class="category">
		<div class="container">
			<h3 v-if="props.title"
				:class="classModifier"
				class="category__title">
				{{ props.title }}
			</h3>

			<div class=" category__list">
				<CardItem class="category__item"
					v-for="product in props.productList" :key="product.id"
					:product="product"
					:product-quantity="cartStore.singleItemQuantity(product.id)"
					:inFav="productStore.isFav(product.id)"
					@increase-quantity="increaseQuantity"
					@decrease-quantity="decreaseQuantity"
					@toggle-fav="productStore.toggleFavorite(product)" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.category {
	margin-bottom: 45px;
}

.category.category--without-mb {
	margin-bottom: 0;
}

.category__title {
	display: flex;
	align-items: baseline;
	margin-bottom: 28px;
	font-family: "Century Gothic";
	font-size: 35px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.35px;
	color: #f9fafb;
}

.category__title::after {
	content: '';
	margin-left: 10px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center bottom;
}

.category__title--new::after {
	width: 21px;
	height: 21px;
	background-image: url("~/assets/icons/category/1.svg");
}

.category__title--vip-bento::after {
	width: 80px;
	height: 21px;
	background-image: url("~/assets/icons/category/1-triple.svg");
}

.category__title--curry::after {
	width: 20px;
	height: 24px;
	background-image: url("~/assets/icons/category/2.svg");
}

.category__list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 42px 60px;
}

@media (max-width: 575.98px) {
	.category {
		margin-bottom: 35px;
	}

	.category__title {
		margin-bottom: 12px;
		font-size: 25px;
	}

	.category__title::after {
		margin-left: 5px;
	}

	.category__title--new::after {
		width: 15px;
		height: 15px;
	}

	.category__title--vip-bento::after {
		width: 59px;
		height: 15px;
	}

	.category__title--curry::after {
		width: 16px;
		height: 19px;
	}

	.category__list {
		grid-template-columns: 1fr;
		gap: 18px;
	}
}
</style>