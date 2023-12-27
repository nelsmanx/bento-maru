<script setup>
import { useProductStore } from '~/stores/productStore';
import { useCartStore } from '~/stores/cartStore';

const props = defineProps({
	productId: {
		type: Number,
		required: true
	}
});

const emit = defineEmits(['toggle-modal']);

const productStore = useProductStore();
const product = productStore.products.find(item => item.id === props.productId);

const counterQuantity = ref(1);
const increaseCounter = () => counterQuantity.value++;
const decreaseCounter = () => {
	if (counterQuantity.value > 1) counterQuantity.value--;
};

const cartStore = useCartStore();
const addToCart = () => {
	cartStore.increaseQuantity({ ...product, quantity: counterQuantity.value });
	emit('toggle-modal');
};
</script>

<template>
	<div class="card-modal">
		<button class="card-modal__button-close"
			@click="$emit('toggle-modal')">
		</button>
		<div class="card-modal__inner">
			<div class="card-modal__picture-wrap">
				<picture class="card-modal__picture">
					<img :src="product.imagePath" :alt="product.title">
				</picture>
				<span v-if="product.isNew" class="card-modal__badge">NEW</span>
			</div>
			<div class="card-modal__info">
				<p class="card-modal__title">{{ product.title }}</p>
				<p class="card-modal__weight">{{ product.weight }} г.</p>
				<p class="card-modal__desc">{{ product.description }}</p>
				<div class="card-modal__row">
					<div class="card-modal__price">{{ product.priceActual }} ₽</div>
					<Counter class="card-modal__counter"
						@increase-counter="increaseCounter"
						@decrease-counter="decreaseCounter"
						:quantity="counterQuantity" />
					<button class="card-modal__button-cart"
						@click="addToCart">
						Добавить
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-modal {
	position: relative;
	max-width: 1200px;
	min-height: 500px;
	padding: 42px 60px 50px 42px;
	border-radius: 12px;
	border: 1px solid #282828;
	background-image:
		linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%),
		url("@/assets/images/background-pattern.svg");
	background-position: 0 0;
	background-repeat: repeat;
}

.card-modal__button-close {
	position: absolute;
	top: 50px;
	right: 40px;
	width: 30px;
	height: 30px;
	background-image: url("/_nuxt/assets/icons/close.svg");
	background-color: transparent;
	background-size: 17px 17px;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	opacity: 0.5;
	cursor: pointer;
}

.card-modal__inner {
	display: grid;
	grid-template-columns: 542px 1fr;
	gap: 54px;
}

.card-modal__picture-wrap {
	position: relative;
}

.card-modal__picture {
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (542 / 404)) 0 0;
	border-radius: 12px;
	overflow: hidden;
}

.card-modal__picture img {
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

.card-modal__badge {
	position: absolute;
	z-index: 2;
	top: 21px;
	left: 23px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 6px 2px;
	font-family: "Gotu";
	font-size: 15px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.17px;
	color: #fff;
	background: var(--accent-gradient);
	border-radius: 6px;
}

.card-modal__info {}

.card-modal__title {
	margin-bottom: 15px;
	font-family: "Century Gothic";
	font-size: 37px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.37px;
	color: var(--accent-color);
}

.card-modal__weight {
	margin-bottom: 12px;
	font-family: "Century Gothic";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.8px;
	color: #747474;
}

.card-modal__desc {
	margin-bottom: 44px;
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;
}

.card-modal__row {
	display: flex;
	align-items: center;
}

.card-modal__price {
	font-family: "Gotu";
	font-size: 37px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.37px;
	color: var(--accent-color);
}

.card-modal__counter {
	margin-left: auto;
}

.card-modal__button-cart {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 176px;
	height: 54px;
	margin-left: 14px;
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.19px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 6px;
	cursor: pointer;
}
</style>

<style>
.card-modal .counter {
	width: 145px;
	height: 54px;
	/* padding: 5px 15px 5px 5px; */
	border-radius: 6px;
}
</style>