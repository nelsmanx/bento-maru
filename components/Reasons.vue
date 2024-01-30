<script setup>

const { clientWidth } = useClientWidth();
const decorIconsQuantity = computed(() => {
	if (clientWidth.value >= 1400) return 16;
	if (clientWidth.value < 1400 && clientWidth.value >= 1200) return 10;
	if (clientWidth.value < 1200 && clientWidth.value >= 993) return 4;
	if (clientWidth.value < 993 && clientWidth.value >= 768) return 17;
	if (clientWidth.value < 768 && clientWidth.value >= 576) return 7;
	if (clientWidth.value < 576) return 8;
});
</script>

<template>
	<section class="reasons">
		<div class="container">
			<div class="reasons__title-wrap">
				<h2 class="reasons__title">4 ПРИЧИНЫ ЗАКАЗАТЬ У НАС</h2>
				<DecorIcons :quantity="decorIconsQuantity" class="reasons__title-decor" />
			</div>

			<ul class="reasons__list">
				<li class="reasons__item reasons__item--1">
					<h3 class="reasons__item-title reasons__item-title--1">Более 25 компонентов&nbsp;в каждом Бенто</h3>
					<p class="reasons__item-desc">Секрет долголетия японцев в том, что они едят разнообразную пищу: чем больше продуктов в одной тарелке, тем полезнее для здоровья.</p>
				</li>
				<li class="reasons__item reasons__item--2">
					<h3 class="reasons__item-title reasons__item-title--2">У нас есть блюда даже для тех, у кого нет аппетита!</h3>
					<p class="reasons__item-desc reasons__item-desc--2">Выбор вариантов Бенто, супов и карри не оставит равнодушным ни детей, ни взрослых.</p>
				</li>
				<li class="reasons__item reasons__item--3">
					<h3 class="reasons__item-title reasons__item-title--3">Контроль качества&nbsp;от японского шефа</h3>
					<p class="reasons__item-desc">Основные соусы и упаковка привезена нами из Японии и сертифицирована. Так же, каждое блюдо проверяет шеф&#8209;японец.</p>
				</li>
				<li class="reasons__item reasons__item--4">
					<h3 class="reasons__item-title reasons__item-title--4">Соблюдение стандартов качества РФ и Японии</h3>
					<p class="reasons__item-desc">Производство Бенто - особый технологический процесс и мы используем японские секреты производства, включая стандарты контроля качества РФ</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.reasons {
	padding: 45px 0 80px;
}

.reasons__title-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 36px
}

.reasons__title {
	margin-right: 10px;
	font-family: "Century Gothic";
	font-size: 52px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.54px;
	color: var(--accent-color);
}

.reasons__list {
	display: grid;
	grid-template-columns: 273px 325px 309px 1fr;
	padding: 43px 38px 60px 53px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
	border: 1px solid #282828;
	border-radius: 12px;
}

.reasons__item {
	position: relative;
}

.reasons__item--1 {
	padding-right: 30px;
}

.reasons__item--2 {
	padding-left: 65px;
	padding-right: 35px;
}

.reasons__item--3 {
	padding-left: 55px;
	padding-right: 35px;
}

.reasons__item--4 {
	padding-left: 48px;
}

.reasons__item:not(:last-child)::after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 1px;
	height: 291px;
	opacity: 0.3;
	background: url("~/assets/images/reasons-item-separator.png") center/contain no-repeat;
	transform: translateY(-50%);
}

.reasons__item-title {
	margin-bottom: 20px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.24px;
	color: #fff;
}

.reasons__item-title::before {
	content: '';
	display: block;
	height: 26px;
	margin-bottom: 20px;
	background-size: contain;
	background-position: left center;
	background-repeat: no-repeat;
}

.reasons__item-title--1::before {
	width: 24px;
	background-image: url("~/assets/icons/reasons/1.svg");
}

.reasons__item-title--2::before {
	width: 27px;
	background-image: url("~/assets/icons/reasons/2.svg");
}

.reasons__item-title--3::before {
	width: 34px;
	background-image: url("~/assets/icons/reasons/3.svg");
}

.reasons__item-title--4::before {
	width: 25px;
	background-image: url("~/assets/icons/reasons/4.svg");
}

.reasons__item-desc {
	font-family: "Cera Pro";
	font-size: 14px;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.14px;
	color: #fff;
}

.reasons__item-desc--2 {
	padding-right: 20px;
}

@media (max-width: 1399.98px) {
	.reasons__list {
		grid-template-columns: 220px 277px 255px 1fr;
		padding: 40px 35px 50px 45px;
	}

	.reasons__item--1 {
		padding-right: 30px;
	}

	.reasons__item--2 {
		padding-left: 30px;
		padding-right: 30px;
	}

	.reasons__item--3 {
		padding-left: 30px;
		padding-right: 30px;
	}

	.reasons__item--4 {
		padding-left: 30px;
	}

	.reasons__item-desc.reasons__item-desc--2 {
		padding-right: 0;
	}
}

@media (max-width: 1199.98px) {
	.reasons__list {
		grid-template-columns: repeat(2, 1fr);
		gap: 40px 0;
	}

	.reasons__item--3 {
		padding-left: 0;
	}

	.reasons__item:not(:last-child)::after {
		display: none;
	}
}
</style>

<style>
.reasons .decor-icons {
	gap: 4px;
	padding: 7px;
}

.reasons .decor-icons__item:nth-child(3n+1) {
	width: 23px;
	height: 23px;
}

.reasons .decor-icons__item:nth-child(3n+2) {
	width: 33px;
	height: 22px;
}

.reasons .decor-icons__item:nth-child(3n+3) {
	width: 27px;
	height: 23px;
}
</style>