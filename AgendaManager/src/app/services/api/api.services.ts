// Ejemplo en frontend/src/app/services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuario.dto'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/AgendaManager/api/usuarios';  // Usa /api (ruta definida en proxy)

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(this.apiUrl);
  }

  getPerfilUsuario(correo: string) {
    return this.http.get<UsuarioDTO>('http://localhost:8080/api/usuarios/perfil?correo=${correo}');
  }
}