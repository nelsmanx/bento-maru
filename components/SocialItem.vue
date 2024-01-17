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
			:href="props.link">
			<svg class="social__icon"
				:class="`social__icon--${props.modifier}`">
				<use :xlink:href="`#social-${props.modifier}`"></use>
			</svg>
		</a>
	</li>
</template>

<style scoped>
.social__link {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	border: 2px solid rgba(249, 250, 251, 0.2);
	border-radius: 12px;
	cursor: pointer;
	transition: border-color 150ms ease-in-out;
}

.social__link:hover {
	border-color: var(--accent-color);
}

.social__icon {
	fill: #f9fafb;
	transition: fill 150ms ease-in-out
}

.social__link:hover .social__icon {
	fill: var(--accent-color);
}

.social__icon--vk {
	width: 19px;
	height: 11px;
}

.social__icon--telegram {
	width: 17px;
	height: 13px;
}

.social__icon--whatsapp {
	width: 16px;
	height: 16px;
}
</style>