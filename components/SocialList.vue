<template>
	<div class="social">
		<ul class="social__list">
			<slot />
		</ul>
	</div>
</template>

<style scoped>
.social__list {
	display: inline-grid;
	grid-auto-flow: column;
	gap: 9px;
}
</style>