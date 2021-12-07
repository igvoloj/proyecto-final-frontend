import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-shop-results',
	templateUrl: './shop-results.component.html',
	styleUrls: ['./shop-results.component.scss']
})
export class ShopResultsComponent implements OnInit {
	productos: Product[] = [];
	constructor(private servicioProductos: ProductService) {
		this.productos = servicioProductos.getProducts();
	}

	ngOnInit(): void {
	}

}
