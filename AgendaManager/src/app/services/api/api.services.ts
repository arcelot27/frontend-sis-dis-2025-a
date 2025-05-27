import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuario.dto';
import { FormularioDTO } from './formulario.dto';
import { Observable } from 'rxjs';
import { LaboresAcademicasDTO } from './laboresAcademicas.dto';
import { LaboresCientificasDTO } from './LaboresCientificas.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private usuariosapiUrl = 'http://localhost:8080/AgendaManager/api/usuarios/perfil';
  private apiUrl = 'http://localhost:8080/AgendaManager/api';

  constructor(private http: HttpClient) {}
  getUsuarios() {
    return this.http.get<UsuarioDTO[]>(this.usuariosapiUrl);
  }

  getPerfilUsuario() {
    return this.http.get<UsuarioDTO>('http://localhost:8080/api/usuarios/perfil');
  }

  private formularioapiUrl = 'http://localhost:8080/api/formulario';

  crearFormulario(formulario: any): Observable<any> {
    const url = 'http://localhost:8080/api/formulario';
    return this.http.post<any>(url, formulario);
  }
  private laboresAcademicasapiUrl = 'http://localhost:8080/api/labores-academicas';
  guardarLaboresAcademicas(datosLabores: any): Observable<any> {
    const url = 'http://localhost:8080/api/labores-academicas';
    return this.http.post<any>(url, datosLabores);
  }

  private laboresCientificaspiUrl = 'http://localhost:8080/api/labores-cientificas';
  guardarLaboresCientificas(datos: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/labores-cientificas', datos, {
      responseType: 'text'
    });
  }

  guardarLaboresExtension(datosExtension: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/labores-extension', datosExtension, {
      responseType: 'text'
    });
  }
  guardarGestionAcademica(datosGestion: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/labores-gestion-academica', datosGestion, {
      responseType: 'text'
    });
  }
}
