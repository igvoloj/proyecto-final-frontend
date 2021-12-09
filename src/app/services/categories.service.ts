import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	categories: string[] = [];
	constructor() {
		this.categories.push("fresh meat", "vegetables", "fruits & nut gits",
			"Fresh Berries", "Ocean Foods", "Butter & Eggs", "Fastfood", "Fresh Onion", "Papayaya & Crisps", "Oatmeal")
	}
	getCategories() {
		return this.categories;
	}
}
