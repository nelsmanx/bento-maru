<script setup>
const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true
	},
	classModifier: {
		type: String,
	}
});
defineEmits(['toggle-modal']);
</script>

<template>
	<Teleport to="body">
		<Transition name="modal">
			<div class="modal" :class="classModifier"
				v-show="props.isOpen"
				@click="$emit('toggle-modal')">
				<Transition name="modal-content">
					<div class="modal__content" @click.stop
						v-if="props.isOpen">
						<slot />
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<style>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 0 25px;
	background-color: rgba(29, 30, 33, 0.80);
	backdrop-filter: blur(25px);
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
}

/* modal-animations */
.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
	transition: opacity 300ms ease;
}

/* modal-content animations */
.modal-content-enter-from,
.modal-content-leave-to {
	opacity: 0;
	transform: scale(0.9);
}

.modal-content-enter-active {
	transition: all 500ms ease 100ms;
}

.modal-content-leave-active {
	transition: all 500ms ease;
}

@media (max-width: 575.98px) {
	.modal--card .modal__content {
		align-self: start;
		margin-top: 30px;
	}
}
</style>