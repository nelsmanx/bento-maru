<script setup></script>

<template>
	<div class="callback-modal">
		<button class="callback-modal__button-close"></button>
		<div class="callback-modal__inner">
			<p class="callback-modal__title">Есть вопросы?</p>
			<p class="callback-modal__desc">Оставьте свой номер телефона, мы свяжемся с Вами, расскажем про все наши блюда и&nbsp;выберем для Вас самый подходящий Бенто!</p>
			<form @submit.prevent
				class="callback-modal__form" action="/">
				<input class="callback-modal__form-input callback-modal__form-input--name" type="text" placeholder="Имя">
				<input class="callback-modal__form-input callback-modal__form-input--tel" type="tel" placeholder="Телефон">
				<button class="callback-modal__form-button" type="submit">Задать вопрос</button>
				<div class="callback-modal__personal-info">
					<CheckboxWithLabel>
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
</style>