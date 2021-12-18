import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Product } from 'src/app/core/models/product';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

	client: Client;
	products: Product[] = [];
	constructor(private servicioProductos: ProductService, private servicioClientes: ClientService) {
		this.products = this.servicioProductos.getProducts();
		this.client = this.servicioClientes.getClient(1);
	}

	ngOnInit(): void {
	}

}
