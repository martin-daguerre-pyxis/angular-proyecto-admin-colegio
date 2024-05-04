import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard');
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return true;
    // return router.navigate(['/dashboard/home']);
  } else {
    return false
    // return router.createUrlTree(['/auth/login']);
  }
};
