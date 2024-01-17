<script setup>
const { clientWidth } = useClientWidth();

</script>

<template>
	<section class="hero-carousel">
		<div :class="{ container: clientWidth < 576 }">
			<Swiper id="swiper-hero"
				:modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
				:slides-per-view="1"
				navigation
				pagination
				loop>
				<!-- 
			:navigation="{
			nextEl: '.swiper-nav-next',
			prevEl: '.swiper-nav-prev'
		}"
			:autoplay="{
			delay: 5000,
		}" -->
				<!-- <div class="swiper-nav">
			<button class="swiper-nav-prev"></button>
			<button class="swiper-nav-next"></button>
		</div> -->


				<SwiperSlide>
					<div class="swiper__inner swiper__inner--1">
						<div class="container swiper__container">
							<div class="swiper__content">
								<picture class="swiper__picture swiper__picture--1">
									<source media="(max-width: 575.98px)" srcset="~/assets/images/carousel-hero/product-1-cropped.png">
									<img src="~/assets/images/carousel-hero/product-1.png" alt="Доставка бенто по южно-сахалинску">
								</picture>

								<div class="swiper__info">
									<h2 class="swiper__title">ДОСТАВКА БЕНТО ПО <span class="accent">ЮЖНО-САХАЛИНСКУ</span></h2>
									<p class="swiper__desc">Гарантируем вкус и качество - проверено японским шефом! <span class="accent">Бесплатная доставка при заказе от&nbsp;1000 рублей</span></p>
									<button class="swiper__button">Перейти в каталог</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div class="swiper__inner swiper__inner--2">
						<div class="container swiper__container">
							<div class="swiper__content">
								<picture class="swiper__picture swiper__picture--2">
									<source media="(max-width: 575.98px)" srcset="~/assets/images/carousel-hero/product-2-cropped.png">
									<img src="~/assets/images/carousel-hero/product-2.png" alt="Более 25 компонентов в каждом бенто">
								</picture>
								<div class="swiper__info">
									<h2 class="swiper__title swiper__title--2"><span class="accent">БОЛЕЕ 25 КОМПОНЕНТОВ</span> В&nbsp;КАЖДОМ БЕНТО</h2>
									<p class="swiper__desc swiper__desc--2">Секрет долголетия японцев в том, что они едят разнообразную пищу: чем больше продуктов в одной тарелке, тем полезнее для здоровья.</p>
									<button class="swiper__button">Перейти в каталог</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div class="swiper__inner swiper__inner--3">
						<div class="container swiper__container">
							<div class="swiper__content">
								<picture class="swiper__picture swiper__picture--3">
									<source media="(max-width: 575.98px)" srcset="~/assets/images/carousel-hero/product-3-cropped.png">
									<img src="~/assets/images/carousel-hero/product-3.png" alt="У нас есть блюда даже для тех, у кого нет аппетита!">
								</picture>
								<div class="swiper__info swiper__info--3">
									<h2 class="swiper__title swiper__title--3">У НАС ЕСТЬ БЛЮДА ДАЖЕ ДЛЯ ТЕХ, <span class="accent">У КОГО НЕТ АППЕТИТА!</span></h2>
									<p class="swiper__desc swiper__desc--3">Выбор вариантов Бенто, супов и карри не оставит равнодушным ни детей, ни взрослых.</p>
									<button class="swiper__button">Перейти в каталог</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div class="swiper__inner swiper__inner--4">
						<div class="container swiper__container">
							<div class="swiper__content">
								<picture class="swiper__picture swiper__picture--4">
									<source media="(max-width: 575.98px)" srcset="~/assets/images/carousel-hero/product-4-cropped.png">
									<img src="~/assets/images/carousel-hero/product-4.png" alt="Контроль качества от японского шефа">
								</picture>
								<div class="swiper__info swiper__info--4">
									<h2 class="swiper__title swiper__title--4">КОНТРОЛЬ КАЧЕСТВА <span class="accent">ОТ&nbsp;ЯПОНСКОГО ШЕФА</span></h2>
									<p class="swiper__desc swiper__desc--4">Производство Бенто - особый технологический процесс и мы используем японские секреты производства, включая стандарты контроля качества РФ</p>
									<button class="swiper__button">Перейти в каталог</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div class="swiper__inner swiper__inner--5">
						<div class="container swiper__container">
							<div class="swiper__content">
								<picture class="swiper__picture swiper__picture--5">
									<source media="(max-width: 575.98px)" srcset="~/assets/images/carousel-hero/product-5-cropped.png">
									<img src="~/assets/images/carousel-hero/product-5.png" alt="Соблюдение стандартов качества РФ и Японии">
								</picture>
								<div class="swiper__info">
									<h2 class="swiper__title swiper__title--5">СОБЛЮДЕНИЕ СТАНДАРТОВ КАЧЕСТВА <span class="accent">РФ&nbsp;И&nbsp;ЯПОНИИ</span></h2>
									<p class="swiper__desc swiper__desc--5">Производство Бенто - особый технологический процесс и мы используем японские секреты производства, включая стандарты контроля качества РФ</p>
									<button class="swiper__button">Перейти в каталог</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

			</Swiper>
		</div>
	</section>
