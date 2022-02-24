import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, data: {titulo: 'Inicio'}},
  {path:'products', component:ProductsComponent, data: {titulo: 'Productos'}},
  {path:'contact', component:ContactComponent, data: {titulo: 'Contacto'}},
  {path:'login', component:LoginComponent, data: {titulo: 'Iniciar sesion'}},
  {path:'signin', component:SigninComponent, data: {titulo: 'Crear cuenta'}},
  {path:'**', component:HomeComponent, data: {titulo: 'Inicio'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
