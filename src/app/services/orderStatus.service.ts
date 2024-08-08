import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatus, OrderStatusResults } from '../interfaces/OrderStatus';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrderStatusService {

    private readonly apiUrl = `${environment.apiUrl}/orderStatus`;

    constructor(private http: HttpClient) { }

    getOrderStatusList(): Observable<OrderStatusResults> {
        return this.http.get<OrderStatusResults>(`${this.apiUrl}/allOrderStatuses`);
    };

    saveOrderStatus(orderStatus: OrderStatus): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOrderStatus`, orderStatus);

    };
}
