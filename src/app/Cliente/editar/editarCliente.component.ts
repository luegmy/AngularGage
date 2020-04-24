import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { Documento } from 'src/app/Cliente/Modelo/cliente/Documento';
import { ClienteService } from 'src/app/Cliente/cliente.service';

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
    this.servicio.getDocumentos()
      .subscribe((data: any[]) => this.documentos = data);
    this.editarCliente();

  }

  editarCliente() {
    let codigo = localStorage.getItem("codigo");
    this.servicio.getClienteCodigo(+codigo)
      .subscribe(data => this.cliente = data);
  }


  actualizarCliente() {
    this.servicio.createClientes(this.cliente).subscribe(data => {
      alert("Se actualizo con exito...!!");
      this.router.navigate(["listarCliente"]);
    })
  }

}
