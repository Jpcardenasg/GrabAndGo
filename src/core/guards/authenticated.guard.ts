import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {

        if (authService.getRole() === 'ADMIN') {
            return router.navigate(['/admin']);
        } else if (authService.getRole() === 'CUSTOMER') {
            return router.navigate(['/customer']);

        }
        return false;
    }

    return true;
};
