<script setup>
import { useOrderStore } from '~/stores/orderStore';
import { useAppStore } from '~/stores/appStore';
import * as yup from 'yup';


const props = defineProps({
	togglerActiveTab: {
		type: String
	}
});
const emit = defineEmits(['toggle-modal']);


const appStore = useAppStore();
const orderStore = useOrderStore();


const activeTab = ref(props.togglerActiveTab);


const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();
const scrollLockRemoveDelay = 300;

onMounted(() => addScrollLock());
onUnmounted(() => setTimeout(() => removeScrollLock(), scrollLockRemoveDelay));


const submitPickupAddress = () => {
	orderStore.deliveryMethod = 'pickup';
	orderStore.pickupAddress = activePickupAddress.value;
	emit('toggle-modal');
};

const { clientWidth } = useClientWidth();


const activePickupAddress = orderStore.pickupAddress
	? ref(orderStore.pickupAddress)
	: ref(appStore.pickupAddresses[0]);

const deliveryForm = reactive(useForm({
	validationSchema: yup.object({
		cityStreet: yup.string().min(3).required(),
		house: yup.string().min(1).required(),
		apartment: yup.string(),
		entrance: yup.string(),
		floor: yup.string(),
		intercom: yup.string(),
		comment: yup.string(),
	}),
	initialValues: {
		cityStreet: orderStore.deliveryAddress.cityStreet || '',
		house: orderStore.deliveryAddress.house || '',
		apartment: orderStore.deliveryAddress.apartment || '',
		entrance: orderStore.deliveryAddress.entrance || '',
		floor: orderStore.deliveryAddress.floor || '',
		intercom: orderStore.deliveryAddress.intercom || '',
		comment: orderStore.deliveryAddress.comment || ''
	}
}));

const submitDeliveryAddress = deliveryForm.handleSubmit((values) => {
	orderStore.deliveryMethod = 'delivery';
	orderStore.updateDeliveryAddress(values);
	// update delivery address in store
	// Object.keys(values).forEach(key => {
	// 	orderStore.deliveryAddress[key] = values[key];
	// });
	emit('toggle-modal');
});




const cityStreet = reactive(useField('cityStreet'));
// if (orderStore.deliveryAddress.cityStreet) {
// 	deliveryForm.setFieldValue('cityStreet', orderStore.deliveryAddress.cityStreet);
// }

const house = reactive(useField('house'));
// if (orderStore.deliveryAddress.house) {
// 	deliveryForm.setFieldValue('house', orderStore.deliveryAddress.house);
// }

const apartment = reactive(useField('apartment'));
// if (orderStore.deliveryAddress.apartment) {
// 	deliveryForm.setFieldValue('apartment', orderStore.deliveryAddress.apartment);
// }

const entrance = reactive(useField('entrance'));
// if (orderStore.deliveryAddress.entrance) {
// 	deliveryForm.setFieldValue('entrance', orderStore.deliveryAddress.entrance);
// }

const floor = reactive(useField('floor'));
// if (orderStore.deliveryAddress.floor) {
// 	deliveryForm.setFieldValue('floor', orderStore.deliveryAddress.floor);
// }

const intercom = reactive(useField('intercom'));
// if (orderStore.deliveryAddress.intercom) {
// 	deliveryForm.setFieldValue('intercom', orderStore.deliveryAddress.intercom);
// }

const comment = reactive(useField('comment'));
// if (orderStore.deliveryAddress.comment) {
// 	deliveryForm.setFieldValue('comment', orderStore.deliveryAddress.comment);
// }



</script>

