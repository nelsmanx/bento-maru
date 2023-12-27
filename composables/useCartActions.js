import { useCartStore } from '~/stores/cartStore';
import { useProductStore } from '~/stores/productStore';


export function useIncreaseQuantity() {
	const productStore = useProductStore();
	const cartStore = useCartStore();

	return (productId) => {
		const productToCart = productStore.products.find(product => product.id === productId);
		cartStore.increaseQuantity({ ...productToCart, quantity: 1 });
	};
}

export function useDecreaseQuantity() {
	const cartStore = useCartStore();
	return (productId) => cartStore.decreaseQuantity(productId);
}
