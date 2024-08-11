import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Branch, BranchResults } from '../interfaces/Branch';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BranchService {
    private readonly apiUrl = `${environment.apiUrl}/branch`;

    constructor(private http: HttpClient) { }

    getBranchList(): Observable<BranchResults> {
        return this.http.get<BranchResults>(`${this.apiUrl}/allBranches`);
    };

    getBranch(id: number): Observable<Branch> {
        return this.http.get<Branch>(`${this.apiUrl}/getBranch/${id}`);
    }

    deleteBranch(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteBranch/${id}`);
    }

    updateBranch(id: number, branch: Branch): Observable<Branch> {
        return this.http.put<Branch>(`${this.apiUrl}/updateBranch/${id}`, branch);
    }

    saveBranch(branch: Branch): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveBranch`, branch);

    };
}
