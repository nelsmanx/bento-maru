<script setup>
import { useAppStore } from '~/stores/appStore';
import { emitter } from './services/MittService';

const appStore = useAppStore();
const router = useRouter();
const error = useError();
const route = useRoute();

appStore.init();

const isMobileScreen = useMediaQuery('(max-width: 575.98px)');
provide('isMobileScreen', isMobileScreen);

router.beforeEach(() => {
	emitter.emit('loader', 1);
	setTimeout(() => {
		emitter.emit('loader', -1);
	}, 500);
	return true;
});
</script>

<template>
    <NuxtLayout>
        <template v-if="error.statusCode === 404">
            <section class="error-page">
                <div class="container">
                    <div class="header-withlogo">
                        <h1 class="h2">Страница не найдена</h1>
                    </div>
                </div>
            </section>
            <div class="container" style="min-height: 240px;">
                <p>
                    По указанному адресу страница не найдена, воспользуйтесь меню сайта, чтобы перейти на нужную страницу<br/>
                    <a href="/">Вернуться на главную</a>
                </p>
            </div>
        </template>
        <template v-else>
            <section class="error-page">
                <div class="container">
                    <div class="header-withlogo">
                        <h1 class="h2">{{ error.statusMessage }}</h1>
                    </div>
                </div>
            </section>
            <div class="container" style="min-height: 240px;">
                <p>
                    {{ error.message }}
                </p>
            </div>
        </template>
    </NuxtLayout>
</template>

<style src="~/assets/css/fonts.css"></style>
<style src="~/assets/css/style.css"></style>

<style lang="scss" scoped>
    .error-page {
        padding: 90px 0 0;
        font-size: 18px;
        color: #fff;
        @media (max-width: 1200px) {
            padding: 60px 0 0;
        }
        @media (max-width: 991px) {
            padding: 50px 0 0;
        }
        @media (max-width: 575px) {
            padding: 40px 0 0;
        }
        h1 {
            font-size: 32px;
            margin-bottom: 40px;
            font-family: "Century Gothic";
        }
    }
    p {
        font-family: "Century Gothic";
        font-size: 18px;
        color: #fff;
    }
    a {
        display: inline-block;
        margin-top: 15px;
        font-weight: bold;
    }
</style>