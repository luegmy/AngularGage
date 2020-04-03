import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente/Cliente';
import { ClienteService } from 'src/app/Servicio/cliente.service';

@Component({
  selector: 'app-listarCliente',
  templateUrl: './listarCliente.component.html',
  styleUrls: ['./listarCliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  constructor(private servicio: ClienteService, private router: Router) { }

  filtrarClientes = "";
  clientes: Cliente[];

  ngOnInit(): void {
    this.servicio.getClientes()
      .subscribe((data: any[]) => { this.clientes = data; })
  }

  editarCliente(cliente: Cliente): void {
    localStorage.setItem("codigo", cliente.codCliente.toString());
    localStorage.setItem("doc", cliente.documento.toString());
    this.router.navigate(["editarCliente"]);
  }

  eliminar(cliente: Cliente) {
    this.servicio.deleteCliente(cliente)
      .subscribe(data => {
        this.clientes = this.clientes.filter(c => c !== cliente);
        alert("Usuario eliminado....")
      })
  }

}
