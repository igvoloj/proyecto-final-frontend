import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
	selector: 'app-carrusel-product-group',
	templateUrl: './carrusel-product-group.component.html',
	styleUrls: ['./carrusel-product-group.component.scss']
})
export class CarruselProductGroupComponent implements OnInit {

	carousels_data: { title: string, products: Product[] }[] = [];
	num_items = 3;
	constructor() { }

	ngOnInit(): void {
		this.carousels_data = [
			{
				title: 'Latest Products',
				products: [
					{
						id: 1,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 2,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 3,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 4,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 5,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 6,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
				]
			},
			{
				title: 'Top Rated Products',
				products: [
					{
						id: 1,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 2,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 3,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 4,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 5,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 6,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
				]
			},
			{
				title: 'Review Products',
				products: [
					{
						id: 1,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 2,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 3,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 4,
						price: 10,
						img: '/assets/img/latest-product/lp-1.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 5,
						price: 10,
						img: '/assets/img/latest-product/lp-2.jpg',
						name: 'Crab Pool Security'
					},
					{
						id: 6,
						price: 10,
						img: '/assets/img/latest-product/lp-3.jpg',
						name: 'Crab Pool Security'
					},
				]
			}
		]
	}

}
