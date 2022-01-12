export interface Product {
	id: number;
	price: number;
	img: string;
	name: string;
}

export interface ProductMethods {
	getProducts(): Promise<Product[]>
	getLastestProducts(amount: number) : Product[]
}
