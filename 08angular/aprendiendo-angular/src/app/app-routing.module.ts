import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar los componentes
import { AutoComponent } from './auto/auto.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
//arreglo de las rutas
const routes: Routes = [
  {path:'autos',component:AutoComponent},
  {path:'camiseta',component:CamisetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
