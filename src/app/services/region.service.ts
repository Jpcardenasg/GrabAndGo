import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Region, RegionResults } from '../interfaces/LocationModels';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegionService {
    private readonly apiUrl = `${environment.apiUrl}/region`;

    constructor(private http: HttpClient) { }

    getRegionList(): Observable<RegionResults> {
        return this.http.get<RegionResults>(`${this.apiUrl}/allregiones`);
    };

    saveRegion(region: Region): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveRegion`, region);

    };
}
