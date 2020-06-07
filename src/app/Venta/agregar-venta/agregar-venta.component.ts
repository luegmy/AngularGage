import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { Comprobante } from '../modelo/Comprobante';
import { Venta } from '../modelo/Venta';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { Estado } from '../modelo/Estado';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  //Comunicacion entre componentes detalle
  detallesP: DetalleVenta[] = []
  codigoProducto: number

  ventaP: Venta = new Venta();
  estado: Estado = new Estado();

  clientes: Cliente[]
  comprobantes: Comprobante[]

  @Input() valor: number



  constructor(private router: Router, private servicio: VentaService, private builder: FormBuilder, private servicioC: ClienteService) { }

  ngOnInit(): void {
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
  }

  cargarNumeroComprobante() {
    this.servicio.getNumeroComprobante(this.ventaP.comprobante.codComprobante).subscribe((data: any) => {
      this.ventaP.numComprobante = data

    });
    this.estado.codEstado = 1
    this.ventaP.estado = this.estado
    this.ventaP.hora=formatDate(new Date(), 'HH:mm:ss', 'en')
    
    this.ventaP.comprobante.codComprobante == 1 ? this.ventaP.serie = "F001" : 3 ? this.ventaP.serie = "B001" : this.ventaP.serie = "N001"
  }

  //desde el componente hijo se trae el valor
  agregar(e) {
    this.detallesP = e
  }
  //desde el componente hijo se trae el valor
  monto(e) {
    this.ventaP.monto = e
  }

  codigo(e) {
    this.codigoProducto = e
  }

  guardarVenta() {
    this.servicio.createDetalleVenta(this.detallesP)
      .subscribe(data => {
        this.router.navigate(["listarVenta"]);
      })

  }


}
