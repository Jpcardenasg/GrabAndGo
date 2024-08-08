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
        return this.http.get<CountryResults>(`${this.apiUrl}/allcountries`);
    };

    saveCountry(country: Country): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveCountry`, country);

    };
}
