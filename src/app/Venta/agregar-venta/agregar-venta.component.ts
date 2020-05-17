import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { Comprobante } from '../modelo/Comprobante';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { Venta } from '../modelo/Venta';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  //Comunicacion entre componentes
  detallesP: DetalleVenta[] = []
  codigoProducto: number

  venta: Venta = new Venta();
  ventas: Venta[] = []

  clientes: Cliente[]
  comprobantes: Comprobante[]

  @Input() valor:number

  //para cargar los importes en el componente hijo (detalleVentaComponent)
  total: any = 0.00
  subtotal: any = 0.00
  igv: any = 0.00
  subtotalAuxiliar: number = 0

  constructor(private router: Router, private servicio: VentaService, private builder: FormBuilder, private servicioC: ClienteService) { }

  ngOnInit(): void {
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
    this.servicio.getVentas().subscribe(data => this.ventas = data);
  }

  cargarNumeroComprobante() {
    this.servicio.getNumeroComprobante(this.venta.comprobante.codComprobante).subscribe((data:any)=> this.venta.numComprobante =data)
    this.venta.comprobante.codComprobante == 1 ? this.venta.serie = "F001" : 3 ? this.venta.serie = "B001" : this.venta.serie = "N001"

    console.log(this.venta.comprobante)
  }

 /*  get selectedOrgMod() {
    return this.venta.comprobante;
  }

  set selectedOrgMod(value) {
    this.venta.comprobante = value;
  } */

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

  guardarVenta() {
    this.venta.hora=formatDate(new Date(), 'HH:mm:ss', 'en')
    this.servicio.createVenta(this.venta)
      .subscribe(data => {
        alert("Se guardo con exito...!!");
      })
    this.servicio.createDetalleVenta(this.detallesP)
      .subscribe(data => {
        this.router.navigate(["listarVenta"]);
      })
  }


}
