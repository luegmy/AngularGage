import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { EditarComponent } from './Cliente/editar/editar.component';


const rutas: Routes = [
{path:'listar',component:ListarComponent},
{path:'agregar',component:AgregarComponent},
{path:'editar',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
