import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/AgendaManager/api/usuarios/perfil';  // Ajusta si cambia

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioDTO[]>(this.apiUrl);
  }

  getPerfilUsuario() {
    return this.http.get<UsuarioDTO>('http://localhost:8080/api/usuarios/perfil');
  }
}