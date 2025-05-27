import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private baseUrl = 'http://localhost:8080/api/historial';

  constructor(private http: HttpClient) {}

  descargarFormularioExcel(idFormulario: number) {
    return this.http.get(`${this.baseUrl}/descargar/${idFormulario}`, {
      responseType: 'blob'
    });
  }

  aprobarFormulario(idFormulario: number, revisorId: number) {
    return this.http.put(`${this.baseUrl}/aprobar/${idFormulario}`, {
      idRevisor: revisorId
    });
  }

  denegarFormulario(idFormulario: number, revisorId: number, motivo: string) {
    return this.http.put(`${this.baseUrl}/denegar/${idFormulario}`, {
      idRevisor: revisorId,
      motivo: motivo
    });
  }

  // ✅ Nuevo método para obtener formularios devueltos por usuario
  getFormulariosDevueltos(idUsuario: number) {
    return this.http.get<any[]>(`${this.baseUrl}/devueltos/${idUsuario}`);
  }
}
