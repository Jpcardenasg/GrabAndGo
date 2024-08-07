import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerResults } from '../interfaces/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private readonly apiUrl = 'http://localhost:8080/api/customer';

    constructor(private http: HttpClient) { }

    getCustomerList(): Observable<CustomerResults> {
        return this.http.get<CustomerResults>(`${this.apiUrl}/allCustomers`);
    };

    saveCustomer(customer: Customer): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCustomer`, customer);
    }

}
