import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	isLogged: boolean = true;
	userName: string = "Juan";
	navItems = [
		{ text: "Home", link: "/" },
		{ text: "Shop", link: "/shop" },
		{ text: "Blog", link: "/blog" },
		{ text: "Contact", link: "/contact" },
	];//Falta implementar el dropdown
	constructor() { }

	ngOnInit(): void {
	}

}
