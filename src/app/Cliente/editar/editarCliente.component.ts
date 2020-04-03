import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente/Cliente';
import { Documento } from 'src/app/Modelo/Cliente/Documento';
import { log } from 'util';
import { ClienteService } from 'src/app/Servicio/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editarCliente',
  templateUrl: './editarCliente.component.html',
  styleUrls: ['./editarCliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  documentos: Documento[];
  constructor(private router: Router, private servicio: ClienteService) { }

  ngOnInit(): void {
    this.editarCliente();
  }

  editarCliente() {
    let codigo = localStorage.getItem("codigo");
    this.servicio.getClienteCodigo(+codigo)
      .subscribe(data => { this.cliente = data; })
  }

  actualizar() {
    this.servicio.createClientes(this.cliente).subscribe(data => {
      alert("Se actualizo con exito...!!");
      this.router.navigate(["listarCliente"]);
    })
  }

}
