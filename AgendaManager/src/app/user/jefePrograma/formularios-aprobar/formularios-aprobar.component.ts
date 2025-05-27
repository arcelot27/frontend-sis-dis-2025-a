import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../../services/api/historial.service';

@Component({
  selector: 'app-formularios-aprobar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formularios-aprobar.component.html',
  styleUrls: ['./formularios-aprobar.component.css']
})
export class FormulariosAprobarComponent implements OnInit {

  formularios: any[] = [];
  usuario: any = {};
  revisores: Record<number, string> = {}; // ✅ Agregado

  constructor(
    private http: HttpClient,
    private historialService: HistorialService
  ) {}

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  obtenerPerfil(): void {
    const correo = localStorage.getItem('correo');
    if (!correo) {
      console.error('❌ No hay sesión activa. El correo no está en localStorage.');
      return;
    }

    this.http.get<any>(`http://localhost:8080/api/usuarios/perfil/${correo}`).subscribe({
      next: (data) => {
        this.usuario = {
          ...data,
          id: data.idUsuario
        };
        console.log('✅ Usuario autenticado:', this.usuario);
        this.cargarFormularios();
      },
      error: (err) => {
        console.error('❌ Error al cargar perfil de usuario:', err);
      }
    });
  }

  cargarFormularios(): void {
    this.http.get<any[]>('http://localhost:8080/api/historial').subscribe({
      next: (data) => {
        this.formularios = data.filter(f => f.idFormulario && f.idUsuario);
        console.log('📤 Formularios listos para mostrar:', this.formularios);

        const revisoresUnicos = [...new Set(this.formularios
          .map(f => f.revisadoPor)
          .filter(id => !!id))];

        revisoresUnicos.forEach(id => {
          this.http.get<any>(`http://localhost:8080/api/usuarios/${id}`).subscribe({
            next: res => {
              this.revisores[id] = res.nombre;
            },
            error: err => {
              console.error(`❌ Error al obtener nombre del revisor con ID ${id}`, err);
            }
          });
        });
      },
      error: (err) => {
        console.error('❌ Error al obtener formularios:', err);
      }
    });
  }

  aprobarFormulario(idFormulario: number): void {
    if (!this.usuario?.id) {
      console.error('⚠️ Usuario no válido.');
      return;
    }

    this.historialService.aprobarFormulario(idFormulario, this.usuario.id).subscribe({
      next: () => {
        alert('✅ Formulario aprobado');
        this.cargarFormularios();
      },
      error: (err) => console.error(err)
    });
  }

  denegarFormulario(idFormulario: number): void {
    const motivo = prompt('Ingrese el motivo de la denegación:');
    if (!motivo?.trim()) {
      alert('⚠️ Debe ingresar un motivo válido.');
      return;
    }

    if (!this.usuario?.id) {
      console.error('⚠️ Usuario no válido.');
      return;
    }

    this.historialService.denegarFormulario(idFormulario, this.usuario.id, motivo).subscribe({
      next: () => {
        alert('⚠️ Formulario denegado');
        this.cargarFormularios();
      },
      error: (err) => console.error(err)
    });
  }

  descargarFormulario(idFormulario: number): void {
    this.historialService.descargarFormularioExcel(idFormulario).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `formulario-${idFormulario}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error al descargar el formulario:', err);
      }
    });
  }
}
