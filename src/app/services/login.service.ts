import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserLogged, UserLogin } from '../interfaces/User';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private readonly apiUrl = `${environment.authUrl}/login`;

    private readonly _http = inject(HttpClient);

    getAuthentication(user: UserLogin): Observable<UserLogged> {
        return this._http.post<UserLogged>(this.apiUrl, user);
    }
}
