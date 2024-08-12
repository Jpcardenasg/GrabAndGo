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
        return this.http.get<OfficeResults>(`${this.apiUrl}/allOffices`);
    }

    getOffice(id: number): Observable<Office> {
        return this.http.get<Office>(`${this.apiUrl}/getOffice/${id}`);
    }

    deleteOffice(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteOffice/${id}`);
    }

    updateOffice(id: number, office: Office): Observable<Office> {
        return this.http.put<Office>(`${this.apiUrl}/updateOffice/${id}`, office);
    }

    saveOffice(office: Office): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveOffice`, office);

    }
}
