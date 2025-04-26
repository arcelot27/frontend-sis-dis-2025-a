import { Component, OnInit } from '@angular/core';
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
export class FormularioComponent  {

  formulario: FormularioDTO = new FormularioDTO();

  constructor(private router: Router, 
    private apiService: ApiService,
    private http: HttpClient
  ) {}
//  ngOnInit(): void {
//    throw new Error('Method not implemented.');
//  }



  guardarFormularioProfesor(): void {
    this.apiService.crearFormulario(this.formulario).subscribe({
      next: (response) => {
        console.log('Formulario guardado:', response);

        const formularioId = response.id_formulario;
        this.router.navigate(['/labores-academicas'], { queryParams: { id_formulario: formularioId } });
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