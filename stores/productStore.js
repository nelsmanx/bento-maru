export const useProductStore = defineStore('product', {
	state: () => ({
		products: [
			{
				id: 1,
				title: "Бенто Микс",
				category: [1, 2, 12],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай, Горбуша гриль, Осьминожка из сосисок, Корень Лотоса, Тофу КараАге, КусиКацу (шашлычок свиной в сухарях), Онигири, Фасоль с кунжутом",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 2,
				title: "VIP Бенто",
				category: [1, 3, 12],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 3,
				title: "Карри",
				category: [1, 4, 12],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 4,
				title: "Сэндвичи",
				category: [1, 5, 12],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 5,
				title: "Онигири",
				category: [1, 6],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 6,
				title: "Супы",
				category: [1, 7],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
			},
			{
				id: 10,
				title: "VIP Бенто",
				category: [3],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: false,
				isFav: false,
			},
			{
				id: 11,
				title: "Карри",
				category: [4],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: false,
				isFav: false,
			},





			{
				id: 20,
				title: "Соевый соус",
				category: [11],
				priceActual: 60,
			},
			{
				id: 21,
				title: "Дополнительные палочки",
				category: [11],
				priceActual: 15,
			},
		],

		categories: [
			{
				id: 1,
				title: 'Новинки',
				anchor: '/#new'
			},
			{
				id: 2,
				title: 'Бенто',
				anchor: '/#bento'
			},
			{
				id: 3,
				title: 'VIP Бенто',
				anchor: '/#vip-bento'
			},
			{
				id: 4,
				title: 'Карри',
				anchor: '/#curry'
			},
			{
				id: 5,
				title: 'Сэндвичи',
				anchor: '/#sandwiches'
			},
			{
				id: 6,
				title: 'Онигири',
				anchor: '/#onigiri'
			},
			{
				id: 7,
				title: 'Супы',
				anchor: '/#soup'
			},
			{
				id: 8,
				title: 'Гедза',
				anchor: '/#gedza'
			},
			{
				id: 9,
				title: 'Соусы',
				anchor: '/#sauces'
			},
			{
				id: 10,
				title: 'Напитки',
				anchor: '/#beverages'
			},
			{
				id: 11,
				title: 'Добавки'
			},
			{
				id: 12,
				title: 'Попробуйте также'
			},
		]
	}),

	getters: {
		categoryTitleList() {
			return this.categories.reduce((titles, category) => {
				if (category.hasOwnProperty('anchor')) titles.push({
					title: category.title,
					anchor: category.anchor
				});
				return titles;
			}, []);
		},

		categoryNew() {
			return this.products.filter(product => product.category.includes(1));
		},
		categoryVipBento() {
			return this.products.filter(product => product.category.includes(3));
		},
		categoryCurry() {
			return this.products.filter(product => product.category.includes(4));
		},
		categoryTryAlso() {
			return this.products.filter(product => product.category.includes(12));
		},

		productsInFav() {
			return this.products.filter(product => product.isFav);
		},

		hasProductInFav() {
			return this.productsInFav.length ? true : false;
		}
	},

	actions: {
		toggleFav(productId) {
			const targetProduct = this.products.find(product => product.id === productId);
			targetProduct.isFav = !targetProduct.isFav;
		},
	}
});