</template>

<style>
#swiper-hero .swiper-button-prev,
#swiper-hero .swiper-button-next {
	--side-offset: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 54px;
	height: 54px;
	padding: 0;
	border: none;
	border-radius: 50%;
	transform: translateY(-50%);
	cursor: pointer;
}

#swiper-hero .swiper-button-prev {
	left: var(--side-offset);
	background: linear-gradient(90deg, rgba(30, 30, 30, 1) 0%, rgba(35, 36, 38, 1) 100%);
}

#swiper-hero .swiper-button-next {
	right: var(--side-offset);
	background: #3e3e42;
}

#swiper-hero .swiper-button-prev:after,
#swiper-hero .swiper-button-next:after {
	display: none;
}

#swiper-hero .swiper-button-prev:before,
#swiper-hero .swiper-button-next:before {
	content: '';
	width: 8px;
	height: 15px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

#swiper-hero .swiper-button-prev:before {
	background-image: url("~/assets/images/carousel-hero/arrow-prev-white.svg");
}

#swiper-hero .swiper-button-next:before {
	background-image: url("~/assets/images/carousel-hero/arrow-next-white.svg");
}

/* ### pagination */
#swiper-hero .swiper-pagination {
	bottom: 26px;
}

#swiper-hero .swiper-pagination-bullet {
	margin: 0 4px;
	background-color: #fff;
	opacity: 0.3;
}

#swiper-hero .swiper-pagination-bullet.swiper-pagination-bullet-active {
	background-color: #fff;
	opacity: 1;
}

@media (max-width: 575.98px) {
	#swiper-hero {
		min-height: 530px;
		border-radius: 6px;
	}

	#swiper-hero .swiper-button-prev,
	#swiper-hero .swiper-button-next {
		--side-offset: 0;
		top: 130px;
		width: 18px;
		height: 36px;
		background: #fff;
	}

	#swiper-hero .swiper-button-prev {
		border-radius: 0 20px 20px 0;
	}

	#swiper-hero .swiper-button-next {
		border-radius: 20px 0 0 20px;
	}

	#swiper-hero .swiper-button-prev:before,
	#swiper-hero .swiper-button-next:before {
		width: 6px;
		height: 11px;
	}

	#swiper-hero .swiper-button-prev:before {
		background-image: url("~/assets/images/carousel-hero/arrow-prev-gray.svg");
		transform: translateX(-3px);
	}

	#swiper-hero .swiper-button-next:before {
		background-image: url("~/assets/images/carousel-hero/arrow-next-gray.svg");
		transform: translateX(3px);
	}

	#swiper-hero .swiper-pagination {
		bottom: 0;
	}

	#swiper-hero .swiper-pagination-bullet {
		width: 4px;
		height: 4px;
	}
}
</style>

<!-- <style>
#swiper-hero .swiper-nav {
	position: absolute;
	z-index: 2;
	top: 50%;
	right: 38px;
	left: 38px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 0;
}

 #swiper-hero .swiper-nav-prev,
