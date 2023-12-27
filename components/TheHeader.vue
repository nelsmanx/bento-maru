<script setup>
import { useAppStore } from '~/stores/appStore';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';

const appStore = useAppStore();
const cartStore = useCartStore();
const productStore = useProductStore();

const hasProductItems = computed(() => cartStore.hasProductItems);
const isItemInFav = computed(() => productStore.hasProductInFav);


// Shadow on header when page is scrolled
const pageIsScrolled = ref(null);
onMounted(() => window.addEventListener('scroll', scrollHandler));

const scrollHandler = () => {
	window.scrollY > 0 ? pageIsScrolled.value = true : pageIsScrolled.value = false;
};

</script>

<template>
	<header class="header" :class="{ 'shadow-on-scroll': pageIsScrolled }" ref="header">
		<div class="header__inner">
			<button @click="appStore.toggleSidebarMenu"
				class="header__button-burger"></button>
			<div class="container">
				<div class="header__items">
					<a class="header__tel" href="tel:+79006600020">+7 (900) 660-00-20</a>
					<span class="header__city">Южно-Сахалинск</span>
					<div class="header__logo ">
						<img v-if="$route.path === '/'" class="header__logo-image" src="~\assets\images\logo-cropped-top.svg" alt="Логотип компании">
						<NuxtLink v-else to="/" class="header__logo-link">
							<img class="header__logo-image" src="~\assets\images\logo-cropped-top.png" alt="Логотип компании">
						</NuxtLink>
					</div>
					<social-list class="header__social"
						:class="{ 'header__social--cart-full': hasProductItems }">
						<SocialItem modifier="vk" link="https://vk.com/" />
						<SocialItem modifier="telegram" link="https://t.me/" />
						<SocialItem modifier="whatsapp" link="https://wa.me/" />
					</social-list>
					<div class="header__actions">
						<NuxtLink to="/favorites">
							<div class="header__button-fav"
								:class="[
									{ 'header__button-fav--cart-full': hasProductItems },
									{ 'is-active': isItemInFav }
								]">
							</div>
						</NuxtLink>
						<NuxtLink to="/cart">
							<HeaderCart class="header__cart" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style>
.header {
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: #2a2b2f;
	background-image: url("~/assets/images/background-pattern.svg");
	background-position: 0 0;
	background-repeat: repeat;
}

.header.shadow-on-scroll {
	box-shadow: 0px 0px 10px 5px rgb(100 100 100 / 15%);
}

/* .header.is-fixed {
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	background-color: #2a2b2f;
	background-image: url("~/assets/images/background-pattern.svg");
	background-position: 0 0;
	background-repeat: repeat;
	box-shadow: 0px 0px 10px 5px rgb(100 100 100 / 15%);
} */
.header__inner {
	position: relative;
}

.header__button-burger {
	position: absolute;
	top: 50%;
	left: 25px;
	width: 40px;
	height: 40px;
	background-image: url("~/assets/icons/burger-menu.svg");
	background-size: 20px 15px;
	background-position: center;
	background-repeat: no-repeat;
	background-color: transparent;
	border: none;
	transform: translateY(-50%);
	cursor: pointer;
}

.header__items {
	display: flex;
	align-items: center;
	height: 115px;
}

.header__logo {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.header__logo-image {
	--scale: 1;
	width: calc(var(--scale) * 209px);
	height: calc(var(--scale) * 98px);
}

.header__logo-link {
	display: block;
	line-height: 0;
}

.header__tel {
	margin-right: 115px;
	font-family: "Century Gothic";
	font-size: 22px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
}

.header__city {
	font-family: "Cera Pro";
	font-size: 18px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.18px;
	color: var(--accent-color);
}

.header__social {
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: 115px;
}

.header__social--cart-full {
	margin-right: 12px;
}

.header__actions {
	display: flex;
}

.header__button-fav {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	margin-right: 8px;
	border: 2px solid var(--accent-color);
	border-radius: 12px;
	background: url("~/assets/icons/fav-orange.svg") center/ 18px 15px no-repeat;
	transition: background-image 150ms ease-in-out;
	cursor: pointer;
}

.header__button-fav--cart-full {
	margin-right: 12px;
}

.header__button-fav.is-active {
	background-image: url("~/assets/icons/fav-orange-active.svg");
}
</style>