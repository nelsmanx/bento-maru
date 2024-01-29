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

const { clientWidth } = useClientWidth();

</script>

<template>
	<header class="header" :class="{ 'shadow-on-scroll': pageIsScrolled }" ref="header">
		<div class="header__inner">
			<button @click="appStore.toggleSidebarMenu"
				class="header__button-burger"></button>
			<div class="container">
				<div class="header__items">
					<a v-if="clientWidth >= 576" class="header__tel" :href="'tel:+' + appStore.siteparams.phone.replace(/\D/g,'')">{{appStore.siteparams.phone}}</a>
					<span v-if="clientWidth >= 576" class="header__city">Южно-Сахалинск</span>
					<div class="header__logo ">
						<img v-if="$route.path === '/'" class="header__logo-image" src="~/assets/images/logo-cropped-top.svg" alt="Логотип компании">
						<NuxtLink v-else to="/" class="header__logo-link">
							<img class="header__logo-image" src="~/assets/images/logo-cropped-top.png" alt="Логотип компании">
						</NuxtLink>
					</div>
					<social-list v-if="clientWidth >= 576" class="header__social"
						:class="{ 'header__social--cart-full': hasProductItems }">
						<SocialItem modifier="vk" :link="appStore.siteparams.vk" />
						<SocialItem modifier="telegram" :link="appStore.siteparams.telegram" />
						<SocialItem modifier="whatsapp" :link="appStore.siteparams.whatsapp" />
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
	background-image: url("~/assets/images/background/pattern.svg");
	background-position: 0 0;
	background-repeat: repeat;
}

.header.shadow-on-scroll {
	box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 15%);
}

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

@media (max-width: 575.98px) {
	.header__items {
		height: 70px;
	}

	.header__button-burger {
		left: 22px;
		width: 30px;
		height: 30px;
		background-size: 15px 11px;
	}

	.header__logo-image {
		--scale: 0.55;
	}

	.header__actions {
		margin-left: auto;
	}

	.header__button-fav {
		width: 34px;
		height: 34px;
		margin-right: 9px;
		border-width: 1px;
		border-radius: 7px;
		background-size: 17px 14px;
	}

	.header__button-tel {
		display: block;
		padding: 5px;
		width: 34px;
		height: 34px;
		background: url("~/assets/icons/tel-white.svg") center/ 14px 14px no-repeat;
		border: 1px solid #fff;
		border-radius: 7px;
		cursor: pointer;
	}

	.header__cart {
		position: fixed;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%);
	}
}
</style>