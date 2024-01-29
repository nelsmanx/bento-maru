<template>
	<CategoryTitleList class="category-title--delivery" />

	<section class="delivery">
		<div class="container">
			<div class="delivery__inner">
				<div class="delivery__content">
					<h1 class="delivery__title">УСЛОВИЯ ДОСТАВКИ</h1>
					<div class="delivery__text-group-1">
						<p class="delivery__par">Осуществляем доставку по всему г. Южно-Сахалинск не зависимо от Вашего района</p>
						<p class="delivery__par">Принимаем заказы на доставку: 10:00-23:59</p>
						<p class="delivery__par">Принимаем заказы на самовывоз: 10:00-23:30</p>
					</div>
					<p class="delivery__subtitle">Самовывоз заказов</p>
					<div class="delivery__text-group-2">
						<p class="delivery__par">Выдаем заказы по адресу г.Южно-Сахалинск, ул. Больничная 35Б</p>
					</div>
					<div class="delivery__button">Доставка - от 1 000 рублей!</div>
				</div>

				<div class="delivery__map">
					<picture class="delivery__map-picture">
						<img src="~/assets/images/map-pickup.jpg" alt="Пункт самовывоза на карте">
					</picture>
				</div>
			</div>
		</div>
	</section>

	<div class="delivery-info delivery-info--time">
		<div class="container">
			<div class="delivery-info__inner">
				<h2 class="delivery-info__title">Время доставки</h2>
				<p class="delivery-info__par">Время доставки заказа зависит от выбранного адреса и составляет примерно 60 минут. Пожалуйста, находитесь по адресу в течение этого времени, т.к. курьер может приехать раньше, и не отключайте телефон.</p>
				<p class="delivery-info__par">Время доставки может увеличиться в зависимости от погодных условий, ремонта дорог и загруженности дорожного движения. Просим вас с пониманием относиться к подобным случаям.</p>
				<p class="delivery-info__par">Время доставки может увеличиться в праздничные и предпраздничные дни: 13&nbsp;января, 14&nbsp;февраля, 23&nbsp;февраля, 8&nbsp;марта, 9&nbsp;мая, 30-31&nbsp;декабря. Оформите заказ заранее и будьте уверены, что получите его точно в запланированное время.<br />
					Вы всегда можете задать вопрос об актуальном времени доставки нашим операторам.
				</p>
			</div>
		</div>
	</div>

	<div class="delivery-info delivery-info--payment">
		<div class="container">
			<div class="delivery-info__inner delivery-info__inner--payment">
				<h2 class="delivery-info__title">Оплата заказа</h2>
				<p class="delivery-info__par">
					<span class="accent">СПОСОБЫ ОПЛАТЫ</span><br />
					Вы можете оплатить заказ наличными или банковской картой.
				</p>
				<p class="delivery-info__par">
					<span class="accent">ОПЛАТА НАЛИЧНЫМИ: </span><br />
					Мы принимаем наличную оплату в рублях.
				</p>
				<p class="delivery-info__par">
					<span class="accent">ОПЛАТА БАНКОВСКОЙ КАРТОЙ И ПРИ ПОЛУЧЕНИИ ЧЕРЕЗ МОБИЛЬНЫЙ ТЕРМИНАЛ КУРЬЕРА:</span><br />
					Заказ можно оплатить по банковской. Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем: мы принимаем карты VISA, MASTERCARD и МИР.
				</p>
			</div>
		</div>
	</div>

	<Support class="support--delivery" />
</template>

<!-- <style scoped>
.category-title--delivery {
	padding: 10px 0 38px;
}

/* ### delivery ### */
.delivery {
	padding: 35px 0 60px;
}

.delivery__inner {
	display: grid;
	grid-template-columns: 470px 655px;
	justify-content: space-between;
	gap: 50px;
}

.delivery__content {}

.delivery__title {
	margin-bottom: 25px;
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}

.delivery__text-group-1 {
	margin-bottom: 24px;
}

.delivery__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;
}

.delivery__par:not(:last-child) {
	margin-bottom: 10px;
}

.delivery__subtitle {
	margin-bottom: 15px;
	font-family: "Century Gothic";
	font-size: 35px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.35px;
	color: #f9fafb;
}

