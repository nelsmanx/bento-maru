<script setup>
	import ApiService from '~/services/ApiService';
	const response = ref('');
	async function sendEmail(event) {
		let formdata = new FormData(event.target);
		formdata.set('type', 'Форма "Задать вопрос"');
		var obj = {};
		formdata.forEach((value, key) => obj[key] = value);
		var json = JSON.stringify(obj);
		response.value = await new ApiService().sendForm(json);
		event.target.reset();
	}
</script>

<template>
	<div class="callback">
		<h2 class="callback__title" v-if="response">{{ response.message }}</h2>
		<h2 class="callback__title" v-else>Не можете определиться с выбором?</h2>
		<p class="callback__desc" v-if="response">
			Наш специалист свяжется с Вами в ближайшее время
		</p>
		<p class="callback__desc" v-else>
			Оставьте свой номер телефона, мы свяжемся с Вами, расскажем про все наши блюда и выберем для Вас самый подходящий Бенто!
		</p>
		<form @submit.prevent="sendEmail($event)" class="callback__form" action="/">
			<input class="callback__form-input" type="text" name="name" placeholder="Имя">
			<input class="callback__form-input" type="tel" name="phone" placeholder="Телефон">
			<button type="submit" class="callback__form-button">Задать вопрос</button>
		</form>
	</div>
</template>

<style scoped>
.callback {
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