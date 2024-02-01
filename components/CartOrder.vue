<script setup>
import { useAppStore } from '~/stores/appStore';
import { useCartStore } from '~/stores/cartStore';
import { useOrderStore } from '~/stores/orderStore';
import ApiService from '~/services/ApiService';
import * as yup from 'yup';


const appStore = useAppStore();

const cartStore = useCartStore();
cartStore.loadCart();

const orderStore = useOrderStore();

orderStore.setDefaultPickupAddress();

const addressPreview = computed(() => orderStore.addressPreview);
const deliveryTimePreview = computed(() => orderStore.deliveryTimePreview);


// const modalDeliveryIsOpen = ref(false);
// const modalDeliveryActiveTab = ref(null);


const openModalDelivery = (togglerActiveTab) => {
	appStore.modalDelivery.togglerActiveTab = togglerActiveTab;
	appStore.modalDelivery.isOpen = true;
	// modalDeliveryIsOpen.value = true;
	// modalDeliveryActiveTab.value = activeTab;
};


// const modalTimeIsOpen = ref(false);
// const modalTimeActiveTab = ref(null);

const openModalTime = (togglerActiveTab) => {
	appStore.modalTime.togglerActiveTab = togglerActiveTab;
	appStore.modalTime.isOpen = true;
	// modalTimeIsOpen.value = true;
	// modalTimeActiveTab.value = orderStore.deliveryTimeType;
};


const orderForm = reactive(useForm({
	validationSchema: yup.object({
		customerName: yup.string().min(2).required(),
		customerTel: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/).required(),
		personalDataAgreement: yup.boolean().oneOf([true]).required()
	}),
	initialValues: {
		personalDataAgreement: true,
	}
}));

const customerName = reactive(useField('customerName'));
const customerTel = reactive(useField('customerTel'));
const personalDataAgreement = reactive(useField('personalDataAgreement', {
	// initialValue: true !not working
}));

const checkInputValue = (input) => {
	if (input.meta.valid) {
		orderStore.updateStateKey(input.name, input.value);
	}
};


const setFastestDeliveryTime = () => {
	const scheduleStartHours = 8;
	const scheduleEndHours = 19;
	const baseDeliveryTimeInMinutes = 60;

	// const testDate = new Date(2024, 0, 24, 5, 0);
	// const currentDate = new Date(testDate);
	// const fastestPossibleDate.value = new Date(testDate);

	const currentDate = useNow({ interval: 60000 });

	function getFastestPossibleDate() {
		const fastestPossibleDate = new Date(currentDate.value);

		fastestPossibleDate.setMinutes(fastestPossibleDate.getMinutes() + baseDeliveryTimeInMinutes);

		// 19, 20, 21, 22, 23 - нерабочие часы текущей смены после завершения рабочего дня. Если час ближайшего времени доставки попадает в этот интервал, то день ближайшего времени доставки переносится на следующий
		if ([scheduleEndHours, 20, 21, 22, 23].includes(fastestPossibleDate.getHours())) {
			fastestPossibleDate.setDate(fastestPossibleDate.getDate() + 1);
		}

		// Если час ближайшего времени доставки позже закрытия смены и раньше открытия, тогда ближайшее время доставки устанавливается на время открытия смены + 1 час (baseDeliveryTimeInMinutes)
		if (fastestPossibleDate.getHours() >= scheduleEndHours || fastestPossibleDate.getHours() <= scheduleStartHours) {
			fastestPossibleDate.setHours(scheduleStartHours);
			// добавлено 30 минут по причине начала не ровно с 8, а с 8:30
			fastestPossibleDate.setMinutes(30 + baseDeliveryTimeInMinutes);
			fastestPossibleDate.setSeconds(0);
		}

		return fastestPossibleDate;
	};

	const fastestPossibleDate = ref(getFastestPossibleDate());
	const fastestDay = computed(() => fastestPossibleDate.value.getDate() === currentDate.value.getDate() ? 'Сегодня' : 'Завтра');;
	const fastestDateFormatted = computed(() => {
		return useDateFormat(fastestPossibleDate.value, 'HH:mm', { locales: 'ru-RU' }).value;
	});

	orderStore.setDeliveryTimeFastest(fastestDay.value, fastestDateFormatted.value);

	watch(currentDate, () => {
		fastestPossibleDate.value = getFastestPossibleDate();
		orderStore.setDeliveryTimeFastest(fastestDay.value, fastestDateFormatted.value);
	});
};
setFastestDeliveryTime();




