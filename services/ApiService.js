import config from "../config";
import { emitter } from "./MittService";
import { useFetch } from "nuxt/app";

class ApiService {
	constructor(loader = true) {
		this.loader = loader;
		this.baseUrl = `${config.app.server.scheme}://${config.app.server.host}${config.app.server.path}`;
	}

	sendOrder(data) {
		return this.request('/send-order', data, 'POST');
	}

	getSiteparams() {
		return this.request('/get-siteparams');
	}

	getCategories() {
		return this.request('/get-categories');
	}

	getBanners() {
		return this.request('/get-banners');
	}

	getProducts(id) {
		return this.request(`/get-products?id=${id}`);
	}

	sendForm(data) {
		return this.request('/send-form', data, 'POST');
	}

	async request(url, data = null, method = 'GET') {
		if (this.loader) {
			emitter.emit('loader', 1);
		}

		let params = {
			method: method
		};

		if (data) {
			params.body = data;
		}

		const response = await useFetch(this.baseUrl + url, params);

		emitter.emit('loader', -1);

		return response.data.value;
	}
}

export default ApiService;