import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderResults } from '../interfaces/Order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly apiUrl = 'http://localhost:8080/api/order';

    constructor(private http: HttpClient) { }

    getOrderList(): Observable<OrderResults> {
        return this.http.get<OrderResults>(`${this.apiUrl}/allOrders`);
    };

    saveOrder(order: Order): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOrder`, order);

    };
}
