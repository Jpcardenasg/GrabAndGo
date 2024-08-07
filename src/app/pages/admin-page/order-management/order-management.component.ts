import { Component, Input } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';


interface Order {
	id: number,
	order_date: string,
	estimated_deliery_date: string,
	shipping_date: string,
	status_id: number,
	customer_id: string;
}

@Component({
	selector: 'app-order-management',
	standalone: true,
	imports: [ManagementBarComponent],
	templateUrl: './order-management.component.html',
	styleUrl: './order-management.component.css'
})
export class OrderManagementComponent {
	@Input() title?: string;

	orders: Order[] = [];


	addProduct() {
		console.log('Add');

	}

	deleteProduct() {
		console.log('Del');

	}

	editProduct() {
		console.log('Edit');

	}
}
