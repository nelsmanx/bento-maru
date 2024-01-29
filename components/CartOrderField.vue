<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	model: {
		required: false
	},
	placeholder: {
		type: String,
		required: false
	},
	classModifier: {
		type: String,
		required: false
	},
	cursorAuto: {
		type: Boolean
	},
	isValid: {
		type: Boolean
	}
});

const classModifier = props.classModifier ? `order-field__title--${props.classModifier}` : 'order-field__title--without-icon';

</script>

<template>
	<div :class="{ 'is-valid': props.isValid, 'order-field--cursor-auto': props.cursorAuto }"
		class="order-field">
		<div class="order-field__inner">
			<p :class="classModifier"
				class="order-field__title">
				{{ props.title }}
			</p>
			<slot>
				<p class="order-field__value">{{ props.model }}</p>
			</slot>

			<span :class="{ 'is-valid': props.isValid }"
				class="order-field__check">
			</span>
		</div>
	</div>
</template>

<style>
.order-field {
	height: 60px;
	padding: 6px 14px 6px 13px;
	border-radius: 12px;
	border: 1.5px solid transparent;
	background-color: #292a2d;
	cursor: pointer;
}

.order-field--cursor-auto {
	cursor: auto;
}

.order-field.is-valid {
	border-color: var(--accent-color);
}

.order-field__inner {
	display: grid;
	grid-template-areas:
		"title check"
		"value check";
	grid-template-columns: 1fr auto;
	grid-template-rows: auto 1fr;
	align-items: start;
	gap: 2px 20px;
	height: 100%;
}

.order-field__title {
	grid-area: title;
	display: flex;
	align-items: center;
	font-family: "Cera Pro";
	font-size: 13px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.13px;
	color: var(--accent-color);
}

.order-field__title::before {
	content: '';
	display: inline-block;
	margin-right: 4px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.order-field__title--without-icon::before {
	margin-right: 0;
}

.order-field__title--address::before {
	width: 8px;
	height: 11px;
	background-image: url("~/assets/icons/order/address.svg");
}

.order-field__title--time::before {
	width: 10px;
	height: 10px;
	background-image: url("~/assets/icons/order/time.svg");
}

.order-field__title--name::before {
	width: 9px;
	height: 10px;
	background-image: url("~/assets/icons/order/name.svg");
}

.order-field__title--tel::before {
	width: 11px;
	height: 11px;
	background-image: url("~/assets/icons/order/tel.svg");
}

.order-field__title--promo::before {
	width: 11px;
	height: 11px;
	background-image: url("~/assets/icons/order/promo.svg");
}

.order-field__value {
	grid-area: value;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
}

.order-field__input,
.order-field__label {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
	border: none;
	background-color: transparent;
	cursor: pointer;
}

.order-field__input:focus::placeholder {
	color: transparent;
	transition: color 150ms ease-in-out;
}

/* ### chrome autofill ### */
.order-field__input:-webkit-autofill,
.order-field__input:-webkit-autofill:hover,
.order-field__input:-webkit-autofill:focus,
.order-field__input:-webkit-autofill:active {
	-webkit-transition-delay: 9999s;
	transition-delay: 9999s;
}

.order-field__input:focus-visible {
	outline: none;
}

.order-field__input::placeholder {
	color: #fff;
}

.order-field__input[type="radio"] {
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	margin: 0;
}

.order-field__check {
	grid-area: check;
	position: relative;
	align-self: center;
	width: 24px;
	height: 24px;
	background-color: transparent;
	border: 1px solid #707070;
	border-radius: 6px;
}

.order-field__check.is-valid {
	border-color: var(--accent-color);
}

.order-field__check::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 9px;
	height: 6px;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url("~/assets/icons/check-gray.svg");
	transform: translate(-50%, -50%);
}

.order-field__check.is-valid::before {
	background-image: url("~/assets/icons/check-orange.svg");
}

@media (max-width: 1200px) {
	.order-field__title {
		font-size: 12px;
	}

	.order-field__value,
	.order-field__input,
	.order-field__label {
		font-size: 13px;
		letter-spacing: 0.16px;
	}

	.order-field {
		height: 48px;
	}
}

@media (max-width: 991px) {
	.order-field {
		border-radius: 9.2px;
	}
}

@media (max-width: 575.98px) {
	.order-field {
		height: 46px;
		padding: 6px 8px 6px 9px;
	}

	.order-field__check {
		width: 18px;
		height: 18px;
		border-radius: 4px;
	}

	.order-field__check::before {
		width: 7px;
		height: 5px;
	}

	.order-field__title {
		font-size: 10px;
	}

	.order-field__title::before {
		margin-right: 2px;
	}

	.order-field__title--without-icon::before {
		margin-right: 0;
	}

	.order-field__value,
	.order-field__input,
	.order-field__label {
		line-height: 1;
	}

	.order__delivery-toggler {
		margin-bottom: 20px;
	}

	.order__delivery-field:not(:last-child) {
		margin-bottom: 9px;
	}

	.order__delivery {
		margin-bottom: 26px;
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