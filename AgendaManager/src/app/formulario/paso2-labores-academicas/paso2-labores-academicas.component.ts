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

  camposIncompletos: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id_formulario');
    if (id) {
      this.id_formulario = Number(id);
    } else {
      console.error("ID de formulario no encontrado.");
    }
  }


  esCampoInvalido(valor: any): boolean {
    return valor === null || valor === undefined || valor.toString().trim() === '';
  }

  guardarLaboresAcademicas(): void {
    const numerosInvalidos = [
      this.horasSemanales, this.horasSemestrales,
      this.prepHorasSemana, this.prepHorasSemestre,
      this.evalHorasSemana, this.evalHorasSemestre,
      this.eventosHorasSemana, this.eventosHorasSemestre,
      this.acompHorasSemana, this.acompHorasSemestre,
      this.cursosHorasSemana, this.cursosHorasSemestre,
      this.emprendHorasSemana, this.emprendHorasSemestre
    ].some(num => !num || num <= 0);

    const textosIncompletos = [
      this.nombreAsignatura, this.programa, this.grupo, this.sede,
      this.prepDescripcion, this.prepProducto,
      this.evalDescripcion, this.evalProducto,
      this.eventosDescripcion, this.eventosProducto,
      this.acompDescripcion, this.acompProducto,
      this.cursosDescripcion, this.cursosProducto,
      this.emprendDescripcion, this.emprendProducto
    ].some(txt => this.esCampoInvalido(txt));

    this.camposIncompletos = numerosInvalidos || textosIncompletos;

    if (this.camposIncompletos) {
      return;
    }

    const datosLabores = {
      id_formulario: this.id_formulario,
      nombreAsignatura: this.nombreAsignatura,
      programa: this.programa,
      grupo: this.grupo,
      sede: this.sede,
      horasSemanales: this.horasSemanales,
      horasSemestrales: this.horasSemestrales,

      prepHorasSemana: this.prepHorasSemana,
      prepHorasSemestre: this.prepHorasSemestre,
      prepDescripcion: this.prepDescripcion,
      prepProducto: this.prepProducto,

      evalHorasSemana: this.evalHorasSemana,
      evalHorasSemestre: this.evalHorasSemestre,
      evalDescripcion: this.evalDescripcion,
      evalProducto: this.evalProducto,

      eventosHorasSemana: this.eventosHorasSemana,
      eventosHorasSemestre: this.eventosHorasSemestre,
      eventosDescripcion: this.eventosDescripcion,
      eventosProducto: this.eventosProducto,

      acompHorasSemana: this.acompHorasSemana,
      acompHorasSemestre: this.acompHorasSemestre,
      acompDescripcion: this.acompDescripcion,
      acompProducto: this.acompProducto,

      cursosHorasSemana: this.cursosHorasSemana,
      cursosHorasSemestre: this.cursosHorasSemestre,
      cursosDescripcion: this.cursosDescripcion,
      cursosProducto: this.cursosProducto,

      emprendHorasSemana: this.emprendHorasSemana,
      emprendHorasSemestre: this.emprendHorasSemestre,
      emprendDescripcion: this.emprendDescripcion,
      emprendProducto: this.emprendProducto
    };

    console.log('➡️ Datos enviados al backend:', datosLabores);

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