// ########################################

async function sendOrder(event) {
	const order = {};
	order.cartDetails = cartStore.cartDetails;
	order.orderDetails = orderStore.orderDetails;
	const response = ref(await new ApiService().sendForm(JSON.stringify(order)));
	// response.value = await useFetch('https://bentomaru.sv34.ru/api/send-form', {
	// 	method: 'POST',
	// 	body: JSON.stringify(order)
	// });
	if (response.value.success === true) {
		orderStore.orderIsSent = true;
		cartStore.clearProductsAndAddons();
	}
}
</script>

<template>
	<form @submit.prevent="sendOrder()" class="order" :class="$attrs.class">
		<!-- delivery -->
		<div class="order__delivery">
			<p class="order__subtitle">Как вы заберете заказ?</p>
			<CartOrderToggler
				@tab-click="newValue => openModalDelivery(newValue)"
				:active-tab="orderStore.deliveryMethod"
				groupName="delivery"
				labelFirst="Доставка"
				labelSecond="Самовывоз"
				valueFirst="delivery"
				valueSecond="pickup"
				class="order__delivery-toggler" />

			<div class="order__delivery-field-list">
				<!-- @click="openModalDelivery(orderStore.deliveryMethod)" -->
				<CartOrderField
					@click="openModalDelivery(orderStore.deliveryMethod)"
					:model="addressPreview"
					isValid
					title="Город, улица"
					classModifier="address"
					class="order__delivery-field" />

				<CartOrderField
					@click="openModalTime(orderStore.deliveryTimeType)"
					:model="deliveryTimePreview"
					isValid
					title="Время доставки"
					classModifier="time"
					class="order__delivery-field" />

				<CartOrderField
					:isValid="customerName.meta.valid"
					title="Ваше имя"
					classModifier="name"
					class="order__delivery-field">
					<input v-model="customerName.value"
						@blur="checkInputValue(customerName)"
						class="order-field__input"
						type="text" name="customer-name" placeholder="Укажите Ваше имя">
				</CartOrderField>

				<CartOrderField
					:isValid="customerTel.meta.valid"
					title="Ваш телефон"
					classModifier="tel"
					class="order__delivery-field">
					<input v-model="customerTel.value" v-inputmask-tel
						@blur="checkInputValue(customerTel)"
						class="order-field__input"
						type="tel" name="tel"
						inputmode="numeric"
						autocomplete="off"
						placeholder="+7 (___)___-__-__">
				</CartOrderField>
			</div>
		</div>

		<!-- payment -->
		<div class="order__payment">
			<p class="order__subtitle">Способ оплаты</p>

			<CartOrderToggler
				@tab-click="newValue => orderStore.paymentMethod = newValue"
				:active-tab="orderStore.paymentMethod"
				groupName="payment"
				labelFirst="Картой"
				labelSecond="Наличными"
				valueFirst="card"
				valueSecond="cash"
				class="order__payment-toggler" />
		</div>

		<!-- promo -->
		<!-- <div class="order__promo">
			<CartOrderField
				title="Промокод"
				classModifier="promo">
				<input v-model="orderStore.promo"
					class="order-field__input"
					type="text" name="promo" placeholder="Введите промокод">
			</CartOrderField>
		</div> -->

		<!-- price -->
		<div class="order__price">
			<div class="order__price-total-wrap">
				<p class="order__price-total-title">Сумма заказа:</p>
				<p class="order__price-total-value">{{ cartStore.totalPrice + cartStore.addonsPrice }} ₽</p>
			</div>
			<div class="order__price-delivery-wrap">
				<p class="order__price-delivery-title">Сумма доставки:</p>
				<p class="order__price-delivery-value">0 ₽</p>
			</div>
		</div>

		<button class="order__button-submit"
			:disabled="!orderForm.meta.valid"
			type="submit">
			Оформить заказ
		</button>

		<div class="order__personal-info">
			<CheckboxWithLabel v-model="personalDataAgreement.value">
				Даю согласие на обработку <a class="order__personal-info-link" href="#">персональных данных</a>
			</CheckboxWithLabel>
		</div>
	</form>

	<!-- <modalWindow
		classModifier="modal--delivery"
		:isOpen="modalDeliveryIsOpen"
		@toggle-modal="modalDeliveryIsOpen = !modalDeliveryIsOpen">
		<CartOrderModalDelivery
			:toggler-active-tab="modalDeliveryActiveTab"
			@toggle-modal="modalDeliveryIsOpen = !modalDeliveryIsOpen" />
	</modalWindow>

	<modalWindow
		classModifier="modal--time"
		:isOpen="modalTimeIsOpen"
		@toggle-modal="modalTimeIsOpen = !modalTimeIsOpen">
		<CartOrderModalTime
			:toggler-active-tab="modalTimeActiveTab"
			@toggle-modal="modalTimeIsOpen = !modalTimeIsOpen" />
	</modalWindow> -->
