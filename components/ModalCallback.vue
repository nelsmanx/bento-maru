<script setup>
import ApiService from '~/services/ApiService';
// import { useAppStore } from '~/stores/appStore';
import * as yup from 'yup';

defineEmits(['toggle-modal']);

// const appStore = useAppStore();

const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();
const scrollLockRemoveDelay = 300;


onMounted(() => addScrollLock());
onUnmounted(() => setTimeout(() => removeScrollLock(), scrollLockRemoveDelay));


const callbackModalForm = reactive(useForm({
	validationSchema: yup.object({
		callbackModalName: yup.string().notRequired(),
		callbackModalTel: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/).required(),
		callbackModalPersonalDataAgreement: yup.boolean().oneOf([true]).required()
	})
}));

const callbackModalName = reactive(useField('callbackModalName'));
const callbackModalTel = reactive(useField('callbackModalTel'));
const callbackModalPersonalDataAgreement = reactive(useField('callbackModalPersonalDataAgreement'));
callbackModalForm.setFieldValue('callbackModalPersonalDataAgreement', true);

const callbackModalFormIsSent = ref(false);

async function sendRequest(event) {
	const formData = new FormData(event.target);
	formData.set('type', 'Форма - "Задать вопрос"');
	const response = ref(await new ApiService().sendForm(formData));
	if (response.value.success === true) {
		callbackModalFormIsSent.value = true;
	}
	callbackModalForm.resetForm();
}
</script>

<template>
	<div class="callback-modal">
		<button class="callback-modal__button-close"
			@click="$emit('toggle-modal')">
		</button>
		<div class="callback-modal__inner">
			<template v-if="callbackModalFormIsSent">
				<h2 class="callback-modal__title">Ваша заявка отправлена</h2>
				<p class="callback-modal__desc">Наш специалист свяжется с Вами в ближайшее время</p>
			</template>
			<template v-else>
				<h2 class="callback-modal__title">Есть вопросы?</h2>
				<p class="callback-modal__desc">Оставьте свой номер телефона, мы свяжемся с Вами, расскажем про все наши блюда и&nbsp;выберем для Вас самый подходящий Бенто!</p>
			</template>

			<form @submit.prevent="sendRequest($event)"
				class="callback-modal__form">
				<input v-model="callbackModalName.value"
					class="callback-modal__form-input callback-modal__form-input--name" type="text" placeholder="Имя">
				<input v-model="callbackModalTel.value" v-inputmask-tel
					class="callback-modal__form-input callback-modal__form-input--tel"
					type="tel"
					inputmode="numeric"
					autocomplete="off"
					placeholder="Телефон">
				<button :disabled="!callbackModalForm.meta.valid"
					type="submit" class="callback-modal__form-button">
					Задать вопрос
				</button>

				<div class="callback-modal__personal-info">
					<CheckboxWithLabel v-model="callbackModalPersonalDataAgreement.value">
						Нажимая кнопку, вы соглашаетесь с условиями&nbsp;<a class="callback-modal__personal-info-link" href="#">Политики&nbsp;конфиденциальности</a>
					</CheckboxWithLabel>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
.callback-modal {
	position: relative;
	max-width: 460px;
	min-height: 518px;
	padding: 32px 50px 40px 45px;
	background: var(--accent-gradient);
	border-radius: 12px;
}

.callback-modal__button-close {
	position: absolute;
	top: 12px;
	right: 12px;
	width: 40px;
	height: 40px;
	background-image: url("~/assets/icons/close.svg");
	background-color: transparent;
	background-size: 17px 17px;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
}

.callback-modal__title {
	margin-bottom: 16px;
	font-family: "Century Gothic";
	font-size: 32px;
	font-weight: 700;
	line-height: normal;
	color: #fef6f2;
}

.callback-modal__desc {
	margin-bottom: 36px;
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: 0.18px;
	color: #fff;
}

.callback-modal__form {
	display: flex;
	flex-direction: column;
}

.callback-modal__form-input {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	padding: 0 20px;
	font-family: "Century Gothic";
	font-size: 14px;
	font-weight: 700;
	line-height: 1.6;
	letter-spacing: 0.14px;
	color: #fef6f2;
	background-color: transparent;
	border: 1px solid #fef6f2;
	border-radius: 12px;
}

/* ### chrome autofill ### */
.callback-modal__form-input:-webkit-autofill,
.callback-modal__form-input:-webkit-autofill:hover,
.callback-modal__form-input:-webkit-autofill:focus,
.callback-modal__form-input:-webkit-autofill:active {
	-webkit-transition-delay: 9999s;
	transition-delay: 9999s;
}

.callback-modal__form-input:focus-visible {
	outline: 1px solid #fff;
}

.callback-modal__form-input::placeholder {
	color: #fef6f2;
}

.callback-modal__form-input--name {
	margin-bottom: 22px;
}

.callback-modal__form-input--tel {
	margin-bottom: 16px;
}

.callback-modal__form-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	margin-bottom: 22px;
	font-family: "Century Gothic";
	font-size: 20px;
	font-weight: 700;
	line-height: normal;
	color: var(--accent-color);
	background: #fff;
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

.callback-modal__form-button:disabled {
	opacity: 0.65;
	transition: opacity 250ms ease-in-out;
	cursor: default;
}

.callback-modal__personal-info {}

.callback-modal__personal-info-link {
	text-decoration: underline;
	text-decoration-thickness: 1px;
	text-underline-offset: 2px;
}

.callback-modal__personal-info :deep(.checkbox-w-l__label) {
	display: flex;
	line-height: 1.2;
}

.callback-modal__personal-info :deep(.checkbox-w-l__label-content) {
	font-family: "Century Gothic";
	font-size: 11px;
	font-weight: 400;
}

.callback-modal__personal-info :deep(.checkbox-w-l__input-wrap) {
	top: 2px;
	margin-right: 10px;
}

.callback-modal__personal-info :deep(.checkbox-w-l__custom-input) {
	width: 24px;
	height: 24px;
	background-color: rgba(255 255 255 /0.2);
	border: none;
	border-radius: 5px;
}

.callback-modal__personal-info :deep(.checkbox-w-l__default-input:checked + .checkbox-w-l__custom-input::before) {
	width: 11px;
	height: 6px;
	background-image: url("~/assets/icons/check-white.svg");
}

@media (max-width: 992.98px) {
	.callback-modal {
		max-width: 330px;
		min-height: auto;
		padding: 26px 26px 32px;
		border-radius: 6px;
	}

	.callback-modal__title {
		margin-bottom: 16px;
		font-size: 25px;
		text-align: center;
	}

	.callback-modal__desc {
		margin-bottom: 24px;
		font-size: 12px;
		text-align: center;
	}

	.callback-modal__form-input {
		height: 50px;
		font-size: 13px;
		border-radius: 6px;
	}

	.callback-modal__form-input--name,
	.callback-modal__form-input--tel {
		margin-bottom: 14px;
	}

	.callback-modal__form-button {
		height: 54px;
		font-size: 15px;
		border-radius: 6px;
	}
}
</style>