import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api/api.services';

@Component({
  selector: 'app-paso5-gestion-academica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paso5-gestion-academicas.component.html',
  styleUrls: ['./paso5-gestion-academicas.component.css']
})
export class Paso5GestionAcademicaComponent {

  id_formulario: number = 5;

  jurado_horas_semana = 0;
  jurado_horas_semestre = 0;
  jurado_descripcion = '';
  jurado_producto = '';

  registros_horas_semana = 0;
  registros_horas_semestre = 0;
  registros_descripcion = '';
  registros_producto = '';

  acreditacion_horas_semana = 0;
  acreditacion_horas_semestre = 0;
  acreditacion_descripcion = '';
  acreditacion_producto = '';

  consejos_horas_semana = 0;
  consejos_horas_semestre = 0;
  consejos_descripcion = '';
  consejos_producto = '';

  autoevaluacion_horas_semana = 0;
  autoevaluacion_horas_semestre = 0;
  autoevaluacion_descripcion = '';
  autoevaluacion_producto = '';

  investigaciones_mercado_horas_semana = 0;
  investigaciones_mercado_horas_semestre = 0;
  investigaciones_mercado_descripcion = '';
  investigaciones_mercado_producto = '';

  formacion_profesores_horas_semana = 0;
  formacion_profesores_horas_semestre = 0;
  formacion_profesores_descripcion = '';
  formacion_profesores_producto = '';

  extramuros_horas_semana = 0;
  extramuros_horas_semestre = 0;
  extramuros_descripcion = '';
  extramuros_producto = '';

  validaciones_horas_semana = 0;
  validaciones_horas_semestre = 0;
  validaciones_descripcion = '';
  validaciones_producto = '';

  ctei_horas_semana = 0;
  ctei_horas_semestre = 0;
  ctei_descripcion = '';
  ctei_producto = '';

  resultados_aprendizaje_horas_semana = 0;
  resultados_aprendizaje_horas_semestre = 0;
  resultados_aprendizaje_descripcion = '';
  resultados_aprendizaje_producto = '';

  constructor(private router: Router, private apiService: ApiService) {}

  guardarGestionAcademica(): void {
    const datosGestion = {
      idformulario: this.id_formulario,

      jurado_horas_semana: this.jurado_horas_semana,
      jurado_horas_semestre: this.jurado_horas_semestre,
      jurado_descripcion: this.jurado_descripcion,
      jurado_producto: this.jurado_producto,

      registros_horas_semana: this.registros_horas_semana,
      registros_horas_semestre: this.registros_horas_semestre,
      registros_descripcion: this.registros_descripcion,
      registros_producto: this.registros_producto,

      acreditacion_horas_semana: this.acreditacion_horas_semana,
      acreditacion_horas_semestre: this.acreditacion_horas_semestre,
      acreditacion_descripcion: this.acreditacion_descripcion,
      acreditacion_producto: this.acreditacion_producto,

      consejos_horas_semana: this.consejos_horas_semana,
      consejos_horas_semestre: this.consejos_horas_semestre,
      consejos_descripcion: this.consejos_descripcion,
      consejos_producto: this.consejos_producto,

      autoevaluacion_horas_semana: this.autoevaluacion_horas_semana,
      autoevaluacion_horas_semestre: this.autoevaluacion_horas_semestre,
      autoevaluacion_descripcion: this.autoevaluacion_descripcion,
      autoevaluacion_producto: this.autoevaluacion_producto,

      investigaciones_mercado_horas_semana: this.investigaciones_mercado_horas_semana,
      investigaciones_mercado_horas_semestre: this.investigaciones_mercado_horas_semestre,
      investigaciones_mercado_descripcion: this.investigaciones_mercado_descripcion,
      investigaciones_mercado_producto: this.investigaciones_mercado_producto,

      formacion_profesores_horas_semana: this.formacion_profesores_horas_semana,
      formacion_profesores_horas_semestre: this.formacion_profesores_horas_semestre,
      formacion_profesores_descripcion: this.formacion_profesores_descripcion,
      formacion_profesores_producto: this.formacion_profesores_producto,

      extramuros_horas_semana: this.extramuros_horas_semana,
      extramuros_horas_semestre: this.extramuros_horas_semestre,
      extramuros_descripcion: this.extramuros_descripcion,
      extramuros_producto: this.extramuros_producto,

      validaciones_horas_semana: this.validaciones_horas_semana,
      validaciones_horas_semestre: this.validaciones_horas_semestre,
      validaciones_descripcion: this.validaciones_descripcion,
      validaciones_producto: this.validaciones_producto,

      ctei_horas_semana: this.ctei_horas_semana,
      ctei_horas_semestre: this.ctei_horas_semestre,
      ctei_descripcion: this.ctei_descripcion,
      ctei_producto: this.ctei_producto,

      resultados_aprendizaje_horas_semana: this.resultados_aprendizaje_horas_semana,
      resultados_aprendizaje_horas_semestre: this.resultados_aprendizaje_horas_semestre,
      resultados_aprendizaje_descripcion: this.resultados_aprendizaje_descripcion,
      resultados_aprendizaje_producto: this.resultados_aprendizaje_producto
    };

    this.apiService.guardarGestionAcademica(datosGestion).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => console.error('Error al guardar gestión académica', err)
    });
  }

  volverALaboresExtension(): void {
    this.router.navigate(['labores-Extension']);
  }

  irADashboard(): void {
    this.router.navigate(['/dashboard']);
  }


}
