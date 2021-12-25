import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Carousel } from 'src/app/core/models/carousel';
import { Category } from 'src/app/core/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
	selector: 'app-carrusel-categories',
	templateUrl: './carrusel-categories.component.html',
	styleUrls: ['./carrusel-categories.component.scss']
})
export class CarruselCategoriesComponent implements OnInit, Carousel {
	@ViewChild('carousel')
	carouselRef!: ElementRef;
	departaments: Category[];

	animation: string;
	autoPlay: boolean;
	dataSource: any[];
	delay: number;
	disableItemClick: boolean;
	displayMode: string;
	hideArrows: boolean;
	hideIndicators: boolean;
	interval: number;
	itemTemplate: string;
	keyboard: boolean;
	loop: boolean;
	readonly: boolean;
	wheel: boolean;

	constructor(private servicioCategorias: CategoriesService) {
		this.departaments = this.servicioCategorias.getCategories();
		this.dataSource = this.departaments;
		this.animation = 'none';
		this.autoPlay = true;
		this.delay = 3000;
		this.disableItemClick = false;
		this.displayMode = 'default';
		this.hideArrows = false;
		this.hideIndicators = false;
		this.interval = 3000;
		this.itemTemplate = `
		<figure class="categories__item" *ngFor="let departament of dataSource">
			<img [src]="departament.image" alt="">
			<figcaption>
				<h5><a href="#">{{departament.name|titlecase}}</a></h5>
			</figcaption>
		</figure>`;
		this.keyboard = true;
		this.loop = true;
		this.readonly = false;

		this.wheel = true;
		/* this.play(); */
	}

	next(): void {
		const carouselItems = this.getCarouselItems();
		const lastItem = carouselItems[carouselItems.length - 1] as Node;
		const firstItem = carouselItems[0] as Node;
		lastItem.parentNode!.insertBefore(firstItem, lastItem.nextSibling);
	}

	pause(): void {
		throw new Error('Method not implemented.');
	}
	play(): void {
		/* const carouselItems = this.getCarouselItems(); */
		throw new Error('Method not implemented.');

		for (let i = 0; i < 100; i++) {
			setTimeout(() => this.next(), this.interval);
		}
	}
	prev(): void {
		const carouselItems = this.getCarouselItems();
		const lastItem = carouselItems[carouselItems.length - 1] as Node;
		const firstItem = carouselItems[0] as Node;
		firstItem.parentNode!.insertBefore(lastItem, firstItem);
	}
	slideTo(index: number): void {
		throw new Error('Method not implemented.');
	}

	ngOnInit(): void {
	}
	private getCarouselItems() {
		const carousel = this.carouselRef.nativeElement as HTMLElement;
		return carousel.querySelectorAll('.categories__item');
	}


}
