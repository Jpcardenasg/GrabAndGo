import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResults, User, SaveUser } from '../interfaces/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly _apiUrl = `${environment.apiUrl}/user`;

    private readonly _http = inject(HttpClient);


    getUserList(): Observable<UserResults> {
        return this._http.get<UserResults>(`${this._apiUrl}/allUsers`);
    }

    getUser(id: number): Observable<User> {
        return this._http.get<User>(`${this._apiUrl}/getUser/${id}`);
    }

    deleteUser(id: number): Observable<void> {
        return this._http.delete<void>(`${this._apiUrl}/deleteUser/${id}`);
    }

    updateUser(id: number, user: User): Observable<User> {
        return this._http.put<User>(`${this._apiUrl}/updateUser/${id}`, user);
    }

    saveUser(user: SaveUser): Observable<any> {
        return this._http.post<any>(`${this._apiUrl}/saveUser`, user);
    }


}
