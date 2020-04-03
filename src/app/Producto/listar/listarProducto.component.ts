import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/producto/Producto';
import { ProductoService } from 'src/app/Servicio/producto.service';

@Component({
  selector: 'app-listarProducto',
  templateUrl: './listarProducto.component.html',
  styleUrls: ['./listarProducto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos:Producto[];
  constructor(private servicio:ProductoService) { }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(dato=>this.productos=dato);
  }

}
