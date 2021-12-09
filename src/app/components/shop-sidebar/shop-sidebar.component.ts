import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-sidebar',
	templateUrl: './shop-sidebar.component.html',
	styleUrls: ['./shop-sidebar.component.scss']
})
export class ShopSidebarComponent implements OnInit {
	departaments = ["fresh meat", "vegetables", "fruits & nut gits",
		"Fresh Berries", "Ocean Foods", "Butter & Eggs", "Fastfood", "Fresh Onion", "Papayaya & Crisps", "Oatmeal"];
	colors = ["white", "gray", "red", "black", "blue", "green"];
	sizes = ["large", "medium", "small", "tiny"];

	constructor() { }

	ngOnInit(): void {
	}

}
