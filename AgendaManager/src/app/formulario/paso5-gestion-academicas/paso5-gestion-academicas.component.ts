import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paso5-gestion-academicas',
  imports: [CommonModule],
  templateUrl: './paso5-gestion-academicas.component.html',
  styleUrl: './paso5-gestion-academicas.component.css'
})
export class Paso5GestionAcademicasComponent {
  constructor(private router: Router) {}

  volverAPaso4() {
    this.router.navigate(['/labores-Extension']);
  }
  irADashboard() {
    this.router.navigate(['/dashboard']); // Navegación programática
  }
}
