import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PhoneType, PhoneTypeResults } from '../interfaces/Phone';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhoneTypeService {
    private readonly apiUrl = `${environment.apiUrl}/phoneType`;

    constructor(private http: HttpClient) { }

    getPhoneTypeList(): Observable<PhoneTypeResults> {
        return this.http.get<PhoneTypeResults>(`${this.apiUrl}/allPhoneTypes`);
    };

    savePhoneType(phoneType: PhoneType): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/savePhoneType`, phoneType);

    };
}
