import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Comprobante } from '../modelo/Comprobante';
import { DetalleVenta } from '../modelo/DetalleVenta';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  //Comunicacion entre componentes
  detallesP: DetalleVenta[] = []

  clientes: Cliente[]
  comprobantes: Comprobante[]

  registroForm

  constructor(private router: Router, private servicio: VentaService, private builder: FormBuilder,
    private servicioC: ClienteService) {
    this.registroForm = this.builder.group({
      numComprobante: [''],
      fecha: new Date(),
      hora: [formatDate(new Date(), 'HH:mm:ss', 'en')],
      serie: [''],
      cliente: [''],
      comprobante: [''],
      observacion: [''],
      producto: [''],
      precio: [''],
      cantidad: [''],
      monto: ['']// este valor se trae desde el componente hijo

    })
  }

  ngOnInit(): void {
    this.servicioC.getClientes().subscribe(data => this.clientes = data);
    this.servicio.getComprobantes().subscribe(data => this.comprobantes = data);
  }

  //desde el componente hijo se trae el valor
  agregar(e) {
    this.detallesP = e
  }
  //desde el componente hijo se trae el valor
  monto(e) {
    this.registroForm.value.monto = e
  }

  guardarVenta() {
    this.servicio.createVenta(this.registroForm.value)
      .subscribe(data => {
        alert("Se guardo con exito...!!");
      })

    this.servicio.createDetalleVenta(this.detallesP)
      .subscribe(data => {
        this.router.navigate(["listarVenta"]);
      })
  }


}
