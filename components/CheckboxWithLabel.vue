<script setup>

const props = defineProps({
	modelValue: {
		type: Boolean,
	},
});

defineEmits(['update:modelValue']);


</script>

<template>
	<label class="checkbox-w-l__label">
		<span class="checkbox-w-l__input-wrap">
			<input type="checkbox"
				@change="$emit('update:modelValue', $event.target.checked)"
				:checked="modelValue"
				class="checkbox-w-l__default-input">
			<span class="checkbox-w-l__custom-input"></span>
		</span>
		<span class="checkbox-w-l__label-content">
			<slot />
		</span>
	</label>
</template>



<style scoped>
.checkbox-w-l__label {
	line-height: 1.2;
	cursor: pointer;
}

.checkbox-w-l__default-input {
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0;
	opacity: 0;
}

.checkbox-w-l__default-input::-ms-check {
	display: none;
}

.checkbox-w-l__input-wrap {
	position: relative;
	top: 5px;
	display: inline-block;
	margin-right: 4px;
}

.checkbox-w-l__custom-input {
	display: block;
	width: 19px;
	height: 19px;
	background-color: transparent;
	border: 1px solid var(--accent-color);
	border-radius: 4px;
}

.checkbox-w-l__label-content {
	font-family: "Cera Pro";
	color: #f9fafb;
	font-size: 14px;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.14px;
	user-select: none;
}

.checkbox-w-l__default-input:checked + .checkbox-w-l__custom-input::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 5px;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url("~/assets/icons/check-orange.svg");
	transform: translate(-50%, -50%);
}

@media (max-width: 1200px) {
	.checkbox-w-l__label-content {
		font-size: 12px;
	}
}
</style>