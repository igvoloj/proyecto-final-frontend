import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	title = "Cart";
	products: Product[] = [];
	constructor(private servicioProductos: ProductService) { this.products = servicioProductos.getProducts(); }

	ngOnInit(): void {

		//this.products = JSON.parse(localStorage.getItem('cart'));
		/* this.products = [{
			id: 1,
			name: 'Product 1',
			price: 100,
			img: '/assets/img/cart/cart-1.jpg',
			/* quantity: 1 *
		}]; */
	}

}
