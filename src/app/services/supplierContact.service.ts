import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SupplierContact, SupplierContactResults } from '../interfaces/Supplier';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupplierContactService {
    private readonly apiUrl = `${environment.apiUrl}/supplierContact`;

    constructor(private http: HttpClient) { }

    getSupplierContactList(): Observable<SupplierContactResults> {
        return this.http.get<SupplierContactResults>(`${this.apiUrl}/allsupliersContact`);
    };

    saveSupplierContact(supplierContact: SupplierContact): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveSupplierContact`,supplierContact);

    };
}
