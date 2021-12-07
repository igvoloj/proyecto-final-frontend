import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';
@Injectable({
	providedIn: 'root'
})/**Obtiene datos de una base de datos y nos los sirve */
export class ProductService {

	products: Product[] = [];
	constructor() {
		this.products.push(
			{ id: 1, name: 'Producto 1', img: '/assets/img/product/product-1.jpg', price: 100 },
			{ id: 2, name: 'Producto 2', img: '/assets/img/product/product-1.jpg', price: 100 });
	}
	getProducts(): Product[] {
		return this.products;
	}
	addProduct(product: Product) {
		this.products.push(product);
	}
	removeProduct(id: number) {
		this.products = this.products.filter(product => product.id !== id);
	}
	setProducts(products: Product[]) {
		this.products = products;
	}
	getProduct(id: number): Product | undefined {
		return this.products.find(product => product.id === id);
	}

}
