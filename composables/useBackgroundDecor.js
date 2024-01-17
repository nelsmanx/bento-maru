export function useBackgroundDecorHandler(BackgroundDecorRef) {
	return () => {
		onMounted(() => {
			const backgroundDecorFullHeight = BackgroundDecorRef.value.offsetHeight;
			// console.log('backgroundDecorFullHeight: ', backgroundDecorFullHeight);
			const topImageOffset = 190;
			const spacingBetweenImages = 390;
			// Компенсация неточности расстановки элементов
			const reserveSpacing = 10;
			// Высота каждого элемента по порядку
			const imagesHeights = [197, 619, 161, 211, 619, 101];

			const cycleImagesHeight = imagesHeights.reduce((total, height) => total += height, 0);

			const cycleTotalHeight = cycleImagesHeight + (spacingBetweenImages * (imagesHeights.length - 1));
			// console.log('cycleTotalHeight: ', cycleTotalHeight);

			const fullCycles = Math.floor(backgroundDecorFullHeight / (cycleTotalHeight + topImageOffset));
			// console.log('fullCycles: ', fullCycles);

			const fullCyclesHeight = fullCycles > 0
				? (fullCycles * cycleTotalHeight) + (spacingBetweenImages * (fullCycles - 1)) + topImageOffset + reserveSpacing
				: (fullCycles * cycleTotalHeight) + topImageOffset + reserveSpacing;

			let adaptiveHeight = fullCyclesHeight;
			// console.log('adaptiveHeight before handling: ', adaptiveHeight);

			for (let i = 0; i < imagesHeights.length; i++) {
				// console.log('i = ', i);
				let tempHeight = adaptiveHeight;

				if (fullCycles >= 1) tempHeight += spacingBetweenImages;
				if (fullCycles < 1 && i > 0) tempHeight += spacingBetweenImages;
				// console.log('tempHeight with spacing: ', tempHeight);

				if (tempHeight >= backgroundDecorFullHeight) break;
				tempHeight += imagesHeights[i];

				if (tempHeight >= backgroundDecorFullHeight) {
					break;
				} else {
					adaptiveHeight = tempHeight;
					// console.log('adaptiveHeight with image: ', adaptiveHeight);
				}

			}
			// console.log('total adaptiveHeight: ', adaptiveHeight);

			BackgroundDecorRef.value.style.setProperty('--adaptive-height', `${adaptiveHeight}px`);
		});
	};
}