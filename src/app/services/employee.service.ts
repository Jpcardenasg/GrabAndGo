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
    }

    getEmployee(id: string): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}/getEmployee/${id}`);
    }

    deleteEmployee(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteEmployee/${id}`);
    }

    updateEmployee(id: string, employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiUrl}/updateEmployee/${id}`, employee);
    }


    saveEmployee(employee: Employee): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveEmployee`, employee);

    }
}
