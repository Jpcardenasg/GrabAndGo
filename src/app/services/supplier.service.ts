import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Supplier, SupplierResults } from '../interfaces/Supplier';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {
    private readonly apiUrl = `${environment.apiUrl}/supplier`;

    constructor(private http: HttpClient) { }

    getSupplierList(): Observable<SupplierResults> {
        return this.http.get<SupplierResults>(`${this.apiUrl}/allsupliers`);
    };

    saveSupplier(supplier: Supplier): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveSupplier`,supplier);

    };
}
