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
	}
});

const classModifier = props.classModifier ? `order-field__title--${props.classModifier}` :
	'order-field__title--without-icon';
</script>

<template>
	<div :class="{ 'is-active': props.model, 'order-field--cursor-auto': props.cursorAuto }"
		class="order-field">
		<div class="order-field__inner">
			<p :class="classModifier"
				class="order-field__title">
				{{ props.title }}
			</p>
			<slot>
				<p class="order-field__value">{{ props.model }}</p>
			</slot>

			<span :class="{ 'is-active': props.model }"
				class="order-field__check"></span>

			<!-- <label class="order-field__input-label">
				<input
					:name="props.checkboxName"
					type="checkbox"
					class="order-field__input-default">
				<span class="order-field__input-custom"></span>
			</label> -->
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

.order-field.is-active {
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

.order-field__input {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
	border: none;
	background-color: transparent;
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

.order-field__check.is-active {
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

.order-field__check.is-active::before {
	background-image: url("~/assets/icons/check-orange.svg");
}
</style>