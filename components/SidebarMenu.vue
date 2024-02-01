<script setup>
import { useAppStore } from '~/stores/appStore';

const appStore = useAppStore();
const isSidebarMenuOpen = computed(() => appStore.sidebarMenu.isOpen);

const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();

watch(isSidebarMenuOpen, (newState) => newState ? addScrollLock() : removeScrollLock());


const handleModalWindowOpening = (modalWindow) => {
	appStore.toggleSidebarMenu();
	appStore.toggleModalWindow(modalWindow);
};

</script>

<template>
	<Teleport to="body">
		<Transition name="sidebar-menu-wrap">
			<div class="sidebar-menu__wrap"
				v-show="isSidebarMenuOpen">

				<Transition name="sidebar-menu-overlay">
					<div class="sidebar-menu__overlay"
						v-show="isSidebarMenuOpen"
						@click="appStore.toggleSidebarMenu"></div>
				</Transition>

				<Transition name="sidebar-menu">
					<div class="sidebar-menu" @click.stop
						v-if="isSidebarMenuOpen">
						<div class="sidebar-menu__inner">
							<button @click="appStore.toggleSidebarMenu"
								class="sidebar-menu__button-close">
							</button>
							<nav class="sidebar-menu__nav">
								<ul class="sidebar-menu__nav-list">
									<li class="sidebar-menu__nav-item">
										<NuxtLink to="/#title-w-d-japan-food-index"
											@click="appStore.toggleSidebarMenu"
											class="sidebar-menu__nav-link">Все меню</NuxtLink>
									</li>
									<!-- <li class="sidebar-menu__nav-item">
									<a class="sidebar-menu__nav-link sidebar-menu__nav-link--promo" href="#">Акции</a>
								</li> -->
									<li class="sidebar-menu__nav-item">
										<NuxtLink to="/delivery"
											@click="appStore.toggleSidebarMenu"
											class="sidebar-menu__nav-link">
											Доставка
										</NuxtLink>
									</li>
									<li class="sidebar-menu__nav-item">
										<NuxtLink to="/about"
											@click="appStore.toggleSidebarMenu"
											class="sidebar-menu__nav-link">
											О компании
										</NuxtLink>
									</li>
									<li class="sidebar-menu__nav-item">
										<NuxtLink to="/contacts"
											@click="appStore.toggleSidebarMenu"
											class="sidebar-menu__nav-link">
											Контакты
										</NuxtLink>
									</li>

								</ul>
							</nav>

							<div class="sidebar-menu__tel">
								<p class="sidebar-menu__tel-text">Южно-Сахалинск</p>
								<a class="sidebar-menu__tel-link" :href="'tel:+' + appStore.siteparams.phone.replace(/\D/g, '')">{{ appStore.siteparams.phone }}</a>
							</div>

							<div class="sidebar-menu__schedule">
								<p class="sidebar-menu__schedule-text-1">Принимаем заказы</p>
								<p class="sidebar-menu__schedule-text-2" v-html="appStore.siteparams.workingHours"></p>
							</div>

							<social-list class="sidebar-menu__social">
								<SocialItem modifier="vk" :link="appStore.siteparams.vk" />
								<SocialItem modifier="telegram" :link="appStore.siteparams.telegram" />
								<SocialItem modifier="whatsapp" :link="appStore.siteparams.whatsapp" />
							</social-list>

							<button class="sidebar-menu__button-callback"
								@click="handleModalWindowOpening('modalCallback')">
								Задать вопрос
							</button>

							<div class="sidebar-menu__link-section">
								<ul class="sidebar-menu__link-list">
									<li class="sidebar-menu__link-item">
										<NuxtLink to="/policy" class="sidebar-menu__link">Политика конфиденциальности</NuxtLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.sidebar-menu__wrap {
	--transition-speed: 250ms;
}

/* ### sidebar-menu-overlay animations ###*/
.sidebar-menu-overlay-enter-from,
.sidebar-menu-overlay-leave-to {
	opacity: 0
}

.sidebar-menu-overlay-enter-active,
.sidebar-menu-overlay-leave-active {
	transition: opacity var(--transition-speed) ease-in-out;
}

/* ### sidebar-menu animations ### */
.sidebar-menu-enter-from,
.sidebar-menu-leave-to {
	transform: translateX(-100%);
}

