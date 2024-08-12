import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

    private readonly _authSvc = inject(AuthService);
    private readonly _router = inject(Router);

    logout(): void {
        this._authSvc.logout();
    }

    home(): void {
        const role = localStorage.getItem('userRole');

        if (role === 'ADMIN') {
            this._router.navigate(['/admin']);
        } else if (role === 'CUSTOMER') {
            this._router.navigate(['/customer']);
        }
    }

    aboutUs(): void {
        this._router.navigate(['/aboutUs']);
    };

}
