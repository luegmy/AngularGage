import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Venta } from '../modelo/Venta';
import { Router } from '@angular/router';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { Comprobante } from '../modelo/Comprobante';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css']
})
export class EditarVentaComponent implements OnInit {

  //Comunicacion entre componentes
  detallesP: DetalleVenta[] = []
  codigoProducto: number

  venta: Venta = new Venta();

  clientes: Cliente[]
  comprobantes: Comprobante[]

  //para cargar los importes en el componente hijo (detalleVentaComponent)
  total: any = 0.00
  subtotal: any = 0.00
  igv: any = 0.00
  subtotalAuxiliar: number = 0


  constructor(private servicio: VentaService, private router: Router, private servicioC: ClienteService) { }

  ngOnInit(): void {
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.editarVenta();

  }

  editarVenta() {
    let numero = localStorage.getItem("numero");
    this.servicio.getVentaNumero(+numero).subscribe(data => this.venta = data)
    this.servicio.getDetalleVenta(+numero).subscribe(data => {
      this.detallesP = data;
      this.detallesP.forEach(data => {
        this.subtotalAuxiliar = (data.cantidad * data.precio);
        this.total = (this.total - (-this.subtotalAuxiliar)).toFixed(2)
        this.subtotal = (this.total / 1.18).toFixed(2)
        this.igv = (this.total - this.subtotal).toFixed(2)
      })
    });
  }

  //desde el componente hijo se trae el valor
  agregar(e) {
    this.detallesP = e
  }
  //desde el componente hijo se trae el valor
  monto(e) {
    this.venta.monto = e
  }

  codigo(e) {
    this.codigoProducto = e
  }

  //funcion para poner por defecto un valor en el select
  compararComprobantes(doc1: Comprobante, doc2: Comprobante) {
    if (doc1 == null || doc2 == null) {
      return false;
    }
    return doc1.descripcion === doc2.descripcion;
  }

  //funcion para poner por defecto un valor en el select
  compararClientes(doc1: Cliente, doc2: Cliente) {
    if (doc1 == null || doc2 == null) {
      return false;
    }
    return doc1.nombre === doc2.nombre;
  }

  actualizarVenta() {
    this.servicio.createVenta(this.venta)
      .subscribe(data => {
        alert("Se agrego con exito...!!");
      })

      this.servicio.createDetalleVenta(this.detallesP)
      .subscribe(data => {
        this.router.navigate(["listarVenta"]);
      })




  }

}
