import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

    private readonly _authSvc = inject(AuthService);

    logout(): void {
        this._authSvc.logout();
    }

}
