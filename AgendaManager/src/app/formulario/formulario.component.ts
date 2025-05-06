import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ApiService } from '../services/api/api.services';
import { FormularioDTO } from '../services/api/formulario.dto';

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
  ) {}

  esCampoInvalido(valor: any): boolean {
    if (typeof valor === 'string') {
      return valor.trim() === '' || valor.trim() === '0';
    }
    return valor === null || valor === 0;
  }

  guardarFormularioProfesor(): void {
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
      this.mensajeError = 'Por favor, llena todos los campos correctamente antes de continuar.';
      return;
    }

    this.camposIncompletos = false;
    this.mensajeError = '';

    this.apiService.crearFormulario(this.formulario).subscribe({
      next: (response) => {
        console.log('Formulario guardado:', response);
        const formularioId = response.id_formulario;
        this.router.navigate(['/labores-academicas'], {
          queryParams: { id_formulario: formularioId }
        });
      },
      error: (err) => {
        console.error('Error al guardar formulario:', err);
      }
    });
  }

  volverADashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
