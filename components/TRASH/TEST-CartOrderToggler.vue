<script setup>
const props = defineProps({
	modelValue: {
		type: String,
	},
	groupName: {
		type: String,
		required: true,
	},
	labelFirst: {
		type: String,
		required: true,
	},
	labelSecond: {
		type: String,
		required: true,
	},
	valueFirst: {
		type: String,
		required: true,
	},
	valueSecond: {
		type: String,
		required: true,
	},
});
defineEmits(['update:modelValue', 'button-click']);
</script>

<template>
	<div class="order-toggler">
		<label class="order-toggler__label">
			{{ props.labelFirst }}
			<input
				@change="$emit('update:modelValue', $event.target.value)"
				@click="$emit('button-click', $event.target.value)"
				:name="props.groupName"
				:value="props.valueFirst"
				:checked="modelValue === props.valueFirst"
				class="order-toggler__input-default" type="radio">
			<span class="order-toggler__input-custom"></span>
		</label>
		<label class="order-toggler__label">
			{{ props.labelSecond }}
			<input
				@change="$emit('update:modelValue', $event.target.value)"
				@click="$emit('button-click', $event.target.value)"
				:name="props.groupName"
				:value="props.valueSecond"
				:checked="modelValue === props.valueSecond"
				class="order-toggler__input-default" type="radio">
			<span class="order-toggler__input-custom"></span>
		</label>
	</div>
</template>

<style scoped>
.order-toggler {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 22px;
	height: 54px;
	padding: 4px;
	border: 1.5px solid var(--accent-color);
	border-radius: 12px;
}

.order-toggler__label {
	position: relative;
	isolation: isolate;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Century Gothic";
	font-size: 18px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.18px;
	color: #fff;
	cursor: pointer;
}

.order-toggler__input-default {
	margin: 0;
	-webkit-appearance: none;
	appearance: none;
	background-color: transparent;
}

.order-toggler__input-custom {
	position: absolute;
	inset: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	border-radius: 8px;
}

.order-toggler__input-default:checked ~ .order-toggler__input-custom {
	background-image: var(--accent-gradient);
}
</style>