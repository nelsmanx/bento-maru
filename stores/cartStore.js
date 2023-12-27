export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [
			{
				id: 1,
				title: "Бенто Микс",
				category: [1, 2],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
				quantity: 1
			},
			{
				id: 2,
				title: "VIP Бенто",
				category: [1, 3],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
				quantity: 1
			},
			{
				id: 3,
				title: "Карри",
				category: [1, 4],
				description: "В составе только топовое меню - любимчики наших покупателей: Короке (картофельная котлетка), Креветка Фрай,  Осьминожка из сосисок и т.д.",
				imagePath: "/images/products/bento-mix.jpg",
				weight: 400,
				priceActual: 500,
				priceOld: 700,
				isNew: true,
				isFav: false,
				quantity: 1
			},
			{
				id: 20,
				title: "Соевый соус",
				category: [11],
				priceActual: 60,
				quantity: 1
			},
			{
				id: 21,
				title: "Дополнительные палочки",
				category: [11],
				priceActual: 15,
				quantity: 2
			},
		]
	}),

	getters: {
		singleItemQuantity: (state) => {
			return (itemId) => {
				const itemInCart = state.cart.find(product => product.id === itemId);
				return itemInCart ? itemInCart.quantity : 0;
			};
		},

		totalItemsQuantity() {
			return this.cart.length ? this.cart.reduce((acc, product) => product.quantity + acc, 0) : 0;
		},

		totalPrice() {
			return this.totalItemsQuantity ? this.cart.reduce((sum, product) => product.priceActual * product.quantity + sum, 0) : 0;
		},


		productItems() {
			return this.cart.filter(product => !product.category.includes(11));
		},

		hasProductItems() {
			return this.productItems.length ? true : false;
		},

		addonItems() {
			return this.cart.filter(product => product.category.includes(11));
		},

		hasAddonItems() {
			return this.addonItems.length ? true : false;
		}
	},

	actions: {
		increaseQuantity(item) {
			const itemInCart = this.cart.find(product => product.id === item.id);
			if (itemInCart) {
				itemInCart.quantity = itemInCart.quantity + item.quantity;
			} else {
				this.cart.push(item);
			}
		},

		decreaseQuantity(itemId) {
			const itemInCart = this.cart.find(product => product.id === itemId);
			itemInCart.quantity--;
			if (itemInCart.quantity === 0) {
				this.cart = this.cart.filter(product => product.id !== itemId);
			}
		},

		deleteItem(itemId) {
			this.cart = this.cart.filter((product => product.id !== itemId));
		},

		clearProductsAndAddons() {
			this.cart = [];
		},

		clearAddons() {
			this.cart = this.cart.filter(product => !product.category.includes(11));
		}
	}
});
