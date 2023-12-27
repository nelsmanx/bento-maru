<template>
	<section class="hero-carousel">

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
				<div class="swiper__inner">
					<div class="container swiper__container">
						<div class="swiper__content">
							<div class="swiper__image-wrap">
								<img class="swiper__image" src="~/assets/images/carousel-hero/product-1.png" alt="">
							</div>
							<div class="swiper__info">
								<h2 class="swiper__title">ДОСТАВКА БЕНТО ПО <span class="accent">ЮЖНО-САХАЛИНСКУ</span></h2>
								<p class="swiper__desc">Гарантируем вкус и качество - проверено японским шефом! <span class="accent">Бесплатная доставка при заказе от 1000 рублей</span></p>
								<button class="swiper__button">Перейти в каталог</button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="swiper__inner">
					<div class="container swiper__container">
						<div class="swiper__content">
							<div class="swiper__image-wrap">
								<img class="swiper__image" src="~/assets/images/carousel-hero/product-1.png" alt="">
							</div>
							<div class="swiper__info">
								<h2 class="swiper__title">ДОСТАВКА БЕНТО ПО <span class="accent">ЮЖНО-САХАЛИНСКУ</span></h2>
								<p class="swiper__desc">Гарантируем вкус и качество - проверено японским шефом! <span class="accent">Бесплатная доставка при заказе от 1000 рублей</span></p>
								<button class="swiper__button">Перейти в каталог</button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
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
	background-image: url("~/assets/icons/carousel-arrow-prev.svg");
	/* background-image: url("data:image/svg+xml,%3Csvg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.09437 0.155454C7.19945 0.0499659 7.32665 -9.53674e-07 7.47045 -9.53674e-07C7.61424 -9.53674e-07 7.74144 0.0499659 7.84653 0.155454C8.05116 0.360876 8.05116 0.699549 7.84653 0.904971L1.27619 7.5007L7.84653 14.0964C8.05116 14.3018 8.05116 14.6405 7.84653 14.8459C7.64189 15.0514 7.30453 15.0514 7.0999 14.8459L0.153474 7.87267C-0.051158 7.66725 -0.051158 7.32858 0.153474 7.12316L7.09437 0.155454Z' fill='white'/%3E%3C/svg%3E"); */
}

#swiper-hero .swiper-button-next:before {
	background-image: url("~/assets/icons/carousel-arrow-next.svg");
	/* background-image: url("data:image/svg+xml,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.11671 16.6395C0.998472 16.7577 0.855339 16.8137 0.693534 16.8137C0.531729 16.8137 0.388594 16.7577 0.270352 16.6395C0.0400911 16.4092 0.0400911 16.0296 0.270352 15.7993L7.66359 8.40606L0.270352 1.01284C0.0400911 0.782579 0.0400911 0.402956 0.270352 0.172696C0.500613 -0.0575652 0.880231 -0.0575652 1.11049 0.172696L8.92691 7.98911C9.15717 8.21938 9.15717 8.599 8.92691 8.82926L1.11671 16.6395Z' fill='white'/%3E%3C/svg%3E%0A"); */
}

/* ### pagination */
#swiper-hero .swiper-pagination {
	bottom: 26px;
}

#swiper-hero .swiper-pagination-bullet {
	margin: 0 4px;
	background-color: #5c5d5e;
}

#swiper-hero .swiper-pagination-bullet-active {
	background-color: #fff;
}
</style>

<style scoped>
/*#swiper-hero .swiper-nav {
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
} */
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
	/* background: url("~/assets/images/carousel-hero/bg-gradient.jpg") 0 0/cover no-repeat; */
	overflow: hidden;
	isolation: isolate;
}

#swiper-hero .swiper__inner::after {
	content: '';
	position: absolute;
	z-index: -1;
	top: -170px;
	left: calc(50% - -23px);
	--scale: 1;
	width: calc(var(--scale) * 519px);
	height: calc(var(--scale) * 705px);
	background: url("~/assets/images/carousel-hero/bg-vector-1.svg") 0 0/contain no-repeat;
	opacity: 0.5;
}

#swiper-hero .swiper__container {
	height: 100%;
}

#swiper-hero .swiper__content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 60px;
	height: 100%;
}

#swiper-hero .swiper__image-wrap {
	position: relative;
	display: flex;
	align-items: center;
}

/* #swiper-hero .swiper__image-wrap::before {
	content: '';
	position: absolute;
	z-index: -1;
	top: 0;
	left: -265px;
	--scale: 1;
	width: calc(var(--scale) * 956px);
	height: calc(var(--scale) * 541px);
	background: url("~/assets/images/carousel-hero/product-shadow.png") 0 0/cover no-repeat;
} */
#swiper-hero .swiper__image {
	position: absolute;
	left: -110px;
	height: 100%;
}

#swiper-hero .swiper__info {
	margin-top: 92px;
}

#swiper-hero .swiper__title {
	margin-bottom: 28px;
	font-family: "Century Gothic";
	font-size: 45px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.45px;
	color: #fff;
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

#swiper-hero .swiper__desc .accent {
	font-weight: 700;
	color: var(--accent-color);
}

#swiper-hero .swiper__button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.1em 3em;
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.16px;
	color: #fff;
	background: var(--accent-gradient);
	border: none;
	border-radius: 12px;
	cursor: pointer;
}
</style>