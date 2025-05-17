import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const correo = typeof window !== 'undefined' ? localStorage.getItem('correo') : null;

  if (!correo) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
