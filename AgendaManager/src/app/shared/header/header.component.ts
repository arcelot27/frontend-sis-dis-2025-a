import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  usuario: string | null = null;

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }


  logout(): void {
    this.authService.logout(); // Limpia localStorage y redirige a /login
  }
}
