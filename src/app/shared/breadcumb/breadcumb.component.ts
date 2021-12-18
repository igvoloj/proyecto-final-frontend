import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-breadcumb',
	templateUrl: './breadcumb.component.html',
	styleUrls: ['./breadcumb.component.scss']
})
export class BreadcumbComponent implements OnInit {
	image = "/assets/img/breadcrumb.jpg";
	styles = {
		'background-image': 'url(' + this.image + ')',
		'background-size': 'cover',
	}
	/* @ViewChild('wrapper')
	wrapper!: ElementRef; */
	root = "home";
	@Input() title: string = "";
	constructor() { }

	ngOnInit(): void {
		/*this.wrapper.nativeElement.backgroundImage = this.image; */
	}

}
