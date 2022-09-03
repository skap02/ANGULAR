import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { ListServiciosComponent } from './servicios/list-servicios/list-servicios.component';

const routes: Routes = [

{path:"clientes", component:ListClientesComponent},
{path:"productos", component:ListProductosComponent},
{path:"servicios", component:ListServiciosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
