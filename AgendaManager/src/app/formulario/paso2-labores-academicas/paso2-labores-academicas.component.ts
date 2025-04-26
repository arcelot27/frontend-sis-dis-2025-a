import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LaboresAcademicasDTO } from '../../services/api/laboresAcademicas.dto';
import { ApiService } from '../../services/api/api.services';

@Component({
  selector: 'app-paso2-labores-academicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paso2-labores-academicas.component.html',
  styleUrls: ['./paso2-labores-academicas.component.css']
})
export class Paso2LaboresAcademicasComponent implements OnInit {

  id_formulario: number = 0;

 
  nombreAsignatura: string = '';
  programa: string = '';
  grupo: string = '';
  sede: string = '';
  horasSemanales: number = 0;
  horasSemestrales: number = 0;

 
  prepHorasSemana: number = 0;
  prepHorasSemestre: number = 0;
  prepDescripcion: string = '';
  prepProducto: string = '';

  evalHorasSemana: number = 0;
  evalHorasSemestre: number = 0;
  evalDescripcion: string = '';
  evalProducto: string = '';

  eventosHorasSemana: number = 0;
  eventosHorasSemestre: number = 0;
  eventosDescripcion: string = '';
  eventosProducto: string = '';


  acompHorasSemana: number = 0;
  acompHorasSemestre: number = 0;
  acompDescripcion: string = '';
  acompProducto: string = '';

  cursosHorasSemana: number = 0;
  cursosHorasSemestre: number = 0;
  cursosDescripcion: string = '';
  cursosProducto: string = '';

  emprendHorasSemana: number = 0;
  emprendHorasSemestre: number = 0;
  emprendDescripcion: string = '';
  emprendProducto: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
ngOnInit(): void {

  this.id_formulario = 1;
  console.log('ID del formulario forzado:', this.id_formulario);
}

  guardarLaboresAcademicas(): void {
    const datosLabores = {
      id_formulario: this.id_formulario,
      nombreAsignatura: this.nombreAsignatura,
      programa: this.programa,
      grupo: this.grupo,
      sede: this.sede,
      horasSemanales: this.horasSemanales,
      horasSemestrales: this.horasSemestrales,

      actividadesAcademicas: [
        {
          tipo: 'Preparación de clases',
          horasSemana: this.prepHorasSemana,
          horasSemestre: this.prepHorasSemestre,
          descripcion: this.prepDescripcion,
          producto: this.prepProducto
        },
        {
          tipo: 'Evaluación de aprendizajes',
          horasSemana: this.evalHorasSemana,
          horasSemestre: this.evalHorasSemestre,
          descripcion: this.evalDescripcion,
          producto: this.evalProducto
        },
        {
          tipo: 'Gestión de eventos académicos',
          horasSemana: this.eventosHorasSemana,
          horasSemestre: this.eventosHorasSemestre,
          descripcion: this.eventosDescripcion,
          producto: this.eventosProducto
        }
      ],

      actividadesFormativas: [
        {
          tipo: 'Acompañamiento académico',
          horasSemana: this.acompHorasSemana,
          horasSemestre: this.acompHorasSemestre,
          descripcion: this.acompDescripcion,
          producto: this.acompProducto
        },
        {
          tipo: 'Cursos de fortalecimiento',
          horasSemana: this.cursosHorasSemana,
          horasSemestre: this.cursosHorasSemestre,
          descripcion: this.cursosDescripcion,
          producto: this.cursosProducto
        },
        {
          tipo: 'Asesoría en emprendimiento',
          horasSemana: this.emprendHorasSemana,
          horasSemestre: this.emprendHorasSemestre,
          descripcion: this.emprendDescripcion,
          producto: this.emprendProducto
        }
      ]
    };

    this.apiService.guardarLaboresAcademicas(datosLabores).subscribe({
      next: (response: any) => {
        console.log('Labores guardadas:', response);
        this.irALaboresCientificas();
      },
      error: (err: any) => {
        console.error('Error al guardar labores:', err);
      }
    });
  }

  volverAFormulario(): void {
    this.router.navigate(['/formulario']);
  }

  irALaboresCientificas(): void {
    this.router.navigate(['/labores-cientificas']);
  }
}





