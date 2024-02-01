<script setup>
import config from "@/config";
import { useAppStore } from "~/stores/appStore";

const props = defineProps({
	product: {
		type: Object,
		required: true
	},
	isFav: {
		type: Boolean
	},
	productQuantity: {
		type: Number,
		required: true
	}
});

defineEmits(['increase-quantity', 'decrease-quantity', 'toggle-fav']);

const appStore = useAppStore();

const openModalCard = () => {
	appStore.modalCard.product = props.product;
	appStore.modalCard.productQuantity = props.productQuantity;
	appStore.modalCard.isFav = props.isFav;
	appStore.modalCard.isOpen = true;
};

// const modalCardIsOpen = ref(false);

// const addScrollLock = useAddScrollLock();
// const removeScrollLock = useRemoveScrollLock();
// const scrollLockRemoveDelay = 300;

const baseUrl = `${config.app.server.scheme}://${config.app.server.host}`;

// watch(modalCardIsOpen, (newState) => {
// 	if (newState) {
// 		addScrollLock();
// 	} else {
// 		setTimeout(() => removeScrollLock(), scrollLockRemoveDelay);
// 	}
// });

const ingredientsDesc = ref(null);

onMounted(() => {
	if (!ingredientsDesc.value) return;

	const ingredientsItems = ingredientsDesc.value.querySelectorAll('li');
	const ingredientsItemsArray = [];

	ingredientsItems.forEach(item => ingredientsItemsArray.push(item.innerText));
	const ingredientsItemsString = ingredientsItemsArray.join(', ');

	ingredientsDesc.value.querySelector('ul').remove();
	ingredientsDesc.value.innerText = ingredientsItemsString;
})


</script>

<template>
	<!-- <div class="card" :class="$attrs.class" v-if="product"> -->
	<div class="card" v-if="product">
		<div class="card__inner">
			<span v-if="product.new === 1" class="card__badge">NEW</span>
			<picture class="card__picture" @click="openModalCard">
				<img :src="baseUrl + product.photos[0]" :alt="product.name">
			</picture>
			<div class="card__info">
				<div class="card__title-and-weight">
					<p class="card__title"
						@click="openModalCard">
						{{ product.name }}
					</p>
					<p class="card__weight">{{ product.weight }}</p>
				</div>
				<div v-if="product.introtext" class="card__desc" v-html="product.introtext"></div>
				<div v-else-if="product.content" ref="ingredientsDesc"
					v-html="product.content"
					class="card__desc card__desc--ingredients"></div>

				<div class="card__price-and-actions">
					<div class="card__price">
						<div class="card__price-actual">{{ product.price }} ₽</div>
						<div v-if="product.priceOld > 0" class="card__price-old">{{ product.priceOld }} руб</div>
					</div>
					<div class="card__actions">
						<button @click="$emit('toggle-fav')"
							:class="{ 'is-active': isFav }"
							class="card__button-fav">
						</button>

						<button v-if="!props.productQuantity"
							@click="$emit('increase-quantity', product)"
							class="card__button-cart">
							В корзину
						</button>
						<Counter v-else
							@increase-counter="$emit('increase-quantity', product)"
							@decrease-counter="$emit('decrease-quantity', product)"
							:quantity="props.productQuantity"
							class="card__counter" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	max-width: 620px;
	/* height: 765px; */
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
	border: 1px solid #282828;
	border-radius: 12px;
	overflow: hidden;
}

.card__inner {
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
}

.card__info {
	display: grid;
	grid-template-rows: auto 1fr auto;
}

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
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100%;
	padding: 30px 45px 45px 40px;
}

.card__title-and-weight {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 20px;
}

.card__title {
	margin-right: 20px;
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

.card__desc--ingredients:deep(ul) {
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

/* .card__desc--ingredients li:not(:last-child) {
	margin-right: 10px;
} */
.card__desc--ingredients:deep(li) {
	/* display: inline-block; */
}

.card__desc--ingredients:deep(li:not(:last-child)) {
	margin-right: 10px;
}

.card__desc--ingredients:deep(li:not(:last-child)::after) {
	content: ',';
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
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: 1;
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

@media (max-width: 1399.98px) {
	.card__info {
		padding: 30px 40px 40px 40px;
	}

	.card__title-and-weight {
		align-items: flex-start;
	}

	.card__title {
		font-size: 32px;
	}

	.card__desc {
		font-size: 18px;
		-webkit-line-clamp: 4;
	}
}

@media (max-width: 1199.98px) {
	.card__title {
		font-size: 28px;
	}

	.card__price-actual {
		font-size: 32px;
	}

	.card__button-fav {
		display: none;
	}
}

@media (max-width: 991.98px) {
	.card {
		height: auto;
		border-radius: 6px;
	}

	.card__badge {
		top: 12px;
		right: 12px;
		font-size: 9px;
		border-radius: 3px;
	}

	.card__info {
		padding: 24px;
	}

	.card__title {
		font-size: 22px;
	}

	.card__weight {
		font-size: 11px;
	}

	.card__desc {
		margin-bottom: 30px;
		font-size: 14px;
	}

	.card__price {
		flex-direction: column;
		align-items: flex-start;
	}

	.card__price-actual {
		order: 2;
		margin-right: 0;
		font-size: 26px;
	}

	.card__price-old {
		margin-bottom: 8px;
		font-size: 11px;
	}

	.card__price-old::after {
		bottom: 5px;
	}

	.card__button-fav {
		width: 41px;
		height: 41px;
		margin-right: 10px;
		background-size: 14px 12px;
		border-radius: 5px;
	}

	.card__button-cart {
		width: 124px;
		height: 41px;
		font-size: 15px;
		border-radius: 5px;
	}

	.card__button-cart::before {
		border-radius: 5px;
	}

	.card__counter {
		width: 124px;
		height: 41px;
		border-radius: 5px;
	}

	.card__counter :deep(.counter__value) {
		font-size: 16px;
	}

	.card__counter :deep(.counter__plus),
	.card__counter :deep(.counter__minus) {
		--line-width: 12px;
		padding: 12px;
	}
}
</style>