</template>

<style>
.modal--delivery .modal__content,
.modal--time .modal__content {
	/* width: fit-content;
	margin: 135px auto 0 auto; */
	align-self: start;
	margin-top: 135px;
}

@media (max-width: 575.98px) {

	.modal--delivery .modal__content,
	.modal--time .modal__content {
		/* margin: 70px auto 0 auto; */
		margin-top: 70px;
	}
}
</style>

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

.order__button-submit:disabled {
	opacity: 0.65;
	transition: opacity 250ms ease-in-out;
	cursor: default;
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

@media (max-width: 1200px) {
	.order {
		max-width: 100%;
		padding: 19px;
		border-radius: 9px;
	}

	.order__subtitle {
		font-size: 16.881px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.169px;
		margin-bottom: 15px;
	}

	.order__price-total-title,
	.order__price-delivery-title {
		font-size: 14px;
	}

	.order__price-total-wrap {
		padding: 10px 0;
	}

	.order__price-total-value,
	.order__price-delivery-value {
		font-size: 22px;
	}

	.order__button-submit {
		height: 50px;
		font-size: 17px;
		letter-spacing: 0.169px;
	}
}

@media (max-width: 575.98px) {
	.order__delivery-toggler {
		margin-bottom: 20px;
	}

	.order__delivery-field:not(:last-child) {
		margin-bottom: 12px;
	}

	.order__delivery {
		margin-bottom: 22px;
	}

	.order__payment {
		margin-bottom: 12px;
	}

	.order__price-total-wrap {
		padding: 8px 0;
	}

	.order__price-total-title,
	.order__price-delivery-title {
		font-size: 12px;
	}

	.order__price-delivery-wrap {
		padding: 9px 0;
	}

	.order__button-submit {
		border-radius: 9px;
	}

	.order__personal-info :deep(.checkbox-w-l__label) {
		display: flex;
	}

	.order__personal-info :deep(.checkbox-w-l__input-wrap) {
		top: 0;
	}

	.order__personal-info :deep(.checkbox-w-l__custom-input) {
		width: 15px;
		height: 15px;
	}

	.order__personal-info :deep(.checkbox-w-l__label-content) {
		font-size: 11px;
	}

	.order__personal-info :deep(.checkbox-w-l__default-input:checked + .checkbox-w-l__custom-input::before) {
		top: 5px;
		transform: translateX(-50%);
	}
}
</style>