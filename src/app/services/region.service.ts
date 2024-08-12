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
        return this.http.get<RegionResults>(`${this.apiUrl}/allRegions`);
    };

    getRegionListView(): Observable<RegionResults> {
        return this.http.get<RegionResults>(`${this.apiUrl}/allRegionsView`);
    };

    deleteRegion(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteRegion/${id}`);
    }

    updateRegion(id: number, region: Region): Observable<Region> {
        return this.http.put<Region>(`${this.apiUrl}/updateRegion/${id}`, region);
    }

    saveRegion(region: Region): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveRegion`, region);

    };
}
