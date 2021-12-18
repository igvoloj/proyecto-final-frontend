import { Component, Input, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/core/models/social-link';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() isLogged: boolean = false;
	@Input() email: string = "";
	@Input() socialLinks: SocialLink[] = [{ name: '', link: '', icon: '' }];
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
