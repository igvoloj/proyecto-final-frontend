import { Component, Input, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/core/models/social-link';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() contactData = {
		phone: '',
		email: '',
		address: '',
	};
	@Input() socialLinks: SocialLink[] = [{
		name: '',
		link: '',
		icon: ''
	}];
	usefulLinks = [
		[{ name: "About Us", path: "" },
		{ name: "About Our Shop", path: "" },
		{ name: "Secure Shopping", path: "" },
		{ name: "Delivery infomation", path: "" },
		{ name: "Privacy Policy", path: "" },
		{ name: "Our Sitemap", path: "" }],
		[{ name: "Who We Are", path: "" },
		{ name: "Our Services", path: "" },
		{ name: "Projects", path: "" },
		{ name: "Contact", path: "" },
		{ name: "Innovation", path: "" },
		{ name: "Testimonials", path: "" }
		]];
	constructor() { }

	ngOnInit(): void {
	}

}
