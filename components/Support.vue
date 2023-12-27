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
</style>