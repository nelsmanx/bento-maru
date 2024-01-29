<script setup>
const props = defineProps({
	decorIconsQuantity: {
		type: Number,
		required: true
	}
});
</script>

<template>
	<div class="title-w-d">
		<div class="container">
			<div class="title-w-d__title-wrap">
				<h2 class="title-w-d__title">
					<slot />
				</h2>
				<DecorIcons :quantity="props.decorIconsQuantity" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.title-w-d__title-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.title-w-d__title {
	margin-right: 8px;
	font-family: "Century Gothic";
	font-size: 54px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.5px;
	color: var(--accent-color);
}

@media (max-width: 575.98px) {

	/* ### japan-food ### */
	.title-w-d--japan-food-index-top {
		padding: 20px 0;
	}

	.title-w-d--japan-food .title-w-d__title-wrap {
		position: relative;
	}

	.title-w-d--japan-food .title-w-d__title {
		margin-right: 0;
		font-size: 31px;
		line-height: 1.1;
	}

	.title-w-d--japan-food :deep(.decor-icons) {
		position: absolute;
		top: 5px;
		left: 180px;
		gap: 2px;
		padding: 4px;
		border-radius: 6px;
		border-width: 1.5px;
	}

	.title-w-d--japan-food :deep(.decor-icons__item) {
		--scale: 0.48;
	}
}
</style>