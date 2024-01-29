<script setup>
import { useOrderStore } from '~/stores/orderStore';
import * as yup from 'yup';


const props = defineProps({
	togglerActiveTab: {
		type: String
	}
});

const emit = defineEmits(['toggle-modal']);

const orderStore = useOrderStore();

const isMobileScreen = inject('isMobileScreen');

const activeTab = ref(props.togglerActiveTab);


const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();
const scrollLockRemoveDelay = 300;

onMounted(() => addScrollLock());
onUnmounted(() => setTimeout(() => removeScrollLock(), scrollLockRemoveDelay));


// onMounted(() => copyDeliveryTimeExactToTemp());

// const copyDeliveryTimeExactToTemp = () => {
// 	orderStore.makeDeepObjectCopy('deliveryTimeExact', 'deliveryTimeExactTemp');
// };


const exactDeliveryTimeForm = reactive(useForm({
	validationSchema: yup.object({
		exactDeliveryDay: yup.string().min(2).required(),
		exactDeliveryTime: yup.string().matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
	}),
	initialValues: {
		exactDeliveryDay: orderStore.deliveryTimeExact.day || '',
		exactDeliveryTime: orderStore.deliveryTimeExact.time || '',
	}
}));

const exactDeliveryDay = reactive(useField('exactDeliveryDay'));
const exactDeliveryTime = reactive(useField('exactDeliveryTime'));

const submitDeliveryTimeExact = () => {
	orderStore.deliveryTimeType = 'exact';
	orderStore.deliveryTimeExact.day = exactDeliveryDay.value;
	orderStore.deliveryTimeExact.time = exactDeliveryTime.value;
	emit('toggle-modal');
};

const submitDeliveryTimeFastest = () => {
	orderStore.deliveryTimeType = 'fastest';
	emit('toggle-modal');
};


</script>

<template>
	<div class="order-modal">
		<button v-if="isMobileScreen"
			@click="emit('toggle-modal')"
			class="order-modal__button-close">
		</button>

		<CartOrderToggler
			:active-tab="activeTab"
			@tab-click="newValue => activeTab = newValue"
			groupName="time"
			labelFirst="Побыстрее"
			labelSecond="Точное время"
			valueFirst="fastest"
			valueSecond="exact"
			class="order-modal__toggler" />

		<form v-show="activeTab === 'fastest'"
			@submit.prevent="submitDeliveryTimeFastest"
			class="order-modal__time-form">
			<p class="order-modal__subtitle">Доставка по городу <span class="accent">до 60 минут</span></p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="orderStore.deliveryTimeFastest.day"
					isValid
					title="День"
					cursor-auto
					class="order-modal__field-time">
				</CartOrderField>
				<CartOrderField
					:model="orderStore.deliveryTimeFastest.time"
					isValid
					title="Время"
					cursor-auto
					class="order-modal__field-time">
				</CartOrderField>
			</div>
			<p class="order-modal__terms">Ознакомиться с <a class="order-modal__terms-link" href="#">условиями доставки</a></p>
			<button class="order-modal__button-submit">Применить</button>
		</form>

		<form v-show="activeTab === 'exact'"
			@submit.prevent="submitDeliveryTimeExact"
			class="order-modal__time-form">
			<p class="order-modal__subtitle">Укажите время получения</p>
			<div class="order-modal__field-list">
				<CartOrderField
					:isValid="exactDeliveryDay.meta.valid"
					title="День"
					class="order-modal__field-time">
					<input v-model="exactDeliveryDay.value"
						class="order-field__input"
						type="text" name="day" placeholder="">
				</CartOrderField>
				<CartOrderField
					:isValid="exactDeliveryTime.meta.valid"
					title="Время"
					class="order-modal__field-time">
					<input v-model="exactDeliveryTime.value" v-inputmask-time
						class="order-field__input"
						type="text" name="time" placeholder="">
				</CartOrderField>
			</div>
			<button class="order-modal__button-submit"
				:disabled="!exactDeliveryTimeForm.meta.valid">
				Применить
			</button>
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

.order-modal__subtitle {
	margin-bottom: 15px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
}

.order-modal__subtitle .accent {
	color: var(--accent-color);
}

.order-modal__field-list {
	margin-bottom: 24px;
}

.order-modal__field-time:not(:last-child) {
	margin-bottom: 12px;
}

.order-modal__terms {
	margin-bottom: 28px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.16px;
	text-align: center;
	color: rgb(255, 255, 255, 0.7);
}

.order-modal__terms-link {
	text-decoration: underline;
	text-decoration-thickness: 1px;
	text-underline-offset: 4px;
	transition: color 150ms ease-in-out;
}

.order-modal__terms-link:hover {
	color: var(--accent-color);
}

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
		margin-bottom: 12px;
		font-size: 12px;
	}

	.order-modal__field-time:not(:last-child) {
		margin-bottom: 9px;
	}

	.order-modal__field-list {
		margin-bottom: 18px;
	}

	.order-modal__terms {
		margin-bottom: 18px;
		font-size: 12px;
	}

	.order-modal__button-submit {
		height: 50px;
		font-size: 17px;
		border-radius: 9px;
	}
}
</style>