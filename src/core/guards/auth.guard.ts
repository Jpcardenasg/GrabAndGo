import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const requiredRole = route.data['role'];

    if (authService.isAuthenticated()) {
        const userRole = authService.getRole();

        if (userRole === requiredRole) {
            return true;
        } else {
            return userRole === 'ADMIN' ? router.navigate(['/admin']) : router.navigate(['/customer']);
        }
    } else {
        return router.navigate(['/login']);
    }
};
