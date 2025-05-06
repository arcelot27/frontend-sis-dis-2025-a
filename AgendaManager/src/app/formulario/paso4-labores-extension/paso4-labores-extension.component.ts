import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.services';

@Component({
  selector: 'app-paso4-labores-extension',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paso4-labores-extension.component.html',
  styleUrls: ['./paso4-labores-extension.component.css']
})
export class Paso4LaboresExtensionComponent implements OnInit {

  id_formulario: number = 4;

  consultoria_horas_semana = 0;
  consultoria_horas_semestre = 0;
  consultoria_descripcion = '';
  consultoria_producto = '';

  acompanamiento_horas_semana = 0;
  acompanamiento_horas_semestre = 0;
  acompanamiento_descripcion = '';
  acompanamiento_producto = '';

  intervencion_horas_semana = 0;
  intervencion_horas_semestre = 0;
  intervencion_descripcion = '';
  intervencion_producto = '';

  proyectos_culturales_horas_semana = 0;
  proyectos_culturales_horas_semestre = 0;
  proyectos_culturales_descripcion = '';
  proyectos_culturales_producto = '';

  educacion_artistica_horas_semana = 0;
  educacion_artistica_horas_semestre = 0;
  educacion_artistica_descripcion = '';
  educacion_artistica_producto = '';

  divulgacion_valores_horas_semana = 0;
  divulgacion_valores_horas_semestre = 0;
  divulgacion_valores_descripcion = '';
  divulgacion_valores_producto = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    console.log(`[Paso 4] Formulario activo: ${this.id_formulario}`);
  }

  guardarLaboresExtension(): void {
    const datosExtension  = {
      id_formulario: this.id_formulario,

      consultoria_horas_semana: this.consultoria_horas_semana,
      consultoria_horas_semestre: this.consultoria_horas_semestre,
      consultoria_descripcion: this.consultoria_descripcion,
      consultoria_producto: this.consultoria_producto,

      acompanamiento_horas_semana: this.acompanamiento_horas_semana,
      acompanamiento_horas_semestre: this.acompanamiento_horas_semestre,
      acompanamiento_descripcion: this.acompanamiento_descripcion,
      acompanamiento_producto: this.acompanamiento_producto,

      intervencion_horas_semana: this.intervencion_horas_semana,
      intervencion_horas_semestre: this.intervencion_horas_semestre,
      intervencion_descripcion: this.intervencion_descripcion,
      intervencion_producto: this.intervencion_producto,

      proyectos_culturales_horas_semana: this.proyectos_culturales_horas_semana,
      proyectos_culturales_horas_semestre: this.proyectos_culturales_horas_semestre,
      proyectos_culturales_descripcion: this.proyectos_culturales_descripcion,
      proyectos_culturales_producto: this.proyectos_culturales_producto,

      educacion_artistica_horas_semana: this.educacion_artistica_horas_semana,
      educacion_artistica_horas_semestre: this.educacion_artistica_horas_semestre,
      educacion_artistica_descripcion: this.educacion_artistica_descripcion,
      educacion_artistica_producto: this.educacion_artistica_producto,

      divulgacion_valores_horas_semana: this.divulgacion_valores_horas_semana,
      divulgacion_valores_horas_semestre: this.divulgacion_valores_horas_semestre,
      divulgacion_valores_descripcion: this.divulgacion_valores_descripcion,
      divulgacion_valores_producto: this.divulgacion_valores_producto,
    };

    this.apiService.guardarLaboresExtension(datosExtension).subscribe({
      next: () => this.irAGestionAcademica(),
      error: (error) => console.error('❌ Error al guardar:', error)
    });
  }
    volverAPaso3() {
      this.router.navigate(['/labores-cientificas']);
    }
    irAGestionAcademica() {
      this.router.navigate(['/Gestion-Academica']);
    }
  }
