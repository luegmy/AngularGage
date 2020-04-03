import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './Cliente/listar/listarCliente.component';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { EditarClienteComponent } from './Cliente/editar/editarCliente.component';
import { ListarProductoComponent } from './Producto/listar/listarProducto.component';
import { AgregarProductoComponent } from './Producto/agregar/agregarProducto.component';
import { EditarProductoComponent } from './Producto/editar/editarProducto.component';


const rutas: Routes = [
{path:'listarCliente',component:ListarClienteComponent},
{path:'agregarCliente',component:AgregarClienteComponent},
{path:'editarCliente',component:EditarClienteComponent},
{path:'listarProducto',component:ListarProductoComponent},
{path:'agregarProducto',component:AgregarProductoComponent},
{path:'edittarProducto',component:EditarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
