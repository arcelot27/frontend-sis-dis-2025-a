// src/app/formulario/formulario.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private router: Router) {} // Inyecta Router
  volverADashboard() {
    this.router.navigate(['/dashboard']); // Navegación programática
  }
  irALaboresAcademicas() {
    this.router.navigate(['/labores-academicas']); // Navegación programática
  }
}