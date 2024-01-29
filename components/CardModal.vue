<script setup>
	import config from "~/config";
	import { useCartStore } from '~/stores/cartStore';

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

	const emit = defineEmits(['toggle-modal']);

	const { clientWidth } = useClientWidth();
	const cartStore = useCartStore();
	const product = cartStore.cart.find(item => item.id === props.productId);
	const baseUrl = `${config.app.server.scheme}://${config.app.server.host}`;
	const counterQuantity = ref(1);
	const increaseCounter = () => counterQuantity.value++;
	const decreaseCounter = () => {
		if (counterQuantity.value > 1) counterQuantity.value--;
	};
	cartStore.loadCart();
	const addToCart = () => {
		cartStore.increaseQuantity({ ...product, quantity: counterQuantity.value });
		emit('toggle-modal');
	};

	const decreaseQuantity = useDecreaseQuantity();
	const increaseQuantity = useIncreaseQuantity();
</script>

<template>
	<div class="card-modal__wrap">
		<div class="card-modal__headline">
			{{ product.name }}
			<button class="card-modal__button-headline"
				@click="$emit('toggle-modal')">
			</button>
		</div>

		<div class="card-modal">
			<button class="card-modal__button-close"
				@click="$emit('toggle-modal')">
			</button>
			<div class="card-modal__inner">
				<div class="card-modal__picture-wrap">
					<picture class="card-modal__picture">
						<img :src="baseUrl + product.photos[0]" :alt="product.name">
					</picture>
					<span v-if="product.isNew" class="card-modal__badge">NEW</span>
				</div>
				<div class="card-modal__info">
					<div class="card-modal__row">
						<p class="card-modal__title">{{ product.name }}</p>
						<p class="card-modal__weight">{{ product.weight }} г.</p>
					</div>
					<p class="card-modal__desc">{{ product.introtext }}</p>
					<!--<div class="card-modal__ingredients">
						<p class="card-modal__ingredients-title">Состав:</p>
						<ul class="card-modal__ingredients-list">
							<li class="card-modal__ingredients-item">Lorem ipsum dolor sit amet consectetur - 100г.</li>
							<li class="card-modal__ingredients-item">Lorem ipsum dolor sit amet - 100г.</li>
							<li class="card-modal__ingredients-item">Lorem ipsum dolor sit amet - 100г.</li>
							<li class="card-modal__ingredients-item">Lorem ipsum dolor sit - 200г.</li>
							<li class="card-modal__ingredients-item">Lorem ipsum dolor sit amet consectetur - 100г.</li> 
						</ul>
					</div>-->
					<div v-if="clientWidth >= 576"
						class="card-modal__row-2">
						<div class="card-modal__price">{{ product.price }} ₽</div>
						<Counter class="card-modal__counter"
							@increase-counter="increaseCounter"
							@decrease-counter="decreaseCounter"
							:quantity="counterQuantity" />
						<button class="card-modal__button-cart"
							@click="addToCart">
							Добавить
						</button>
					</div>

					<div v-if="clientWidth < 576"
						class="card-modal__row-2">
						<div class="card-modal__price">
							<!--<div v-if="product.priceOld" class="card-modal__price-old">{{ product.priceOld }} руб</div>-->
							<div class="card-modal__price-actual">{{ product.price }} ₽</div>
						</div>

						<div class="card-modal__actions">
							<button @click="productStore.toggleFav(product.id)"
								:class="{ 'is-active': product.isFav }"
								class="card__button-fav">
							</button>

							<Counter v-if="props.productQuantity"
								class="card-modal__counter"
								@increase-counter="increaseQuantity(product.id)"
								@decrease-counter="decreaseQuantity(product.id)"
								:quantity="props.productQuantity" />
							<button v-else
								class="card-modal__button-cart"
								@click="increaseQuantity(product.id)">
								В корзину
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-modal__headline {
	display: none;
	position: relative;
	margin-bottom: 24px;
	font-family: "Century Gothic";
	font-size: 18px;
	font-weight: 400;
	line-height: normal;
	text-align: center;
	color: #f9fafb;
}

.card-modal__button-headline {
	position: absolute;
	top: 50%;
	left: 0;
	width: 25px;
	height: 20px;
	background-image: url("~/assets/icons/modal-card-back.svg");
	background-color: transparent;
	background-size: 25px 12px;
	background-position: left center;
	background-repeat: no-repeat;
	border: none;
	transform: translateY(-50%);
	cursor: pointer;
}

