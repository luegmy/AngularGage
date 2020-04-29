import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { Comprobante } from '../modelo/Comprobante';
import { Venta } from '../modelo/Venta';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  // a) almacenar datos del detalle para mostrar en la lista
  //cuando se pulsa el boton agregar
  detalleFormulario: DetalleVenta = new DetalleVenta();
  detallesP: DetalleVenta[] = []
  // b) almacenar datos del detalle de venta y la venta
  //ya que se guarda como objeto y no como formGroup.value
  detalle: DetalleVenta = new DetalleVenta();
  detalles: DetalleVenta[] = []
  venta: Venta = new Venta();
  // c) generar una llave primaria compuesta
  id = {}
 
  clientes: Cliente[]
  productos: Producto[]
  comprobantes: Comprobante[]
  registroForm


  constructor(private router: Router, private servicio: VentaService, private builder: FormBuilder,
    private servicioC: ClienteService, private servicioP: ProductoService) {
    this.registroForm = this.builder.group({
      numComprobante: [''],
      fecha: [''],
      hora: [''],
      serie: [''],
      cliente: [''],
      comprobante: [''],
      observacion: [''],
      producto: [''],
      precio: [''],
      cantidad: ['']

    })
  }

  ngOnInit(): void {
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.servicioP.getProductos().subscribe(data => this.productos = data);
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
  }

  agregarDetalle() {
    //a)
    this.detalleFormulario.producto = this.registroForm.value.producto;
    this.detalleFormulario.precio = this.registroForm.value.precio;
    this.detalleFormulario.cantidad = this.registroForm.value.cantidad;
    this.detallesP.push(this.detalleFormulario);

    //b)
    this.detalle.precio = this.registroForm.value.precio;
    this.detalle.cantidad = this.registroForm.value.cantidad;
    //c)
    this.detalle.id = {
      "numComprobante": Number(this.registroForm.value.numComprobante),
      "codProducto": this.registroForm.value.producto.codProducto
    }
    this.detalles.push(this.detalle);

    this.detalleFormulario = new DetalleVenta();
    this.detalle = new DetalleVenta();

    this.getVenta();

  }

  getVenta() {
    //b)
    this.venta.numComprobante = this.registroForm.value.numComprobante;
    this.venta.serie = this.registroForm.value.serie;
    this.venta.fecha = this.registroForm.value.fecha;
    this.venta.hora = this.registroForm.value.hora;
    this.venta.cliente = this.registroForm.value.cliente;
    this.venta.comprobante = this.registroForm.value.comprobante;
    this.venta.detalle = this.detalles;
  }

  guardarVenta() {
    this.servicio.createVenta(this.venta)
      .subscribe(data => {
        alert("Se agrego con exito...!!");
      })
      this.servicio.createDetalleVenta(this.detalles)
      .subscribe(data => {
        alert("Se agrego con exito detalle...!!");
        this.router.navigate(["listarVenta"]);
      })
  }


}
