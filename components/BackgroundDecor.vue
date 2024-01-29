<script setup>
const backgroundDecor = ref(null);

onMounted(() => {
	const backgroundDecorFullHeight = backgroundDecor.value.offsetHeight;
	const topImageOffset = 190;
	const spacingBetweenImages = 390;
	// Компенсация неточности расстановки элементов
	const reserveSpacing = 10;
	// Высота каждого элемента по порядку
	const imagesHeights = [197, 619, 161, 211, 619, 101];

	const cycleImagesHeight = imagesHeights.reduce((total, height) => total += height, 0);

	const cycleTotalHeight = cycleImagesHeight + (spacingBetweenImages * (imagesHeights.length - 1));

	const fullCycles = Math.floor(backgroundDecorFullHeight / (cycleTotalHeight + topImageOffset));

	const fullCyclesHeight = fullCycles > 0
		? (fullCycles * cycleTotalHeight) + (spacingBetweenImages * (fullCycles - 1)) + topImageOffset + reserveSpacing
		: (fullCycles * cycleTotalHeight) + topImageOffset + reserveSpacing;

	let adaptiveHeight = fullCyclesHeight;

	for (let i = 0; i < imagesHeights.length; i++) {
		let tempHeight = adaptiveHeight;

		if (fullCycles >= 1) tempHeight += spacingBetweenImages;
		if (fullCycles < 1 && i > 0) tempHeight += spacingBetweenImages;

		if (tempHeight >= backgroundDecorFullHeight) break;
		tempHeight += imagesHeights[i];

		if (tempHeight >= backgroundDecorFullHeight) {
			break;
		} else {
			adaptiveHeight = tempHeight;
		}
	}

	backgroundDecor.value.style.setProperty('--adaptive-height', `${adaptiveHeight}px`);
});

</script>

<template>
	<div class="background-decor" ref="backgroundDecor">
		<slot />
	</div>
</template>

<style scoped>
.background-decor {
	position: relative;
	--adaptive-height: 100%;
}

.background-decor::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--adaptive-height);
	z-index: -1;
	background-image:
		/* flower right */
		url("~/assets/images/background/flower-right.svg"),
		/* fish left */
		url("~/assets/images/background/fish.svg"),
		/* wind right */
		url("~/assets/images/background/wind-right.svg"),
		/* flower left */
		url("~/assets/images/background/flower-left.svg"),
		/* fish right */
		url("~/assets/images/background/fish.svg"),
		/* wind left */
		url("~/assets/images/background/wind-left.svg");
	background-size:
		/* flower right */
		202px 4248px,
		/* fish left */
		456px 4248px,
		/* wind right */
		324px 4248px,
		/* flower left */
		202px 4248px,
		/* fish right */
		456px 4248px,
		/* wind left */
		266px 4248px;
	background-position:
		/* flower right */
		right 190px top -1840px,
		/* fish left */
		96px -1035px,
		/* wind right */
		right 170px top -255px,
		/* flower left */
		190px 320px,
		/* fish right */
		right 80px top 1125px,
		/* wind left */
		190px 1875px;
	background-repeat:
		repeat-y;
}

@media (max-width: 575.98px) {
	.background-decor::before {
		display: none;
	}
}
</style>