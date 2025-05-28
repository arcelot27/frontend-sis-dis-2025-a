import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_SERVER } from './config-api';

export class HistorialService {

  private BASE_URL = API_SERVER; // Usa la variable importada
  private ruta = `${this.BASE_URL}/historial`;

  constructor(private http: HttpClient) {}

  descargarFormularioExcel(idFormulario: number) {
    return this.http.get(`${this.ruta}/descargar/${idFormulario}`, {
      responseType: 'blob'
    });
  }

  aprobarFormulario(idFormulario: number, revisorId: number) {
    return this.http.put(`${this.ruta}/aprobar/${idFormulario}`, {
      idRevisor: revisorId
    });
  }

  denegarFormulario(idFormulario: number, revisorId: number, motivo: string) {
    return this.http.put(`${this.ruta}/denegar/${idFormulario}`, {
      idRevisor: revisorId,
      motivo: motivo
    });
  }

  // ✅ Nuevo método para obtener formularios devueltos por usuario
  getFormulariosDevueltos(idUsuario: number) {
    return this.http.get<any[]>(`${this.ruta}/devueltos/${idUsuario}`);
  }
}
