import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paso4-labores-extension',
  imports: [CommonModule],
  templateUrl: './paso4-labores-extension.component.html',
  styleUrl: './paso4-labores-extension.component.css'
})
export class Paso4LaboresExtensionComponent {
  constructor(private router: Router) {}

  volverAPaso3() {
    this.router.navigate(['/labores-cientificas']);
  }
  irAGestionAcademica() {
    this.router.navigate(['/Gestion-Academica']); // Navegación programática
  }
}
