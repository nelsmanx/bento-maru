import { defineStore } from 'pinia';
import { emitter } from '~/services/MittService';
import ApiService from '~/services/ApiService';

export const useAppStore = defineStore('appStore', {
	state: () => {
		return {
			loader: 0,
			siteparams: [],
			scrollbarWidth: null,

			sidebarMenu: {
				isOpen: false
			},

			modalCallback: {
				isOpen: false,
			},

			modalCard: {
				isOpen: false,
				product: null,
				isFav: null,
				productQuantity: null
			},

			modalDelivery: {
				isOpen: false,
				togglerActiveTab: null
			},

			modalTime: {
				isOpen: false,
				togglerActiveTab: null
			},

			pickupAddresses: [
				'Южно-Сахалинск, ул.Больничная',
				'Южно-Сахалинск, ул. Мира'
			],
		};
	},
	getters: {
		getDefaultPickupAddress() {
			return this.pickupAddresses[0];
		}
	},
	actions: {
		toggleSidebarMenu() {
			this.sidebarMenu.isOpen = !this.sidebarMenu.isOpen;
		},

		toggleModalWindow(modalWindow) {
			this[modalWindow].isOpen = !this[modalWindow].isOpen;
		},

		updateScrollbarWidth() {
			this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		},

		async getSiteParams() {
			this.siteparams = await new ApiService().getSiteparams();
		},

		init() {
			emitter.on('loader', (value) => {
				this.loader += value;
			});
		},
	}
});
