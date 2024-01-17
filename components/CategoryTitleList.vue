<script setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore();

const productCategories = productStore.categoryTitleList;

</script>

<template>
	<div class="category-title">
		<div class="container container--category-title">
			<ul class="category-title__list">
				<li v-for="item in productCategories" class="category-title__item">
					<NuxtLink :to="item.anchor" class="category-title__link">
						{{ item.title }}
					</NuxtLink>
				</li>
				<li class="category-title__item">
					<NuxtLink to="/delivery" class="category-title__link">
						Доставка
					</NuxtLink>
				</li>
			</ul>
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
	color: #fff;
	cursor: pointer;
	transition: color 150ms ease-in-out;
}

.category-title__item:hover {
	color: var(--accent-color);
}

.category-title__item.is-active {
	color: var(--accent-color);
}

.category-title__item:not(:last-child) {
	margin-right: 36px;
}

.category-title__link {
	display: block;
	width: max-content;
}

@media (max-width: 575.98px) {
	.category-title .container {
		padding-right: 0;
	}

	.category-title::after {
		display: none;
	}

	.category-title__list {
		justify-content: flex-start;
		overflow-x: auto;
	}

	.category-title__list::-webkit-scrollbar {
		display: none;
	}

	.category-title__list {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.category-title__item {
		font-size: 13px;
	}

	.category-title__item:not(:last-child) {
		margin-right: 28px;
	}
}
</style>