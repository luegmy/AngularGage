import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { EditarClienteComponent } from './Cliente/editar/editarCliente.component';
import { ListarClienteComponent } from './Cliente/listar/listarCliente.component';
import { ListarProductoComponent } from './Producto/listar/listarProducto.component';
import { AgregarProductoComponent } from './Producto/agregar/agregarProducto.component';
import { EditarProductoComponent } from './Producto/editar/editarProducto.component';
import { ProductoService } from './Servicio/producto.service';

import { FiltroPipe } from './filtro.pipe';

import { ClienteService } from './Servicio/cliente.service';
import { DialogoConfirmacionComponent } from './Dialogo/dialogo-confirmacion.component';

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
    DialogoConfirmacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ClienteService,
    ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
