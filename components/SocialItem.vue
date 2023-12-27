<script setup>
const props = defineProps({
	modifier: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	}
});
</script>

<template>
	<li class="social__item">
		<a class="social__link" target="_blank"
			:class="`social__link--${props.modifier}`"
			:href="props.link">
		</a>
	</li>
</template>

<style scoped>
.social__link {
	display: block;
	width: 44px;
	height: 44px;
	background-position: center;
	background-repeat: no-repeat;
	border: 2px solid rgba(249, 250, 251, 0.2);
	border-radius: 12px;
	cursor: pointer;
	transition: all 150ms ease-in-out;
}

.social__link:hover {
	border: 2px solid var(--accent-color);
}

.social__link--vk {
	background-position: center calc(50% + 0px);
	background-size: 19px 11px;
	background-image: url("~/assets/icons/social/vk-white.svg");
}

.social__link--vk:hover {
	background-image: url("~/assets/icons/social/vk-orange.svg");
}

.social__link--telegram {
	background-image: url("~/assets/icons/social/telegram-white.svg");
}

.social__link--telegram:hover {
	background-image: url("~/assets/icons/social/telegram-orange.svg");
}

.social__link--whatsapp {
	background-image: url("~/assets/icons/social/whatsapp-white.svg");
}

.social__link--whatsapp:hover {
	background-image: url("~/assets/icons/social/whatsapp-orange.svg");
}
</style>