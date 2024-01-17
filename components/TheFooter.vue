<script setup>
const { clientWidth } = useClientWidth();
</script>

<template>
	<footer v-if="clientWidth >= 576"
		class="footer">
		<div class="container">
			<div class="footer__top">
				<div class="footer__top-inner">
					<div class="footer__top-info">
						<p class="footer__top-info-text-1">Японские коробочки с едой</p>
						<p class="footer__top-info-text-2 footer__top-text-accent">Доставка по Южно-Сахалинску</p>
					</div>
					<div class="footer__top-tel">
						<p class="footer__top-tel-text footer__top-text-accent">Позвоните нам</p>
						<a class="footer__top-tel-link" href="tel:+79006600020">+7 (900) 660-00-20</a>
					</div>
					<div class="footer__top-schedule">
						<p class="footer__top-schedule-text-1 footer__top-text-accent">Принимаем заказы</p>
						<p class="footer__top-schedule-text-2">с 10:00 до 18:00</p>
					</div>
					<div class="footer__top-decor-wrap">
						<DecorIcons :quantity="10" class="footer__top-decor" />
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__bottom-inner">
					<img class="footer__bottom-logo" src="~/assets/images/logo-cropped-bottom.png" alt="Логотип компании">
					<div class="footer__bottom-info">
						<p class="footer__bottom-info-text">© {{ new Date().getFullYear() }} ООО «СОТОРА», 693027 Сахалинская область,г.Южно-Сахалинск, пр-кт Победы д.9Б, кв.62, ИНН 6166106919, ОГРН 1226500003982. </p>
						<ul class="footer__bottom-info-link-list">
							<li class="footer__bottom-info-link-item">
								<a class="footer__bottom-info-link" href="#">Публичная оферта</a>
							</li>
							<li class="footer__bottom-info-link-item">
								<a class="footer__bottom-info-link" href="#">Политика использования cookie</a>
							</li>
							<li class="footer__bottom-info-link-item">
								<a class="footer__bottom-info-link" href="#">Политика конфиденциальности</a>
							</li>
							<li class="footer__bottom-info-link-item">
								<a class="footer__bottom-info-link" href="#">Согласие на обработку персональных данных</a>
							</li>
						</ul>
					</div>
					<ul class="footer__bottom-list">
						<li class="footer__bottom-item">
							<a class="footer__bottom-link" href="#">Сссылка</a>
						</li>
						<li class="footer__bottom-item">
							<a class="footer__bottom-link" href="#">Сссылка</a>
						</li>
					</ul>

					<social-list class="footer__bottom-social">
						<SocialItem modifier="vk" link="https://vk.com/" />
						<SocialItem modifier="telegram" link="https://t.me/" />
						<SocialItem modifier="whatsapp" link="https://wa.me/" />
					</social-list>
				</div>
			</div>
		</div>
	</footer>

	<footer v-if="clientWidth < 576"
		class="footer-mobile">
		<div class="container">
			<div class="footer-mobile__info">
				<div class="footer-mobile__tel">
					<p class="footer-mobile__tel-text-accent">Доставка по Южно-Сахалинску</p>
					<a class="footer-mobile__tel-link" href="tel:+79006600020">+7 (900) 660-00-20</a>
				</div>

				<div class="sidebar-menu__schedule">
					<p class="footer-mobile__schedule-text-accent">Принимаем заказы</p>
					<p class="footer-mobile__schedule-text">с 10:00 до 18:00</p>
				</div>
			</div>

			<social-list class="footer-mobile__social">
				<SocialItem modifier="vk" link="https://vk.com/" />
				<SocialItem modifier="telegram" link="https://t.me/" />
				<SocialItem modifier="whatsapp" link="https://wa.me/" />
			</social-list>

			<button class="footer-mobile__button-callback">Задать вопрос</button>

			<div class="footer-mobile__link-section">
				<ul class="footer-mobile__link-list">
					<li class="footer-mobile__link-item">
						<a class="footer-mobile__link" href="#">Условия проведения акций</a>
					</li>
					<li class="footer-mobile__link-item">
						<a class="footer-mobile__link" href="#">Политика конфиденциальности</a>
					</li>
					<li class="footer-mobile__link-item">
						<a class="footer-mobile__link" href="#">Прочие ссылки</a>
					</li>
				</ul>
			</div>

			<div class="footer-mobile__copr">
				<span class="footer-mobile__copr-text">© 2023 ООО «СОТОРА», 693027 Сахалинская область, г.Южно-Сахалинск, пр-кт Победы д.9Б, кв.62, ИНН 6166106919, ОГРН 1226500003982. </span>
				<a class="footer-mobile__copr-link" href="#">Публичная оферта</a>
				<a class="footer-mobile__copr-link" href="#">Политика использования cookie</a>
				<a class="footer-mobile__copr-link" href="#">Политика конфиденциальности</a>
				<a class="footer-mobile__copr-link" href="#">Согласие на обработку персональных данных</a>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	/* for separator under footer__top  */
	overflow-x: hidden;
}

.footer__top {
	position: relative;
	padding: 44px 0;
}

.footer__top::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 1920px;
	height: 1px;
	background: url("~/assets/images/footer-top-hr.png") center/contain no-repeat;
	opacity: 0.3;
	transform: translateX(-50%);
}

