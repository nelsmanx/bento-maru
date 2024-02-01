<script setup>
import { yandexMap, yandexMarker } from 'vue-yandex-maps';

const coordinates = [46.924689, 142.745551];
</script>

<template>
	<ClientOnly>
		<YandexMap :class="$attrs.class"
			:coordinates="coordinates"
			:zoom="17"
			:controls="['zoomControl', 'fullscreenControl']"
			:behaviors="['drag', 'dblClickZoom', 'multiTouch']">
			<YandexMarker
				:coordinates="coordinates"
				marker-id="yandex-balloon"
				:options="{ iconColor: '#F96313', }" />
		</YandexMap>
	</ClientOnly>
</template>

<style scoped>
.yandex-container {
	height: 100%;
}

.yandex-container :deep([class$="map-copyrights-promo"]),
.yandex-container :deep([class$="copyright__wrap"]) {
	display: none;
}
</style>