import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword = false;

    constructor(
      private router: Router,
    ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  mostrarAvisoCookies = true;

  cerrarAvisoCookies() {
    this.mostrarAvisoCookies = false;
  }


  Profesor(): void {
    this.router.navigate(['/dashboard']);
  }

}
