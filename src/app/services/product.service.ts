import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductResults } from '../interfaces/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private readonly apiUrl = `${environment.apiUrl}/product`;

    constructor(private http: HttpClient) { }

    getProductList(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/allProducts`);
    }

    saveProduct(product: Product): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveProduct`, product);
    }
}
