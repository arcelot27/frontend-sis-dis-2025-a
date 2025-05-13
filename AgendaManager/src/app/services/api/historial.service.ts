import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HistorialFormulario {
  id: number;
  fecha: string;
  accion: string;
  usuario: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = 'http://localhost:8080/api/historial';

  constructor(private http: HttpClient) {}

  getHistorial(usuario: string): Observable<HistorialFormulario[]> {
    return this.http.get<HistorialFormulario[]>(`${this.apiUrl}/${usuario}`);
  }

  descargarFormulario(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/descargar/${id}`, {
      responseType: 'blob'
    });
  }
}
