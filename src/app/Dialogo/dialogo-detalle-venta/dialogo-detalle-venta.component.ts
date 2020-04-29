import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from 'src/app/Venta/modelo/DetalleVenta';
import { VentaService } from 'src/app/Venta/venta.service';

@Component({
  selector: 'app-dialogo-detalle-venta',
  templateUrl: './dialogo-detalle-venta.component.html',
  styleUrls: ['./dialogo-detalle-venta.component.css']
})
export class DialogoDetalleVentaComponent implements OnInit {

  detalles: DetalleVenta[];

  constructor( private servicio: VentaService) { }

  ngOnInit(): void {
    this.mostrarDetalle();
  }

  mostrarDetalle() {
    let numero = localStorage.getItem("numero");
    this.servicio.getDetalleVenta(+numero).subscribe(data => this.detalles = data)
  }
}
