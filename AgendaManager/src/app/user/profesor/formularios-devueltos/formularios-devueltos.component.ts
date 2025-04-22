import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularios-devueltos',
  imports: [ CommonModule ],
  templateUrl: './formularios-devueltos.component.html',
  styleUrl: './formularios-devueltos.component.css'
})
export class FormulariosDevueltosComponent {
  constructor(private router: Router) {} 
  DevolverDashboard() {
    this.router.navigate(['/dashboard']); 
  }
}
