import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
	selector: 'app-carrusel-product-short',
	templateUrl: './carrusel-product-short.component.html',
	styleUrls: ['./carrusel-product-short.component.scss']
})
export class CarruselProductShortComponent implements OnInit {

	@Input() carousel!: { title: string, products: Product[] };
	constructor() { }

	ngOnInit(): void {
	}

}