.footer__top-inner {
	display: grid;
	grid-template-columns: repeat(3, 295px) 1fr;
}

.footer__top-info {
	align-self: center;
}

.footer__top-text-accent {
	font-family: "Cera Pro";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.14px;
	color: var(--accent-color);
}

.footer__top-info-text-1 {
	margin-bottom: 5px;
	font-family: "Century Gothic";
	font-size: 17px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.footer__top-info-text-2 {}

.footer__top-tel {
	position: relative;
	padding-left: 45px;
}

.footer__top-tel::before,
.footer__top-tel::after {
	content: '';
	position: absolute;
	top: 50%;
	width: 2px;
	height: 48px;
	background: url("~/assets/images/footer-top-item-separator.png") center/contain no-repeat;
	transform: translateY(-50%);
}

.footer__top-tel::before {
	left: 0;
}

.footer__top-tel::after {
	right: 0;
}

.footer__top-tel-text {
	margin-bottom: 3px;
}

.footer__top-tel-link {
	font-family: "Century Gothic";
	font-size: 20px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.footer__top-schedule {
	padding-left: 53px;
}

.footer__top-schedule-text-1 {
	margin-bottom: 3px;
}

.footer__top-schedule-text-2 {
	font-family: "Century Gothic";
	font-size: 20px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.footer__top-decor-wrap {
	display: flex;
	justify-content: flex-end;
}

.footer__top-decor {}

.footer__bottom {
	position: relative;
	padding: 35px 0;
}

.footer__bottom-inner {
	display: flex;
	align-items: center;
}

.footer__bottom-logo {
	position: absolute;
	bottom: 0;
	--scale: 1;
	width: calc(var(--scale) * 230px);
	height: calc(var(--scale) * 97px);
}

.footer__bottom-info {
	margin-right: 65px;
	margin-left: auto;
	font-family: "Cera Pro";
	font-size: 9px;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.085px;
	color: #f9fafb;
}

.footer__bottom-info-text {
	margin-bottom: 3px;
	opacity: 0.6;
}

.footer__bottom-info-link-list {
	display: flex;
}

.footer__bottom-info-link-item:not(:last-child)::after {
	content: ' /';
	margin-right: 3px;
	opacity: 0.6;
}

.footer__bottom-info-link {
	opacity: 0.6;
	transition: all 150ms ease-in-out;
}

.footer__bottom-info-link:hover {
	color: var(--accent-color);
	opacity: 1;
}

.footer__bottom-list {
	display: grid;
	grid-auto-flow: column;
	gap: 35px;
	margin-right: 65px;
}

.footer__bottom-item {}

.footer__bottom-link {
	font-family: "Cera Pro";
	font-size: 12px;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.12px;
	color: #f9fafb;
	opacity: 0.6;
	transition: all 150ms ease-in-out;
}

.footer__bottom-link:hover {
	color: var(--accent-color);
	opacity: 1;
}

.footer__bottom-social {}
</style>

<style scoped>
.footer-mobile {
	padding: 42px 0 0;
}

.footer-mobile__info {
	margin-bottom: 44px;
}

.footer-mobile__tel {
	margin-bottom: 40px;
	text-align: center;
}

.sidebar-menu__schedule {
	margin-bottom: 44px;
	text-align: center;
}

.footer-mobile__tel-text-accent,
.footer-mobile__schedule-text-accent {
	margin-bottom: 5px;
	font-family: "Cera Pro";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.06em;
	color: var(--accent-color);
}

.footer-mobile__tel-link,
.footer-mobile__schedule-text {
	font-family: "Century Gothic";
	font-size: 34px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.footer-mobile__social {
	margin-bottom: 35px;
}

.footer-mobile__social :deep(.social__list) {
	display: grid;
	justify-content: center;
	gap: 5px;
}

.footer-mobile__social :deep(.social__link) {
	border-radius: 8px;
}

.footer-mobile__button-callback {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 315px;
	width: 100%;
	height: 50px;
	margin-inline: auto;
	margin-bottom: 45px;
	padding: 5px;
	font-family: "Century Gothic";
	font-size: 16px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.footer-mobile__link-section {
	margin-bottom: 50px;
}

.footer-mobile__link-list {}

.footer-mobile__link-item {
	text-align: center;
}

.footer-mobile__link-item:not(:last-child) {
	margin-bottom: 20px;
}

.footer-mobile__link {
	font-family: "Cera Pro";
	font-size: 16px;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #f9fafb;
	opacity: 0.4;
}

.footer-mobile__link:hover {
	color: var(--accent-color);
	opacity: 1;
}

.footer-mobile__copr {}

.footer-mobile__copr-text,
.footer-mobile__copr-link {
	font-family: "Cera Pro";
	font-size: 10px;
	font-weight: 300;
	line-height: 1.8;
	letter-spacing: 0.095px;
	color: #f9fafb;
	opacity: 0.6;
}

.footer-mobile__copr-link {
	transition: all 150ms ease-in-out;
}

.footer-mobile__copr-link:not(:last-child)::after {
	content: '\00a0/';
	margin-right: 3px;
	opacity: 0.6;
}

.footer-mobile__copr-link:hover {
	color: var(--accent-color);
	opacity: 1;
}
</style>