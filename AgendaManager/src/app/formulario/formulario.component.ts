
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private router: Router) {}
  volverADashboard() {
    this.router.navigate(['/dashboard']); 
  }
  irALaboresAcademicas() {
    this.router.navigate(['/labores-academicas']); 
  }
}