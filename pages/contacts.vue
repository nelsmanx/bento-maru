<script setup>
	import { useAppStore } from '~/stores/appStore';
	import ApiService from '~/services/ApiService';
	const appStore = useAppStore();
	const modalFormIsOpen = ref(false);
	const response = ref('');
	async function sendEmail(event) {
		let formdata = new FormData(event.target);
		formdata.set('type', 'Модальная форма "Задать вопрос"');
		var obj = {};
		formdata.forEach((value, key) => obj[key] = value);
		var json = JSON.stringify(obj);
		response.value = await new ApiService().sendForm(json);
		event.target.reset();
		setTimeout(() => {
			modalFormIsOpen = !modalFormIsOpen;
		}, 2000);
	}
</script>
<template>
	<CategoryTitleList class="category-title--contacts" />

	<section class="contacts">
		<div class="container">
			<div class="contacts__inner">
				<div class="contacts__content">
					<h1 class="contacts__title">КОНТАКТЫ</h1>
					<p class="contacts__desc">
						<strong>Бэнто Мару -</strong> Японские коробочки с едой <br />
						Доставка по Южно-Сахалинску
					</p>
					<p class="contacts__address">{{appStore.siteparams.address}}</p>
					<a class="contacts__mail" href="mailto:65@bentomaru.ru">{{appStore.siteparams.mail}}</a>

					<div class="contacts__tel-group">
						<a class="contacts__tel" :href="'tel:+' + appStore.siteparams.phone.replace(/\D/g,'')">{{appStore.siteparams.phone}}</a>
						<span class="contacts__tel-group-separator"></span>
						<a class="contacts__tel" :href="'tel:+7' + appStore.siteparams.code + appStore.siteparams.stationary.replace(/\D/g,'')">{{appStore.siteparams.stationary}}</a>
					</div>

					<social-list class="contacts__social">
						<SocialItem modifier="vk" :link="appStore.siteparams.vk" />
						<SocialItem modifier="telegram" :link="appStore.siteparams.telegram" />
						<SocialItem modifier="whatsapp" :link="appStore.siteparams.whatsapp" />
					</social-list>

					<div class="contacts__button" @click="modalFormIsOpen = !modalFormIsOpen">Заказать обратный звонок</div>
				</div>

				<div class="contacts__map">
					<picture class="contacts__map-picture">
						<img src="~/assets/images/map-pickup.jpg" alt="Пункт самовывоза на карте">
					</picture>
				</div>
			</div>
		</div>
	</section>

	<Support class="support--contacts" />

	<ModalWindow
		:isOpen="modalFormIsOpen"
		@toggle-modal="modalFormIsOpen = !modalFormIsOpen">
		<div class="callback">
			<button type="button" class="close" @click="modalFormIsOpen = !modalFormIsOpen"><IconsClose /></button>
			<h2 class="callback__title" v-if="response">{{ response.message }}</h2>
			<h2 class="callback__title" v-else>Есть вопросы?</h2>
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
				<label class="custom-checkbox">
					<input type="checkbox" name="policy" checked required>
					<i><IconsCheck /></i>
					<span>
						Нажимая кнопку, вы соглашаетесь с условиями Политики конфиденциальности
					</span>
				</label>
			</form>
		</div>
	</ModalWindow>
</template>


<style scoped>
.category-title--contacts {
	padding: 10px 0 38px;
}

.contacts {
	padding: 35px 0 45px;
}

.contacts__inner {
	display: grid;
	grid-template-columns: 470px 655px;
	justify-content: space-between;
	gap: 50px;
}

.contacts__content {}

.contacts__title {
	margin-bottom: 13px;
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}

.contacts__desc {
	margin-bottom: 24px;
	font-family: "Cera Pro";
	font-size: 18px;
	font-weight: 400;
	line-height: 1.4;
	letter-spacing: 0.18px;
	color: #fff;
}

.contacts__desc strong {
	font-weight: 700;
}

.contacts__address,
.contacts__mail {
	position: relative;
	padding-left: 27px;
	font-family: "Cera Pro";
	font-size: 18px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.18px;
	color: #fff;
}

.contacts__address {
	margin-bottom: 12px;
}

.contacts__mail {
	display: block;
	margin-bottom: 30px;
}

.contacts__address::after,
.contacts__mail::after {
	content: '';
	position: absolute;
	top: 50%;
	left: 3px;
	background-size: contain;
	background-position: left center;
	background-repeat: no-repeat;
	transform: translateY(-50%);
}

