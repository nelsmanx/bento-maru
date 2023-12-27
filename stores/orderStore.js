export const useOrderStore = defineStore('order', {
	state: () => ({
		deliveryMethod: 'pickup',

		deliveryAddress: {
			cityStreet: null,
			house: null,
			apartment: null,
			entrance: null,
			floor: null,
			intercom: null,
			comment: null
		},
		// deliveryAddress: {
		// 	cityStreet: 'Южно-Сахалинск, ул. Больничная',
		// 	house: '35Б',
		// 	apartment: 89,
		// 	entrance: 5,
		// 	floor: 2,
		// 	intercom: 123,
		// 	comment: null
		// },
		deliveryAddressTemp: {},

		pickupAddress: 'Южно-Сахалинск, ул. Мира',


		deliveryTimeType: 'fastest',
		deliveryTimeFastest: {
			type: 'fastest',
			day: 'Сегодня',
			time: '12:00'
		},
		deliveryTimeExact: {
			type: 'exact',
			day: null,
			time: null
		},

		deliveryTimeExactTemp: {},

		customerName: null,
		customerTel: null,
		paymentMethod: 'card',
		promo: null,
		personalDataAgreement: true
	}),

	getters: {
		addressPreview() {
			return this.deliveryMethod === 'delivery'
				? `${this.deliveryAddress.cityStreet} ${this.deliveryAddress.house}`
				: this.pickupAddress;
		},
		deliveryTimePreview() {
			if (this.deliveryTimeType === 'fastest') {
				return `${this.deliveryTimeFastest.day}, ${this.deliveryTimeFastest.time}`;
			} else {
				return `${this.deliveryTimeExact.day}, ${this.deliveryTimeExact.time}`;
			}
		},


	},

	actions: {
		makeDeepObjectCopy(originalObject, copiedObject) {
			this[copiedObject] = JSON.parse(JSON.stringify(this[originalObject]));
		},


		copyDeliveryAddressToTemp() {
			this.deliveryAddressTemp = JSON.parse(JSON.stringify(this.deliveryAddress));
		},
		updateDeliveryAddress() {
			this.deliveryAddress = JSON.parse(JSON.stringify(this.deliveryAddressTemp));
		}
	}
});



