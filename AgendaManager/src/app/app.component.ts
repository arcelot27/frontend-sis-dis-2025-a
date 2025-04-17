import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgendaManager';
}
