import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  errorLogin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion(): void {
    const datos = {
      usuario: this.correo,
      contrasena: this.contrasena
    };

    this.http.post<any>('http://localhost:8080/api/login', datos).subscribe({
      next: (respuesta) => {
        const rol = respuesta.rol;

        if (rol === 'docente') {
          this.router.navigate(['/dashboard-docente']);
        } else if (rol === 'jefe') {
          this.router.navigate(['/dashboard-jefe']);
        } else if (rol === 'facultad') {
          this.router.navigate(['/dashboard-facultad']);
        } else if (rol === 'curriculo') {
          this.router.navigate(['/dashboard-curriculo']);
        } else {
          this.errorLogin = true;
        }
      },
      error: () => {
        this.errorLogin = true;
      }
    });
  }
}