.card-modal {
	position: relative;
	max-width: 1200px;
	min-height: 500px;
	padding: 42px 60px 50px 42px;
	border-radius: 12px;
	border: 1px solid #282828;
	background-image:
		linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%),
		url("~/assets/images/background/pattern.svg");
	background-position: 0 0;
	background-repeat: repeat;
}

.card-modal__button-close {
	position: absolute;
	top: 50px;
	right: 40px;
	width: 30px;
	height: 30px;
	background-image: url("~/assets/icons/close.svg");
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
	letter-spacing: 0.01em;
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
	margin-bottom: 40px;
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;
}

.card-modal__ingredients {
	margin-bottom: 40px;
}

.card-modal__ingredients-title {
	margin-bottom: 10px;
	font-family: "Century Gothic";
	font-size: 18px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.18px;
	color: #fff;
}

.card-modal__ingredients-list {}

.card-modal__ingredients-item {
	padding: 14px 0 14px 25px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.16px;
	color: rgb(255 255 255 / 0.8);
	background: url("~/assets/icons/list-marker-star.svg") left 0 top 18px/13px 13px no-repeat;
}

.card-modal__ingredients-item:not(:last-child) {
	border-bottom: 1px solid rgb(234 234 234 /0.1);
}

.card-modal__row-2 {
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
	width: 145px;
	height: 54px;
	margin-left: auto;
	border-radius: 6px;
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
	line-height: 1;
	letter-spacing: 0.19px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 6px;
	cursor: pointer;
}

@media (max-width: 575.98px) {
	.card-modal__wrap {
		padding-top: 30px;
	}

	.card-modal__headline {
		display: block;
	}

	.card-modal {
		max-width: 328px;
		max-height: calc(100vh - 50px);
		padding: 0;
		background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
		border-radius: 6px;
		overflow-y: auto;
	}

	.card-modal__inner {
		grid-template-columns: 100%;
		gap: 22px;
	}

	.card-modal__picture {
		border-radius: 0;
	}

	.card-modal__badge {
		top: 12px;
		right: 12px;
		left: auto;
		font-size: 8px;
		border-radius: 3px;
	}

	.card-modal__info {
		padding: 0 24px 24px;
	}

	.card-modal__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.card-modal__title {
		margin-bottom: 0;
		font-size: 22px;
	}

	.card-modal__weight {
		margin-bottom: 0;
		font-size: 11px;
	}

	.card-modal__desc {
		margin-bottom: 26px;
		font-size: 14px;
	}

	.card-modal__ingredients-title {
		font-size: 16px;
	}

	.card-modal__ingredients-item {
		padding: 7px 0 7px 16px;
		font-size: 12px;
		background-size: 8px 8px;
		background-position: left 0 top 11px;
	}

	.card-modal__price {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.card-modal__price-old {
		position: relative;
		margin-bottom: 8px;
		font-family: "Century Gothic";
		font-size: 11px;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.78px;
		color: #747474;
	}

	.card-modal__price-old::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 5px;
		width: 100%;
		height: 1px;
		background-color: #747474;
	}

	.card-modal__price-actual {
		font-family: "Gotu";
		font-size: 26px;
		font-weight: 400;
		line-height: 1;
		letter-spacing: 0.37px;
		color: var(--accent-color);
	}

	.card-modal__actions {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	.card__button-fav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 41px;
		height: 41px;
		margin-right: 10px;
		background-size: 14px 12px;
		background-repeat: no-repeat;
		background-position: center;
		background-color: transparent;
		background-image: url("~/assets/icons/fav-gray.svg");
		border-radius: 5px;
		border: 1px solid #5C5C5C;
		transition: all 150ms ease-in-out;
		cursor: pointer;
	}

	.card__button-fav.is-active {
		background-image: url("~/assets/icons/fav-orange.svg");
		border: 1px solid var(--accent-color);
	}

	.card-modal__button-cart {
		width: 124px;
		height: 41px;
		margin-left: 0;
		font-size: 15px;
		border-radius: 5px;
	}

	.card-modal__counter {
		width: 124px;
		height: 41px;
		border-radius: 5px;
	}

	.card-modal__counter :deep(.counter__value) {
		font-size: 16px;
	}

	.card-modal__counter :deep(.counter__plus),
	.card-modal__counter :deep(.counter__minus) {
		--line-width: 12px;
		padding: 12px;
	}
}
</style>