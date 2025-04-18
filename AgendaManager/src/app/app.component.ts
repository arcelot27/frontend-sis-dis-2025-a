import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Paso2LaboresAcademicasComponent } from './formulario/paso2-labores-academicas/paso2-labores-academicas.component';
import  { Paso3LaboresCientificasComponent } from './formulario/paso3-labores-cientificas/paso3-labores-cientificas.component';
import { Paso4LaboresExtensionComponent } from './formulario/paso4-labores-extension/paso4-labores-extension.component';
import { Paso5GestionAcademicasComponent } from './formulario/paso5-gestion-academicas/paso5-gestion-academicas.component';
import {DashboardComponent} from './user/profesor/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule, 
    RouterOutlet,
    HeaderComponent,  
    //FormularioComponent
    //Paso2LaboresAcademicasComponent,
    //Paso3LaboresCientificasComponent,
    //Paso4LaboresExtensionComponent,
    //Paso5GestionAcademicasComponent,
    //DashboardComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgendaManager';
}

