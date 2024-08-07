import { Component, Input } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Order } from '../../../interfaces/order';

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
