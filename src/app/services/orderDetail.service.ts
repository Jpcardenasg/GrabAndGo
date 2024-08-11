import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail, OrderDetailResults } from '../interfaces/OrderDetail';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {

    private readonly apiUrl = `${environment.apiUrl}/orderDetail`;

    constructor(private http: HttpClient) { }

    getOrderDetailList(): Observable<OrderDetailResults> {
        return this.http.get<OrderDetailResults>(`${this.apiUrl}/allOrderDetails`);
    }

    getOrderDetail(id: number): Observable<OrderDetail> {
        return this.http.get<OrderDetail>(`${this.apiUrl}/getOrderDetail/${id}`);
    }

    deleteOrderDetail(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteOrderDetail/${id}`);
    }

    updateOrderDetail(id: number, orderDetail: OrderDetail): Observable<OrderDetail> {
        return this.http.put<OrderDetail>(`${this.apiUrl}/updateOrderDetail/${id}`, orderDetail);
    }

    saveOrderDetail(orderDetail: OrderDetail): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOrderDetail`, orderDetail);

    }
}
