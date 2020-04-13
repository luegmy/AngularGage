import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarProducto',
  templateUrl: './listarProducto.component.html',
  styleUrls: ['./listarProducto.component.css']
})
export class ListarProductoComponent implements OnInit {

  filtrarProductos="";
  productos: Producto[];
  constructor(private servicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getProductos()
    .subscribe(dato => this.productos = dato);
  }

  editarProducto(producto: Producto): void {
    localStorage.setItem("codigo", producto.codProducto.toString());
    this.router.navigate(["editarProducto"]);
  }
}
