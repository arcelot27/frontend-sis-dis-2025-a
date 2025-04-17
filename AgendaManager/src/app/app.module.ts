import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component'; // Importa el componente

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FormularioComponent // Importa el componente aquí
  ],
  providers: [],


})
export class AppModule {}
