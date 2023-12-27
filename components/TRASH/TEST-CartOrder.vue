<script setup>
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const deliveryMethod = ref('pickup');
const address2 = ref('Адрес ресторана «БЕНТО МАРУ»');
const deliveryAddress = reactive({
	cityStreet: 'Южно-Сахалинск, ул. Больничная 35Б',
	house: 123,
	apartment: 89,
	entrance: 5,
	floor: 2,
	intercom: 123,
	comment: null
});

const pickupAddress = ref('Южно-Сахалинск, ул. Мира');

const deliveryTimeInfo = reactive({
	type: 'quick',
	day: 'Сегодня',
	time: '12:00'
});

const deliveryTime = computed(() => `${deliveryTimeInfo.day}, ${deliveryTimeInfo.time} `);

const customerName = ref(null);
const tel = ref(null);
const paymentMethod = ref('cash');
const promo = ref(null);
const personalDataAgreement = ref(true);



const modalTimeIsOpen = ref(false);

const modalDeliveryIsOpen = ref(false);
const modalDeliveryActiveTab = ref(null);

const openModalDelivery = (activeTab) => {
	modalDeliveryIsOpen.value = true;
	modalDeliveryActiveTab.value = activeTab;
};
</script>

<template>
	<form @submit.prevent class="order" :class="$attrs.class">
		<!-- delivery -->
		<div class="order__delivery">
			<p class="order__subtitle">Как вы заберете заказ?</p>
			<CartOrderToggler2
				@tab-click="newValue => openModalDelivery(newValue)"
				:active-tab="deliveryMethod"
				groupName="delivery"
				labelFirst="Доставка"
				labelSecond="Самовывоз"
				valueFirst="delivery"
				valueSecond="pickup"
				class="order__delivery-toggler" />
			<!-- <CartOrderToggler
				@button-click="orderModalDeliveryIsOpen = true"
				v-model="deliveryMethod"
				groupName="delivery"
				labelFirst="Доставка"
				labelSecond="Самовывоз"
				valueFirst="delivery"
				valueSecond="pickup"
				class="order__delivery-toggler" /> -->

			<div class="order__delivery-field-list">
				<CartOrderField
					:model="address2"
					title="Город, улица"
					classModifier="address"
					class="order__delivery-field" />
				<CartOrderField
					@click="modalTimeIsOpen = true"
					:model="deliveryTime"
					title="Время доставки"
					classModifier="time"
					class="order__delivery-field" />
				<CartOrderField
					:model="customerName"
					title="Ваше имя"
					classModifier="name"
					class="order__delivery-field">
					<input v-model="customerName"
						class="order-field__input"
						type="text" name="customer-name" placeholder="Укажите Ваше имя">
				</CartOrderField>
				<CartOrderField
					:model="tel"
					title="Ваш телефон"
					classModifier="tel"
					class="order__delivery-field">
					<input v-model="tel"
						class="order-field__input" type="tel" name="tel" placeholder="+7 (___)___-__-__">
				</CartOrderField>
			</div>
		</div>

		<!-- payment -->
		<div class="order__payment">
			<p class="order__subtitle">Способ оплаты</p>

			<CartOrderToggler2
				@tab-click="newValue => paymentMethod = newValue"
				:active-tab="paymentMethod"
				groupName="payment"
				labelFirst="Картой"
				labelSecond="Наличными"
				valueFirst="card"
				valueSecond="cash"
				class="order__payment-toggler" />
			<!-- <CartOrderToggler v-model="paymentMethod"
				groupName="payment"
				labelFirst="Картой"
				labelSecond="Наличными"
				valueFirst="card"
				valueSecond="cash"
				class="order__payment-toggler" /> -->
		</div>

		<!-- promo -->
		<div class="order__promo">
			<CartOrderField
				:model="promo"
				title="Промокод"
				classModifier="promo">
				<input v-model="promo"
					class="order-field__input"
					type="text" name="promo" placeholder="Введите промокод">
			</CartOrderField>
		</div>

		<!-- price -->
		<div class="order__price">
			<div class="order__price-total-wrap">
				<p class="order__price-total-title">Сумма заказа:</p>
				<p class="order__price-total-value">{{ cartStore.totalPrice }} ₽</p>
			</div>
			<div class="order__price-delivery-wrap">
				<p class="order__price-delivery-title">Сумма доставки:</p>
				<p class="order__price-delivery-value">0 ₽</p>
			</div>
		</div>

		<button class="order__button-submit" type="submit">Оформить заказ</button>

		<div class="order__personal-info">
			<CheckboxWithLabel v-model="personalDataAgreement">
				Даю согласие на обработку <a class="order__personal-info-link" href="#">персональных данных</a>
			</CheckboxWithLabel>
		</div>
	</form>



	<modalWindow
		:isOpen="modalDeliveryIsOpen"
		@toggle-modal="modalDeliveryIsOpen = !modalDeliveryIsOpen">
		<!-- @update:model-value="newValue => deliveryMethod = newValue" -->
		<CartOrderModalDelivery2
			:toggler-active-tab="modalDeliveryActiveTab"
			:deliveryAddress="deliveryAddress"
			:pickupAddress="pickupAddress" />
	</modalWindow>


	<!-- <modalWindow
		:isOpen="modalDeliveryIsOpen"
		@toggle-modal="modalDeliveryIsOpen = !modalDeliveryIsOpen">
		<CartOrderModalDelivery
			@update:model-value="newValue => deliveryMethod = newValue"
			:toggler-model="deliveryMethod"
			:deliveryAddress="deliveryAddress"
			:pickupAddress="pickupAddress" />
	</modalWindow> -->

	<modalWindow
		:isOpen="modalTimeIsOpen"
		@toggle-modal="modalTimeIsOpen = !modalTimeIsOpen">
		<CartOrderModalTime
			@update:model-value="newValue => deliveryTimeInfo.type = newValue"
			:toggler-model="deliveryTimeInfo.type"
			:deliveryTimeInfo="deliveryTimeInfo" />
	</modalWindow>
</template>

<style scoped>
.order {
	max-width: 430px;
	padding: 25px 25px 30px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
}

/* ### delivery ### */
.order__delivery {
	margin-bottom: 30px;
}

.order__subtitle {
	margin-bottom: 20px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.22px;
	color: #fff;
}

.order__delivery-toggler {
	margin-bottom: 25px;
}

.order__delivery-field:not(:last-child) {
	margin-bottom: 15px;
}

/* ### payment ### */
.order__payment {
	margin-bottom: 15px;
}

/* ### promo ### */
.order__promo {
	margin-bottom: 12px;
}

/* ### price ### */
.order__price {
	margin-bottom: 10px;
}

.order__price-total-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid rgba(234, 234, 234, 0.15)
}

.order__price-total-title {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.16px;
	color: var(--accent-color);
}

.order__price-total-value {
	font-family: "Gotu";
	font-size: 28px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.28px;
	color: var(--accent-color);
}

.order__price-delivery-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
}

.order__price-delivery-title {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.16px;
	color: #fff;
}

.order__price-delivery-value {
	font-family: "Gotu";
	font-size: 28px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.28px;
	color: #fff;
}

.order__button-submit {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 65px;
	margin-bottom: 13px;
	padding: 10px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.22px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

.order__personal-info-link {
	text-decoration: underline;
	text-decoration-color: #f9fafb;
	text-decoration-thickness: 1px;
	text-underline-offset: 2px;
	transition: all 150ms ease-in-out;
}

.order__personal-info-link:hover {
	color: var(--accent-color);
	text-decoration-color: var(--accent-color);
}
</style>