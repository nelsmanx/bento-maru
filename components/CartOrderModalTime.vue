<script setup>
import { useOrderStore } from '~/stores/orderStore';

const props = defineProps({
	togglerActiveTab: {
		type: String
	}
});

const emit = defineEmits(['toggle-modal']);

const orderStore = useOrderStore();
const {
	deliveryTimeType,
	deliveryTimeFastest,
	deliveryTimeExact,
	deliveryTimeExactTemp
} = storeToRefs(orderStore);

const activeTab = ref(props.togglerActiveTab);

onMounted(() => copyDeliveryTimeExactToTemp());

const copyDeliveryTimeExactToTemp = () => {
	orderStore.makeDeepObjectCopy('deliveryTimeExact', 'deliveryTimeExactTemp');
};

const submitDeliveryTimeExact = () => {
	deliveryTimeType.value = 'exact';
	orderStore.makeDeepObjectCopy('deliveryTimeExactTemp', 'deliveryTimeExact');
	emit('toggle-modal');
};

const submitDeliveryTimeFastest = () => {
	deliveryTimeType.value = 'fastest';
	emit('toggle-modal');
};
</script>

<template>
	<div class="order-modal">
		<CartOrderToggler
			:active-tab="activeTab"
			@tab-click="newValue => activeTab = newValue"
			groupName="time"
			labelFirst="Побыстрее"
			labelSecond="Точное время"
			valueFirst="fastest"
			valueSecond="exact"
			class="order-modal__toggler" />

		<div v-if="activeTab === 'fastest'"
			class="order-modal__time-details">
			<p class="order-modal__subtitle">Доставка по городу <span class="accent">до 60 минут</span></p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="deliveryTimeFastest.day"
					title="День"
					cursor-auto
					class="order-modal__field-time">
				</CartOrderField>
				<CartOrderField
					:model="deliveryTimeFastest.time"
					title="Время"
					cursor-auto
					class="order-modal__field-time">
				</CartOrderField>
			</div>
			<p class="order-modal__terms">Ознакомиться с <a class="order-modal__terms-link" href="#">условиями доставки</a></p>
			<button class="order-modal__button-submit"
				@click=submitDeliveryTimeFastest>
				Применить
			</button>
		</div>

		<div v-else
			class="order-modal__time-details">
			<p class="order-modal__subtitle">Укажите время получения</p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="deliveryTimeExactTemp.day"
					title="День"
					class="order-modal__field-time">
					<input v-model="deliveryTimeExactTemp.day"
						class="order-field__input"
						type="text" name="day" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="deliveryTimeExactTemp.time"
					title="Время"
					class="order-modal__field-time">
					<input v-model="deliveryTimeExactTemp.time"
						class="order-field__input"
						type="text" name="time" placeholder="">
				</CartOrderField>
			</div>
			<button class="order-modal__button-submit"
				@click=submitDeliveryTimeExact>
				Применить
			</button>
		</div>


	</div>
</template>

<style scoped>
.order-modal {
	width: 430px;
	padding: 25px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.order-modal__toggler {
	margin-bottom: 34px;
}

.order-modal__time-details {
	margin-bottom: 16px;
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
</style>