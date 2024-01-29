<script setup>
import { useCartStore } from '~/stores/cartStore';

const props = defineProps({
	addon: {
		type: Object,
		required: true
	},
	addonQuantity: {
		type: Number,
		required: true
	}
});
const cartStore = useCartStore();
if (props.addon.title == 'Соевый соус') {
	const addon = cartStore.sause;
} else {
	const addon = cartStore.sticks;
}
function descrease(addon) {
	if(addon.quantity > 0) {
		addonQuantity--;
	}
}
const addonTotalPrice = computed(() => props.addonQuantity * addon.priceActual);
</script>

<template>
	<li class="cart-addon-item">
		<div class="cart-addon-item__inner">
			<p class="cart-addon-item__title">{{ addon.title }}</p>
			<div class="counter cart-addon-item__counter">
				<div class="counter__inner">
					<span @click="descrease(addon)"
						class="counter__minus">
					</span>
					<span class="counter__value">{{ addon.quantity }}</span>
					<span @click="addon.quantity++"
						class="counter__plus">
					</span>
				</div>
			</div>
			<div class="cart-addon-item__total-price">{{ addonTotalPrice }} ₽</div>
		</div>
	</li>
</template>

<style scoped>
.cart-addon-item {
	padding: 6px 0;
}

.cart-addon-item:not(:last-child) {
	border-bottom: 1px solid rgb(234, 234, 234, 0.2);
}

.cart-addon-item__inner {
	display: flex;
	align-items: center;
}

.cart-addon-item__title {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: 1;
	letter-spacing: 0.16px;
	color: var(--accent-color);
}

.cart__addon .cart-addon-item__counter {
	margin-left: auto;
}

.cart-addon-item__total-price {
	min-width: 68px;
	margin-left: 5px;
	font-family: "Gotu";
	font-size: 22px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.22px;
	text-align: right;
	color: var(--accent-color);
}
</style>

<style>
.cart-addon-item .counter {
	width: 82px;
	height: 24px;
	padding: 0;
	border: none;
}

.cart-addon-item .counter__plus,
.cart-addon-item .counter__minus {
	--line-width: 10px;
	padding: 12px;
	background: var(--accent-gradient);
	border-radius: 5px;
}

.cart-addon-item .counter__plus::before,
.cart-addon-item .counter__plus::after,
.cart-addon-item .counter__minus::before {
	background-color: #1a1a1c;
}

.cart-addon-item .counter__value {
	font-size: 15px;
	color: #fff;
}

@media (max-width: 991px) {
	.cart-addon-item__title {
		font-size: 14px;
	}
	.cart-addon-item__total-price {
		font-size: 18px;
	}
}

@media (max-width: 768px) {
	.cart-addon-item .counter__plus,
	.cart-addon-item .counter__minus {
		--line-width: 6px;
		padding: 10px;
		border-radius: 2.5px;
	}
}
</style>