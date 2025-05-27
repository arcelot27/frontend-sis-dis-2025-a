import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
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

  constructor(private http: HttpClient, private router: Router) { }

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


  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  editar(): void {
    this.inputsDeshabilitados = !this.inputsDeshabilitados;

    if (this.inputsDeshabilitados) {
      console.log('Intentando actualizar:', this.usuario);

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

  comenzarFormulario(): void {
    this.router.navigate(['/formulario']);
  }

  irAFormulariosProfesor(): void {
    this.router.navigate(['/FormularioDevuelto-profesor']);
  }

  irAHistorialProfesor(): void {
    this.router.navigate(['/Historial-profesor']);
  }
}
