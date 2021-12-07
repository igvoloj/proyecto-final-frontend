import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
	selector: 'app-shop-result-item',
	templateUrl: './shop-result-item.component.html',
	styleUrls: ['./shop-result-item.component.scss']
})
export class ShopResultItemComponent implements OnInit {


	@Input() producto: Product = {
		id: 0,
		name: "",
		price: 0,
		img: ""
	};
	constructor() {

	}


	ngOnInit(): void {
	}

}
