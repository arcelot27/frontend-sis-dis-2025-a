import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  errorLogin: boolean = false;

  private apiUrl = 'http://localhost:8080/api/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  iniciarSesion(): void {
    this.errorLogin = false;

    if (!this.correo.trim() || !this.contrasena.trim()) {
      this.errorLogin = true;
      return;
    }

    const body = {
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.http.post<any>('http://localhost:8080/api/login', body).subscribe({
      next: (response) => {
        this.authService.login(this.correo, response.role);

        switch (response.role) {
          case 'admin':
            this.router.navigate(['/dashboardFacultad']); // o el dashboard correcto para ese rol
            break;
          case 'profesor':
            this.router.navigate(['/dashboard']);
            break;
          case 'jefe_programa':
            this.router.navigate(['/dashboardJefePrograma']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
      error: () => {
        this.errorLogin = true;
      }
    });
  }

}
