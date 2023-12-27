<script setup>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const productStore = useProductStore();
const productTryAlso = productStore.categoryTryAlso;

const decreaseQuantity = useDecreaseQuantity();
const increaseQuantity = useIncreaseQuantity();

const toastIsVisible = ref(false);
</script>

<template>
	<CategoryTitleList class="category-title--cart" />

	<section class="cart">
		<div class="container">
			<div class="cart__row-1">
				<template v-if="cartStore.totalItemsQuantity">
					<h1 class="cart__title">ВАШ ЗАКАЗ ({{ cartStore.totalItemsQuantity }})</h1>
					<button @click="cartStore.clearProductsAndAddons"
						class="cart__button-clear">Очистить корзину
					</button>
				</template>
				<h1 v-else class="cart__title">Ваша корзина пуста</h1>
			</div>
			<div v-if="cartStore.totalItemsQuantity" class="cart__inner">
				<div class="cart__product">
					<ul class="cart__product-list">
						<CartProductItem v-for="product in cartStore.productItems" :key="product.id"
							@increase-quantity="increaseQuantity"
							@decrease-quantity="decreaseQuantity"
							:productId="product.id"
							:productQuantity="cartStore.singleItemQuantity(product.id)" />
					</ul>
				</div>

				<div v-if="cartStore.hasAddonItems" class="cart__addon">
					<h2 class="cart__addon-title">Добавки:</h2>
					<ul class="cart__addon-list">
						<CartAddonItem v-for="addon in cartStore.addonItems" :key="addon.id"
							@increase-quantity="increaseQuantity"
							@decrease-quantity="decreaseQuantity"
							:addonId="addon.id"
							:addonQuantity="cartStore.singleItemQuantity(addon.id)" />
					</ul>
					<button @click="cartStore.clearAddons"
						class="cart-addon-item__button-clear"></button>
				</div>

				<CartOrder class="cart__order" />
			</div>

		</div>
	</section>

	<Category
		title="Попробуйте также"
		:productList="productTryAlso" />

	<Support class="support--cart" />

	<CartToast v-if="toastIsVisible" class="cart__toast"
		title="Спасибо за заказ!"
		subtitle="Заказ будет доставлен в течении"
		subtitleAccent="60 минут" />
</template>

<style scoped>
.cart {
	padding: 35px 0 120px;
}

.cart__row-1 {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 24px;
}

.cart__title {
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}

.cart__button-clear {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.16px;
	color: #fff;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.cart__button-clear::before {
	content: '';
	width: 12px;
	height: 12px;
	margin-right: 8px;
	background: url("~/assets/icons/close.svg") center/contain no-repeat;
}

.cart__inner {
	display: grid;
	grid-template-areas:
		"product order"
		"addon order";
	grid-template-columns: 1fr 430px;
	grid-template-rows: auto 1fr;
	align-items: start;
	gap: 30px 34px;
}

.cart__product {
	grid-area: product;
}

.cart__addon {
	grid-area: addon;
	position: relative;
	max-width: 835px;
	padding: 22px 30px 16px 28px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.cart__addon-title {
	margin-bottom: 12px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.22px;
	color: #fff;
}

.cart__addon-list {}

.cart-addon-item__button-clear {
	position: absolute;
	top: 20px;
	right: 20px;
	width: 30px;
	height: 30px;
	background-image: url("~/assets/icons/close.svg");
	background-color: transparent;
	background-size: 12px 12px;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
}

.category-title--cart {
	padding: 10px 0 38px;
}

.support--cart {
	padding: 0px 0 70px;
}

.cart__toast {
	position: fixed;
	z-index: 10;
	bottom: 15px;
	right: 15px;
}
</style>

<style>
.cart__order {
	grid-area: order;
	grid-row: 1/-1;
}
</style>