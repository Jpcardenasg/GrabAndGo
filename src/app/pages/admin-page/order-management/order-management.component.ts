import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { OrderField, OrderResults } from '../../../interfaces/Order';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/order.service';
import { AsyncPipe } from '@angular/common';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';

@Component({
    selector: 'app-order-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './order-management.component.html',
    styleUrl: './order-management.component.css'
})
export class OrderManagementComponent implements OnInit {

    @Input() title?: string;

    public orderList$!: Observable<OrderResults>;
    constructor(private service: OrderService) { };

    ngOnInit(): void {
        this.orderList$ = this.service.getOrderList();
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    orderFields: OrderField[] = [
        { header: "Order ID", type: "number", name: "id" },
        { header: "Order Date", type: "string", name: "orderDate" },
        { header: "Shipping Date", type: "string", name: "shippingDate" },
        { header: "Estimated Delivery Date", type: "string", name: "estimatedDeliveryDate" },
        { header: "Status", type: "string", name: "status" },
        { header: "Customer", type: "string", name: "customer" }
    ];
}
