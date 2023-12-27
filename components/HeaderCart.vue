<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
const cartItemsCount = computed(() => cartStore.totalItemsQuantity);
const cartTotalPrice = computed(() => cartStore.totalPrice)

</script>



<template>
	<div class="cart" :class="{ 'cart--full': cartItemsCount }">
		<span class="cart__title" key="title">Корзина</span>
		<span v-show="cartItemsCount" key="count" class="cart__count">{{ cartItemsCount }}</span>
		<span v-show="cartItemsCount" key="separator" class="cart__separator"></span>
		<span v-show="cartItemsCount" key="price" class="cart__price">{{ cartTotalPrice }}₽</span>
	</div>
	<!-- <TransitionGroup name="cart" tag="button"
		class="cart" :class="{ 'cart--full': cartItemsCount }">
		<span class="cart__title" key="title">Корзина</span>
		<span v-show="cartItemsCount" key="count" class="cart__count">2</span>
		<span v-show="cartItemsCount" key="separator" class="cart__separator"></span>
		<span v-show="cartItemsCount" key="price" class="cart__price">1000₽</span>
	</TransitionGroup> -->
</template>

<style scoped>
/* .cart-enter-from {
	opacity: 0;
}

.cart-enter-active {
	transition: opacity 150ms ease;
} */
.cart {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 44px;
	padding: 5px 30px;
	background: var(--accent-gradient);
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

.cart--full {
	justify-content: flex-start;
	padding: 5px 22px;
}

.cart__title {
	margin-bottom: 2px;
	font-family: "Century Gothic";
	font-size: 16px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
}

.cart--full .cart__title {
	margin-right: 4px;
}

.cart__count {
	justify-content: center;
	align-items: center;
	padding: 5.5px 3px;
	margin-right: auto;
	font-family: "Rubik";
	font-size: 7px;
	font-weight: 500;
	line-height: 0;
	letter-spacing: 0.5px;
	color: #fff;
	background-color: #000;
	border-radius: 8px;
}

.cart__separator {
	width: 1px;
	height: 32px;
	margin-inline: 17px;
	background: radial-gradient(1368610818.45% 56.61% at 55.12% 49.51%, #fff 0%, rgba(255, 255, 255, 0.00) 100%);
	border-radius: 8px;
	opacity: 0.3;
}

.cart__price {
	margin-left: auto;
	font-family: "Gotu";
	font-size: 17px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.17px;
	color: #fff;
}
</style>