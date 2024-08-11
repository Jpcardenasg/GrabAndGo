import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { CustomerContact, CustomerContactResults } from '../interfaces/CustomerContact';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerContactService {
    private readonly apiUrl = `${environment.apiUrl}/customerContact`;

    constructor(private http: HttpClient) { }

    getCustomerContactList(): Observable<CustomerContactResults> {
        return this.http.get<CustomerContactResults>(`${this.apiUrl}/allCustomersContact`);
    }

    getCustomerContact(id: number): Observable<CustomerContact> {
        return this.http.get<CustomerContact>(`${this.apiUrl}/getCustomerContact/${id}`);
    }

    deleteCustomerContact(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteCustomerContact/${id}`);
    }

    updateCustomerContact(id: number, customerContact: CustomerContact): Observable<CustomerContact> {
        return this.http.put<CustomerContact>(`${this.apiUrl}/updateCustomerContact/${id}`, customerContact);
    }

    saveCustomerContact(customerContact: CustomerContact): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCustomerContact`, customerContact);
    }
}
