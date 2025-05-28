
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { API_SERVER } from '../../../services/api/config-api';
@Component({
  selector: 'app-historial',
  standalone: true,
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  imports: [CommonModule]
})
export class HistorialComponent implements OnInit {

  historial: {
    fecha: string;
    accion: string;
    usuario: string;
    descripcion: string;
    formulario?: { idFormulario: number };
  }[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const idUsuario = parseInt(localStorage.getItem('id') || '0', 10);
    this.http.get<any[]>(
      `${API_SERVER}/historial/usuario/${idUsuario}`
    ).subscribe({
      next: (data) => {
        this.historial = data;
      },
      error: (err) => {
        console.error('Error al cargar historial:', err);
      }
    });
  }

  // ✅ Para botón individual por formulario
  descargarExcel(idFormulario: number | undefined): void {
    if (!idFormulario) {
      alert('⚠️ Este historial no tiene un formulario relacionado.');
      return;
    }
    window.open(`${API_SERVER}/historial/descargar/${idFormulario}`, '_blank');
  }

  // ✅ Para botón general de descarga completa
  descargarHistorialCompleto(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.historial);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Historial');
    XLSX.writeFile(workbook, 'historial_formularios.xlsx');
  }

  DevolverDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
