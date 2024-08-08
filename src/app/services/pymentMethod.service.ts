import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaymentMethod, PaymentMethodResults } from '../interfaces/Payment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentMethodService {
    private readonly apiUrl = `${environment.apiUrl}/paymentMethod`;

    constructor(private http: HttpClient) { }

    getPaymentMethodList(): Observable<PaymentMethodResults> {
        return this.http.get<PaymentMethodResults>(`${this.apiUrl}/allPaymentMethods`);
    };

    savePaymentMethod(paymentMethod: PaymentMethod): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePaymentMethod`, paymentMethod);

    };
}
