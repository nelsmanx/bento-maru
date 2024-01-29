<script setup>
	import config from "@/config";
	import { useProductStore } from '@/stores/productStore';
	const baseUrl = `${config.app.server.scheme}://${config.app.server.host}`;
	const productStore = useProductStore();
	productStore.getBanners();
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
				<SwiperSlide v-for="(banner, key) in productStore.banners" :key="key">
					<div class="swiper__inner" :class="'swiper__inner--' + (key + 1)">
						<div class="container swiper__container">
							<div class="swiper__content">
								<div class="swiper__image-wrap">
									<img class="swiper__image" :src='baseUrl + banner.photos[0]' alt="">
								</div>
								<div class="swiper__info">
									<div class="swiper__title" v-html="banner.h1"></div>
									<div class="swiper__desc" v-html="banner.content"></div>
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

.swiper__title b, #swiper-hero .swiper__desc p strong {
	color: var(--accent-color) !important;
}
.swiper__image {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
@media (max-width: 1200px) {
	.swiper__image {
		width: 100%;
		object-fit: contain;
	}
}
@media (max-width: 575.98px) {
	#swiper-hero {
		min-height: 530px;
		border-radius: 6px;
		padding-bottom: 27px;
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

#swiper-hero .swiper__inner--3 .swiper__image {
	height: 100%;
	object-position: bottom;
	object-fit: contain;
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
	font-size: 42px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.02em;
	color: #fff;
	text-transform: uppercase;
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
		height: 530px;
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
		display: flex;
		flex-direction: column;
	}

	#swiper-hero .swiper__title {
		margin-bottom: 18px;
		font-size: 20px;
	}

	#swiper-hero .swiper__desc {
		margin-bottom: 25px;
		font-size: 13px;
		line-height: 1.4;
		flex: 1 1 auto;
	}

	#swiper-hero .swiper__button {
		width: 100%;
		font-size: 15px;
		border-radius: 6px;
	}
}
</style>