import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/Dialogo/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-listarProducto',
  templateUrl: './listarProducto.component.html',
  styleUrls: ['./listarProducto.component.css']
})
export class ListarProductoComponent implements OnInit {

  filtrarProductos = "";

  productos: Producto[] = [];
  //atributo que escucha el evento (pageChange)="page = $event"
  page:number = 1;
  totalPages: number[];
  numProductos: number
  pageSize = 10;

  order = 'codProducto';
  asc = true;
  isFirst = false;
  isLast = false;

  constructor(private dialogo: MatDialog,private servicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(dato=>this.productos=dato)
  }

  editarProducto(producto: Producto): void {
    localStorage.setItem("codigo", producto.codProducto.toString());
    this.router.navigate(["editarProducto"]);
  }

  eliminarProducto(producto:Producto){
    this.dialogo.open(DialogoConfirmacionComponent, {
      data: { nombre: 'Realmente deseas eliminar al producto ' + producto.descripcion + '?' }
    })
      .afterClosed()
      .subscribe((confirmado: boolean) => {
        if (!confirmado) return;
        this.servicio.deleteProducto(producto)
          .subscribe(data => {
            this.productos = this.productos.filter(c => c !== producto)
          });
      });
  }

 

}
