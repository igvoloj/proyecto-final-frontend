import { Component } from '@angular/core';
import { SocialLink } from './core/models/social-link';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isLogged: boolean = false;
	contactData = {
		phone: '+34 922 022 022',
		email: 'supermy@mail.com',
		address: 'Calle la pinta Villa Domrach'
	};
	socialLinks: SocialLink[] = [
		{
			name: 'facebook',
			link: 'https://www.facebook.com/supermy',
			icon: 'fab fa-facebook-f'
		},
		{
			name: 'twiter',
			link: 'https://www.twitter.com/supermy',
			icon: 'fab fa-twitter'
		},
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/supermy',
			icon: 'fab fa-linkedin-in'
		},
		{
			name: 'pinterest',
			link: 'https://www.pinterest.com/supermy',
			icon: 'fab fa-pinterest-p'
		}
	];
	title = 'proyecto-final-frontend';
}
