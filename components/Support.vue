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
	grid-template-columns: 1fr auto;
	gap: 60px;
}

@media (max-width: 1399.98px) {
	.support__group {
		gap: 40px;
	}
}

@media (max-width: 1199.98px) {
	.support :deep(.message-us) {
		display: none;
	}

	.support :deep(.callback) {
		max-width: none;
	}
}

@media (max-width: 992.98px) {
	.support__group {
		grid-template-columns: 100%;
		justify-items: center;
		gap: 20px;
	}

	.support :deep(.message-us) {
		display: block;
	}
}
</style>