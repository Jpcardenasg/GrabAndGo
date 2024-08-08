import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Branch, BranchResults } from '../interfaces/Branch';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BranchService {
    private readonly apiUrl = `${environment.apiUrl}/payment`;

    constructor(private http: HttpClient) { }

    getBranchList(): Observable<BranchResults> {
        return this.http.get<BranchResults>(`${this.apiUrl}/allBranches`);
    };

    saveBranch(branch: Branch): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveBranch`, branch);

    };
}
