import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Customer, CustomerResults } from '../../../interfaces/customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../../../services/customer.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-customer-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent],
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


}
