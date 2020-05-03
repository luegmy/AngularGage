import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from '../modelo/DetalleVenta';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Comprobante } from '../modelo/Comprobante';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  detalles: DetalleVenta[] = []
  detalle: DetalleVenta = new DetalleVenta();

  clientes: Cliente[]
  comprobantes: Comprobante[]
  registroForm


  constructor(private router: Router, private servicio: VentaService, private builder: FormBuilder,
    private servicioC: ClienteService, private servicioP: ProductoService) {
    this.registroForm = this.builder.group({
      numComprobante: [''],
      fecha: [''],
      hora: [''],
      serie: [''],
      cliente: [''],
      comprobante: [''],
      observacion: [''],
      producto: [''],
      precio: [''],
      cantidad: ['']

    })
  }

  ngOnInit(): void {
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
  }

  agregar(e) {
    this.detalles = e
  }

  guardarVenta() {
    this.servicio.createVenta(this.registroForm.value)
      .subscribe(data => {
        alert("Se agrego con exito...!!");
      })
    this.servicio.createDetalleVenta(this.detalles)
      .subscribe(data => {
        this.router.navigate(["listarVenta"]);
      })
  }


}
