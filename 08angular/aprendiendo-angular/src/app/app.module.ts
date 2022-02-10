import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { CamisetaComponent } from './camiseta/camiseta.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    CamisetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
