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
    };

    saveCustomerContact(customerContact: CustomerContact): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCustomerContact`, customerContact);
    }
}
