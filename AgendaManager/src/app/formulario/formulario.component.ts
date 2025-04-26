import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.services';
import { FormularioDTO } from '../services/api/formulario.dto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormularioDTO = new FormularioDTO();

  constructor(private router: Router, private apiService: ApiService) {}

  volverADashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  guardarFormularioProfesor(): void {
    this.apiService.crearFormulario(this.formulario).subscribe({
      next: (response: any) => {
        console.log('Formulario del profesor guardado:', response);
        // Aquí puedes decidir si mostrar una notificación o esperar acción del usuario
      },
      error: (err: any) => {
        console.error('Error al guardar datos del profesor:', err);
      }
    });
}
}