import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
	departaments: string[] = [];

	constructor(private servicioCategorias: CategoriesService) {
		this.departaments = this.servicioCategorias.getCategories();
	}

	ngOnInit(): void {
	}

}
