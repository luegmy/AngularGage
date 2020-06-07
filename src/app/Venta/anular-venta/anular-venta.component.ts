import { Component, OnInit } from '@angular/core';
import { Venta } from '../modelo/Venta';
import { VentaService } from '../venta.service';
import { Comprobante } from '../modelo/Comprobante';
import { NotaCredito } from '../modelo/NotaCredito';
import { NotaDebito } from '../modelo/NotaDebito';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-anular-venta',
  templateUrl: './anular-venta.component.html',
  styleUrls: ['./anular-venta.component.css']
})
export class AnularVentaComponent implements OnInit {

  //se carga la venta para recuperar solo su numero y serie
  venta: Venta = new Venta()

  //se genera un registro pero como nota de cretido o debito
  ventaNota: Venta = new Venta()

  //atributo para anular la venta
  numeroAnulado: number

  //filtrar solo para que muestre los comprobantes de nota credito y debito
  comprobanteNotas: Comprobante[] = []

  //parav cargar los tipos de notas 
  notaCreditos: NotaCredito[]
  notaDebitos: NotaDebito[]

  credito: any
  debito: any

  constructor(private servicio: VentaService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getComprobantes().subscribe(data => {
      data.filter(c => c.codComprobante == 7 || c.codComprobante == 8)
        .forEach(c => this.comprobanteNotas.push(c))
    }
    )
    this.cargarAnulacionVenta();
  }

  cargarAnulacionVenta() {
    let numero = localStorage.getItem("numero");
    this.servicio.getVenta(+numero).subscribe(data => {
      this.venta = data;
      this.numeroAnulado = data.numComprobante % 10000000;
      this.ventaNota.serie="N001"
      this.ventaNota.numNota = data.numComprobante
      this.ventaNota
      this.ventaNota.hora = formatDate(new Date(), 'HH:mm:ss', 'en')
      this.ventaNota.monto=data.monto
      this.ventaNota.cliente=data.cliente

    })
  }

  cargarNumeroComprobante() {
    this.servicio.getNumeroComprobante(this.ventaNota.comprobante.codComprobante).subscribe((data: any) => this.ventaNota.numComprobante = data%10000000)
    this.ventaNota.comprobante.codComprobante == 7 ? this.servicio.getNotasCreditos().subscribe(data => this.notaCreditos = data)
      : this.servicio.getNotasDebitos().subscribe(data => this.notaDebitos = data)
  }

  anularVenta() {
    console.log(this.ventaNota)
    this.servicio.createVenta(this.ventaNota).subscribe(data => {
      alert("Se anulo con exito...!!");
    })
    this.servicio.getVentaAnulada(this.venta).subscribe(data => {

      this.router.navigate(["listarVenta"]);
    })
  }

}
