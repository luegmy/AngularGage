import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { Venta } from '../modelo/Venta';
import { MatDialog } from '@angular/material/dialog';
import { DialogoDetalleVentaComponent } from 'src/app/Dialogo/dialogo-detalle-venta/dialogo-detalle-venta.component';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {

  filtrarVentas = "";
  ventas: Venta[]

  constructor(private router: Router, private servicio: VentaService, private dialogo: MatDialog) { }

  ngOnInit(): void {
    this.servicio.getVentas().subscribe(data => this.ventas = data);
  }

  mostrarDetalle(venta: Venta): void {
    localStorage.setItem("numero", venta.numComprobante.toString());
    this.dialogo.open(DialogoDetalleVentaComponent)
  }

  editarVenta(venta: Venta): void {
    localStorage.setItem("numero", venta.numComprobante.toString());
    this.router.navigate(["editarVenta"]);
  }


}
