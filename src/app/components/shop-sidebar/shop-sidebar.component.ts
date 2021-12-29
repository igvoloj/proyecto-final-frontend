import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-shop-sidebar',
	templateUrl: './shop-sidebar.component.html',
	styleUrls: ['./shop-sidebar.component.scss']
})
export class ShopSidebarComponent implements OnInit {
	departaments: string[] = [];
	colors: string[] = [];
	sizes: string[] = [];
	lastesProducts: Product[] = [];

	constructor(private servicioProductos: ProductService) {
		this.lastesProducts = servicioProductos.getLastesProducts(6);
		this.departaments.push("fresh meat", "vegetables", "fruits & nut gits",
			"Fresh Berries", "Ocean Foods", "Butter & Eggs", "Fastfood", "Fresh Onion", "Papayaya & Crisps", "Oatmeal");
		this.colors.push("white", "gray", "red", "black", "blue", "green");
		this.sizes.push("large", "medium", "small", "tiny");
	}

	ngOnInit(): void {
	}

}
