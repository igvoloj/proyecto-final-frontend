import { Injectable } from '@angular/core';
import { Category } from '../core/models/category';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	categories: Category[] = [];
	constructor() {
		this.categories.push(
			{ id: 0, name: "fresh meat", image: "/assets/img/categories/cat-1.jpg" },
			{ id: 1, name: "vegetables", image: "/assets/img/categories/cat-2.jpg" },
			{ id: 2, name: "fruits & nut gits", image: "/assets/img/categories/cat-3.jpg" },
			{ id: 3, name: "Fresh Berries", image: "/assets/img/categories/cat-4.jpg" },
			{ id: 4, name: "Ocean Foods", image: "/assets/img/categories/cat-5.jpg" },
			{ id: 5, name: "Butter & Eggs", image: "/assets/img/categories/cat-1.jpg" },
			{ id: 6, name: "Fastfood", image: "/assets/img/categories/cat-1.jpg" },
			{ id: 7, name: "Fresh Onion", image: "/assets/img/categories/cat-1.jpg" },
			{ id: 8, name: "Papayaya & Crisps", image: "/assets/img/categories/cat-1.jpg" },
			{ id: 9, name: "Oatmeal", image: "/assets/img/categories/cat-1.jpg" }
		);

	}
	getCategories() {
		return this.categories;
	}
	getCategoriesNames() {
		return this.categories.map(c => c.name);
	}
}
