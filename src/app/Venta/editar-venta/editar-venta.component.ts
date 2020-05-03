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

  detallesP: DetalleVenta[] = []
  detalleP:DetalleVenta=new DetalleVenta()
  venta: Venta = new Venta();
 
  clientes: Cliente[]
  comprobantes: Comprobante[]


  constructor(private servicio: VentaService, private router: Router, private servicioC: ClienteService) { }

  ngOnInit(): void {
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.editarVenta();

  }

  editarVenta() {
    let numero = localStorage.getItem("numero");
    this.servicio.getVentaNumero(+numero).subscribe(data => this.venta = data)
    this.servicio.getDetalleVenta(+numero).subscribe(data => this.detallesP = data);
  }

  agregar(e){
    this.detallesP=e
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
