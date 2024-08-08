import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { PaymentField, PaymentResults } from '../../../interfaces/Payment';
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

    paymentFields: PaymentField[] = [
        { header: "Payment ID", name: "id", type: "number" },
        { header: "Date", name: "date", type: "string" },
        { header: "Total", name: "total", type: "number" },
        { header: "Customer", name: "customerPayment", type: "string" },
        { header: "Payment Method", name: "paymentMethod", type: "string" }
    ];
}
