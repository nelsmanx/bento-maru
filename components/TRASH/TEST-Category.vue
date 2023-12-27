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
	}
});

const classModifier = computed(() => props.classModifier ? `category__title--${props.classModifier}` : '');

const cartStore = useCartStore();



const productStore = useProductStore();
// composables/useCartActions
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
					@increase-quantity="increaseQuantity"
					@decrease-quantity="decreaseQuantity"
					@toggle-fav="productStore.toggleFav(product.id)"
					:id="product.id"
					:title="product.title"
					:description="product.description"
					:imagePath="product.imagePath"
					:weight="product.weight"
					:priceActual="product.priceActual"
					:priceOld="product.priceOld"
					:isNew="product.isNew"
					:isFav="product.isFav"
					:quantity="cartStore.singleItemQuantity(product.id)" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.category {
	margin-bottom: 45px;
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
</style>