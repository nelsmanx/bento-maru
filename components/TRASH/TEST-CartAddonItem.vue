<script setup>
const props = defineProps({
	id: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	priceActual: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
});

const totalPrice = computed(() => props.priceActual * props.quantity);
</script>

<template>
	<li class="cart-addon-item">
		<div class="cart-addon-item__inner">
			<p class="cart-addon-item__title">{{ props.title }}</p>
			<Counter :quantity="props.quantity"
				@increase-counter="$emit('increase-quantity', props.id)"
				@decrease-counter="$emit('decrease-quantity', props.id)"
				class="cart-addon-item__counter" />
			<div class="cart-addon-item__total-price">{{ totalPrice }} ₽</div>
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

.cart-addon-item__counter {
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
</style>