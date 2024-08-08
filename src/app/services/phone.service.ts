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

    savePhone(phone: Phone): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePhone`, phone);

    };
}