.contacts__address::after {
	width: 14px;
	height: 19px;
	background-image: url("~/assets/icons/contacts/address.svg");
}

.contacts__mail::after {
	width: 17px;
	height: 12px;
	background-image: url("~/assets/icons/contacts/mail.svg");
}

.contacts__tel-group {
	display: inline-grid;
	grid-auto-flow: column;
	align-items: center;
	gap: 23px;
	margin-bottom: 34px;
}

.contacts__tel {
	font-family: "Century Gothic";
	font-size: 23px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.contacts__tel-group-separator {
	width: 2px;
	height: 28px;
	border-radius: 8px;
	opacity: 0.4;
	background: radial-gradient(1368610818.45% 56.61% at 55.12% 49.51%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
}

.contacts__social {
	margin-bottom: 26px;
}

.contacts__social :deep(.social__list) {
	gap: 5px;
}

.contacts__social :deep(.social__link) {
	border-radius: 8px;
}

.contacts__button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 413px;
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

.contacts__map {
	padding-top: 10px;
}

.contacts__map-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	/* padding: calc(100% / (621 / 463)) 0 0; */
	border-radius: 12px;
	overflow: hidden;
}

.contacts__map-picture img {
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

.support--contacts {
	padding-bottom: 85px;
}
.callback {
	width: 460px;
	padding: 32px 52px 51px 45px;
	border-radius: 12px;
	background: var(--accent-gradient);
	position: relative;
}

.callback__title {
	margin-bottom: 16px;
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
	letter-spacing: 0.16px;
	color: #fff;
}

.callback__form {
	display: grid;
	grid-template-columns: 1fr;
	gap: 18px;
}

.callback__form-input {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 100%;
	padding: 19px 20px;
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
	height: 60px;
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
.custom-checkbox {
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
	padding-top: 4px;
	cursor: pointer;
}
.custom-checkbox input {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	overflow: hidden;
	height: 0;
	width: 0;
}
.custom-checkbox span {
	display: block;
	flex: 1 1 auto;
	position: relative;
	max-width: 260px;
	color: #FFF;
	font-family: "Century Gothic";
	font-size: 11px;
	font-style: normal;
	font-weight: 400;
	line-height: 13px;
}
.custom-checkbox i {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-right: 9px;
	max-width: 24px;
	min-width: 24px;
	height: 24px;
	border-radius: 5.143px;
	background: #f87736; 
}

.custom-checkbox i svg {
	fill: #fff;
	height: 8px;
	width: 12px;
	opacity: 0;
	display: inline-block;
	transition: 0.5s;
}
.custom-checkbox input:checked ~ i svg {
	opacity: 1;
}
.close {
	width: 17.702px;
	height: 17.687px;
	position: absolute;
	z-index: 2;
	top: 23px;
	right: 22px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: 0;
	background: transparent;
	cursor: pointer;
}
.close svg {
	fill: #fff;
	width: 17.702px;
	height: 17.687px;
}

@media (max-width: 1200px) {
	.contacts__inner {
		grid-template-columns: 470px 1fr;
		gap: 15px;
	}  
}
@media (max-width: 991px) {
	.contacts__inner {
		grid-template-columns: 1fr;
		gap: 15px;
	}
	.contacts__map {
		height: 300px;
	}
	.contacts__button {
		font-size: 22px;
		height: 46px;
		font-size: 16px;
		max-width: 290px;
	}
	.contacts__title {
		font-size: 32px;
	}
	.contacts__desc, .contacts__address, .contacts__mail {
		font-size: 14px;
	}
	.contacts__tel {
		font-size: 20px;
	}
}

@media (max-width: 575px) {
	.callback {
		width: 295px;
		padding: 12px;
		border-radius: 8px;
	}

	.callback__title {
		font-size: 20px;
	}
	
	.callback__desc {
		margin-bottom: 21px;
		font-size: 12px;
	}
	
	.close {
		width: 14.702px;
		height: 14.687px;
		top: 19px;
		right: 14px;
	}
	
	.callback__form-input {
		height: 46px;
		padding: 19px 14px;
	}
	
	.callback__form-button {
		height: 46px;
		font-size: 16px;
	}
	
	.custom-checkbox span {
		max-width: 210px;
		font-size: 12px;
	}
  
}
</style>