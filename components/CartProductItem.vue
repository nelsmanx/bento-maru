<script setup>
import config from "@/config";
import { useCartStore } from '~/stores/cartStore';
import { useProductStore } from '~/stores/productStore';

const props = defineProps({
	productId: {
		type: Number,
		required: true
	},
	productObj: {
		type: Object
	},
	productQuantity: {
		type: Number,
		required: true
	}
});

const baseUrl = `${config.app.server.scheme}://${config.app.server.host}`;
const cartStore = useCartStore();
cartStore.loadCart();

const product = cartStore.cart.find((item) => item.id === props.productId);
const productTotalPrice = computed(() => props.productQuantity * product.price);
</script>

<template>
	<li class="cart-product-item" v-if="product">
		<button @click="cartStore.deleteItem(product.id)"
			class="cart-product-item__button-del"></button>
		<div class="cart-product-item__inner">
			<picture class="cart-product-item__picture">
				<img :src="baseUrl + product.photos[0]" :alt="product.name">
			</picture>
			<div class="cart-product-item__info">
				<div class="cart-product-item__row-1">
					<p class="cart-product-item__title">{{ product.name }}</p>
					<p class="cart-product-item__weight">{{ product.weight }}</p>
				</div>
				<p class="cart-product-item__desc">{{ product.description }}</p>
				<div class="cart-product-item__row-2">
					<Counter :quantity="props.productQuantity"
						@increase-counter="$emit('increase-quantity', product.id)"
						@decrease-counter="$emit('decrease-quantity', product.id)"
						class="cart-product-item__counter" />
					<div class="cart-product-item__total-price">{{ productTotalPrice }} ₽</div>
				</div>
			</div>
		</div>
	</li>
</template>

<style scoped>
.cart-product-item {
	position: relative;
	max-width: 835px;
	padding: 20px 65px 26px 25px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.cart-product-item:not(:last-child) {
	margin-bottom: 30px;
}

.cart-product-item__button-del {
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

.cart-product-item__inner {
	display: grid;
	grid-template-columns: 213px 1fr;
	gap: 26px;
}

.cart-product-item__picture {
	border-radius: 6px;
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (213 / 160)) 0 0;
	overflow: hidden;
}

.cart-product-item__picture img {
	position: absolute;
	inset: 0;
	display: block;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
}

.cart-product-item__info {}

.cart-product-item__row-1 {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
}

.cart-product-item__title {
	margin-right: 10px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.22px;
	color: var(--accent-color);
}

.cart-product-item__weight {
	font-family: "Century Gothic";
	font-size: 11px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.55px;
	color: #747474;
}

.cart-product-item__desc {
	margin-bottom: 12px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: 1.4;
	letter-spacing: 0.16px;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

.cart-product-item__row-2 {
	display: flex;
	align-items: center;
}

.cart-product-item__counter {
	margin-right: 24px;
}

.cart-product-item__total-price {
	font-family: "Gotu";
	font-size: 26px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.258px;
	color: var(--accent-color);
}
</style>

<style>
.cart-product-item .counter {
	width: 105px;
	height: 40px;
	padding: 6px;
	border-radius: 5px;
}

.cart-product-item .counter__plus,
.cart-product-item .counter__minus {
	--line-width: 11px;
	padding: 12px;
}

.cart-product-item .counter__value {
	font-size: 14px;
}

@media (max-width: 1200px) {
	.cart-product-item__desc {
		font-size: 12px;
	}
	.cart-product-item__inner {
		grid-template-columns: 195px 1fr;
	}
}
@media (max-width: 768px) {
	.cart-product-item {
		padding: 11px 12px;
	}
	.cart-product-item__inner {
		grid-template-columns: 73px 1fr;
		gap: 12px;
	}
	.cart-product-item__title {
		font-size: 15px;
	}
}
</style>