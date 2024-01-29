<script setup>
import ApiService from '~/services/ApiService';
import * as yup from 'yup';

const callbackForm = reactive(useForm({
	validationSchema: yup.object({
		callbackName: yup.string().notRequired(),
		callbackTel: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/).required(),
	})
}));

const callbackName = reactive(useField('callbackName'));
const callbackTel = reactive(useField('callbackTel'));

const callbackFormIsSent = ref(false);

async function sendRequest(event) {
	const formData = new FormData(event.target);
	formData.set('type', 'Форма - "Задать вопрос"');
	const response = ref(await new ApiService().sendForm(formData));
	if (response.value.success === true) {
		callbackFormIsSent.value = true;
	}
	callbackForm.resetForm();
}
</script>

<template>
	<div class="callback">
		<template v-if="callbackFormIsSent">
			<h2 class="callback__title">Ваша заявка отправлена</h2>
			<p class="callback__desc">Наш специалист свяжется с Вами в ближайшее время</p>
		</template>
		<template v-else>
			<h2 class="callback__title">Не можете определиться с выбором?</h2>
			<p class="callback__desc">Оставьте свой номер телефона, мы свяжемся с Вами, расскажем про все наши блюда и выберем для Вас самый подходящий Бенто!</p>
		</template>

		<form @submit.prevent="sendRequest($event)" class="callback__form">
			<input v-model="callbackName.value"
				class="callback__form-input" type="text" name="customer-name" placeholder="Имя">
			<input v-model="callbackTel.value" v-inputmask-tel
				class="callback__form-input"
				type="tel"
				name="customer-tel"
				inputmode="numeric"
				autocomplete="off"
				placeholder="Телефон">
			<button :disabled="!callbackForm.meta.valid"
				type="submit" class="callback__form-button">
				Задать вопрос
			</button>
		</form>
	</div>
</template>

<style scoped>
.callback {
	display: grid;
	grid-template-rows: auto 1fr auto;
	max-width: 855px;
	min-height: 285px;
	padding: 40px 58px 40px 45px;
	background: var(--accent-gradient);
	border-radius: 12px;
}

.callback__title {
	margin-bottom: 24px;
	font-family: "Century Gothic";
	font-size: 32px;
	font-weight: 700;
	line-height: normal;
	color: #fef6f2;
}

.callback__desc {
	margin-bottom: 35px;
	font-family: "Cera Pro";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: 0.18px;
	color: #fff;
}

.callback__form {
	display: grid;
	grid-template-columns: 266px 252px 1fr;
	gap: 14px;
}

.callback__form-input {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	padding: 0 20px;
	font-family: "Century Gothic";
	font-size: 14px;
	font-weight: 700;
	line-height: 1;
	letter-spacing: 0.14px;
	color: #fef6f2;
	background-color: transparent;
	border: 1px solid #fef6f2;
	border-radius: 12px;
}

/* ### chrome autofill ### */
.callback__form-input:-webkit-autofill,
.callback__form-input:-webkit-autofill:hover,
.callback__form-input:-webkit-autofill:focus,
.callback__form-input:-webkit-autofill:active {
	-webkit-transition-delay: 9999s;
	transition-delay: 9999s;
}

.callback__form-input:focus-visible {
	outline: 1px solid #fff;
}

.callback__form-input::placeholder {
	color: #fef6f2;
}

.callback__form-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	font-family: "Century Gothic";
	font-size: 18px;
	font-weight: 700;
	line-height: 1;
	color: var(--accent-color);
	background: #fff;
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

.callback__form-button:disabled {
	opacity: 0.65;
	transition: opacity 250ms ease-in-out;
	cursor: default;
}

@media (max-width: 575.98px) {
	.callback {
		min-height: auto;
		padding: 26px 26px 32px;
		border-radius: 6px;
	}

	.callback__title {
		margin-bottom: 16px;
		font-size: 25px;
		text-align: center;
	}

	.callback__desc {
		margin-bottom: 24px;
		font-size: 12px;
		text-align: center;
	}

	.callback__form {
		grid-template-columns: 100%;
		gap: 14px;
	}

	.callback__form-input {
		height: 50px;
		font-size: 13px;
		border-radius: 6px;
	}

	.callback__form-button {
		height: 54px;
		font-size: 15px;
		border-radius: 6px;
	}
}
</style>