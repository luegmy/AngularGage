import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from './Servicio/cliente.service';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  
  constructor(private router: Router, private servicio: ClienteService) {

  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  listarCliente() {
    this.router.navigate(["listarCliente"]);
  }
  nuevoCliente() {

  }
  editarCliente() {
    this.router.navigate(["editarCliente"]);
  }
  listarProducto() {
    this.router.navigate(["listarProducto"]);
  }
  nuevoProducto() {
    this.router.navigate(["agregarProducto"]);
  }
  editarProducto() {
    this.router.navigate(["editarProducto"]);
  }
}
