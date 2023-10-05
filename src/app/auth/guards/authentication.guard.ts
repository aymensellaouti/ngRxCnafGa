import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from 'src/config/routes.config';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
   router.navigate([APP_ROUTES.login]);
   return false;
 }
 return true;
};
