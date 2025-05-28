import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ApiService } from '../services/api/api.services';
import { FormularioDTO } from '../services/api/formulario.dto';
import { API_SERVER } from '../services/api/config-api';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormularioDTO = new FormularioDTO();
  camposIncompletos = false;
  mensajeError = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  esCampoInvalido(valor: any): boolean {
    if (typeof valor === 'string') {
      return valor.trim() === '' || valor.trim() === '0';
    }
    return valor === null || valor === 0;
  }

  guardarFormularioProfesor(): void {
    const idUsuarioStr = localStorage.getItem('id');
    const idUsuario = idUsuarioStr ? parseInt(idUsuarioStr, 10) : null;

    if (!idUsuario || isNaN(idUsuario)) {
      this.mensajeError = 'No se encontró el ID del usuario. Inicia sesión nuevamente.';
      return;
    }

    this.formulario.idUsuario = idUsuario;

    const campos = [
      this.formulario.nombres,
      this.formulario.apellidos,
      this.formulario.facultad,
      this.formulario.programa,
      this.formulario.fecha,
      this.formulario.periodo
    ];

    const hayCampoInvalido = campos.some(campo => this.esCampoInvalido(campo));

    if (hayCampoInvalido) {
      this.camposIncompletos = true;
      this.mensajeError = 'Por favor, llena todos los campos correctamente.';
      return;
    }

    this.http.post<any>(`${API_SERVER}/formulario`, this.formulario).subscribe({
      next: (response) => {
        // ✅ Guardar el ID del formulario en localStorage
        localStorage.setItem('id_formulario', response.id_formulario);
        this.router.navigate(['/labores-academicas']);
      },
      error: (error) => {
        console.error('Error al guardar:', error);
        this.mensajeError = 'Hubo un error al guardar el formulario.';
      }
    });
  }


  volverADashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
