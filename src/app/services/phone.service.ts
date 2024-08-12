import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Phone, PhoneResults } from '../interfaces/Phone';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    private readonly apiUrl = `${environment.apiUrl}/phone`;

    constructor(private http: HttpClient) { }

    getPhoneList(): Observable<PhoneResults> {
        return this.http.get<PhoneResults>(`${this.apiUrl}/allPhones`);
    };

    getPhone(id: number): Observable<Phone> {
        return this.http.get<Phone>(`${this.apiUrl}/getPhone/${id}`);
    }

    deletePhone(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deletePhone/${id}`);
    }

    updatePhone(id: number, phone: Phone): Observable<Phone> {
        return this.http.put<Phone>(`${this.apiUrl}/updatePhone/${id}`, phone);
    }

    savePhone(phone: Phone): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePhone`, phone);

    };
}
