import { Injectable } from '@angular/core';
import { Client } from '../core/models/client';

@Injectable({
	providedIn: 'root'
})
export class ClientService {
	clients: Client[] = [];
	constructor() {
		this.clients.push({
			id: 1,
			name: 'Juan',
			lastName: 'Jaman',
			email: '',
			phone: '',
			address: '',
			province: '',
			city: '',
			postalCode: '',
			password: ''
		}, {
			id: 2,
			name: 'Jenny',
			lastName: 'Jaman',
			email: '',
			phone: '',
			address: '',
			province: '',
			city: '',
			postalCode: '',
			password: ''
		}, {
			id: 3,
			name: 'Jonhy',
			lastName: 'Jaman',
			email: '',
			phone: '',
			address: '',
			province: '',
			city: '',
			postalCode: '',
			password: ''
		});
	}
	getClient(id: number): Client {
		const voidClient: Client = {
			id: -1,
			name: 'Nully',
			lastName: 'Nul',
			email: '',
			phone: '',
			address: '',
			province: '',
			city: '',
			postalCode: '',
			password: ''
		}
		const matchedClient = this.clients.find(client => client.id === id);

		const result = matchedClient ? matchedClient : voidClient;

		return result;
	}
}