#swiper-hero .swiper-nav-next {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 54px;
	height: 54px;
	padding: 0;
	border: none;
	border-radius: 50%;
	cursor: pointer;
}

#swiper-hero .swiper-nav-prev {
	background: linear-gradient(90deg, rgba(30, 30, 30, 1) 0%, rgba(35, 36, 38, 1) 100%);
}

#swiper-hero .swiper-nav-next {
	background: #3e3e42;
}

#swiper-hero .swiper-nav-prev:before,
#swiper-hero .swiper-nav-next:before {
	content: '';
	width: 8px;
	height: 15px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

#swiper-hero .swiper-nav-prev:before {
	background-image: url("data:image/svg+xml,%3Csvg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.09437 0.155454C7.19945 0.0499659 7.32665 -9.53674e-07 7.47045 -9.53674e-07C7.61424 -9.53674e-07 7.74144 0.0499659 7.84653 0.155454C8.05116 0.360876 8.05116 0.699549 7.84653 0.904971L1.27619 7.5007L7.84653 14.0964C8.05116 14.3018 8.05116 14.6405 7.84653 14.8459C7.64189 15.0514 7.30453 15.0514 7.0999 14.8459L0.153474 7.87267C-0.051158 7.66725 -0.051158 7.32858 0.153474 7.12316L7.09437 0.155454Z' fill='white'/%3E%3C/svg%3E");
}

#swiper-hero .swiper-nav-next:before {
	background-image: url("data:image/svg+xml,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.11671 16.6395C0.998472 16.7577 0.855339 16.8137 0.693534 16.8137C0.531729 16.8137 0.388594 16.7577 0.270352 16.6395C0.0400911 16.4092 0.0400911 16.0296 0.270352 15.7993L7.66359 8.40606L0.270352 1.01284C0.0400911 0.782579 0.0400911 0.402956 0.270352 0.172696C0.500613 -0.0575652 0.880231 -0.0575652 1.11049 0.172696L8.92691 7.98911C9.15717 8.21938 9.15717 8.599 8.92691 8.82926L1.11671 16.6395Z' fill='white'/%3E%3C/svg%3E%0A");
}
</style> -->
<style scoped>
#swiper-hero .swiper__inner {
	position: relative;
	height: 545px;
	background-image:
		url("~/assets/images/carousel-hero/product-shadow.png"),
		url("~/assets/images/carousel-hero/bg-gradient.jpg");
	background-size:
		contain,
		cover;
	background-position:
		left 45px center,
		0 0;
	background-repeat: no-repeat, no-repeat;
	overflow: hidden;
	isolation: isolate;
}

#swiper-hero .swiper__inner::before {
	content: '';
	position: absolute;
	z-index: -1;
	--scale: 1;
	opacity: 0.5;
}

#swiper-hero .swiper__inner--1::before {
	top: -170px;
	left: calc(50% - 23px);
	width: calc(var(--scale) * 519px);
	height: calc(var(--scale) * 705px);
	background: url("~/assets/images/carousel-hero/bg-vector-1.svg") 0 0/contain no-repeat;
}

#swiper-hero .swiper__inner--2::before {
	top: 70px;
	left: calc(50% - 75px);
	width: calc(var(--scale) * 692px);
	height: calc(var(--scale) * 314px);
	background: url("~/assets/images/carousel-hero/bg-vector-2.svg") 0 0/contain no-repeat;
}

#swiper-hero .swiper__inner--3::before {
	top: 224px;
	left: calc(50% + 332px);
	width: calc(var(--scale) * 208px);
	height: calc(var(--scale) * 208px);
	background: url("~/assets/images/carousel-hero/bg-vector-3.svg") 0 0/contain no-repeat;
}

#swiper-hero .swiper__inner--4::before {
	top: 130px;
	left: calc(50% - 70px);
	width: calc(var(--scale) * 699px);
	height: calc(var(--scale) * 291px);
	background: url("~/assets/images/carousel-hero/bg-vector-4.svg") 0 0/contain no-repeat;
}

