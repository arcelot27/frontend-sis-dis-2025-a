import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.services';

@Component({
  selector: 'app-paso3-labores-cientificas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paso3-labores-cientificas.component.html',
  styleUrls: ['./paso3-labores-cientificas.component.css']
})
export class Paso3LaboresCientificasComponent implements OnInit {

  id_formulario: number = 0;


  semilleros_horas_semana = 0;
  semilleros_horas_semestre = 0;
  semilleros_descripcion = '';
  semilleros_producto = '';

  propuestas_horas_semana = 0;
  propuestas_horas_semestre = 0;
  propuestas_descripcion = '';
  propuestas_producto = '';

  proyectos_horas_semana = 0;
  proyectos_horas_semestre = 0;
  proyectos_descripcion = '';
  proyectos_producto = '';

  grupo_horas_semana = 0;
  grupo_horas_semestre = 0;
  grupo_descripcion = '';
  grupo_producto = '';

  articulos_horas_semana = 0;
  articulos_horas_semestre = 0;
  articulos_descripcion = '';
  articulos_producto = '';

  camposIncompletos: boolean = false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id_formulario');
    if (id) {
      this.id_formulario = Number(id);
    } else {
      console.error('ID de formulario no encontrado.');
    }
  }


  guardarLaboresCientificas(): void {
    this.camposIncompletos = this.camposInvalidos();

    if (this.camposIncompletos) {
      return;
    }

    const datos = {
      id_formulario: this.id_formulario,
      semilleros_horas_semana: this.semilleros_horas_semana,
      semilleros_horas_semestre: this.semilleros_horas_semestre,
      semilleros_descripcion: this.semilleros_descripcion,
      semilleros_producto: this.semilleros_producto,

      propuestas_horas_semana: this.propuestas_horas_semana,
      propuestas_horas_semestre: this.propuestas_horas_semestre,
      propuestas_descripcion: this.propuestas_descripcion,
      propuestas_producto: this.propuestas_producto,

      proyectos_horas_semana: this.proyectos_horas_semana,
      proyectos_horas_semestre: this.proyectos_horas_semestre,
      proyectos_descripcion: this.proyectos_descripcion,
      proyectos_producto: this.proyectos_producto,

      grupo_horas_semana: this.grupo_horas_semana,
      grupo_horas_semestre: this.grupo_horas_semestre,
      grupo_descripcion: this.grupo_descripcion,
      grupo_producto: this.grupo_producto,

      articulos_horas_semana: this.articulos_horas_semana,
      articulos_horas_semestre: this.articulos_horas_semestre,
      articulos_descripcion: this.articulos_descripcion,
      articulos_producto: this.articulos_producto
    };

    this.apiService.guardarLaboresCientificas(datos).subscribe({
      next: () => this.irALaboresExtension(),
      error: (error) => console.error('❌ Error al guardar:', error)
    });
  }

  camposInvalidos(): boolean {
    const numeros = [
      this.semilleros_horas_semana, this.semilleros_horas_semestre,
      this.propuestas_horas_semana, this.propuestas_horas_semestre,
      this.proyectos_horas_semana, this.proyectos_horas_semestre,
      this.grupo_horas_semana, this.grupo_horas_semestre,
      this.articulos_horas_semana, this.articulos_horas_semestre
    ];

    const textos = [
      this.semilleros_descripcion, this.semilleros_producto,
      this.propuestas_descripcion, this.propuestas_producto,
      this.proyectos_descripcion, this.proyectos_producto,
      this.grupo_descripcion, this.grupo_producto,
      this.articulos_descripcion, this.articulos_producto
    ];

    const numerosInvalidos = numeros.some(n => !n || n <= 0);
    const textosVacios = textos.some(t => !t || t.trim() === '');

    return numerosInvalidos || textosVacios;
  }

  volverAPaso2() {
    this.router.navigate(['/labores-academicas']);
  }

  irALaboresExtension() {
    this.router.navigate(['/labores-Extension']);
  }
}
