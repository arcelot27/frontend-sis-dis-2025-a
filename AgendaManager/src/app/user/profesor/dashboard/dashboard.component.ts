

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ApiService } from '../../../services/api/api.services';
import { UsuarioDTO } from '../../../services/api/usuario.dto';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Quitamos HttpClient aquí
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inputsDeshabilitados = true;
  mostrarContrasena = false;
  usuario!: UsuarioDTO;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient 
  ) {}

  ngOnInit(): void {
    this.apiService.getPerfilUsuario().subscribe({
      next: (data) => {
        this.usuario = data;
      },
      error: (error) => {
        console.error('Error al obtener el perfil del usuario', error);
      }
    });
  }

  editar() {
    if (!this.inputsDeshabilitados) {
      // Guardar cambios
      this.actualizarUsuario();
    }
    this.inputsDeshabilitados = !this.inputsDeshabilitados;
  }

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  actualizarUsuario() {
    const datos = {
      nombre: this.usuario.nombre,
      contrasena: this.usuario.contrasena
    };

    console.log('Datos a enviar:', datos);

    this.http.put(`http://localhost:8080/api/usuarios/${this.usuario.id}`, datos)
      .subscribe({
        next: (response) => {
          console.log('Usuario actualizado', response);
          alert('¡Usuario actualizado correctamente!');
        },
        error: (error) => {
          console.error('Error al actualizar usuario', error);
          alert('Hubo un error al actualizar.');
        }
      });
  }

  comenzarFormulario() {
    this.router.navigate(['/formulario']);
  }

  irAHistorialProfesor() {
    this.router.navigate(['/Historial-profesor']);
  }

  irAFormulariosProfesor() {
    this.router.navigate(['/FormularioDevuelto-profesor']);
  }

  toggleEdicion(): void {
    if (this.modoEdicion) {
      alert('Cambios guardados (simulado)');
    }
    this.modoEdicion = !this.modoEdicion;
  }

  modoEdicion: boolean = false;
}

