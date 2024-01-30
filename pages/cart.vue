<script setup>
import config from "@/config";
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { useOrderStore } from '@/stores/orderStore';

const baseUrl = `${config.app.server.scheme}://${config.app.server.host}`;
const cartStore = useCartStore();
cartStore.loadCart();

const orderStore = useOrderStore();

const productStore = useProductStore();
productStore.activeCategory();
productStore.getActiveProducts();
const productTryAlso = productStore.category;

const decreaseQuantity = useDecreaseQuantity();
const increaseQuantity = useIncreaseQuantity();

const toastIsVisible = ref(false);


function increase(item) {
	item.quantity++;
	if (process.client) { localStorage.setItem('cart', JSON.stringify(cartStore.cart)); }
}

function decrease(item) {
	if (item.quantity > 0) {
		item.quantity--;
	}
	if (process.client) { localStorage.setItem('cart', JSON.stringify(cartStore.cart)); }
}


const isMobileScreen = inject("isMobileScreen");
</script>

<template>
	<Head>
        <Title>Японские коробочки с едой</Title>
        <Meta name="description" content="Японские коробочки с едой"/>
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://bentomaru.ru" />
        <Meta property="og:locale" content="ru_RUS" />
        <Meta property="og:image" content="https://bentomaru.ru/img/bento-mix.jpg" />
        <Meta property="og:title" content="Японские коробочки с едой" />
        <Meta property="og:description" content="Японские коробочки с едой" />
    </Head>
	
	<BackgroundDecor>

		<CategoryTitleList class="category-title--cart" />

		<section class="cart">
			<div class="container">
				<div class="cart__row-1">
					<template v-if="cartStore.totalItemsQuantity">
						<h1 class="cart__title">ВАШ ЗАКАЗ ({{ cartStore.totalItemsQuantity }})</h1>
						<button @click="cartStore.clearProductsAndAddons"
							class="cart__button-clear">Очистить корзину
						</button>
					</template>
					<h1 v-if="!cartStore.totalItemsQuantity && !orderStore.orderIsSent" class="cart__title">Ваша корзина пуста</h1>
					<h1 v-if="orderStore.orderIsSent && !cartStore.totalItemsQuantity" class="cart__title">Ваш заказ принят, в течении 15 минут с вами свяжется наш сотрудник</h1>
				</div>

				<div v-if="cartStore.totalItemsQuantity" class="cart__inner">
					<div class="cart__product">
						<ul class="cart__product-list">
							<li class="cart-product-item" v-for="product in cartStore.cart" :key="product.id">
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
										<div class="cart-product-item__desc">{{ product.introtext }}</div>
										<div class="cart-product-item__row-2">
											<Counter :quantity="product.quantity"
												@increase-counter="increaseQuantity(product)"
												@decrease-counter="decreaseQuantity(product)"
												class="cart-product-item__counter" />
											<div class="cart-product-item__price">
												{{ product.quantity * product.price }} ₽
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<!-- <div class="cart__addon" v-if="cartStore.sause.quantity || cartStore.sticks.quantity"> -->
					<div class="cart__addon">
						<h2 class="cart__addon-title">Добавки:</h2>
						<ul class="cart__addon-list">
							<li class="cart-addon-item">
								<div class="cart-addon-item__inner">
									<p class="cart-addon-item__title">{{ cartStore.sause.title }}</p>
									<Counter :quantity="cartStore.sause.quantity"
										@increase-counter="increase(cartStore.sause)"
										@decrease-counter="decrease(cartStore.sause)"
										class="cart-addon-item__counter" />
									<div class="cart-addon-item__total-price">{{ cartStore.sause.quantity * cartStore.sause.price }} ₽</div>
								</div>
							</li>
							<li class="cart-addon-item">
								<div class="cart-addon-item__inner">
									<p class="cart-addon-item__title">{{ cartStore.sticks.title }}</p>
									<Counter :quantity="cartStore.sticks.quantity"
										@increase-counter="increase(cartStore.sticks)"
										@decrease-counter="decrease(cartStore.sticks)"
										class="cart-addon-item__counter" />
									<div class="cart-addon-item__total-price">{{ cartStore.sticks.quantity * cartStore.sticks.price }} ₽</div>
								</div>
							</li>
						</ul>
						<!-- <button @click="cartStore.clearAddons"
							class="cart__addon-button-clear"></button> -->
					</div>

					<CartOrder class="cart__order" />
				</div>
			</div>
		</section>

		<ClientOnly>
			<Category v-if="!isMobileScreen"
				title="Попробуйте также"
				:classModifier="productStore.category.alias"
				:category="productStore.category"
				:productList="productStore.products" />

			<Support v-if="!isMobileScreen"
				class="support--cart" />
		</ClientOnly>
	</BackgroundDecor>

	<CartToast v-if="toastIsVisible" class="cart__toast"
		title="Спасибо за заказ!"
		subtitle="Заказ будет доставлен в течении"
		subtitleAccent="60 минут" />
