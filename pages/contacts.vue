<script setup>
import { useAppStore } from '~/stores/appStore';

const appStore = useAppStore();
</script>

<template>
	<Head>
		<Title>Японские коробочки с едой</Title>
		<Meta name="description" content="Японские коробочки с едой" />
		<Meta property="og:type" content="website" />
		<Meta property="og:url" content="https://bentomaru.ru" />
		<Meta property="og:locale" content="ru_RUS" />
		<Meta property="og:image" content="https://bentomaru.ru/img/bento-mix.jpg" />
		<Meta property="og:title" content="Японские коробочки с едой" />
		<Meta property="og:description" content="Японские коробочки с едой" />
	</Head>

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
					<p class="contacts__address">{{ appStore.siteparams.address }}</p>
					<a class="contacts__mail" href="mailto:65@bentomaru.ru">{{ appStore.siteparams.mail }}</a>

					<div class="contacts__tel-group">
						<a class="contacts__tel" :href="'tel:+' + appStore.siteparams.phone.replace(/\D/g, '')">{{ appStore.siteparams.phone }}</a>
						<span class="contacts__tel-group-separator"></span>
						<a class="contacts__tel" :href="'tel:+7' + appStore.siteparams.code + appStore.siteparams.stationary.replace(/\D/g, '')">{{ appStore.siteparams.stationary }}</a>
					</div>

					<social-list class="contacts__social">
						<SocialItem modifier="vk" :link="appStore.siteparams.vk" />
						<SocialItem modifier="telegram" :link="appStore.siteparams.telegram" />
						<SocialItem modifier="whatsapp" :link="appStore.siteparams.whatsapp" />
					</social-list>

					<div class="contacts__button" @click="appStore.toggleModalWindow('modalCallback')">Заказать обратный звонок</div>
				</div>

				<div class="contacts__map">
					<MapComponent />
				</div>
			</div>
		</div>
	</section>

	<Support class="support--contacts" />
</template>


<style lang="scss" scoped>
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

	@media (max-width: 1400px) {
		grid-template-columns: 470px 1fr;
		gap: 30px;
	}

	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
	}
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

	@media (max-width: 1200px) {
		font-size: 34px;
	}

	@media (max-width: 768px) {
		font-size: 28px;
	}

	@media (max-width: 575px) {
		font-size: 24px;
	}
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
	margin-top: 10px;
	border-radius: 12px;
	overflow: hidden;
}

.support--contacts {
	padding-bottom: 85px;
}

@media (max-width: 991px) {
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

	.contacts__desc,
	.contacts__address,
	.contacts__mail {
		font-size: 14px;
	}

	.contacts__tel {
		font-size: 20px;
	}
}

@media (max-width: 575px) {
	.contacts__tel {
		font-size: 16px;
	}
}
</style>