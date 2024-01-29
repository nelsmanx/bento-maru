import { useAppStore } from '~/stores/appStore';

export const useOrderStore = defineStore('order', {
	state: () => ({
		orderIsSent: false,

		deliveryMethod: 'pickup', // pickup/delivery

		deliveryAddress: {
			cityStreet: null,
			house: null,
			apartment: null,
			entrance: null,
			floor: null,
			intercom: null,
			comment: null
		},

		pickupAddress: null,

		deliveryTimeType: 'fastest', // fastest/exact

		deliveryTimeFastest: {
			day: null,
			time: null
		},

		deliveryTimeExact: {
			day: null,
			time: null
		},

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

		orderDetails() {
			const orderDetails = {};
			orderDetails.deliveryMethod = this.deliveryMethod;
			if (orderDetails.deliveryMethod === 'pickup') {
				orderDetails.pickupAddress = this.pickupAddress;
			}

			if (orderDetails.deliveryMethod === 'delivery') {
				orderDetails.deliveryAddress = {};

				for (let key in this.deliveryAddress) {
					if (!this.deliveryAddress[key]) break;
					orderDetails.deliveryAddress[key] = this.deliveryAddress[key];
				}
			}

			orderDetails.deliveryTimeType = this.deliveryTimeType;

			if (orderDetails.deliveryTimeType === 'fastest') {
				orderDetails.deliveryDay = this.deliveryTimeFastest.day;
				orderDetails.deliveryTime = this.deliveryTimeFastest.time;
			}

			if (orderDetails.deliveryTimeType === 'exact') {
				orderDetails.deliveryDay = this.deliveryTimeExact.day;
				orderDetails.deliveryTime = this.deliveryTimeExact.time;
			}

			orderDetails.customerName = this.customerName;
			orderDetails.customerTel = this.customerTel;
			orderDetails.paymentMethod = this.paymentMethod;

			if (orderDetails.promo) orderDetails.promo = this.promo;

			return orderDetails;
		}
	},

	actions: {
		// makeDeepObjectCopy(originalObject, copiedObject) {
		// 	this[copiedObject] = JSON.parse(JSON.stringify(this[originalObject]));
		// },
		// copyDeliveryAddressToTemp() {
		// 	this.deliveryAddressTemp = JSON.parse(JSON.stringify(this.deliveryAddress));
		// },
		// updateDeliveryAddress() {
		// 	this.deliveryAddress = JSON.parse(JSON.stringify(this.deliveryAddressTemp));
		// },
		updateDeliveryAddress(newValues) {
			Object.keys(newValues).forEach(key => {
				this.deliveryAddress[key] = newValues[key];
			});
		},

		setDeliveryTimeFastest(day, time) {
			this.deliveryTimeFastest.day = day;
			this.deliveryTimeFastest.time = time;
		},

		setDefaultPickupAddress() {
			const appStore = useAppStore();
			this.pickupAddress = appStore.pickupAddresses[0];
		},

		updateStateKey(key, value) {
			this[key] = value;
		}
	}
});



