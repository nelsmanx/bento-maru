<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	subtitle: {
		type: String,
	},
	subtitleAccent: {
		type: String,
	}
});
</script>

<template>
	<div class="toast">
		<p class="toast__title">{{ props.title }}</p>
		<p class="toast__subtitle">
			{{ props.subtitle }}
			<span v-if="props.subtitleAccent" class='accent'>{{ props.subtitleAccent }}</span>
		</p>
	</div>
</template>

<style scoped>
.toast {
	width: 430px;
	min-height: 140px;
	padding: 25px 30px 35px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(356deg, #121212 1.63%, rgba(18, 18, 18, 0.49) 92.66%);
	backdrop-filter: blur(25px);
}

.toast__title {
	margin-bottom: 10px;
	font-family: "Century Gothic";
	font-size: 37px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.37px;
	text-align: center;
	color: var(--accent-color)
}

.toast__subtitle {
	font-family: "Cera Pro";
	font-size: 17px;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.17px;
	text-align: center;
	color: #fff;
}

.toast__subtitle .accent {
	color: var(--accent-color)
}
</style>