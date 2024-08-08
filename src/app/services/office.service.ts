import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Office, OfficeResults } from '../interfaces/Office';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OfficeService {
    private readonly apiUrl = `${environment.apiUrl}/office`;

    constructor(private http: HttpClient) { }

    getOfficeList(): Observable<OfficeResults> {
        return this.http.get<OfficeResults>(`${this.apiUrl}/alloffices`);
    };

    saveOffice(office: Office): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOffice`, office);

    };
}
