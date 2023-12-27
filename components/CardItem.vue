<script setup>
import { useProductStore } from '@/stores/productStore';

const props = defineProps({
	productId: {
		type: Number,
		required: true
	},
	productQuantity: {
		type: Number,
		required: true
	}
});

defineEmits(['increase-quantity', 'decrease-quantity', 'toggle-fav']);

const productStore = useProductStore();
const productList = productStore.products;
const product = productList.find((item) => item.id === props.productId);


const modalCardIsOpen = ref(false);

const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();
const scrollLockRemoveDelay = 300;

watch(modalCardIsOpen, (newState) => {
	if (newState) {
		addScrollLock();
	} else {
		setTimeout(() => removeScrollLock(), scrollLockRemoveDelay);
	}
});

</script>

<template>
	<div class="card" :class="$attrs.class">
		<div class="card__inner">
			<span v-if="product.isNew" class="card__badge">NEW</span>
			<picture class="card__picture" @click="modalCardIsOpen = !modalCardIsOpen">
				<img :src="product.imagePath" :alt="product.title">
			</picture>
			<div class="card__info">
				<div class="card__title-and-weight">
					<p class="card__title"
						@click="modalCardIsOpen = !modalCardIsOpen">
						{{ product.title }}
					</p>
					<p class="card__weight">{{ product.weight }} г.</p>
				</div>
				<p class="card__desc">{{ product.description }}</p>
				<div class="card__price-and-actions">
					<div class="card__price">
						<div class="card__price-actual">{{ product.priceActual }} ₽</div>
						<div v-if="product.priceOld" class="card__price-old">{{ product.priceOld }} руб</div>
					</div>
					<div class="card__actions">
						<button @click="$emit('toggle-fav')"
							:class="{ 'is-active': product.isFav }"
							class="card__button-fav">
						</button>

						<button v-if="!props.productQuantity"
							@click="$emit('increase-quantity', product.id)"
							class="card__button-cart">
							В корзину
						</button>
						<Counter v-else
							@increase-counter="$emit('increase-quantity', product.id)"
							@decrease-counter="$emit('decrease-quantity', product.id)"
							:quantity="props.productQuantity" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<modalWindow
		:isOpen="modalCardIsOpen"
		@toggle-modal="modalCardIsOpen = !modalCardIsOpen">
		<CardModal
			:productId="product.id"
			@toggle-modal="modalCardIsOpen = !modalCardIsOpen" />
	</modalWindow>
</template>

<style scoped>
.card {
	/* position: relative; */
	max-width: 620px;
	min-height: 765px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
	border: 1px solid #282828;
	border-radius: 12px;
	overflow: hidden;
}

.card__inner {}

.card__badge {
	position: absolute;
	z-index: 2;
	top: 25px;
	right: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 7px 3px;
	font-family: "Gotu";
	font-size: 17px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.17px;
	color: #fff;
	background: var(--accent-gradient);
	border-radius: 6px;
}

.card__picture {
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (621 / 463)) 0 0;
	border-radius: 12px;
	cursor: pointer;
}

.card__picture img {
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

.card__info {
	padding: 30px 45px 45px 40px;
}

.card__title-and-weight {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 20px;
}

.card__title {
	font-family: "Century Gothic";
	font-size: 36px;
	font-weight: 700;
	line-height: 1;
	letter-spacing: 0.36px;
	color: var(--accent-color);
	cursor: pointer;
}

.card__weight {
	font-family: "Century Gothic";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.78px;
	color: #747474;
}

.card__desc {
	margin-bottom: 25px;
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 500;
	line-height: 1.55;
	letter-spacing: 0.2px;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

.card__price-and-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card__price {
	display: flex;
	justify-content: center;
	align-items: center;
}

.card__price-actual {
	margin-right: 15px;
	font-family: "Gotu";
	font-size: 37px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.37px;
	color: var(--accent-color);
}

.card__price-old {
	position: relative;
	font-family: "Century Gothic";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.78px;
	color: #747474;
}

.card__price-old::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 8px;
	width: 100%;
	height: 1px;
	background-color: #747474;
}

.card__actions {
	display: flex;
	align-items: center;
}

.card__button-fav {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 54px;
	height: 54px;
	margin-right: 16px;
	background-size: 18px 16px;
	background-repeat: no-repeat;
	background-position: center;
	background-color: transparent;
	background-image: url("~/assets/icons/fav-gray.svg");
	border-radius: 12px;
	border: 1px solid #5C5C5C;
	transition: all 150ms ease-in-out;
	cursor: pointer;
}

.card__button-fav.is-active {
	background-image: url("~/assets/icons/fav-orange.svg");
	border: 1px solid var(--accent-color);
}

.card__button-cart {
	position: relative;
	isolation: isolate;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 178px;
	height: 54px;
	/* padding: 0.8em 2.1em; */
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.19px;
	color: var(--accent-color);
	background: transparent;
	--border-width: 1px;
	border: var(--border-width) solid var(--accent-color);
	border-radius: 12px;
	--transition-time: 150ms;
	transition: all var(--transition-time) ease-in-out;
	cursor: pointer;
}

.card__button-cart::before {
	content: '';
	position: absolute;
	inset: calc(var(--border-width) * -1);
	z-index: -1;
	width: calc(100% + var(--border-width) * 2);
	height: calc(100% + var(--border-width) * 2);
	border-radius: 12px;
	background: var(--accent-gradient);
	opacity: 0;
	transition: opacity var(--transition-time) ease-in-out;
}

.card__button-cart:hover {
	color: #fff;
	border-color: transparent;
}

.card__button-cart:hover::before {
	opacity: 1;
}
</style>