import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
import { CreateautoComponent } from './components/createauto/createauto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleautoComponent } from './components/detalleauto/detalleauto.component';
import { EditarautoComponent } from './components/editarauto/editarauto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent, data: {titulo: 'Inicio'}},
  {path:'autos',component:AutosComponent},
  {path:'guardar-auto',component:CreateautoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'auto/:id',component:DetalleautoComponent},
  {path:'editar-auto/:id',component:EditarautoComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
