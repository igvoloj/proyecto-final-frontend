import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
	selector: 'app-from-blog',
	templateUrl: './from-blog.component.html',
	styleUrls: ['./from-blog.component.scss']
})
export class FromBlogComponent implements OnInit {
	listPost: Post[] = [{
		id: 1,
		title: 'Post 1',
		content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
		createdAt: new Date(),
		num_coments: 0,
		image: '/assets/img/blog/blog-1.jpg'
	}, {
		id: 2,
		title: 'Post 2',
		content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
		createdAt: new Date(),
		num_coments: 2,
		image: '/assets/img/blog/blog-2.jpg'
	}
		, {
		id: 3,
		title: 'Post 3',
		content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
		createdAt: new Date(),
		num_coments: 4,
		image: '/assets/img/blog/blog-3.jpg'
	}];
	constructor() { }

	ngOnInit(): void {
	}

}
