<template>
	<Head>
        <Title>Японские коробочки с едой</Title>
        <Meta name="description" content="Японские коробочки с едой"/>
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://bentomaru.ru" />
        <Meta property="og:locale" content="ru_RUS" />
        <Meta property="og:image" content="https://bentomaru.ru/img/bento-mix.jpg" />
        <Meta property="og:title" content="Японские коробочки с едой" />
        <Meta property="og:description" content="Японские коробочки с едой" />
    </Head>
	
	<CategoryTitleList class="category-title--about" />

	<section class="about">
		<div class="container">
			<div class="about__inner">
				<div class="about__content">
					<h1 class="about__title">ВСЕМ ЗДРАВСТВУЙТЕ!</h1>
					<div class="about__text-group">
						<p class="about__par">Я известный сахалинский блогер Ольга Япономать.</p>
						<p class="about__par">Вместе с бизнес-партнером мы создали бренд аутентичной японской еды в коробочках «Бэнто Мару»</p>
						<p class="about__par">Вся моя жизнь связана с Японией, хоть и живем мы с мужем-японцем на Сахалине.</p>
						<p class="about__par">Наши друзья и знакомые очень любят аутентичную еду, которую готовит мой муж. Именно поэтому было принято решение начать готовить японские Бенто для жителей нашего острова по его рецептам.</p>
					</div>
				</div>
				<div class="about__media">
					<picture class="about__media-picture">
						<img src="~/assets/images/contacts-media.jpg" alt="Блогер Ольга Япономать">
					</picture>
					<a class="about__media-link-youtube" href="https://www.youtube.com/watch?v=ZAZFazqj55s" target="_blank"></a>
				</div>
			</div>
		</div>
	</section>

	<div class="about-info">
		<div class="container">
			<div class="about-info__inner">
				<p class="about-info__par">
					Идея еды в коробочке, которую можно взять с собой, зародилась в Японии очень давно. Японцы - заядлые путешественники. Издревле они путешествовали по своей стране и сначала брали с собой только рисовые шарики, завернутые в лист бамбука. <br />
					Потом появились лаковые коробочки для переноса незамысловатой снеди долгого хранения, а в эпоху Эдо искусство приготовления еды для Бенто возвели в ранг искусства.
				</p>
				<p class="about-info__par">
					Каждый, кто хотя бы раз бывал в стране восходящего солнца видел огромное количество разных Бенто в магазинах, на станциях, вокзалах, в аэропортах этой страны. <br />
					Так же, доставка Бенто - самый распространенный вид доставки в Японии.
				</p>
				<p class="about-info__par">
					Мы с моим партнером взяли эту идею и хотим, чтобы сахалинцы тоже могли получать удовольствие от самой признанной в мире кухни.
				</p>
				<p class="about-info__par">
					Мы то, что мы едим - именно поэтому наша кампания «Бенто Мару» мечтает, чтобы в России обыкновенный перекус, обед или ужин стал полноценным приемом пищи, который включает максимум микроэлементов и витаминов. Так же содержание белков, жиров и углеводов в каждой коробочке сбалансировано для мужчин, женщин и детей.
				</p>
				<p class="about-info__par">
					Мы сформировали для Вас каждое Бенто с заботой о здоровье и эстетическом удовольствии. <br />
					Сначала мы «едим» глазами и этот момент в наших Бенто не упущен: каждый набор в первую очередь красивый. Затем, каждый элемент Бенто - вкусный. И, конечно, большое разнообразие использованных продуктов - очень полезно.
				</p>
				<p class="about-info__par">
					Итак, мы приглашаем вас почувствовать себя самураем или прекрасной гейшей и отведать настоящей японской еды с историей!
				</p>
			</div>
		</div>
	</div>


	<Support class="support--about" />
</template>

<style lang="scss" scoped>
.category-title--about {
	padding: 10px 0 38px;
}

/* ### about ### */
.about {
	padding: 35px 0 35px;
}

.about__inner {
	display: grid;
	grid-template-columns: 595px 640px;
	justify-content: space-between;
	gap: 50px;

	@media (max-width: 1400px) {
		grid-template-columns: 470px 1fr;
		gap: 30px;
	}

	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
	}
}

