<script setup>
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const props = defineProps({
	id: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	priceActual: {
		type: Number,
		required: true
	},

	imagePath: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
});

const productPrice = computed(() => props.quantity * props.priceActual);
</script>

<template>
	<li class="cart-product-item">
		<button @click="cartStore.deleteItem(props.id)"
			class="cart-product-item__button-del"></button>
		<div class="cart-product-item__inner">
			<picture class="cart-product-item__picture">
				<img :src="props.imagePath" alt="{{ props.title }}">
			</picture>
			<div class="cart-product-item__info">
				<div class="cart-product-item__row-1">
					<p class="cart-product-item__title">{{ props.title }}</p>
					<p class="cart-product-item__weight">{{ props.weight }} г.</p>
				</div>
				<p class="cart-product-item__desc">{{ props.description }}</p>
				<div class="cart-product-item__row-2">
					<Counter :quantity="props.quantity"
						@increase-counter="$emit('increase-quantity', props.id)"
						@decrease-counter="$emit('decrease-quantity', props.id)"
						class="cart-product-item__counter" />
					<div class="cart-product-item__total-price">{{ productPrice }} ₽</div>
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
</style>