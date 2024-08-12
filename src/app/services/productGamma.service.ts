import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGamma, ProductGammaResults } from '../interfaces/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductGammaService {

    private readonly apiUrl = `${environment.apiUrl}/productGamma`;

    constructor(private http: HttpClient) { }

    getProductGammaList(): Observable<ProductGammaResults> {
        return this.http.get<ProductGammaResults>(`${this.apiUrl}/allProductsGamma`);
    }

    getProductGamma(id: number): Observable<ProductGamma> {
        return this.http.get<ProductGamma>(`${this.apiUrl}/getProductGamma/${id}`);
    }

    deleteProductGamma(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteProductGamma/${id}`);
    }

    updateProductGamma(id: number, productGamma: ProductGamma): Observable<ProductGamma> {
        return this.http.put<ProductGamma>(`${this.apiUrl}/updateProductGamma/${id}`, productGamma);
    }

    saveProductGammaGamma(productGamma: ProductGamma): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveProductGamma`, productGamma);
    }
}
