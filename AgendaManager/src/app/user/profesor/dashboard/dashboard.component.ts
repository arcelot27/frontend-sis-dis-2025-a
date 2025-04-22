
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {} 

  comenzarFormulario() {
    this.router.navigate(['/formulario']); 
  }
  IrAHistorialProfesor() {
    this.router.navigate(['/Historial-profesor']); 
  }
  IrAFormulariosProfesor(){
    this.router.navigate(['/FormularioDevuelto-profesor']); 
  }
}