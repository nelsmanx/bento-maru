<script setup>
import { useAppStore } from '~/stores/appStore';

const appStore = useAppStore();
const isSidebarMenuOpen = computed(() => appStore.isSidebarMenuOpen);

const addScrollLock = useAddScrollLock();
const removeScrollLock = useRemoveScrollLock();
watch(isSidebarMenuOpen, (newState) => newState ? addScrollLock() : removeScrollLock());
const modalFormIsOpen = ref(false);
	const response = ref('');
	async function sendEmail(event) {
		let formdata = new FormData(event.target);
		formdata.set('type', 'Модальная форма "Задать вопрос"');
		var obj = {};
		formdata.forEach((value, key) => obj[key] = value);
		var json = JSON.stringify(obj);
		response.value = await new ApiService().sendForm(json);
		event.target.reset();
		setTimeout(() => {
			modalFormIsOpen = !modalFormIsOpen;
		}, 2000);
	}
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
										<a class="sidebar-menu__nav-link" href="#">Все меню</a>
									</li>
									<li class="sidebar-menu__nav-item">
										<a class="sidebar-menu__nav-link sidebar-menu__nav-link--promo" href="#">Акции</a>
									</li>
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
								<a class="sidebar-menu__tel-link" :href="'tel:+' + appStore.siteparams.phone.replace(/\D/g,'')">{{appStore.siteparams.phone}}</a>
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

							<button class="sidebar-menu__button-callback">Задать вопрос</button>

							<div class="sidebar-menu__link-section">
								<ul class="sidebar-menu__link-list">
									<li class="sidebar-menu__link-item">
										<a class="sidebar-menu__link" href="#">Условия проведения акций</a>
									</li>
									<li class="sidebar-menu__link-item">
										<a class="sidebar-menu__link" href="#">Политика конфиденциальности</a>
									</li>
									<li class="sidebar-menu__link-item">
										<a class="sidebar-menu__link" href="#">Прочие ссылки</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
	<ModalWindow
		:isOpen="modalFormIsOpen"
		@toggle-modal="modalFormIsOpen = !modalFormIsOpen">
		<div class="callback">
			<button type="button" class="close" @click="modalFormIsOpen = !modalFormIsOpen"><IconsClose /></button>
			<h2 class="callback__title" v-if="response">{{ response.message }}</h2>
			<h2 class="callback__title" v-else>Есть вопросы?</h2>
			<p class="callback__desc" v-if="response">
				Наш специалист свяжется с Вами в ближайшее время
			</p>
			<p class="callback__desc" v-else>
				Оставьте свой номер телефона, мы свяжемся с Вами, расскажем про все наши блюда и выберем для Вас самый подходящий Бенто!
			</p>
			<form @submit.prevent="sendEmail($event)" class="callback__form" action="/">
				<input class="callback__form-input" type="text" name="name" placeholder="Имя">
				<input class="callback__form-input" type="tel" name="phone" placeholder="Телефон">
				<button type="submit" class="callback__form-button">Задать вопрос</button>
				<label class="custom-checkbox">
					<input type="checkbox" name="policy" checked required>
					<i><IconsCheck /></i>
					<span>
						Нажимая кнопку, вы соглашаетесь с условиями Политики конфиденциальности
					</span>
				</label>
			</form>
		</div>
	</ModalWindow>
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
	padding: 114px 40px 40px;
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

@media (max-width: 575px) {
	.sidebar-menu__inner[data-v-c3ae421a] {
		position: relative;
		padding: 100px 40px 40px;
		background-color: #1e1e1e;
	}
	.sidebar-menu__nav {
		margin-bottom: 40px;
	}
	.sidebar-menu__tel {
		margin-bottom: 28px;
	}
	.sidebar-menu__schedule {
		margin-bottom: 46px;
	}
}

</style>
