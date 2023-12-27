<script setup>
const props = defineProps({
	quantity: {
		type: Number,
		required: true
	}
});


</script>

<template>
	<ul class="decor-icons">
		<li v-for="icon in props.quantity" class="decor-icons__item"></li>
	</ul>
</template>

<style scoped>
.decor-icons {
	display: inline-grid;
	grid-auto-flow: column;
	gap: 5px;
	padding: 10px 8px;
	border: 2px solid #F45601;
	border-radius: 12px;
}

.decor-icons__item {
	background-size: contain;
	background-position: center bottom;
	background-repeat: no-repeat;
}

.decor-icons__item:nth-child(3n+1) {
	width: 28px;
	height: 27px;
	background-image: url("~/assets/icons/decor/1.svg");
}

.decor-icons__item:nth-child(3n+2) {
	width: 39px;
	height: 26px;
	background-image: url("~/assets/icons/decor/2.svg");
}

.decor-icons__item:nth-child(3n+3) {
	width: 32px;
	height: 27px;
	background-image: url("~/assets/icons/decor/3.svg");
}

</style>