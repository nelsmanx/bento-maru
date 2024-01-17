<template>
	<section class="nav-menu">
		<div class="container">
			<ul class="nav-menu__list">
				<li class="nav-menu__item">
					<a class="nav-menu__link" href="#">Все меню</a>
				</li>
				<li class="nav-menu__item">
					<a class="nav-menu__link nav-menu__link--promo" href="#">Акции</a>
				</li>
				<li class="nav-menu__item">
					<NuxtLink to="/delivery"
						class="nav-menu__link">
						Доставка
					</NuxtLink>
				</li>
				<li class="nav-menu__item">
					<NuxtLink to="/about"
						class="nav-menu__link">
						О компании
					</NuxtLink>
				</li>
				<li class="nav-menu__item">
					<NuxtLink to="/contacts"
						class="nav-menu__link">
						Контакты
					</NuxtLink>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.nav-menu__item {
	padding: 16px 0;
	text-align: center;
	border-bottom: 1.5px solid rgb(234, 234, 234, 0.1);
}

.nav-menu__item:first-child {
	border-top: 1.5px solid rgb(234, 234, 234, 0.1);
}

.nav-menu__link {
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.19px;
	color: #fff;
	transition: color 150ms ease-in-out
}

.nav-menu__link:hover {
	color: var(--accent-color)
}

.nav-menu__link--promo {
	display: inline-flex;
	align-items: center;
	color: var(--accent-color)
}

.nav-menu__link--promo::before {
	content: '';
	width: 11px;
	height: 14px;
	margin-right: 5px;
	background: url("~/assets/icons/category/2.svg") center/contain no-repeat;
}
</style>