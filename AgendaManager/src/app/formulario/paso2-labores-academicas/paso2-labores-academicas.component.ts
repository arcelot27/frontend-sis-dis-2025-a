// src/app/formulario/paso2-labores-academicas/paso2-labores-academicas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso2-labores-academicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paso2-labores-academicas.component.html',
  styleUrls: ['./paso2-labores-academicas.component.css']
})
export class Paso2LaboresAcademicasComponent {
  constructor(private router: Router) {}

  volverAFormulario() {
    this.router.navigate(['/formulario']);
  }
  irALaboresCientificas() {
    this.router.navigate(['/labores-cientificas']); // Navegación programática
  }
}