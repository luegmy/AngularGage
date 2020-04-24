import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { Venta } from '../modelo/Venta';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { MatDialog } from '@angular/material/dialog';
import { DetalleVentaComponent } from '../detalle-venta/detalle-venta.component';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {

  filtrarVentas = "";
  ventas: Venta[]
  detallesP: DetalleVenta[]
  numero:number
  
  constructor(private router: Router, private servicio: VentaService,private dialogo:MatDialog) { }

  ngOnInit(): void {
    this.servicio.getVentas().subscribe(data => this.ventas = data);
  }
  
  mostrarDetalle(venta:Venta) :void{
    localStorage.setItem("numero",venta.numComprobante.toString());

    const dialogRef = this.dialogo.open(DetalleVentaComponent)
  }


}
