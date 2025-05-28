import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuario.dto';
import { Observable } from 'rxjs';
import { API_SERVER } from './config-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = API_SERVER; 

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioDTO[]>(`${this.BASE_URL}/usuarios/perfil`);
  }

  getPerfilUsuario() {
    return this.http.get<UsuarioDTO>(`${this.BASE_URL}/usuarios/perfil`);
  }

  crearFormulario(formulario: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/formulario`, formulario);
  }

  guardarLaboresAcademicas(datosLabores: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/labores-academicas`, datosLabores);
  }

  guardarLaboresCientificas(datos: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/labores-cientificas`, datos, {
      responseType: 'text'
    });
  }

  guardarLaboresExtension(datosExtension: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/labores-extension`, datosExtension, {
      responseType: 'text'
    });
  }

  guardarGestionAcademica(datosGestion: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/labores-gestion-academica`, datosGestion, {
      responseType: 'text'
    });
  }
}
