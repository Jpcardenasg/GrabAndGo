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
        return this.http.get<CityResults>(`${this.apiUrl}/allCities`);
    };

    getCityListView(): Observable<CityResults> {
        return this.http.get<CityResults>(`${this.apiUrl}/allCitiesView`);
    };

    getCity(id: number): Observable<City> {
        return this.http.get<City>(`${this.apiUrl}/getCity/${id}`);
    }

    deleteCity(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteCity/${id}`);
    }

    updateCity(id: number, city: City): Observable<City> {
        return this.http.put<City>(`${this.apiUrl}/updateCity/${id}`, city);
    }

    saveCity(city: City): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCity`, city);

    };
}
