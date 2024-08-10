import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee, EmployeeResults } from '../interfaces/Employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private readonly apiUrl = `${environment.apiUrl}/employee`;

    constructor(private http: HttpClient) { }

    getEmployeeList(): Observable<EmployeeResults> {
        return this.http.get<EmployeeResults>(`${this.apiUrl}/allEmployees`);
    };

    saveEmployee(employee: Employee): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveEmployee`, employee);

    };
}
