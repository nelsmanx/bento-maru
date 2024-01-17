<template>
	<section class="support">
		<div class="container">
			<div class="support__group">
				<Callback />
				<MessageUs />
			</div>
		</div>
	</section>
</template>

<style scoped>
.support__group {
	display: grid;
	grid-auto-flow: column;
	gap: 60px;
}

@media (max-width: 575.98px) {
	.support__group {
		grid-auto-flow: row;
		gap: 20px;
	}
}
</style>