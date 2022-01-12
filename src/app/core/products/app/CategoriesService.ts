import { Injectable } from '@angular/core';
import { Product, ProductMethods } from '../domain/product';
import { products } from '../infrastructure/productsAdapter';

@Injectable({
	providedIn: 'root'
})
export class ProductService implements ProductMethods {
	products: Product[] = [];
	constructor() {
		this.products.push(...products);
	}
	
	async getProducts() {
		return this.products;
	}
	addProduct(product: Product) {
		this.products.push(product);
	}
	removeProduct(id: number) {
		this.products = this.products.filter((product) => product.id !== id);
	}
	setProducts(products: Product[]) {
		this.products = products;
	}
	getProduct(id: number): Product | undefined {
		return this.products.find((product) => product.id === id);
	}
	getLastestProducts(amount: number) {
		let lastes: Product[] = this.products.slice(-amount);

		/* Funcional
		for (let i = 0; i < lastes.length; i++) {
			const product = lastes[i];
			lastes[i].img = product.img.replace('product/product','latest-product/lp');
		} */
		for (let i = 0; i < lastes.length; i++) {
			const product = lastes[i];
			lastes[i].img = '/assets/img/latest-product/lp-1.jpg';
		}

		return lastes;
	}
}
