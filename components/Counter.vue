<script setup>
const props = defineProps({
	quantity: {
		type: Number,
		required: true
	}
});

defineEmits(['increase-counter', 'decrease-counter']);

</script>

<template>
	<div class="counter">
		<div class="counter__inner">
			<span @click="$emit('decrease-counter')"
				class="counter__minus">
			</span>
			<span class="counter__value">{{ props.quantity }}</span>
			<span @click="$emit('increase-counter')"
				class="counter__plus">
			</span>
		</div>
	</div>
</template>

<style scoped>
.counter {
	width: 178px;
	height: 54px;
	padding: 5px 15px;
	border: 1px solid var(--accent-color);
	border-radius: 12px
}

.counter__inner {
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	height: 100%
}

.counter__plus,
.counter__minus {
	--line-width: 14px;
	--line-height: 2px;
	position: relative;
	padding: 20px;
	border: none;
	background-color: transparent;
	cursor: pointer
}

.counter__plus::before,
.counter__plus::after,
.counter__minus::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: var(--accent-color);
	transform: translate(-50%, -50%)
}

.counter__plus::before,
.counter__minus::before {
	width: var(--line-width);
	height: var(--line-height);
}

.counter__plus::after {
	width: var(--line-height);
	height: var(--line-width);
}

.counter__value {
	display: flex;
	justify-content: center;
	width: 25px;
	font-family: "Century Gothic";
	font-size: 19px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.19px;
	color: var(--accent-color);
}

/* @media (max-width: 575.98px) {
	.counter {
		width: 120px;
		height: 41px;
		padding: 3px;
		border-radius: 5px;
	}
	.counter__plus, .counter__minus {
		padding: 16px;
	}
	.counter__value {
		font-size: 15px;
	}
	.counter__plus, .counter__minus {
		--line-width: 10px;
	}
} */
</style>