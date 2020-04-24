import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './Cliente/listar/listarCliente.component';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { EditarClienteComponent } from './Cliente/editar/editarCliente.component';
import { ListarProductoComponent } from './Producto/listar/listarProducto.component';
import { AgregarProductoComponent } from './Producto/agregar/agregarProducto.component';
import { EditarProductoComponent } from './Producto/editar/editarProducto.component';
import { TableroComponent } from './Tablero/tablero.component';
import { ListarVentaComponent } from './Venta/listar-venta/listar-venta.component';
import { AgregarVentaComponent } from './Venta/agregar-venta/agregar-venta.component';
import { EditarVentaComponent } from './Venta/editar-venta/editar-venta.component';

const rutas: Routes = [
{path:'listarCliente',component:ListarClienteComponent},
{path:'agregarCliente',component:AgregarClienteComponent},
{path:'editarCliente',component:EditarClienteComponent},
{path:'listarProducto',component:ListarProductoComponent},
{path:'agregarProducto',component:AgregarProductoComponent},
{path:'editarProducto',component:EditarProductoComponent},
{path:'mostrarTablero',component:TableroComponent},
{path:'listarVenta',component:ListarVentaComponent},
{path:'agregarVenta',component:AgregarVentaComponent},
{path:'editarVenta',component:EditarVentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
