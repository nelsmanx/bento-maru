<script setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore();
const categories = productStore.categories;
const route = useRoute();
const router = useRouter();
function updateCategory(id) {
	productStore.activeCategory(id);
	if (route.name !== 'index') {
      router.push('/')
    }
}
</script>

<template>
	<div class="category-title">
		<div class="container">
			<Swiper
				:slidesPerView="'auto'"
				:spaceBetween="29"
				:speed="1000"
			>
				<SwiperSlide v-for="(item, key) in categories" :key="key">
					<div class="category-title__item">
						<button type="button" class="category-title__link" @click="updateCategory(item.id)">
							{{ item.name }}
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide class="last">
					<div class="category-title__item">
						<NuxtLink to="/delivery" class="category-title__link">
							Доставка
						</NuxtLink>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template >

<style scoped>
.category-title {
	position: relative;
	overflow: hidden;
}

.category-title::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 1920px;
	height: 1px;
	background: url("~/assets/images/category-title-hr.png") center/contain no-repeat;
	opacity: 0.3;
	transform: translateX(-50%);
}
.swiper-slide {
	width: fit-content;
}

.swiper-slide.last {
	margin-right: 0 !important;
}

@media (min-width:1200px) {
	.swiper-slide:not(.last) {
		margin-right: auto !important;
	}
}

.category-title__list {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.category-title__item {
	font-family: "Cera Pro";
	font-size: 18px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.18px;
	color: #fff !important;
	cursor: pointer;
	transition: color 150ms ease-in-out;
	a, button {
		background: transparent;
		border: 0;
		padding: 0;
		font-size: inherit;
		color: #fff;
		cursor: pointer;
		transition: 0.5s
	}
	a:hover, button:hover {
		color: var(--accent-color);
	}
}

.category-title__item:hover {
	color: var(--accent-color);
}

.category-title__item.is-active {
	color: var(--accent-color);
}

.category-title__item:not(:last-child) {
	margin-right: 10px;
}

.category-title__link {
	white-space: nowrap;
}

@media (max-width: 575.98px) {
	.category-title .container {
		padding-right: 0;
	}

	.category-title::after {
		display: none;
	}

	.category-title__item {
		font-size: 13px;
	}
}
</style>