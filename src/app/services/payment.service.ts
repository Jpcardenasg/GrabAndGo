import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Payment, PaymentResults } from '../interfaces/Payment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private readonly apiUrl = `${environment.apiUrl}/payment`;

    constructor(private http: HttpClient) { }

    getPaymentList(): Observable<PaymentResults> {
        return this.http.get<PaymentResults>(`${this.apiUrl}/allPayments`);
    };

    savePayment(payment: Payment): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePayment`, payment);

    };
}
