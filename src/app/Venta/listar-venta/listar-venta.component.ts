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
  estado:number

  //atributo que escucha el evento (pageChange)="page = $event"
  page:number = 1;
  totalPages: number[];
  numProductos: number
  pageSize = 10;

  order = 'codProducto';
  asc = true;
  isFirst = false;
  isLast = false;

  constructor(private router: Router, private servicio: VentaService, private dialogo: MatDialog) { }

  ngOnInit(): void {
    this.servicio.getVentas().subscribe(data => {
      this.ventas = data;
      data.forEach(e=>this.estado=e.estado.codEstado)
    })
  }

  mostrarDetalle(venta: Venta): void {
    localStorage.setItem("numero", venta.numComprobante.toString());
    this.dialogo.open(DialogoDetalleVentaComponent)
  }

  editarVenta(venta: Venta): void {
    localStorage.setItem("numero", venta.numComprobante.toString());
    this.router.navigate(["editarVenta"]);
  }

  anularVenta(venta:Venta){
    localStorage.setItem("numero", venta.numComprobante.toString());
    this.router.navigate(["anularVenta"]);
  }

  desactivarBotonAnular(){
    if(this.estado=3){
      return true
    }
  }


}
