import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../../services/api/historial.service';

@Component({
  selector: 'app-formularios-devueltos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formularios-devueltos.component.html',
  styleUrls: ['./formularios-devueltos.component.css']
})
export class FormulariosDevueltosComponent implements OnInit {

  formularios: any[] = [];
  usuario: any = {};

  constructor(
    private http: HttpClient,
    private historialService: HistorialService
  ) { }

  ngOnInit(): void {
    const idUsuarioStr = localStorage.getItem('id');
    const idUsuario = idUsuarioStr ? parseInt(idUsuarioStr, 10) : null;

    if (!idUsuario) {
      console.error('ID de usuario no definido en localStorage');
      return;
    }

    this.historialService.getFormulariosDevueltos(idUsuario).subscribe({
      next: (data) => {
        this.formularios = data;
        console.log('📥 Formularios devueltos:', this.formularios);
      },
      error: (err) => {
        console.error('❌ Error al cargar formularios devueltos:', err);
      }
    });
  }

  descargarFormulario(idFormulario: number): void {
    this.historialService.descargarFormularioExcel(idFormulario).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `formulario-${idFormulario}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error al descargar el formulario:', err);
      }
    });
  }

}