<template>
	<div class="order-modal" @toggle-modal.native="$emit('toggle-modal')">
		<button v-if="clientWidth < 576"
			@click="emit('toggle-modal')"
			class="order-modal__button-close">
		</button>

		<CartOrderToggler
			:active-tab="activeTab"
			@tab-click="newValue => activeTab = newValue"
			groupName="delivery"
			labelFirst="Доставка"
			labelSecond="Самовывоз"
			valueFirst="delivery"
			valueSecond="pickup"
			class="order-modal__toggler" />

		<form v-show="activeTab === 'delivery'"
			@submit.prevent="submitDeliveryAddress"
			class="order-modal__delivery-form">
			<p class="order-modal__subtitle">Добавьте новый адрес</p>
			<div class="order-modal__field-list">
				<CartOrderField
					:isValid="cityStreet.meta.valid"
					title="Город, улица"
					classModifier="address"
					class="order-modal__field-delivery">
					<input v-model="cityStreet.value"
						class="order-field__input"
						type="text" name="city-street" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="house.meta.valid"
					title="Дом"
					class="order-modal__field-delivery">
					<input v-model="house.value"
						class="order-field__input"
						type="text" name="house" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="apartment.meta.valid"
					title="Квартира"
					class="order-modal__field-delivery">
					<input v-model="apartment.value"
						class="order-field__input"
						type="text" name="apartment" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="entrance.meta.valid"
					title="Подъезд"
					class="order-modal__field-delivery">
					<input v-model="entrance.value"
						class="order-field__input"
						type="text" name="entrance" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="floor.meta.valid"
					title="Этаж"
					class="order-modal__field-delivery">
					<input v-model="floor.value"
						class="order-field__input"
						type="text" name="floor" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="intercom.meta.valid"
					title="Домофон"
					class="order-modal__field-delivery">
					<input v-model="intercom.value"
						class="order-field__input"
						type="text" name="intercom" placeholder="">
				</CartOrderField>
			</div>
			<p class="order-modal__subtitle">Оставьте комментарий</p>
			<textarea
				v-model="comment.value"
				:class="{ 'is-valid': intercom.meta.valid }"
				class="order-modal__textarea"
				name="comment">
		</textarea>
			<button :disabled="!deliveryForm.meta.valid"
				class="order-modal__button-submit">
				Применить
			</button>
		</form>

		<form v-show="activeTab === 'pickup'" class="order-modal__delivery-form"
			@submit.prevent="submitPickupAddress">
			<p class="order-modal__subtitle">Пункт самовывоза</p>
			<div class="order-modal__pickup-addresses">
				<CartOrderField v-for="(pickupAddress, index) in appStore.pickupAddresses"
					@click="activePickupAddress = pickupAddress"
					:isValid="activePickupAddress === pickupAddress"
					title="Город, улица"
					classModifier="address"
					class="order-modal__field-pickup">
					<label class="order-field__label">
						{{ pickupAddress }}
						<input v-model="activePickupAddress"
							class="order-field__input" type="radio" name="pickup-address" :value="pickupAddress">
					</label>
				</CartOrderField>
			</div>

			<div class="order-modal__map">
				<MapComponent />

				<!-- <picture class="order-modal__map-picture">
					<img src="~/assets/images/map-pickup.jpg" alt="Карта пункта самовывоза">
				</picture> -->
			</div>
			<button class="order-modal__button-submit">Применить</button>
		</form>
	</div>
</template>

<style scoped>
.order-modal {
	position: relative;
	width: 430px;
	padding: 25px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.order-modal__button-close {
	position: absolute;
	top: -50px;
	right: -5px;
	width: 30px;
	height: 30px;
	background-image: url("~/assets/icons/close.svg");
	background-color: transparent;
	background-size: 16px 16px;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
}

.order-modal__toggler {
	margin-bottom: 34px;
}

.order-modal__delivery-form {}

.order-modal__subtitle {
	margin-bottom: 15px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
}

.order-modal__field-list {
	margin-bottom: 24px;
}

.order-modal__field-delivery:not(:last-child) {
	margin-bottom: 12px;
}

.order-modal__textarea {
	width: 100%;
	height: 140px;
	margin-bottom: 16px;
	padding: 6px 12px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	color: #fff;
	letter-spacing: 0.16px;
	border: 1px solid transparent;
	border-radius: 12px;
	background-color: #292a2d;
	resize: none;
}

.order-modal__textarea.is-valid {
	border-color: var(--accent-color);
}

.order-modal__textarea:focus-visible {
	outline: none;
	/* border-color: var(--accent-color); */
}

.order-modal__pickup-addresses {
	margin-bottom: 30px;
}

.order-modal__field-pickup:not(:last-child) {
	margin-bottom: 12px;
}

.order-modal__map {
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	margin-bottom: 22px;
	padding: calc(100% / (382 / 288)) 0 0;
	border-radius: 12px;
	overflow: hidden;
}

.order-modal :deep(.yandex-container) {
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

/* .order-modal__map-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (382 / 288)) 0 0;
}

.order-modal__map-picture img {
	position: absolute;
	inset: 0;
	display: block;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
} */
.order-modal__button-submit {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 65px;
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

.order-modal__button-submit:disabled {
	opacity: 0.65;
	transition: opacity 250ms ease-in-out;
	cursor: default;
}

@media (max-width: 575.98px) {
	.order-modal {
		width: 330px;
		padding: 20px;
	}

	.order-modal__toggler {
		margin-bottom: 25px;
	}

	.order-modal__subtitle {
		margin-bottom: 15px;
		font-size: 12px;
	}

	.order-modal__field-delivery:not(:last-child) {
		margin-bottom: 9px;
	}

	.order-modal__field-list {
		margin-bottom: 18px;
	}

	.order-modal__textarea {
		height: 105px;
		margin-bottom: 12px;
		border-radius: 6px;
	}

	.order-modal__map {
		margin-bottom: 12px;
	}

	.order-modal__pickup-addresses {
		margin-bottom: 22px;
	}

	.order-modal__button-submit {
		height: 50px;
		font-size: 17px;
		border-radius: 9px;
	}
}
</style>