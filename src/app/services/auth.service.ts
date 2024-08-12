import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, switchMap, tap } from 'rxjs';
import { UserLogged, UserLogin } from '../interfaces/User';
import { Router } from '@angular/router';
import { SaveCustomer } from '../interfaces/Customer';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly _loginUrl = `${environment.authUrl}/login`;
    private readonly _registerUrl = `${environment.authUrl}/register`;
    private readonly _authToken = 'authToken';
    private readonly _roleKey = 'userRole';

    private readonly _router = inject(Router);
    private readonly _http = inject(HttpClient);

    login(user: UserLogin): Observable<UserLogged> {
        return this._http.post<UserLogged>(this._loginUrl, user).pipe(
            tap(response => {
                if (response.token) {
                    this.setToken(response.token);
                    this.setRole(response.role);
                }
            })
        );
    }

    register(customer: SaveCustomer): Observable<UserLogged> {
        return this._http.post<UserLogged>(this._registerUrl, customer).pipe(
            switchMap(() => {
                return this.login({
                    username: customer.username,
                    password: customer.password
                });
            })
        );
    }

    private setRole(role: string): void {
        localStorage.setItem(this._roleKey, role);
    }

    getRole(): string {
        return localStorage.getItem(this._roleKey) || '';
    }


    private setToken(token: string): void {
        localStorage.setItem(this._authToken, token);
    }

    private getToken(): string | null {
        return localStorage.getItem(this._authToken);
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000; //Convertir el tiempo de expiración del token a milisegundos
        return Date.now() < exp;
    }

    logout(): void {
        localStorage.removeItem(this._authToken);
        localStorage.removeItem(this._roleKey);
        this._router.navigate(['/login']);
    }
}
