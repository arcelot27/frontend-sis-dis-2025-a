import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialService, HistorialFormulario } from '../../../services/api/historial.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historial: HistorialFormulario[] = [];

  constructor(private historialService: HistorialService, private router: Router) {}

  ngOnInit(): void {
    const usuario = 'carlos.gonzalez@corhuila.edu.co'; // ← Reemplazar por valor dinámico en el futuro
    this.historialService.getHistorial(usuario).subscribe((data) => {
      this.historial = data;
    });
  }

  descargar(id: number): void {
    this.historialService.descargarFormulario(id).subscribe((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = `formulario_${id}.pdf`; // Cambiar extensión si usas .xlsx
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  DevolverDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
