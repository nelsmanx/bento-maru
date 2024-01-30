import { useCartStore } from '~/stores/cartStore';
import { useProductStore } from '~/stores/productStore';


// export function useIncreaseQuantity() {
// 	const productStore = useProductStore();
// 	const cartStore = useCartStore();

// 	return (productId) => {
// 		const productToCart = productStore.products.find(product => product.id === productId);
// 		if (!productToCart) {
// 			return console.error(`Function useIncreaseQuantity was failed. No product with id ${productId} was found!`);
// 		}
// 		cartStore.increaseQuantity({ ...productToCart, quantity: 1 });
// 	};
// }

export function useIncreaseQuantity() {
	const cartStore = useCartStore();

	return (product) => cartStore.increaseQuantity({ ...product, quantity: 1 });
};


export function useDecreaseQuantity() {
	const cartStore = useCartStore();

	return (product) => cartStore.decreaseQuantity(product.id);
}
