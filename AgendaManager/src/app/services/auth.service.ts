import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isBrowser = typeof window !== 'undefined'; // ✅ detectar navegador

  constructor(private router: Router) {}

  login(usuario: string, rol: string): void {
    if (this.isBrowser) {
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('rol', rol);
    }
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  getUsuario(): string | null {
    return this.isBrowser ? localStorage.getItem('usuario') : null;
  }

  getRol(): string | null {
    return this.isBrowser ? localStorage.getItem('rol') : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUsuario();
  }
}
