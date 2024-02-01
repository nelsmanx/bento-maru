export const useCartStore = defineStore('cart', {
	state: () => {
		return {
			cart: [],
			sause: {
				title: "Соевый соус",
				price: 60,
				quantity: 1
			},
			sticks: {
				title: "Дополнительные палочки",
				price: 0,
				quantity: 2
			}
		};
	},

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
			return this.totalItemsQuantity ? this.cart.reduce((sum, product) => product.price * product.quantity + sum, 0) : 0;
		},

		addonsPrice() {
			return this.sause.quantity * this.sause.price + this.sticks.quantity * this.sticks.price;
		},

		hasProductItems() {
			return this.cart.length ? true : false;
		},

		cartDetails() {
			const cartDetails = [];
			this.cart.forEach(item => {
				const itemDetails = {};
				itemDetails.name = item.name;
				itemDetails.quantity = item.quantity;
				cartDetails.push(itemDetails);
			});

			if (this.sause.quantity || this.sticks.quantity) {
				const addonDetails = { addons: {} };
				if (this.sause.quantity) addonDetails.addons.sauseQuantity = this.sause.quantity;
				if (this.sticks.quantity) addonDetails.addons.sticksQuantity = this.sticks.quantity;
				cartDetails.push(addonDetails);
			};

			cartDetails.push({ totalPrice: this.totalPrice + this.addonsPrice });

			return cartDetails;
		}
	},

	actions: {
		async loadCart() {
			if (process.client) {
				this.cart = await JSON.parse(localStorage.getItem('cart')) || [];
			} else {
				this.cart = [];
			}
		},

		increaseQuantity(item) {
			const itemInCart = this.cart.find(product => product.id === item.id);

			if (itemInCart) {
				itemInCart.quantity = itemInCart.quantity + item.quantity;
				if (process.client) { localStorage.setItem('cart', JSON.stringify(this.cart)); }
			} else {
				item.quantity = item.quantity ? item.quantity : 1;
				this.cart.push(item);
				if (process.client) { localStorage.setItem('cart', JSON.stringify(this.cart)); }
			}
		},

		decreaseQuantity(itemId) {
			const itemInCart = this.cart.find(product => product.id === itemId);
			itemInCart.quantity--;

			if (itemInCart.quantity === 0) {
				this.cart = this.cart.filter(product => product.id !== itemId);
			}
			if (process.client) { localStorage.setItem('cart', JSON.stringify(this.cart)); }
		},

		deleteItem(itemId) {
			this.cart = this.cart.filter((product => product.id !== itemId));
			if (process.client) { localStorage.setItem('cart', JSON.stringify(this.cart)); }
		},

		clearProductsAndAddons() {
			this.cart = [];
			this.sause.quantity = 0;
			this.sticks.quantity = 0;
			if (process.client) { localStorage.setItem('cart', JSON.stringify(this.cart)); }
		},

		clearAddons() {
			this.sause.quantity = 0;
			this.sticks.quantity = 0;
		}
	}
});
