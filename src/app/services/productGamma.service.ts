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

    saveProductGamma(productGamma: ProductGamma): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveProductGamma`, productGamma);
    }
}
