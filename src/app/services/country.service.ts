import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country, CountryResults } from '../interfaces/LocationModels';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private readonly apiUrl = `${environment.apiUrl}/country`;

    constructor(private http: HttpClient) { }

    getCountryList(): Observable<CountryResults> {
        return this.http.get<CountryResults>(`${this.apiUrl}/allCountries`);
    };

    getCountryListView(): Observable<CountryResults> {
        return this.http.get<CountryResults>(`${this.apiUrl}/allCountriesView`);
    };

    getCountry(id: number): Observable<Country> {
        return this.http.get<Country>(`${this.apiUrl}/getCountry/${id}`);
    }

    deleteCountry(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteCountry/${id}`);
    }

    updateCountry(id: number, country: Country): Observable<Country> {
        return this.http.put<Country>(`${this.apiUrl}/updateCountry/${id}`, country);
    }

    saveCountry(country: Country): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCountry`, country);

    };
}