.sidebar-menu-enter-active,
.sidebar-menu-leave-active {
	transition: transform var(--transition-speed) ease-in-out;
}

/* ### sidebar-menu-wrap animations ### */
.sidebar-menu-wrap-leave-active {
	transition-delay: var(--transition-speed);
}

.sidebar-menu__wrap {
	position: fixed;
	inset: 0;
	z-index: 100;
	isolation: isolate;
}

.sidebar-menu__overlay {
	position: absolute;
	inset: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	background: rgba(1, 1, 1, 0.18);
}

.sidebar-menu {
	width: 560px;
	height: 100%;
	background-color: #1e1e1e;
	box-shadow: 0px 4.612px 105.952px 0px rgba(0, 0, 0, 0.50);
}

.sidebar-menu__inner {
	position: relative;
	height: 100%;
	padding: 114px 40px 40px;
	overflow: auto;
}

.sidebar-menu__button-close {
	position: absolute;
	top: 18px;
	left: 28px;
	width: 40px;
	height: 40px;
	background-image: url("/_nuxt/assets/icons/close.svg");
	background-color: transparent;
	background-size: 17px 17px;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
}

.sidebar-menu__nav {
	margin-bottom: 60px;
}

.sidebar-menu__nav-list {}

.sidebar-menu__nav-item {
	padding: 16px 0;
	border-bottom: 1.5px solid rgb(234, 234, 234, 0.1);
}

.sidebar-menu__nav-link {
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.19px;
	color: #fff;
	transition: color 150ms ease-in-out
}

.sidebar-menu__nav-link:hover {
	color: var(--accent-color)
}

.sidebar-menu__nav-link--promo {
	display: inline-flex;
	align-items: center;
	color: var(--accent-color)
}

.sidebar-menu__nav-link--promo::before {
	content: '';
	width: 11px;
	height: 14px;
	margin-right: 5px;
	background: url("~/assets/icons/category/2.svg") center/contain no-repeat;
}

/* ### <tel and schedule> ### */
.sidebar-menu__tel {
	margin-bottom: 55px;
}

.sidebar-menu__schedule {
	margin-bottom: 80px;
}

.sidebar-menu__tel-text,
.sidebar-menu__schedule-text-1 {
	margin-bottom: 5px;
	font-family: "Cera Pro";
	font-size: 17px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.17px;
	color: var(--accent-color);
}

.sidebar-menu__tel-link,
.sidebar-menu__schedule-text-2 {
	font-family: "Century Gothic";
	font-size: 28px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -0.3px;
	color: #fff;
}

/* ### </tel and schedule> ### */
.sidebar-menu__social {
	margin-bottom: 40px;
}

.sidebar-menu__social :deep(.social__list) {
	gap: 5px;
}

.sidebar-menu__social :deep(.social__link) {
	border-radius: 8px;
}

.sidebar-menu__button-callback {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 225px;
	width: 100%;
	height: 50px;
	margin-bottom: 35px;
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

.sidebar-menu__link-section {}

.sidebar-menu__link-list {}

.sidebar-menu__link-item:not(:last-child) {
	margin-bottom: 12px;
}

.sidebar-menu__link {
	font-family: "Century Gothic";
	font-size: 12px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.115px;
	color: rgb(249, 250, 251, 0.2);
}

.sidebar-menu__link:hover {
	color: var(--accent-color)
}

@media (max-width: 991.98px) {
	.sidebar-menu {
		width: 400px;
	}
}

@media (max-width: 575px) {
	.sidebar-menu {
		width: 290px;
	}

	.sidebar-menu__inner {
		padding: 90px 40px 40px;
	}

	.sidebar-menu__nav {
		margin-bottom: 44px;
	}

	.sidebar-menu__nav-item {
		padding: 13px 0;
	}

	.sidebar-menu__nav-link {
		font-size: 16px;
	}

	.sidebar-menu__tel {
		margin-bottom: 28px;
	}

	.sidebar-menu__tel-text,
	.sidebar-menu__schedule-text-1 {
		font-size: 14px;
	}

	.sidebar-menu__tel-link,
	.sidebar-menu__schedule-text-2 {
		font-size: 23px;
	}

	.sidebar-menu__schedule {
		margin-bottom: 46px;
	}
}
</style>
