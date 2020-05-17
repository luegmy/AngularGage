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

  filtrarProductos = "";

  productos: Producto[] = [];
  page:number = 1;
  totalPages: number[];
  numProductos: number
  pageSize = 15;

  order = 'codProducto';
  asc = true;
  isFirst = false;
  isLast = false;

  constructor(private servicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(dato=>{this.productos=dato;
    this.numProductos=dato.length});
  }
/* 
  irPorPagina(page: number){
    this.page = page;
    this.cargarProductos(page);
  } */

  cargarProductos() {
    this.servicio.getProductosPaginacion(this.page, this.pageSize, this.order, this.asc).subscribe(
      dato => {
        this.productos = dato.content;
        this.isFirst = dato.first;
        this.isLast = dato.last;
        this.totalPages = new Array(dato['totalPages']);
      },
      err=>{
        console.log(err.error)
      }
      );

    }

  editarProducto(producto: Producto): void {
    localStorage.setItem("codigo", producto.codProducto.toString());
    this.router.navigate(["editarProducto"]);
  }

 

}
