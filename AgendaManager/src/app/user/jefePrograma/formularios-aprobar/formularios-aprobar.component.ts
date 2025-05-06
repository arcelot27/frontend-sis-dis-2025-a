import { Component } from '@angular/core';

@Component({
  selector: 'app-formularios-aprobar',
  imports: [],
  templateUrl: './formularios-aprobar.component.html',
  styleUrl: './formularios-aprobar.component.css'
})
export class FormulariosAprobarComponent {


  formularios = [
    { nombre: 'Formulario 1', fecha: new Date(), estado: 'Pendiente' },
    { nombre: 'Formulario 2', fecha: new Date(), estado: 'Aprobado' },
    { nombre: 'Formulario 3', fecha: new Date(), estado: 'Pendiente' },
  ];

  verDetalles(formulario: any) {
    // Aquí puedes redirigir, abrir modal o mostrar detalles
    alert(`Detalles del formulario: ${formulario.nombre}`);
  }

  aprobarFormulario(formulario: any) {
    formulario.estado = 'Aprobado';
    // Aquí podrías hacer una petición HTTP para actualizar el backend
  }
}
