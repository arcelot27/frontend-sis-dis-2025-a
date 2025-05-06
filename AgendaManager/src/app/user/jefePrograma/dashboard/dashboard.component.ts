
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { ApiService } from '../../../services/api/api.services';
import { UsuarioDTO } from '../../../services/api/usuario.dto';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  
    usuario: UsuarioDTO = {
      id: 0,
      nombre: '',
      correo: '',
      rol: '',
      contrasena: ''
    };
  
    mostrarContrasena: boolean = false;
    inputsDeshabilitados: boolean = true;
  
    constructor(
      private apiService: ApiService,
      private router: Router,
      private http: HttpClient
    ) {}
  
    ngOnInit(): void {
      this.obtenerPerfilUsuario();
    }
  
    obtenerPerfilUsuario(): void {
      this.apiService.getPerfilUsuario().subscribe({
        next: (data) => {
          this.usuario = data;
          console.log("Perfil cargado:", this.usuario);
        },
        error: (error) => {
          console.error('Error al obtener perfil:', error);
        }
      });
    }
  
    editar(): void {
      this.inputsDeshabilitados = !this.inputsDeshabilitados;
  
      if (this.inputsDeshabilitados) {
        console.log('ID del usuario:', this.usuario.id);
  
        const datos = {
          nombre: this.usuario.nombre,
          contrasena: this.usuario.contrasena
        };
  
        this.http.put(`http://localhost:8080/api/usuarios/${this.usuario.id}`, datos)
          .subscribe({
            next: () => {
              console.log('Usuario actualizado correctamente');
              alert('¡Datos actualizados!');
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

  
    FormulariosAprobar(): void {
      this.router.navigate(['/aprobar-formularios']);
    }
  
    irAFormulariosProfesor(): void {
      this.router.navigate(['/Historial-profesor']);
    }
}
