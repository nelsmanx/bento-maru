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
					<p class="contacts__address">г.Южно-Сахалинск, ул. Больничная 35Б</p>
					<a class="contacts__mail" href="mailto:65@bentomaru.ru">65@bentomaru.ru</a>

					<div class="contacts__tel-group">
						<a class="contacts__tel" href="tel:+79006600020">+7 (900) 660-00-20</a>
						<span class="contacts__tel-group-separator"></span>
						<a class="contacts__tel" href="tel:+74242600020">600-020</a>
					</div>

					<social-list class="contacts__social">
						<SocialItem modifier="vk" link="https://vk.com/" />
						<SocialItem modifier="telegram" link="https://t.me/" />
						<SocialItem modifier="whatsapp" link="https://wa.me/" />
					</social-list>

					<div class="contacts__button">Заказать обратный звонок</div>
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
</style>