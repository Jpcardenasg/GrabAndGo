import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Customer, CustomerResults } from '../interfaces/Customer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private readonly apiUrl = `${environment.apiUrl}/customer`;
    
    constructor(private http: HttpClient) { }

    getCustomerList(): Observable<CustomerResults> {
        return this.http.get<CustomerResults>(`${this.apiUrl}/allCustomers`);
    };

    saveCustomer(customer: Customer): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCustomer`, customer);
    }
}
