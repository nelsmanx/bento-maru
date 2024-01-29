<script setup>
const props = defineProps({
	activeTab: {
		type: String,
		required: true,
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
defineEmits(['tab-click']);

// const activeTabLocal = ref(props.activeTabModel);
// @click="handleTabClick($event.target.value)";
// const handleTabClick = (eventTargetValue) => {
// 	activeTabLocal.value = eventTargetValue;
// 	emit('tab-click', eventTargetValue);
// };
</script>

<template>
	<div class="order-toggler">
		<label class="order-toggler__label">
			{{ props.labelFirst }}
			<input
				@click="$emit('tab-click', $event.target.value)"
				:name="props.groupName"
				:value="props.valueFirst"
				:checked="props.activeTab === props.valueFirst"
				type="radio"
				:class="{ 'is-active': props.activeTab === props.valueFirst }"
				class="order-toggler__input-default">
			<span class="order-toggler__input-custom"></span>
		</label>

		<label class="order-toggler__label">
			{{ props.labelSecond }}
			<input
				@click="$emit('tab-click', $event.target.value)"
				:name="props.groupName"
				:value="props.valueSecond"
				:checked="props.activeTab === props.valueSecond"
				type="radio"
				:class="{ 'is-active': props.activeTab === props.valueSecond }"
				class="order-toggler__input-default">
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
	line-height: 1;
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

.order-toggler__input-default.is-active ~ .order-toggler__input-custom {
	background-image: var(--accent-gradient);
}

@media (max-width: 1200px) {
	.order-toggler__input-custom {
		border-radius: 6.138px;
	}

	.order-toggler__label {
		font-size: 13.811px;
		letter-spacing: 0.138px;
	}
}

@media (max-width: 991px) {
	.order-toggler {
		border-radius: 9.2px;
	}
}

@media (max-width: 575.98px) {
	.order-toggler {
		gap: 20px;
		height: 40px;
		padding: 3px;
	}
}
</style>