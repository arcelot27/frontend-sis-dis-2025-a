import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgendaManager';

  constructor(public router: Router) {}

  mostrarHeaderFooter(): boolean {
    // Ocultar en login
    return this.router.url !== '/login';
  }
  mostrarLogin(): boolean {
    // Ocultar en login
    return this.router.url  == '/login';
  }
}

