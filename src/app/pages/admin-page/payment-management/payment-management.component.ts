import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { Payment, PaymentField, PaymentResults } from '../../../interfaces/Payment';
import { PaymentService } from '../../../services/payment.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';

@Component({
    selector: 'app-payment-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './payment-management.component.html',
    styleUrl: './payment-management.component.css'
})
export class PaymentManagementComponent implements OnInit {
    @Input() title?: string;

    public paymentList$!: Observable<PaymentResults>;
    public selectedPayment: Payment | null = null;
    public modalLabel: string = "Save";

    constructor(private service: PaymentService) { };

    ngOnInit(): void {
        this.paymentList$ = this.service.getPaymentList();
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    handleAdd() {
        this.selectedPayment = null;
        this.modalLabel = "Save";
        this.openModal();;
    }

    handleEdit() {
        if (this.selectedPayment) {
            this.modalLabel = "Edit";
            this.openModal();
        } else {
            alert('Please select a Payment to edit.');
        }
    }

    handleDelete() {
        if (this.selectedPayment) {
            this.service.deletePayment(this.selectedPayment.id).subscribe({
                next: () => {
                    this.paymentList$ = this.service.getPaymentList();
                    this.selectedPayment = null;
                },
                error: (err) => console.error('Error deleting Payment:', err)
            });
        } else {
            alert('Please select a Payment to delete.');
        }
    }

    savePayment() {
        if (this.selectedPayment) {
            if (this.modalLabel === "Save") {
                this.service.savePayment(this.selectedPayment).subscribe({
                    next: () => {
                        this.paymentList$ = this.service.getPaymentList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error saving Payment:', err)
                });
            } else if (this.modalLabel === "Edit") {
                this.service.updatePayment(this.selectedPayment.id, this.selectedPayment).subscribe({
                    next: () => {
                        this.paymentList$ = this.service.getPaymentList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error updating payment:', err)
                });
            }
        }
    }

    getFieldValue(payment: Payment | null, fieldName: string): any {

        return payment ? payment[fieldName as keyof Payment] : '';
    }

    selectPayment(payment: Payment) {
        this.selectedPayment = payment;

    }

    paymentFields: PaymentField[] = [
        { header: "Payment ID", name: "id", type: "number" },
        { header: "Date", name: "date", type: "string" },
        { header: "Total", name: "total", type: "number" },
        { header: "Customer", name: "customerPayment", type: "string" },
        { header: "Payment Method", name: "paymentMethod", type: "string" }
    ];
}