</template>

<style scoped>
/* cart */
.cart {
	padding: 35px 0 120px;
}

.cart__row-1 {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 24px;
}

.cart__title {
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}

.cart__button-clear {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.16px;
	color: #fff;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.cart__button-clear::before {
	content: '';
	width: 12px;
	height: 12px;
	margin-right: 8px;
	background: url("~/assets/icons/close.svg") center/contain no-repeat;
}

.cart__inner {
	display: grid;
	grid-template-areas:
		"product order"
		"addon order";
	grid-template-columns: 1fr 430px;
	grid-template-rows: auto 1fr;
	align-items: start;
	gap: 30px 34px;
}

.cart :deep(.cart__order) {
	grid-area: order;
	grid-row: 1/-1;
}

.cart__product {
	grid-area: product;
}

.cart__addon {
	grid-area: addon;
	position: relative;
	max-width: 835px;
	padding: 22px 30px 16px 28px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.cart__addon-title {
	margin-bottom: 12px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.22px;
	color: #fff;
}

.cart__addon-button-clear {
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

.cart__addon-list {}

.category-title--cart {
	padding: 10px 0 38px;
}

.support--cart {
	padding: 0px 0 70px;
}

.cart__toast {
	position: fixed;
	z-index: 10;
	bottom: 15px;
	right: 15px;
}

@media (max-width: 1200px) {
	.cart {
		padding: 35px 0 50px;
	}

	.cart__title {
		font-size: 34px;
	}

	.cart__inner {
		grid-template-columns: 1fr 320px;
	}
}

@media (max-width: 991px) {
	.cart__inner {
		display: block;
	}

	.cart__addon {
		margin-top: 23px;
	}

	.cart :deep(.cart__order) {
		margin-top: 23px;
	}
}

@media (max-width: 768px) {
	.cart__title {
		font-size: 26px;
	}

	.cart__row-1 {
		margin-bottom: 14px;
	}

	.cart__addon {
		padding: 19px;
	}

	.cart__addon-title {
		font-size: 18px;
		margin-bottom: 6px;
	}

	.cart__addon-button-clear {
		top: 17px;
		right: 10px;
	}
}

@media (max-width: 575.98px) {
	.cart {
		padding: 0;
	}

	.cart__row-1 {
		margin-bottom: 10px;
	}

	.cart__title {
		font-size: 18px;
	}

	.cart__button-clear {
		font-size: 10px;
		padding: 0;
	}

	.cart__button-clear::before {
		display: none;
	}

	.cart__addon {
		padding: 16px 16px;
	}

	.cart__addon-title {
		font-size: 14px;
	}

	.cart__addon-button-clear {
		top: 12px;
		right: 12px;
		width: 20px;
		height: 20px;
		background-size: 10px 10px;
	}

	.category-title--cart {
		padding: 10px 0 32px;
	}
}
</style>

<style scoped>
/* cart-product-item */
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
	align-items: baseline;
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

.cart-product-item :deep(.counter) {
	width: 105px;
	height: 40px;
	padding: 6px;
	border-radius: 5px;
}

.cart-product-item :deep(.counter__plus),
.cart-product-item :deep(.counter__minus) {
	--line-width: 11px;
	padding: 12px;
}

.cart-product-item :deep(.counter__value) {
	font-size: 14px;
}

.cart-product-item__info {
	display: flex;
	flex-direction: column;
}

.cart-product-item__desc {
	flex: 1 1 auto;
}

.cart-product-item__price {
	font-family: "Gotu";
	font-size: 26px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.258px;
	color: var(--accent-color);
}

@media (max-width: 768px) {
	.cart-product-item__button-del {
		top: 13px;
		right: 15px;
		width: 12px;
		height: 12px;
		background-size: 11px 11px;
		padding: 0;
	}

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

	.cart-product-item__desc {
		display: none;
	}

	.cart-product-item :deep(.counter__plus),
	.cart-product-item :deep(.counter__minus) {
		--line-width: 6px;
		padding: 10px;
	}

	.cart-product-item :deep(.counter) {
		width: 75px;
		height: 23px;
		padding: 0;
		border-radius: 2.5px;
	}

	.cart-product-item :deep(.counter__value) {
		width: 20px;
		font-size: 12px;
	}

	.cart-product-item__price {
		margin-left: 0;
		font-size: 14.2px;
	}

	.cart-product-item__row-2 {
		flex-direction: row-reverse;
		justify-content: space-between;
	}
}

@media (max-width: 575.98px) {
	.cart-product-item {
		padding: 10px;
		border-radius: 6px;
	}

	.cart-product-item:not(:last-child) {
		margin-bottom: 6px;
	}

	.cart-product-item__button-del {
		top: 7px;
		right: 7px;
		width: 20px;
		height: 20px;
		background-size: 10px 10px;
	}

	.cart-product-item__title {
		font-size: 14px;
		line-height: 1;
		color: #fff;
	}

	.cart-product-item__weight {
		display: none;
	}

	.cart-product-item__picture {
		border-radius: 3px;
	}

	.cart-product-item__info {
		justify-content: space-between;
	}

	.cart-product-item__row-2 {
		align-items: flex-end;
	}

	.cart-product-item__price {
		line-height: 1;
	}

	.cart-product-item__counter {
		margin-right: 0;
	}

	.cart-product-item :deep(.counter) {
		width: 62px;
		height: 24px;
	}

	.cart-product-item :deep(.counter__plus),
	.cart-product-item :deep(.counter__minus) {
		--line-height: 1px;
		--line-width: 6px;
	}

	.cart-product-item :deep(.counter__value) {
		width: 12px;
		font-size: 8px;
	}
}

/* /cart-product-item */
</style>

<style scoped>
/* cart-addon-item */
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

.cart-addon-item :deep(.counter) {
	width: 82px;
	height: 24px;
	padding: 0;
	border: none;
}

.cart-addon-item :deep(.counter__plus),
.cart-addon-item :deep(.counter__minus) {
	--line-width: 10px;
	padding: 12px;
	background: var(--accent-gradient);
	border-radius: 5px;
}

.cart-addon-item :deep(.counter__plus::before),
.cart-addon-item :deep(.counter__plus::after),
.cart-addon-item :deep(.counter__minus::before) {
	background-color: #1a1a1c;
}

.cart-addon-item :deep(.counter__value) {
	font-size: 15px;
	color: #fff;
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

@media (max-width: 991px) {
	.cart-addon-item__title {
		font-size: 14px;
	}
}

@media (max-width: 768px) {
	.cart-addon-item__total-price {
		font-size: 14.2px;
	}

	.cart-addon-item :deep(.counter__plus),
	.cart-addon-item :deep(.counter__minus) {
		--line-width: 8px;
		padding: 10px;
		border-radius: 2.5px;
	}
}

@media (max-width: 575.98px) {
	.cart-addon-item :deep(.counter) {
		width: 62px;
		height: 24px;
	}

	.cart-addon-item :deep(.counter__plus),
	.cart-addon-item :deep(.counter__minus) {
		--line-height: 1px;
		--line-width: 6px;
	}

	.cart-addon-item :deep(.counter__value) {
		width: 12px;
		font-size: 8px;
	}

	.cart-addon-item__title {
		margin-right: 16px;
		word-break: break-word;
	}

	.cart-addon-item__total-price {
		min-width: 60px;
	}
}

/* cart-addon-item */
</style>
