import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductResults } from '../interfaces/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private readonly apiUrl = 'http://localhost:8080/api/product';

    constructor(private http: HttpClient) { }

    getProductList(): Observable<ProductResults> {
        return this.http.get<ProductResults>(`${this.apiUrl}/allProducts`);
    }

    saveProduct(product: Product): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveProduct`, product);
    }
}
