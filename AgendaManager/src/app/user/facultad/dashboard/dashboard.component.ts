import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-facultad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario: any = {
    id: null,
    nombre: '',
    correo: '',
    contrasena: '',
    rol: ''
  };

  mostrarContrasena: boolean = false;
  inputsDeshabilitados: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const correo = localStorage.getItem('correo');

    if (correo) {
      this.http.get<any>(`http://localhost:8080/api/usuarios/perfil/${correo}`).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (err) => {
          console.error('Error al cargar el perfil:', err);
        }
      });
    } else {
      console.warn('No se encontró el correo en localStorage.');
    }
  }

  editar(): void {
    this.inputsDeshabilitados = !this.inputsDeshabilitados;

    if (this.inputsDeshabilitados) {
      const datos = {
        nombre: this.usuario.nombre,
        contrasena: this.usuario.contrasena
      };

      this.http.put(`http://localhost:8080/api/usuarios/${this.usuario.id}`, datos).subscribe({
        next: () => {
          alert('¡Datos actualizados correctamente!');
        },
        error: (error) => {
          console.error('Error al actualizar usuario', error);
          alert('Error al guardar los cambios.');
        }
      });
    }
  }

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  irARevisionFacultad(): void {
    this.router.navigate(['/formulario-aprobar-facultad']);
  }
}
