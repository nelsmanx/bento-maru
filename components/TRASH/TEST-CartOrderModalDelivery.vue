<script setup>
const props = defineProps({
	deliveryAddress: {
		type: Object,
		required: true
	},
	pickupAddress: {
		type: String,
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
			groupName="delivery"
			labelFirst="Доставка"
			labelSecond="Самовывоз"
			valueFirst="delivery"
			valueSecond="pickup"
			class="order-modal__toggler" />

		<div v-if="props.togglerModel === 'delivery'"
			class="order-modal__delivery-details">
			<p class="order-modal__subtitle">Добавьте новый адрес</p>
			<div class="order-modal__field-list">
				<CartOrderField
					:model="props.deliveryAddress.cityStreet"
					title="Город, улица"
					classModifier="address"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.cityStreet"
						class="order-field__input"
						type="text" name="city-street" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryAddress.house"
					title="Дом"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.house"
						class="order-field__input"
						type="text" name="house" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryAddress.apartment"
					title="Квартира"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.apartment"
						class="order-field__input"
						type="text" name="apartment" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryAddress.entrance"
					title="Подъезд"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.entrance"
						class="order-field__input"
						type="text" name="entrance" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryAddress.floor"
					title="Этаж"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.floor"
						class="order-field__input"
						type="text" name="floor" placeholder="">
				</CartOrderField>
				<CartOrderField
					:model="props.deliveryAddress.intercom"
					title="Домофон"
					class="order-modal__field-delivery">
					<input v-model="props.deliveryAddress.intercom"
						class="order-field__input"
						type="text" name="intercom" placeholder="">
				</CartOrderField>
			</div>
			<p class="order-modal__subtitle">Оставьте комментарий</p>
			<textarea v-model="props.deliveryAddress.comment"
				class="order-modal__textarea" name="comment"></textarea>
		</div>

		<div v-else class="order-modal__delivery-details">
			<p class="order-modal__subtitle">Пункт самовывоза</p>
			<CartOrderField
				:model="props.pickupAddress"
				title="Город, улица"
				classModifier="address"
				class="order-modal__field order-modal__field--address-pickup" />
			<div class="order-modal__map">
				<picture class="order-modal__map-picture">
					<img src="~/assets/images/map-pickup.jpg" alt="Карта пункта самовывоза">
				</picture>
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

.order-modal__delivery-details {
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

.order-modal__field-list {
	margin-bottom: 24px;
}

.order-modal__field-delivery:not(:last-child) {
	margin-bottom: 12px;
}

.order-modal__textarea {
	width: 100%;
	height: 140px;
	padding: 6px 12px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	color: #fff;
	letter-spacing: 0.16px;
	border: none;
	border-radius: 12px;
	background-color: #292a2d;
	resize: none;
}

.order-modal__textarea:focus-visible {
	outline: 1px solid var(--accent-color);
}

.order-modal__field--address-pickup {
	margin-bottom: 30px;
}

.order-modal__map {
	margin-bottom: 22px;
}

.order-modal__map-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (382 / 288)) 0 0;
	border-radius: 12px;
	overflow: hidden;
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