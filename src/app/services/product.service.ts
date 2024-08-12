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

    getProductList(): Observable<ProductResults> {
        return this.http.get<ProductResults>(`${this.apiUrl}/allProducts`);
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/getProduct/${id}`);
    }

    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteProduct/${id}`);
    }

    updateProduct(id: number, product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/updateProduct/${id}`, product);
    }

    saveProduct(product: Product): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveProduct`, product);
    }
}
