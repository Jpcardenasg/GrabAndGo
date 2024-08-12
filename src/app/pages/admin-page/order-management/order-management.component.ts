import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Order, OrderField, OrderResults } from '../../../interfaces/Order';
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
    public selectedOrder: Order | null = null;
    public modalLabel: string = "Save";

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

    handleAdd() {
        this.selectedOrder = null;
        this.modalLabel = "Save";
        this.openModal();;
    }

    handleEdit() {
        if (this.selectedOrder) {
            this.modalLabel = "Edit";
            this.openModal();
        } else {
            alert('Please select a Order to edit.');
        }
    }

    handleDelete() {
        if (this.selectedOrder) {
            this.service.deleteOrder(this.selectedOrder.id).subscribe({
                next: () => {
                    this.orderList$ = this.service.getOrderList();
                    this.selectedOrder = null;
                },
                error: (err) => console.error('Error deleting Order:', err)
            });
        } else {
            alert('Please select a Order to delete.');
        }
    }

    saveOrder() {
        if (this.selectedOrder) {
            if (this.modalLabel === "Save") {
                this.service.saveOrder(this.selectedOrder).subscribe({
                    next: () => {
                        this.orderList$ = this.service.getOrderList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error saving Order:', err)
                });
            } else if (this.modalLabel === "Edit") {
                this.service.updateOrder(this.selectedOrder.id, this.selectedOrder).subscribe({
                    next: () => {
                        this.orderList$ = this.service.getOrderList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error updating order:', err)
                });
            }
        }
    }

    getFieldValue(order: Order | null, fieldName: string): any {
        return order ? order[fieldName as keyof Order] : '';
    }

    selectOrder(order: Order) {
        this.selectedOrder = order;

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
