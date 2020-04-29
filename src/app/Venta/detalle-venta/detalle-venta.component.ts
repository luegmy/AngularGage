import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { VentaService } from '../venta.service';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  productos:Producto[]
  @Input() detallesH: DetalleVenta[];
  detalle: DetalleVenta = new DetalleVenta();

  @Output() pasarDetalleH = new EventEmitter<string>();

  hola:string="Hola papa"

  constructor(private servicio: VentaService, private servicioP: ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.servicioP.getProductos().subscribe(data => this.productos = data);
  }

  editarDetalle(codigo: number, numero: number, i) {
    this.servicio.getDetalleVentaId(codigo, numero).subscribe(data => this.detalle = data);
    this.detallesH.splice(i, 1);
  }
  
  agregarDetalle2() {
    console.log(this.pasarDetalleH)
    this.pasarDetalleH.emit(this.hola);
  }

  //funcion para poner por defecto un valor en el select
  compararProductos(doc1: Producto, doc2: Producto) {
    if (doc1 == null || doc2 == null) {
      return false;
    }
    return doc1.descripcion === doc2.descripcion;
  }

  eliminar(i) {
    this.detallesH.splice(i, 1);
  }

}
