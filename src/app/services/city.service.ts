import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { City, CityResults } from '../interfaces/LocationModels';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    private readonly apiUrl = `${environment.apiUrl}/city`;

    constructor(private http: HttpClient) { }

    getCityList(): Observable<CityResults> {
        return this.http.get<CityResults>(`${this.apiUrl}/allcities`);
    };

    saveCity(city: City): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCity`, city);

    };
}
