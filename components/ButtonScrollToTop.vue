<script setup>
const isVisible = ref(false);

onMounted(() => {
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 200) {
			isVisible.value = true;
		} else {
			isVisible.value = false;
		}
	});
});

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<template>
	<button class="button-scroll-to-top" :class="{ 'is-visible': isVisible }"
		@click="scrollToTop">
	</button>
</template>

<style scoped>
.button-scroll-to-top {
	position: fixed;
	right: 35px;
	bottom: 160px;
	width: 50px;
	height: 50px;
	background-image:
		url("~/assets/icons/scroll-to-top.svg"),
		var(--accent-gradient);
	background-size:
		17px 9px,
		cover;
	background-repeat: no-repeat;
	background-position: center;
	border: none;
	border-radius: 14px;
	opacity: 0;
	transition: opacity 150ms ease-in-out;
	cursor: pointer;
}

.button-scroll-to-top.is-visible {
	opacity: 1;
}
</style>