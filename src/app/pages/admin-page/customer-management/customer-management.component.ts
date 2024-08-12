import { Component, inject, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Customer, CustomerField, CustomerResults } from '../../../interfaces/Customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../../../services/customer.service';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-customer-management',
    standalone: true,
    imports: [AsyncPipe, ReactiveFormsModule, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './customer-management.component.html',
    styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent implements OnInit {

    @Input() title?: string;

    customerForm!: FormGroup;

    private readonly _fb = inject(FormBuilder);
    public customerList$!: Observable<CustomerResults>;
    public selectedCustomer: Customer | null = null;
    public modalLabel: string = "Save";

    constructor(private service: CustomerService) { };

    ngOnInit(): void {
        this.customerList$ = this.service.getCustomerList();
        this._buildCustomerForm();
    }

    private _buildCustomerForm(): void {
        this.customerForm = this._fb.nonNullable.group({
            id: ['', Validators.required],
            user_id: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            address: ['', Validators.required],
            postalCode: ['', Validators.required],
            city_id: ['', Validators.required],
            employee_id: ['', Validators.required]
        });
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
        this.customerForm.reset();
        this.modalLabel = "Save";
        this.openModal();
    }

    handleEdit() {
        if (this.selectedCustomer) {
            this.customerForm.patchValue(this.selectedCustomer);
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
        if (this.customerForm.valid) {
            const formData = this.customerForm.value;

            const customerData = {
                id: formData.id,
                name: formData.name,
                lastName: formData.lastName,
                postalCode: formData.postalCode,
                address: formData.address,
                user: {
                    id: formData.user_id
                },
                city: {
                    id: formData.city_id
                },
                employee: {
                    id: formData.employee_id
                }
            };

            console.log(customerData);


            if (this.modalLabel === "Save") {
                this.service.saveCustomer(customerData).subscribe({
                    next: () => {
                        this.customerList$ = this.service.getCustomerList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error saving customer:', err)
                });
            } else if (this.modalLabel === "Edit") {
                if (this.selectedCustomer) {
                    this.service.updateCustomer(this.selectedCustomer.id, customerData).subscribe({
                        next: () => {
                            this.customerList$ = this.service.getCustomerList();
                            this.closeModal();
                        },
                        error: (err) => console.error('Error updating customer:', err)
                    });
                }
            }
        }
    }


    getFieldValue(customer: Customer | null, fieldName: string): any {

        return customer ? customer[fieldName as keyof Customer] : '';
    }

    selectCustomer(customer: Customer) {
        this.selectedCustomer = customer;
        this.customerForm.patchValue(customer);

    }

    customerFields: CustomerField[] = [
        { header: "ID Number", type: "string", name: "id" },
        { header: "User ID", type: "string", name: "user_id" },
        { header: "Name", type: "string", name: "name" },
        { header: "Last Name", type: "string", name: "lastName" },
        { header: "Email", type: "string", name: "email" },
        { header: "Address", type: "string", name: "address" },
        { header: "Postal Code", type: "number", name: "postalCode" },
        { header: "City", type: "string", name: "city_id" },
        { header: "Employe ID", type: "string", name: "employee_id" }

    ];

}