#swiper-hero .swiper__inner--5::before {
	top: 0px;
	left: calc(50% - 83px);
	--scale: 1;
	width: calc(var(--scale) * 321px);
	height: calc(var(--scale) * 302px);
	background: url("~/assets/images/carousel-hero/bg-vector-5.svg") 0 0/contain no-repeat;
}

#swiper-hero .swiper__container {
	height: 100%;
}

#swiper-hero .swiper__content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	height: 100%;
}

#swiper-hero .swiper__picture {
	position: relative;
}

#swiper-hero .swiper__picture img {
	position: absolute;
}

#swiper-hero .swiper__picture--1 img {
	top: 50px;
	left: -35px;
	width: 670px;
}

#swiper-hero .swiper__picture--2 img {
	top: 60px;
	left: -30px;
	width: 610px;
}

#swiper-hero .swiper__picture--3 img {
	bottom: -53px;
	left: -55px;
	width: 650px;
}

#swiper-hero .swiper__picture--4 img {
	top: 45px;
	left: 8px;
	width: 555px;
}

#swiper-hero .swiper__picture--5 img {
	top: 28px;
	left: 10px;
	width: 560px;
}

#swiper-hero .swiper__info {
	margin-top: 96px;
}

#swiper-hero .swiper__info--3 {
	max-width: 540px;
	margin-top: 110px;
}

#swiper-hero .swiper__info--4 {
	max-width: 550px;
	margin-top: 90px;
}

/* #swiper-hero .swiper__info--5 {
	max-width: 550px;
	margin-top: 90px;
} */
#swiper-hero .swiper__title {
	margin-bottom: 28px;
	font-family: "Century Gothic";
	font-size: 45px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.02em;
	color: #fff;
}

#swiper-hero .swiper__title--2 {
	margin-bottom: 22px;
}

#swiper-hero .swiper__title--3 {
	margin-bottom: 10px;
	font-size: 42px;
}

#swiper-hero .swiper__title--4 {
	margin-bottom: 16px;
}

#swiper-hero .swiper__title--5 {
	margin-bottom: 20px;
	font-size: 44px;
}

#swiper-hero .swiper__title .accent {
	color: var(--accent-color);
}

#swiper-hero .swiper__desc {
	margin-bottom: 50px;
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.7;
	letter-spacing: 0.2px;
	color: #fff;
}

#swiper-hero .swiper__desc--2 {
	margin-bottom: 30px;
}

#swiper-hero .swiper__desc--3 {
	margin-bottom: 30px;
}

#swiper-hero .swiper__desc--4 {
	margin-bottom: 35px;
}

#swiper-hero .swiper__desc--5 {
	margin-bottom: 35px;
}

#swiper-hero .swiper__desc .accent {
	font-weight: 700;
	color: var(--accent-color);
}

#swiper-hero .swiper__button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2em 3em;
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: 1;
	letter-spacing: 0.16px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 12px;
	cursor: pointer;
}

@media (max-width: 575.98px) {
	.hero-carousel {
		padding-bottom: 32px;
	}

	#swiper-hero .swiper__container {
		padding: 20px 30px 30px;
	}

	#swiper-hero .swiper__content {
		grid-template-columns: 100%;
		grid-template-rows: auto 1fr;
		gap: 15px;
	}

	#swiper-hero .swiper__inner {
		height: 500px;
		background:
			linear-gradient(90deg, #000 -28.61%, #333438 150.26%),
			url("~/assets/images/carousel-hero/product-shadow-mobile.png") top 0 center/contain no-repeat;
	}

	#swiper-hero .swiper__inner::before {
		display: none;
	}

	#swiper-hero .swiper__picture {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 190px;
	}

	#swiper-hero .swiper__picture img {
		position: static;
		width: auto;
		height: 100%;
	}

	#swiper-hero .swiper__info {
		margin-top: 0;
	}

	#swiper-hero .swiper__title {
		margin-bottom: 18px;
		font-size: 23px;
	}

	#swiper-hero .swiper__desc {
		margin-bottom: 25px;
		font-size: 14px;
	}

	#swiper-hero .swiper__button {
		width: 100%;
		font-size: 15px;
		border-radius: 6px;
	}
}
</style>
