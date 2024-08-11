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

    getPayment(id: number): Observable<Payment> {
        return this.http.get<Payment>(`${this.apiUrl}/getPayment/${id}`);
    }

    deletePayment(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deletePayment/${id}`);
    }

    updatePayment(id: number, payment: Payment): Observable<Payment> {
        return this.http.put<Payment>(`${this.apiUrl}/updatePayment/${id}`, payment);
    }

    savePayment(payment: Payment): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePayment`, payment);

    };
}
