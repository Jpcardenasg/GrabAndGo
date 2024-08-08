import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { CustomerField, CustomerResults } from '../../../interfaces/customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../../../services/customer.service';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';

@Component({
    selector: 'app-customer-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent,
        ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './customer-management.component.html',
    styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent implements OnInit {

    @Input() title?: string;

    public customerList$!: Observable<CustomerResults>;
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

    customerFields: CustomerField[] = [
        { header: "ID Number", type: "string", name: "idNumber" },
        { header: "Username", type: "string", name: "username" },
        { header: "Password", type: "number", name: "password" },
        { header: "Name", type: "string", name: "name" },
        { header: "Last Name", type: "string", name: "lastName" },
        { header: "Address", type: "string", name: "address" },
        { header: "Postal Code", type: "number", name: "postalCode" },
        { header: "City", type: "string", name: "city" },
        { header: "Telephone", type: "number", name: "telephone" },
        { header: "Telephone Type", type: "string", name: "telephoneType" }
    ];

}
