import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paso3-labores-cientificas',
  imports: [CommonModule],
  templateUrl: './paso3-labores-cientificas.component.html',
  styleUrl: './paso3-labores-cientificas.component.css'
})
export class Paso3LaboresCientificasComponent {
  constructor(private router: Router) {}

  volverAPaso2() {
    this.router.navigate(['/labores-academicas']);
  }
  irALaboresExtension() {
    this.router.navigate(['/labores-Extension']); // Navegación programática
  }
}
