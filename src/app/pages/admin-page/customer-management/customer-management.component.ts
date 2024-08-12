import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Customer, CustomerField, CustomerResults } from '../../../interfaces/Customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../../../services/customer.service';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';

@Component({
    selector: 'app-customer-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './customer-management.component.html',
    styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent implements OnInit {

    @Input() title?: string;

    public customerList$!: Observable<CustomerResults>;
    public selectedCustomer: Customer | null = null;
    public modalLabel: string = "Save";

    constructor(private service: CustomerService) { };

    ngOnInit(): void {
        this.customerList$ = this.service.getCustomerList();
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    handleAdd() {
        this.selectedCustomer = null;
        this.modalLabel = "Save";
        this.openModal();;
    }

    handleEdit() {
        if (this.selectedCustomer) {
            this.modalLabel = "Edit";
            this.openModal();
        } else {
            alert('Please select a Customer to edit.');
        }
    }

    handleDelete() {
        if (this.selectedCustomer) {
            this.service.deleteCustomer(this.selectedCustomer.id).subscribe({
                next: () => {
                    this.customerList$ = this.service.getCustomerList();
                    this.selectedCustomer = null;
                },
                error: (err) => console.error('Error deleting customer:', err)
            });
        } else {
            alert('Please select a Customer to delete.');
        }
    }

    saveCustomer() {
        if (this.selectedCustomer) {
            if (this.modalLabel === "Save") {
                this.service.saveCustomer(this.selectedCustomer).subscribe({
                    next: () => {
                        this.customerList$ = this.service.getCustomerList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error saving customer:', err)
                });
            } else if (this.modalLabel === "Edit") {
                this.service.updateCustomer(this.selectedCustomer.id, this.selectedCustomer).subscribe({
                    next: () => {
                        this.customerList$ = this.service.getCustomerList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error updating customer:', err)
                });
            }
        }
    }

    getFieldValue(customer: Customer | null, fieldName: string): any {

        return customer ? customer[fieldName as keyof Customer] : '';
    }

    selectCustomer(customer: Customer) {
        this.selectedCustomer = customer;

    }

    customerFields: CustomerField[] = [
        { header: "ID Number", type: "string", name: "idNumber" },
        { header: "User ID", type: "string", name: "user_id" },
        { header: "Name", type: "string", name: "name" },
        { header: "Last Name", type: "string", name: "lastName" },
        { header: "Email", type: "string", name: "email" },
        { header: "Address", type: "string", name: "address" },
        { header: "Postal Code", type: "number", name: "postalCode" },
        { header: "City", type: "string", name: "city" },
        { header: "Employe ID", type: "number", name: "employee_id" }

    ];

}
