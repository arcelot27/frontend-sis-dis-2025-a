import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HistorialService } from '../../../services/api/historial.service';


@Component({
  selector: 'app-dashboard-jefe',
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

  constructor(private http: HttpClient, private router: Router, private historialService: HistorialService) { }

  ngOnInit(): void {
    const correo = typeof window !== 'undefined' ? localStorage.getItem('correo') : null;

    if (correo) {
      this.http.get<any>(`http://localhost:8080/api/usuarios/perfil/${correo}`).subscribe({
        next: (data) => {
          this.usuario = {
            id: data.idUsuario, 
            nombre: data.nombre,
            correo: data.correo,
            contrasena: data.contrasena,
            rol: data.rol
          };
          console.log('Perfil cargado con ID:', this.usuario);
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


  aprobar(idFormulario: number) {
    this.historialService.aprobarFormulario(idFormulario, this.usuario.id).subscribe({
      next: () => {
        alert('Formulario aprobado correctamente');
      },
      error: (err) => {
        console.error('Error al aprobar formulario:', err);
      }
    });
  }

  denegar(idFormulario: number, motivo: string) {
    this.historialService.denegarFormulario(idFormulario, this.usuario.id, motivo).subscribe({
      next: () => {
        alert('Formulario denegado correctamente');
      },
      error: (err) => {
        console.error('Error al denegar formulario:', err);
      }
    });
  }


  irAFormulariosAprobar(): void {
    this.router.navigate(['/aprobar-formularios']);
  }
  irAFormulariosProfesor(): void {
    this.router.navigate(['/Historial-profesor']);
  }
}