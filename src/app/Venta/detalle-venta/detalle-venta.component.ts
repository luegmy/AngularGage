import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  @Input() detallesH: DetalleVenta[];

  constructor(public dialogoRef: MatDialogRef<DetalleVentaComponent>, private servicio: VentaService) { }

  ngOnInit(): void {
    this.mostrarDetalle();
  }


  mostrarDetalle() {
    let numero = localStorage.getItem("numero");
    this.servicio.getDetalleVenta(+numero).subscribe(data => this.detallesH = data)
  }

}
