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

@media (max-width: 1399.98px) {

	/* ### japan-food ### */
	.title-w-d--japan-food .title-w-d__title {
		font-size: 52px;
	}

	.title-w-d--japan-food :deep(.decor-icons__item) {
		--scale: 0.9;
	}
}

@media (max-width: 1199.98px) {
	.title-w-d--japan-food :deep(.decor-icons) {
		display: none;
	}
}

@media (max-width: 991.98px) {

	/* ### japan-food ### */
	.title-w-d--japan-food .title-w-d__title-wrap {
		position: relative;
		flex-direction: column;
		align-items: flex-start;
	}

	.title-w-d--japan-food .title-w-d__title {
		margin-right: 0;
		margin-bottom: 10px;
		font-size: 40px;
		line-height: 1.1;
	}

	.title-w-d--japan-food :deep(.decor-icons) {
		display: inline-grid;
	}
}

@media (max-width: 767.98px) {

	/* ### japan-food ### */
	.title-w-d--japan-food :deep(.decor-icons) {
		position: absolute;
		top: 7px;
		left: 249px;
		gap: 3px;
		padding: 4px;
		border-radius: 6px;
		border-width: 2px;
	}

	.title-w-d--japan-food :deep(.decor-icons__item) {
		--scale: 0.65;
	}
}

@media (max-width: 575.98px) {

	/* ### japan-food ### */
	.title-w-d--japan-food-index-top {
		padding: 20px 0;
	}

	.title-w-d--japan-food .title-w-d__title {
		margin-bottom: 0;
		font-size: 31px;
	}

	.title-w-d--japan-food :deep(.decor-icons) {
		top: 5px;
		left: 180px;
		gap: 2px;
		/* border-radius: 6px; */
		border-width: 1.5px;
	}

	.title-w-d--japan-food :deep(.decor-icons__item) {
		--scale: 0.48;
	}
}
</style>