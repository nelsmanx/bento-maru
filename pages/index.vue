<script setup>
import { useProductStore } from '@/stores/productStore';

useSeoMeta({
	title: 'Бэнто Мару - Доставка Бенто по Южно-Сахалинску'
});

const productStore = useProductStore();
productStore.activeCategory();
productStore.getActiveProducts();
watch(() => productStore.category, () => {
	productStore.getActiveProducts();
});


/*Временный костыль*/
productStore.getBento();
productStore.getGedza();
productStore.getSushi();



const { clientWidth } = useClientWidth();

const decorIconsQuantity = computed(() => {

	if (clientWidth.value >= 1400) return 10;
	if (clientWidth.value < 1400 && clientWidth.value >= 1200) return 5;
	if (clientWidth.value < 1200 && clientWidth.value >= 992) return 0;
	if (clientWidth.value < 992 && clientWidth.value >= 768) return 19;
	if (clientWidth.value < 768 && clientWidth.value >= 576) return 7;
	if (clientWidth.value < 576) return 8;

});

</script>

<template>
	<Head>
        <Title>Японские коробочки с едой</Title>
        <Meta name="description" content="Японские коробочки с едой"/>
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://bentomaru.ru" />
        <Meta property="og:locale" content="ru_RUS" />
        <Meta property="og:image" content="https://bentomaru.ru/img/bento-mix.jpg" />
        <Meta property="og:title" content="Японские коробочки с едой" />
        <Meta property="og:description" content="Японские коробочки с едой" />
    </Head>
	<CategoryTitleList v-if="clientWidth < 576" class="category-title--index" />
	<CarouselHero v-if="clientWidth >= 992" />

	<TitleWithDecor
		id="title-w-d-japan-food-index"
		class="title-w-d--japan-food title-w-d--japan-food-index"
		:decorIconsQuantity="decorIconsQuantity">
		ЯПОНСКИЕ КОРОБОЧКИ&nbsp;С&nbsp;ЕДОЙ
	</TitleWithDecor>

	<CarouselHero v-if="clientWidth < 992" />

	<BackgroundDecor>
		<CategoryTitleList v-if="clientWidth >= 576" class="category-title--index" />
		<Category id="new"
			:title="productStore.category.name"
			:classModifier="productStore.category.alias"
			:category="productStore.category"
			:productList="productStore.products" />

		<Reasons v-if="clientWidth >= 992" />

		<Category id="bento"
			title="Бенто"
			classModifier="bento"
			:productList="productStore.bento" />

		<Category id="gedza"
			title="Гёдза"
			classModifier="gedza"
			:productList="productStore.gedza" />

		<Category id="sushi"
			title="Суши"
			class="category--without-mb"
			classModifier="sushi"
			:productList="productStore.sushi" />

		<Support class="support--index" />
	</BackgroundDecor>
</template>

<style scoped>
.title-w-d--japan-food-index {
	padding: 40px 0 30px;
}

#title-w-d-japan-food-index:target {
	/* --header-height определяется в компоненте "TheHeader" 
	scroll-margin-top: var(--headerHeight);*/
	scroll-margin-top: 115px;
}

.category-title--index {
	margin-bottom: 50px;
	padding: 0 0 20px;
}

.support--index {
	padding: 40px 0 55px;
}

@media (max-width: 575.98px) {
	.category-title--index {
		padding: 10px 0 0;
		margin-bottom: 0;
	}

	.support--index {
		padding: 25px 0 0;
	}
}
</style>