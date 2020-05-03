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

 
  @Input() detallesH: DetalleVenta[];
  @Input() numComprobante:number
  
  @Output() pasarDetalleH = new EventEmitter<any[]>();
  productos:Producto[]
  detalleP: DetalleVenta = new DetalleVenta();

  constructor(private servicio: VentaService, private servicioP: ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.servicioP.getProductos().subscribe(data => this.productos = data);
  }

  editarDetalle(codigo: number, numero: number, i) {
    this.servicio.getDetalleVentaId(codigo, numero).subscribe(data => this.detalleP = data);
    this.detallesH.splice(i, 1);
  }
  
  agregarDetalle() {
    this.detalleP.id={"codProducto":this.detalleP.producto.codProducto,"numComprobante":this.numComprobante}
    this.detallesH.push(this.detalleP)
    this.pasarDetalleH.emit(this.detallesH);
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