.about__content {}

.about__title {
	margin-bottom: 24px;
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);

	@media (max-width: 1200px) {
		font-size: 34px;
	}

	@media (max-width: 768px) {
		font-size: 28px;
	}

	@media (max-width: 575px) {
		font-size: 24px;
	}
}

.about__text-group {}

.about__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.2px;
	color: #fff;

	@media (max-width: 1200px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
	}
}

.about__par:not(:last-child) {
	margin-bottom: 25px;
}

.about__media {
	position: relative;
	padding-top: 10px;

	@media (max-width: 991px) {
		padding-top: 25px;
		height: 360px;
	}
}

.about__media-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	/* padding: calc(100% / (621 / 463)) 0 0; */
	border-radius: 12px;
	overflow: hidden;
}

.about__media-picture img {
	position: absolute;
	inset: 0;
	display: block;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
}

.about__media-link-youtube {
	position: absolute;
	top: 35px;
	right: 23px;
	display: block;
	width: 139px;
	height: 45px;
	background-image: url("~/assets/icons/contacts-youtube.svg");
	background-color: transparent;
	background-size: 112px 25px;
	background-repeat: no-repeat;
	background-position: center;
	border: 1px solid #282828;
	border-radius: 8px;
	cursor: pointer;

	@media (max-width: 991px) {
		width: 80px;
		height: 30px;
		background-size: contain;
		border: 0;
	}
}

/* ### about-info ### */
.about-info {}

.about-info__inner {
	padding: 33px 32px 43px 34px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);

	@media (max-width: 1200px) {
		padding: 30px;
	}

	@media (max-width: 768px) {
		padding: 20px;
	}

	@media (max-width: 575px) {
		padding: 15px;
	}
}

.about-info__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;

	@media (max-width: 1200px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
	}
}

.about-info__par:not(:last-child) {
	margin-bottom: 32px;
}

.support--about {
	padding: 45px 0 70px;

	@media (max-width: 1200px) {
		padding: 30px 0 30px;
	}

	@media (max-width: 768px) {
		padding: 20px 0 20px;
	}

	@media (max-width: 575px) {
		padding: 15px 0 15px;
	}
}
</style>




<!-- <style scoped>
.category-title--about {
	padding: 10px 0 38px;
}

/* ### about ### */
.about {
	padding: 35px 0 35px;
}

.about__inner {
	display: grid;
	grid-template-columns: 595px 640px;
	justify-content: space-between;
	gap: 50px;
}

.about__content {}

.about__title {
	margin-bottom: 24px;
	font-family: "Century Gothic";
	font-size: 42px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.42px;
	color: var(--accent-color);
}

.about__text-group {}

.about__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.2px;
	color: #fff;
}

.about__par:not(:last-child) {
	margin-bottom: 25px;
}

.about__media {
	position: relative;
	padding-top: 10px;
}

.about__media-picture {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	/* padding: calc(100% / (621 / 463)) 0 0; */
	border-radius: 12px;
	overflow: hidden;
}

.about__media-picture img {
	position: absolute;
	inset: 0;
	display: block;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
}

.about__media-link-youtube {
	position: absolute;
	top: 35px;
	right: 23px;
	display: block;
	width: 139px;
	height: 45px;
	background-image: url("~/assets/icons/contacts-youtube.svg");
	background-color: transparent;
	background-size: 112px 25px;
	background-repeat: no-repeat;
	background-position: center;
	border: 1px solid #282828;
	border-radius: 8px;
	cursor: pointer;
}

/* ### about-info ### */
.about-info {}

.about-info__inner {
	padding: 33px 32px 43px 34px;
	border: 1px solid #282828;
	border-radius: 12px;
	background: linear-gradient(1deg, #121212 0.77%, rgba(18, 18, 18, 0.49) 43.56%);
}

.about-info__par {
	font-family: "Cera Pro";
	font-size: 20px;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: 0.2px;
	color: #fff;
}

.about-info__par:not(:last-child) {
	margin-bottom: 32px;
}

.support--about {
	padding: 45px 0 70px;
}
</style> -->