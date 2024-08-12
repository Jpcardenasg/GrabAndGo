import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Customer, CustomerResults, NewCustomer } from '../interfaces/Customer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private readonly apiUrl = `${environment.apiUrl}/customer`;

    constructor(private http: HttpClient) { }

    getCustomerList(): Observable<CustomerResults> {
        return this.http.get<CustomerResults>(`${this.apiUrl}/allCustomers`);
    }

    getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(`${this.apiUrl}/getCustomer/${id}`);
    }

    deleteCustomer(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteCustomer/${id}`);
    }

    updateCustomer(id: string, customer: NewCustomer): Observable<Customer> {
        return this.http.put<Customer>(`${this.apiUrl}/updateCustomer/${id}`, customer);
    }

    saveCustomer(customer: NewCustomer): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCustomer`, customer);
    }
}
