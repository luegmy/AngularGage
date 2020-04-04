import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Documento } from './Modelo/cliente/Documento';
import { ClienteService } from './Servicio/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private servicio: ClienteService) { }

  listarCliente() {
    this.router.navigate(["listarCliente"]);
  }
  nuevoCliente() {
    this.router.navigate(["agregarCliente"]);
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
