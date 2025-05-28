import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { API_SERVER } from '../services/api/config-api';
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

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion(): void {
    if (!this.correo || !this.contrasena) {
      this.errorLogin = true;
      return;
    }

    const datosLogin = {
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.http.post<any>(`${API_SERVER}/usuarios/login`, datosLogin).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);

        // Guardar datos individualmente para compatibilidad
        localStorage.setItem('correo', response.correo);
        localStorage.setItem('rol', response.rol);
        localStorage.setItem('nombre', response.nombre);
        localStorage.setItem('id', response.id);

        // Redirigir según el rol
        switch (response.rol) {
          case 'profesor':
            this.router.navigate(['/dashboard']);
            break;
          case 'jefe':
            this.router.navigate(['/dashboardJefePrograma']);
            break;
          case 'facultad':
            this.router.navigate(['/dashboardFacultad']);
            break;
          case 'curriculo':
            this.router.navigate(['/dashboardCurriculo']);
            break;
          case 'admin':
            this.router.navigate(['/dashboardAdmin']);
            break;
          default:
            alert('Rol no reconocido');
        }
      },
      error: (error) => {
        console.error('Error en login:', error);
        this.errorLogin = true;
      }
    });
  }
}
