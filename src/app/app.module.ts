import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { EditarClienteComponent } from './Cliente/editar/editarCliente.component';
import { ListarClienteComponent } from './Cliente/listar/listarCliente.component';
import { ListarProductoComponent } from './Producto/listar/listarProducto.component';
import { AgregarProductoComponent } from './Producto/agregar/agregarProducto.component';
import { EditarProductoComponent } from './Producto/editar/editarProducto.component';
import { DialogoConfirmacionComponent } from './Dialogo/dialogo-confirmacion/dialogo-confirmacion.component';
import { TableroComponent } from './Tablero/tablero.component';
import { ListarVentaComponent } from './Venta/listar-venta/listar-venta.component';
import { AgregarVentaComponent } from './Venta/agregar-venta/agregar-venta.component';
import { EditarVentaComponent } from './Venta/editar-venta/editar-venta.component';
import { AppComponent2 } from 'src/app/Material/app.component';
import { PersonComponent } from 'src/app/Material/person.component';
import { DialogoDetalleVentaComponent } from './Dialogo/dialogo-detalle-venta/dialogo-detalle-venta.component';
import { DetalleVentaComponent } from './Venta/detalle-venta/detalle-venta.component';
import { PaginacionComponent } from './Paginacion/paginacion.component';

import { FiltroClientePipe } from './Filtro/filtroCliente.pipe';
import { FiltroProductoPipe } from './Filtro/filtroProducto.pipe';
import { FiltroVentaPipe } from './Filtro/filtroVenta.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    ListarProductoComponent,
    AgregarClienteComponent,
    AgregarProductoComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    DialogoConfirmacionComponent,
    TableroComponent,
    FiltroClientePipe,
    FiltroProductoPipe,
    FiltroVentaPipe,
    ListarVentaComponent,
    AgregarVentaComponent,
    EditarVentaComponent,
    DetalleVentaComponent,
    DialogoDetalleVentaComponent,
    AppComponent2,
    PersonComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
