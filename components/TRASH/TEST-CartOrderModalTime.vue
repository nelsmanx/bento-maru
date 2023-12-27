<script setup>
const props = defineProps({
	deliveryTimeInfo: {
		type: Object,
		required: true
	},
	togglerModel: {
		type: String
	}
});

defineEmits(['update:modelValue'])

</script>

<template>
	<div class="order-modal">
		<CartOrderToggler
			:model-value="props.togglerModel"
			@update:model-value="newValue => $emit('update:modelValue', newValue)"
			groupName="time"
			labelFirst="Побыстрее"
			labelSecond="Точное время"
			valueFirst="quick"
			valueSecond="exact"
			class="order-modal__toggler" />

		<div v-if="props.togglerModel === 'quick'"
			class="order-modal__time-details">
			<p class="order-modal__subtitle">Доставка по городу <span class="accent">до 60 минут</span></p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="props.deliveryTimeInfo.day"
					title="День"
					class="order-modal__field-time">
					<input v-model="props.deliveryTimeInfo.day"
						class="order-field__input"
						type="text" name="day" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryTimeInfo.time"
					title="Время"
					class="order-modal__field-time">
					<input v-model="props.deliveryTimeInfo.time"
						class="order-field__input"
						type="text" name="time" placeholder="">
				</CartOrderField>
			</div>
			<p class="order-modal__terms">Ознакомиться с <a class="order-modal__terms-link" href="#">условиями доставки</a></p>
		</div>

		<div v-else
			class="order-modal__time-details">
			<p class="order-modal__subtitle">Укажите время получения</p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="props.deliveryTimeInfo.day"
					title="День"
					class="order-modal__field-time">
					<input v-model="props.deliveryTimeInfo.day"
						class="order-field__input"
						type="text" name="day" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryTimeInfo.time"
					title="Время"
					class="order-modal__field-time">
					<input v-model="props.deliveryTimeInfo.time"
						class="order-field__input"
						type="text" name="time" placeholder="">
				</CartOrderField>
			</div>
		</div>

		<button class="order-modal__button-submit">Применить</button>
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