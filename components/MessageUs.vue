<template>
	<div class="message-us">
		<h2 class="message-us__title">Есть вопросы?</h2>
		<p class="message-us__desc">Задавайте их напрямую, позвонив в ресторан, или напишите нам в мессенджер. Мы обязательно ответим!</p>
		<a class="message-us__button" href="https://wa.me/" target="_blank">Напишите нам в мессенджер</a>
	</div>
</template>

<style scoped>
.message-us {
	max-width: 390px;
	min-height: 285px;
	padding: 40px;
	border-radius: 12px;
	background-color: #FEF6F2;
}

.message-us__title {
	margin-bottom: 18px;
	font-family: "Century Gothic";
	font-size: 32px;
	font-weight: 700;
	line-height: normal;
	color: #232323;
}

.message-us__desc {
	margin-bottom: 32px;
	font-family: "Cera Pro";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: 0.14px;
	color: #312f32;
}

.message-us__button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	font-family: "Century Gothic";
	font-size: 15px;
	font-weight: 700;
	line-height: normal;
	color: var(--accent-color);
	background-color: transparent;
	border: 2px solid var(--accent-color);
	border-radius: 12px;
	cursor: pointer;
}

.message-us__button::before {
	content: '';
	width: 18px;
	height: 18px;
	margin-right: 12px;
	background: url("~/assets/icons/message-us-button.svg") center/contain no-repeat;
}
</style>