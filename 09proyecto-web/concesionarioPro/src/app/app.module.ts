import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosComponent } from './components/autos/autos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateautoComponent } from './components/createauto/createauto.component';
import { DetalleautoComponent } from './components/detalleauto/detalleauto.component';
import { EditarautoComponent } from './components/editarauto/editarauto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ContactoComponent,
    CreateautoComponent,
    DetalleautoComponent,
    EditarautoComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
