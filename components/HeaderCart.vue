<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
cartStore.loadCart();
const cartItemsCount = computed(() => cartStore.totalItemsQuantity);
const cartTotalPrice = computed(() => cartStore.totalPrice);
const cartAddonsPrice = computed(() => cartStore.addonsPrice);
</script>

<template>
	<div class="cart" :class="{ 'cart--full': cartItemsCount }">
		<span class="cart__title">Корзина</span>
		<div v-show="cartItemsCount" class="cart__count-wrap">
			<span class="cart__count">{{ cartItemsCount }}</span>
		</div>
		<span v-show="cartItemsCount" class="cart__separator"></span>
		<span v-show="cartItemsCount" class="cart__price">{{ cartTotalPrice + cartAddonsPrice }}₽</span>
	</div>
</template>

<style scoped>
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
	display: grid;
	grid-template-columns: auto auto 1fr auto;
	align-items: center;
	width: 222px;
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

.cart__count-wrap {
	display: flex;
	align-items: center;
}

.cart__count {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 11.45px;
	/* padding: 5.5px 3px; */
	padding: 6.3px 3.2px 5.4px 3.5px;
	font-family: "Rubik";
	font-size: 7px;
	font-weight: 500;
	line-height: 0;
	letter-spacing: 0.5px;
	color: #fff;
	background-color: #000;
	border-radius: 8px;
}

.cart__separator {}

.cart__separator::before {
	content: '';
	display: block;
	width: 1px;
	height: 32px;
	margin-inline: auto;
	background: radial-gradient(1368610818.45% 56.61% at 55.12% 49.51%, #fff 0%, rgba(255, 255, 255, 0.00) 100%);
	border-radius: 8px;
	opacity: 0.3;
}

.cart__price {
	min-width: 58px;
	margin-left: auto;
	font-family: "Gotu";
	font-size: 17px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.17px;
	text-align: center;
	color: #fff;
}

@media (max-width: 575.98px) {
	.cart {
		display: none;
	}

	.cart--full {
		display: grid;
		width: 185px;
		height: 34px;
		padding: 0 15px;
		border-radius: 5px;
		box-shadow: 0px 4px 13.1px 0px rgba(0, 0, 0, 0.30);
	}

	.cart--full .cart__title {
		margin-right: 3px;
		font-size: 15px;
	}

	.cart__count-wrap {
		margin-top: 2px;
	}

	.cart__price {
		min-width: 51px;
		font-size: 15px;
	}
}
</style>