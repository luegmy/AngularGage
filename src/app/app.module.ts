import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { AppRoutingModule } from './app-routing.module';
import {SidebarModule} from 'ng-sidebar';

import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { EditarClienteComponent } from './Cliente/editar/editarCliente.component';
import { ListarClienteComponent } from './Cliente/listar/listarCliente.component';
import { ListarProductoComponent } from './Producto/listar/listarProducto.component';
import { AgregarProductoComponent } from './Producto/agregar/agregarProducto.component';
import { EditarProductoComponent } from './Producto/editar/editarProducto.component';
import { DialogoConfirmacionComponent } from './Dialogo/dialogo-confirmacion.component';
import { TableroComponent } from './Tablero/tablero.component';

import { FiltroPipe } from './Filtro/filtro.pipe';

import { ClienteService } from './Cliente/cliente.service';
import { ProductoService } from './Producto/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    ListarProductoComponent,
    AgregarClienteComponent,
    AgregarProductoComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    FiltroPipe,
    DialogoConfirmacionComponent,
    TableroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule
  ],
  providers: [
    ClienteService,
    ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
