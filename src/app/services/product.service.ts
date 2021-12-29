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
			{ id: 2, name: 'Producto 2', img: '/assets/img/product/product-2.jpg', price: 100 },
			{ id: 3, name: 'Producto 3', img: '/assets/img/product/product-3.jpg', price: 100 },
			{ id: 4, name: 'Producto 4', img: '/assets/img/product/product-4.jpg', price: 100 },
			{ id: 5, name: 'Producto 5', img: '/assets/img/product/product-5.jpg', price: 100 },
			{ id: 6, name: 'Producto 6', img: '/assets/img/product/product-6.jpg', price: 100 },
			{ id: 7, name: 'Producto 7', img: '/assets/img/product/product-7.jpg', price: 100 },
			{ id: 8, name: 'Producto 8', img: '/assets/img/product/product-8.jpg', price: 100 },
			{ id: 9, name: 'Producto 9', img: '/assets/img/product/product-9.jpg', price: 100 },
			{ id: 10, name: 'Producto 10', img: '/assets/img/product/product-10.jpg', price: 100 },
			{ id: 11, name: 'Producto 11', img: '/assets/img/product/product-11.jpg', price: 100 },
			{ id: 12, name: 'Producto 12', img: '/assets/img/product/product-12.jpg', price: 100 });
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
	getLastesProducts(amount: number): Product[] {
		let lastes: Product[] = this.products.slice(-amount);

		/* Funcional
		for (let i = 0; i < lastes.length; i++) {
			const product = lastes[i];
			lastes[i].img = product.img.replace('product/product','latest-product/lp');
		} */
		for (let i = 0; i < lastes.length; i++) {
			const product = lastes[i];
			lastes[i].img = "/assets/img/latest-product/lp-1.jpg"
		}

		return lastes;
	}

}
