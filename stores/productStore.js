import ApiService from '~/services/ApiService';

export const useProductStore = defineStore('product', {
	state: () => ({
		products: [],
		categories: [],
		active: 41,
		category: [],
		bento: [],
		curry: [],
		banners: [],
		favorites: []
	}),

	getters: {
		getCategory() {
			return this.category;
		},
		hasProductInFav() {
			if (this.favorites.length > 0) {
				return true;
			} else {
				return false;
			}
		},
		isFav: (state) => {
			return (itemId) => {
				const itemInFav = state.favorites.find(product => product.id === itemId);
				return itemInFav ? true : false;
			};
		},
	},
	actions: {
		async getBanners() {
            this.banners = await new ApiService().getBanners(); 
        },
		async getCategories() {
            this.categories = await new ApiService().getCategories(); 
        },
		async activeCategory(categoryid) {
			if(categoryid) {
				this.active = categoryid;
			}
			if(this.categories) {
				this.category = this.categories.find(item => item.id === this.active);
			}
		},
		async getActiveProducts() {
			this.products = await new ApiService().getProducts(this.category.id); 
		},
		async getBento() {
			this.bento = await new ApiService().getProducts(156); 
		},
		async getCurry() {
			this.curry = await new ApiService().getProducts(157); 
		},
		async loadFavorites() {
			if (process.client) { this.favorites = JSON.parse(localStorage.getItem('favorites')) || []; 
			} else {
				this.favorites = [];
			}
		},
		toggleFavorite(item) {
			const itemInFavorites = this.favorites.find(favorite => favorite.id === item.id);
			if (itemInFavorites) {
				this.favorites = this.favorites.filter((favorite => favorite.id !== item.id));
				if (process.client) { localStorage.setItem('favorites', JSON.stringify(this.favorites)); }
			} else {
				this.favorites.push(item);
				if (process.client) { localStorage.setItem('favorites', JSON.stringify(this.favorites)); }
			}
		}
	}
});