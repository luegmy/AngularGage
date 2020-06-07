import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { VentaService } from '../venta.service';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { Venta } from '../modelo/Venta';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  @Input() detallesH: DetalleVenta[] = [];
  @Input() ventaH: Venta = new Venta();
  @Input() total: any = 0
  @Input() subtotal: any = 0
  subtotalAuxiliar: number = 0
  @Input() igv: any = 0

  @Output() pasarDetalleH = new EventEmitter<any[]>();
  @Output() pasarMonto = new EventEmitter<number>();
  @Output() pasarCodigo = new EventEmitter<number>();

  productos: Producto[]
  detalleP: DetalleVenta = new DetalleVenta();


  constructor(private servicio: VentaService, private servicioP: ProductoService) {
  }

  ngOnInit(): void {
    this.servicioP.getProductos().subscribe(data => this.productos = data);

  }

  editarDetalle(detalle: DetalleVenta, i) {
    this.servicio.getDetalleVentaId(detalle.producto.codProducto, this.ventaH.numComprobante).subscribe(data => this.detalleP = data);
    this.subtotalAuxiliar = detalle.cantidad * detalle.precio
    this.total = (this.total - this.subtotalAuxiliar).toFixed(2)
    this.subtotal = (this.total / 1.18).toFixed(2)
    this.igv = (this.total - this.subtotal).toFixed(2)
    this.detallesH.splice(i, 1);
  
  }

  agregarDetalle() {
    this.detalleP.id = { "codProducto": this.detalleP.producto.codProducto, "numComprobante": this.ventaH.numComprobante }
    this.detalleP.venta = this.ventaH
    this.subtotalAuxiliar = this.detalleP.cantidad * this.detalleP.precio
    this.total = (this.subtotalAuxiliar - (-this.total)).toFixed(2)
    this.subtotal = (this.total / 1.18).toFixed(2)
    this.igv = (this.total - this.subtotal).toFixed(2)
    console.log(this.detalleP)
    this.detallesH.push(this.detalleP)

    //enviamos los valores al componente padre (agregarVentaComponent)
    this.pasarDetalleH.emit(this.detallesH);
    this.pasarMonto.emit(this.total);
    this.detalleP = new DetalleVenta()
  }

  //funcion para poner por defecto un valor en el select
  compararProductos(doc1: Producto, doc2: Producto) {
    if (doc1 == null || doc2 == null) {
      return false;
    }
    return doc1.descripcion === doc2.descripcion;
  }

  eliminarDetalle(detalle: DetalleVenta, i) {
    this.detallesH.splice(i, 1);

    this.subtotalAuxiliar = detalle.cantidad * detalle.precio
    this.total = (this.total - this.subtotalAuxiliar).toFixed(2)
    this.subtotal = (this.total / 1.18).toFixed(2)
    this.igv = (this.total - this.subtotal).toFixed(2)

    this.pasarCodigo.emit(detalle.producto.codProducto);


    /*  this.servicio.deleteDetalleVenta(detalle.producto.codProducto, this.numComprobante)
     .subscribe(data => {
       console.log(data)}); */
  }

}



