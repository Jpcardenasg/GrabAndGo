import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderResults } from '../interfaces/Order';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly apiUrl = `${environment.apiUrl}/order`;

    constructor(private http: HttpClient) { }

    getOrderList(): Observable<OrderResults> {
        return this.http.get<OrderResults>(`${this.apiUrl}/allOrders`);
    }

    getOrder(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.apiUrl}/getOrder/${id}`);
    }

    deleteOrder(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteOrder/${id}`);
    }

    updateOrder(id: number, order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiUrl}/updateOrder/${id}`, order);
    }

    saveOrder(order: Order): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOrder`, order);

    }
}