.delivery__text-group-2 {
	margin-bottom: 40px;
}

.delivery__button {
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

.delivery__map {
	padding-top: 10px;
}

.delivery__map-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	/* padding: calc(100% / (621 / 463)) 0 0; */
	border-radius: 12px;
	overflow: hidden;
}

.delivery__map-picture img {
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

/* ### delivery-info ### */
.delivery-info {}

.delivery-info--time {
	margin-bottom: 46px;
}

.delivery-info__inner {
	padding: 25px 58px 48px 38px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
}

.delivery-info__inner--payment {
	position: relative;
}

.delivery-info__inner--payment::after {
	content: '';
	position: absolute;
	top: 30px;
	right: 30px;
	display: block;
	width: 186px;
	height: 39px;
	background: url("~/assets/icons/delivery-payment.svg") center/contain no-repeat;
}

.delivery-info__title {
	margin-bottom: 20px;
	font-family: "Century Gothic";
	font-size: 35px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.35px;
	color: var(--accent-color);
}

.delivery-info__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;
}

.delivery-info__par:not(:last-child) {
	margin-bottom: 33px;
}

.support--delivery {
	padding: 55px 0 10px;
}
</style> -->

<style lang="scss" scoped>
.category-title--delivery {
	padding: 10px 0 38px;
}

/* ### delivery ### */
.delivery {
	padding: 35px 0 60px;
}

.delivery__inner {
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

.delivery__content {}

.delivery__title {
	margin-bottom: 25px;
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 700;
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

.delivery__text-group-1 {
	margin-bottom: 24px;
}

.delivery__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;

	@media (max-width: 1200px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
	}
}

.delivery__par:not(:last-child) {
	margin-bottom: 10px;
}

.delivery__subtitle {
	margin-bottom: 15px;
	font-family: "Century Gothic";
	font-size: 35px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.35px;
	color: #f9fafb;

	@media (max-width: 1200px) {
		font-size: 30px;
	}

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@media (max-width: 575px) {
		font-size: 20px;
	}
}

.delivery__text-group-2 {
	margin-bottom: 40px;
}

.delivery__button {
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

	@media (max-width: 1200px) {
		font-size: 20px;
		width: 360px;
		height: 55px;
	}

	@media (max-width: 768px) {
		font-size: 18px;
		width: 320px;
		height: 50px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
		width: 280px;
		height: 45px;
	}
}

.delivery__map {
	padding-top: 10px;

	@media (max-width: 991px) {
		padding-top: 25px;
		height: 340px;
	}
}

.delivery__map-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	/* padding: calc(100% / (621 / 463)) 0 0; */
	border-radius: 12px;
	overflow: hidden;
}

.delivery__map-picture img {
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

/* ### delivery-info ### */
.delivery-info {}

.delivery-info--time {
	margin-bottom: 46px;

	@media (max-width: 1200px) {
		margin-bottom: 30px;
	}

	@media (max-width: 768px) {
		margin-bottom: 24px;
	}
}

.delivery-info__inner {
	padding: 25px 58px 48px 38px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);

	@media (max-width: 1200px) {
		padding: 30px;
	}

	@media (max-width: 768px) {
		padding: 20px;
	}

	@media (max-width: 575px) {
		padding: 15px;
	}
}

.delivery-info__inner--payment {
	position: relative;
}

.delivery-info__inner--payment::after {
	content: '';
	position: absolute;
	top: 30px;
	right: 30px;
	display: block;
	width: 186px;
	height: 39px;
	background: url("~/assets/icons/delivery-payment.svg") center/contain no-repeat;

	@media (max-width: 768px) {
		top: 20px;
		right: 15px;
	}

	@media (max-width: 575px) {
		display: none;
	}
}

.delivery-info__title {
	margin-bottom: 20px;
	font-family: "Century Gothic";
	font-size: 35px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.35px;
	color: var(--accent-color);

	@media (max-width: 1200px) {
		font-size: 30px;
	}

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@media (max-width: 575px) {
		font-size: 20px;
	}
}

.delivery-info__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;

	@media (max-width: 1200px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
	}
}

.delivery-info__par:not(:last-child) {
	margin-bottom: 33px;
}

.support--delivery {
	padding: 55px 0 10px;
}
</style>